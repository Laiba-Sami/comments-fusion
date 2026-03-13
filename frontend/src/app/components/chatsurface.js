// frontend/src/app/components/chatsurface.js
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || ""; // e.g. http://localhost:5000
const CHAT_ENDPOINT = `${API_BASE}/api/chat`;           // ← hit your backend, not the model URL directly

function getSessionId() {
  try {
    const KEY = "cf_chat_sid";
    let sid = localStorage.getItem(KEY);
    if (!sid) {
      const rnd =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      sid = "web-" + rnd;
      localStorage.setItem(KEY, sid);
    }
    return sid;
  } catch {
    return "web-" + Math.random().toString(36).slice(2);
  }
}

function parseSeedFromURLOrLocal() {
  try {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("q");
    if (q) {
      localStorage.removeItem("cf_seed");
      return q;
    }
    const seed = localStorage.getItem("cf_seed");
    if (seed) {
      localStorage.removeItem("cf_seed");
      return seed;
    }
    return "";
  } catch {
    return "";
  }
}

function parseLinkedinFromURLOrLocal() {
  try {
    const url = new URL(window.location.href);
    const u1 = url.searchParams.get("linkedin");
    const u2 = url.searchParams.get("lu");
    const local = localStorage.getItem("cf_linkedin_username");
    return (u1 || u2 || local || "").trim() || null;
  } catch {
    const local = localStorage.getItem("cf_linkedin_username");
    return (local || "").trim() || null;
  }
}

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function getUserInfo() {
  try {
    // Prefer a cached chatUser
    const chatUser = localStorage.getItem("chatUser");
    if (chatUser) return JSON.parse(chatUser);

    // If your app stores a logged-in user + token
    const loggedInUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken") || getCookie("authToken");
    if (loggedInUser && authToken) {
      const u = JSON.parse(loggedInUser);
      return {
        id: u.id || u._id || u.email || "authed",
        name: u.name || "",
        email: u.email || "",
        isGuest: false,
        isAuthenticated: true,
      };
    }

    // Guest saved locally
    const guestUser = localStorage.getItem("guestUser");
    if (guestUser) return JSON.parse(guestUser);

    // Fallback minimal guest
    const email = localStorage.getItem("cf_user_email");
    const name = localStorage.getItem("cf_user_name") || "";
    if (email) return { id: email, name, email, isGuest: true, isAuthenticated: false };

    return null;
  } catch (e) {
    console.error("Error getting user info:", e);
    return null;
  }
}

