"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ChatSurface from "./chatsurface";

const API = process.env.NEXT_PUBLIC_API_URL || "";

/* ---------------- helpers ---------------- */
const emailOk = (v) => /\S+@\S+\.\S+/.test(v);

/* ---------------- component ---------------- */
export default function ChatbotWindow({ onClose, authenticatedUser = null }) {
  const [showCredentials, setShowCredentials] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seed, setSeed] = useState("");
  const [err, setErr] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showChatSurface, setShowChatSurface] = useState(false);

  const canSubmit = isAuthenticated || (name.trim().length > 0 && emailOk(email));

  const quickTopics = [
    "Optimize LinkedIn profile tips",
    "Issue with comment sync",
    "Book appointment from DM",
    "Qualifying client questions",
    "Billing or subscription issue",
    "What to ask prospects",
    "CommentsFusion automation steps",
  ];

  function handleQuickSeed(topic) {
    setSeed(topic);
    if (isAuthenticated) return handleAuthenticatedChat();
    setShowCredentials(true);
    setErr("Enter your name and email to continue.");
  }

  useEffect(() => {
    let cancelled = false;

    async function prefillFromBackend() {
      try {
        const r = await fetch(`${API}/api/chat/whoami`, {
          method: "GET",
          credentials: "include",
        });

        if (!cancelled && r.ok) {
          const data = await r.json(); // { email, name }
          const authed = Boolean(data?.email || data?.name);
          setIsAuthenticated(authed);

          if (authed) {
            setName(data.name || "");
            setEmail(data.email || "");
            setShowCredentials(false);
            return;
          }
        }
      } catch (e) {
        console.warn("[CHAT] whoami error:", e);
      }

      if (!cancelled) {
        // Not authenticated → keep inputs blank
        setName("");
        setEmail("");
        setShowCredentials(true);
      }
    }

    if (authenticatedUser) {
      setIsAuthenticated(true);
      setName(authenticatedUser.name || "");
      setEmail(authenticatedUser.email || "");
      setShowCredentials(false);
    } else {
      prefillFromBackend();
    }

    return () => { cancelled = true; };
  }, [authenticatedUser]);

  function handleStartChat(e) {
    e.preventDefault();
    setErr("");

    if (isAuthenticated) return handleAuthenticatedChat();

    if (!name.trim()) {
      setShowCredentials(true);
      setErr("Please enter your name to continue.");
      return;
    }
    if (!email.trim() || !emailOk(email)) {
      setShowCredentials(true);
      setErr("Please enter a valid email address.");
      return;
    }

    handleGuestChat();
  }

  function handleAuthenticatedChat() {
    try {
      localStorage.setItem(
        "chatUser",
        JSON.stringify({
          id: email || "authed",
          name: name || "",
          email: email || "",
          isGuest: false,
          isAuthenticated: true,
        })
      );
      if (seed.trim()) localStorage.setItem("cf_seed", seed.trim());
    } catch {}
    setShowChatSurface(true);
  }

  function handleGuestChat() {
    try {
      const guest = {
        id: email.trim(),
        name: name.trim(),
        email: email.trim(),
        isGuest: true,
        isAuthenticated: false,
      };
      localStorage.setItem("chatUser", JSON.stringify(guest));
      if (seed.trim()) localStorage.setItem("cf_seed", seed.trim());
    } catch {}
    setShowChatSurface(true);
  }

  const handleSeedSubmit = (e) => {
    if (e.key === "Enter" && canSubmit && seed.trim()) {
      handleStartChat(e);
    }
  };

  return (
    <div
      className={[
        "fixed bottom-24 right-6 w-96 bg-white shadow-2xl rounded-xl overflow-hidden z-50",
        "transition-all duration-300",
        showChatSurface ? "h-[36rem]" : ""
      ].join(" ")}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-400 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <Image src="/images/chatBotIcon.svg" alt="Bot Icon" width={40} height={40} />
        </div>
        <button onClick={onClose} className="text-xl" aria-label="Close">−</button>
      </div>

      {/* Body */}
      {showChatSurface ? (
        <div className="h-[28rem]">
          <ChatSurface showWelcome={false} />
        </div>
      ) : (
        <div className="bg-gradient-to-r from-cyan-700 to-cyan-400 p-4 text-white">
          {isAuthenticated ? (
            <p className="text-sm">
              Welcome back! You’re logged in as <strong>{name || email}</strong>.
            </p>
          ) : (
            <>
              <p className="text-sm">
                Welcome to our live chat!{" "}
                <a href="/login" className="underline">Log in</a>
                <br />
                or{" "}
                <button
                  onClick={() => setShowCredentials((s) => !s)}
                  className="underline"
                  aria-expanded={showCredentials}
                >
                  provide your details {showCredentials ? "▴" : "▾"}
                </button>
              </p>

              {showCredentials && (
                <div className="mt-4">
                  <label className="block text-sm">
                    Name <span className="text-white/70 text-xs">(required)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 mb-3 px-3 py-2 rounded-full bg-black/20 text-white outline-none placeholder-white/70"
                    disabled={isAuthenticated}
                  />

                  <label className="block text-sm">
                    Email <span className="text-white/70 text-xs">(required)</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-full bg-black/20 text-white outline-none placeholder-white/70"
                    disabled={isAuthenticated}
                  />

                  {err && <div className="mt-2 text-xs text-yellow-100">{err}</div>}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {quickTopics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleQuickSeed(t)}
                    className="px-3 py-1.5 rounded-full bg-white/90 text-gray-800 text-xs font-medium shadow-sm hover:bg-white"
                    title={t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Footer (seed input) — only on gate view */}
      {!showChatSurface && (
        <form onSubmit={handleStartChat} className="border-t px-3 py-3 flex items-center gap-2 bg-white">
          <input
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            onKeyDown={handleSeedSubmit}
            placeholder="What can we help you with?"
            className="flex-1 outline-none text-sm text-gray-900 placeholder-gray-500"
          />
          <button
            type="submit"
            aria-label="Start chat"
            disabled={!canSubmit}
            className="shrink-0 w-9 h-9 grid place-items-center rounded-full bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed"
            title={canSubmit ? "Start chat" : "Enter your name and email to continue"}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M3.4 20.6l17.3-8.6c.8-.4.8-1.5 0-1.9L3.4 1.4c-.8-.4-1.7.3-1.5 1.2l2.2 7.9c.1.4.5.7.9.7h7.6c.3 0 .5.2 .5.5s-.2.5-.5.5H5c-.4 0 -.8.3 -.9.7L1.9 19.4c-.2.9 .7 1.6 1.5 1.2z" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}