export default function ChatSurface({ user = null, showWelcome = false }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [iconError, setIconError] = useState(false);
  const [chatUser, setChatUser] = useState(user);
  const [linkedinUsername, setLinkedinUsername] = useState(null);

  const listRef = useRef(null);
  const sid = useRef(getSessionId());
  const firstSeedSent = useRef(false);

  // attachments (metadata only; we send names/sizes to backend in meta)
  const [attachments, setAttachments] = useState([]); // File[]
  const fileInputRef = useRef(null);

  /* --------- identity + linkedin prefill ---------- */
  useEffect(() => {
    if (!chatUser) {
      const u = getUserInfo();
      if (u) {
        setChatUser(u);
        try { localStorage.setItem("chatUser", JSON.stringify(u)); } catch {}
      }
    }
    // Always ask backend whoami so cookie (cf_uid) is set/updated
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/chat/whoami`, { credentials: "include" });
        const d = await r.json();
        if (d?.email && (!chatUser || !chatUser.email)) {
          const u = {
            id: d.email,
            name: chatUser?.name || "",
            email: d.email,
            isGuest: false,
            isAuthenticated: !!(localStorage.getItem("authToken") || getCookie("authToken")),
          };
          setChatUser(u);
          try { localStorage.setItem("chatUser", JSON.stringify(u)); } catch {}
        }
      } catch {}
    })();

    // Linkedin username from URL or localStorage
    const lu = parseLinkedinFromURLOrLocal();
    if (lu) {
      setLinkedinUsername(lu);
      try { localStorage.setItem("cf_linkedin_username", lu); } catch {}
    }
  }, []); // run once

  /* --------- history (optional) ---------- */
  useEffect(() => {
    if (chatUser?.id) loadChatHistory();
  }, [chatUser]);

  const loadChatHistory = async () => {
    if (!chatUser?.id || !API_BASE) return;
    try {
      const qs = new URLSearchParams({
        userId: chatUser.id,
        isGuest: chatUser.isGuest || false,
        sessionId: sid.current,
      });
      const res = await fetch(`${API_BASE}/api/chat-history?${qs}`, {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken") || getCookie("authToken") || ""}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const history = await res.json();
        if (Array.isArray(history?.messages)) setMessages(history.messages);
      }
    } catch (e) {
      console.error("Failed to load chat history:", e);
    }
  };

  /* --------- seed question ---------- */
  useEffect(() => {
    if (!firstSeedSent.current && chatUser) {
      const seed = parseSeedFromURLOrLocal();
      if (seed) {
        firstSeedSent.current = true;
        setTimeout(() => sendText(seed), 100);
      }
    }
  }, [chatUser]);

  /* --------- autoscroll ---------- */
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  /* --------- attachments ---------- */
  function onPickFiles(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setAttachments((prev) => [...prev, ...files].slice(0, 10)); // cap at 10
  }
  function removeAttachment(idx) {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  }

  async function send() {
    const text = input.trim();
    if (!text && attachments.length === 0) return;
    if (busy) return;

    // clear input/attachments immediately
    setInput("");
    setAttachments([]);
    if (fileInputRef.current) fileInputRef.current.value = "";

    await sendText(text);
  }

  async function sendText(text) {
    if ((!text && attachments.length === 0) || busy) return;

    const filesMeta = attachments.map((f) => ({ name: f.name, size: f.size, type: f.type }));

    const userMessage = {
      role: "user",
      content: text || (attachments.length ? "(sent attachment)" : ""),
      ts: Date.now(),
      userId: chatUser?.id || null,
      files: filesMeta.length ? filesMeta : undefined,
    };
    setMessages((m) => [...m, userMessage]);
    setBusy(true);

    try {
      const payload = {
        chatInput: text || "",
        sessionId: sid.current,
        meta: {
          files: filesMeta,
          // pass linkedin username if we have it (enables personalization for guests)
          ...(linkedinUsername ? { linkedinUsername } : {}),
        },
      };

      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // always include so cf_uid / auth cookies flow
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`HTTP ${res.status} at ${CHAT_ENDPOINT} → ${errText.slice(0, 200)}`);
      }

      const data = await res.json();
      const reply = data?.output || data?.reply || data?.message || "(no reply)";
      const assistantMessage = {
        role: "assistant",
        content: reply,
        ts: Date.now(),
        userId: chatUser?.id || null,
      };
      setMessages((m) => [...m, assistantMessage]);

      // Optional: save chat to your backend
      if (chatUser?.id && API_BASE) await saveChatMessage(userMessage, assistantMessage);
    } catch (e) {
      console.error("Chat send failed:", e);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Error: ${e.message || "Could not reach the server"}`,
          ts: Date.now(),
          isError: true,
        },
      ]);
    } finally {
      setBusy(false);
      setAttachments([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  const saveChatMessage = async (userMessage, assistantMessage) => {
    try {
      const headers = { "Content-Type": "application/json" };
      const token = localStorage.getItem("authToken") || getCookie("authToken");
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const payload = {
        userId: chatUser.id,
        isGuest: chatUser.isGuest || false,
        messages: [userMessage, assistantMessage],
        sessionId: sid.current,
        timestamp: Date.now(),
      };
      const r = await fetch(`${API_BASE}/api/save-chat`, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(payload),
      });
      if (!r.ok) console.error("save-chat error:", r.status, await r.text());
    } catch (e) {
      console.error("Failed to save chat:", e);
    }
  };

  /* ------------------- UI ------------------- */
  const ChatbotIcon = ({ isThinking = false }) => {
    if (iconError) {
      return (
        <div className={`flex-shrink-0 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center shadow ${isThinking ? "animate-pulse" : ""}`}>
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      );
    }
    return (
      <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center ${isThinking ? "animate-pulse" : ""}`}>
        <img
          src="/images/chatBotIcon.svg"
          alt="Chatbot"
          className="w-7 h-7 object-contain drop-shadow"
          onError={() => setIconError(true)}
        />
      </div>
    );
  };

  const UserAvatar = () => (
    <div className="flex-shrink-0 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center shadow">
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );

  const Bubble = ({ side, isError, children }) => {
    const left = side === "left";
    const base =
      "relative max-w-[82%] px-3 py-2 bg-white text-gray-800 rounded-2xl shadow " +
      (left ? "rounded-tl-xl" : "rounded-tr-xl");
    const err = isError ? " border border-red-200" : "";
    const tailLeft =
      "after:content-[''] after:absolute after:top-2.5 after:-left-1 after:w-0 after:h-0 " +
      "after:border-t-[7px] after:border-b-[7px] after:border-r-[7px] " +
      "after:border-t-transparent after:border-b-transparent after:border-r-white";
    const tailRight =
      "after:content-[''] after:absolute after:top-2.5 after:-right-1 after:w-0 after:h-0 " +
      "after:border-t-[7px] after:border-b-[7px] after:border-l-[7px] " +
      "after:border-t-transparent after:border-b-transparent after:border-l-white";
    return (
      <div className={(base + err + " " + (left ? tailLeft : tailRight)).trim()}>
        <div className={"text-[13px] leading-snug " + (isError ? "text-red-700" : "text-gray-800")}>{children}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[28rem] sm:h-96 overflow-hidden shadow bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-600">
      {/* Messages Area */}
      <div ref={listRef} className="flex-1 overflow-y-auto p-3 sm:p-3 space-y-3">
        {showWelcome && chatUser && (
          <div className="flex items-center gap-2 text-white/90">
            <ChatbotIcon />
            <div>
              <h3 className="font-semibold">Hello{chatUser.name ? `, ${chatUser.name}` : ""}!</h3>
              <p className="text-white/70 text-xs">
                {chatUser.isAuthenticated ? "Welcome back to our live chat!" : "Welcome to our live chat!"}
              </p>
            </div>
          </div>
        )}

        {messages.map((m, i) => {
          const isUser = m.role === "user";
          return (
            <div key={i} className={["flex items-start gap-2", isUser ? "justify-end" : "justify-start"].join(" ")}>
              {!isUser && <ChatbotIcon />}
              <div>
                <Bubble side={isUser ? "right" : "left"} isError={m.isError}>
                  {m.content}
                </Bubble>
                {/* tiny file pills for user's messages */}
                {isUser && Array.isArray(m.files) && m.files.length > 0 && (
                  <div className="mt-1 text-[11px] text-white/90 flex flex-wrap gap-2 justify-end">
                    {m.files.map((f, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white/20 rounded-full">
                        📎 {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {isUser && <UserAvatar />}
            </div>
          );
        })}

        {busy && (
          <div className="flex items-start gap-2">
            <ChatbotIcon isThinking />
            <Bubble side="left">
              <span className="text-gray-500">Thinking…</span>
            </Bubble>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-2 border-t border-white/10 bg-transparent">
        <div className="flex items-center gap-2">
          {/* hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={onPickFiles}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx,.txt,.csv,.json,.ppt,.pptx,.zip"
          />

          {/* the textbox with embedded icons */}
          <div className="relative flex-1">
            {/* attach icon (left, inside) */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-white/90 disabled:opacity-50"
              aria-label="Attach files"
              title="Attach files"
              disabled={!chatUser || busy}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M16.5 6.5l-7.79 7.79a3 3 0 104.24 4.24L19 12.5a5 5 0 10-7.07-7.07L6.34 11l1.41 1.41 5.6-5.6A3 3 0 1117 10.05l-6.05 6.05a1 1 0 11-1.41-1.41l7.79-7.79-1.41-1.41z" />
              </svg>
            </button>

            <input
              className="w-full rounded-full bg-black/20 text-white placeholder-white/70 pl-10 pr-10 py-2.5 outline-none border border-white/20 focus:ring-2 focus:ring-cyan-300/60"
              placeholder={chatUser ? "Type a message…" : "Please set up your profile to chat"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !busy && chatUser && send()}
              disabled={!chatUser}
            />

            {/* send icon (right, inside) */}
            <button
              type="button"
              onClick={send}
              disabled={busy || !chatUser || (!input.trim() && attachments.length === 0)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 text-white disabled:opacity-50"
              aria-label="Send"
              title="Send"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M3.4 20.6l17.3-8.6c.8-.4.8-1.5 0-1.9L3.4 1.4c-.8-.4-1.7.3-1.5 1.2l2.2 7.9c.1.4.5.7.9.7h7.6c.3 0 .5.2.5.5s-.2.5-.5.5H5c-.4 0 -.8.3 -.9.7L1.9 19.4c-.2.9 .7 1.6 1.5 1.2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* tiny attachment chips */}
        {attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {attachments.map((file, idx) => (
              <span key={idx} className="text-[11px] bg-white/10 text-white border border-white/20 rounded-full px-2 py-1 flex items-center gap-1">
                📎 {file.name}
                <button
                  type="button"
                  onClick={() => removeAttachment(idx)}
                  className="ml-1 text-white/80 hover:text-white"
                  aria-label={`Remove ${file.name}`}
                  title="Remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="fixed bottom-29  right-30 z-50 flex items-center space-x-2">
          <span className="text-sm text-black font-large">Powered by commentsfusion</span>
          {/* <Image src="/images/logo/logo.svg" alt="Comment's Fusion Logo" width={100} height={28} className="h-7 w-auto object-contain" /> */}
        </div>
      </div>
    </div>
  );
}
