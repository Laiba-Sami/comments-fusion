// frontend/src/lib/chat.js (or wherever your file is)
const API_BASE =
  (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api").replace(/\/+$/,"");
const WEBHOOK_URL = (process.env.NEXT_PUBLIC_CHATBOT_URL || "").replace(/\/+$/,"");

const join = (b,p)=>`${b.replace(/\/+$/,"")}${p.startsWith("/")?"":"/"}${p}`;

async function parseJsonSafe(res){
  const t = await res.text();
  try { return JSON.parse(t); } catch { return { _raw:t, _text:t }; }
}

export function getSessionId(){
  if (typeof window==="undefined") return "ssr";
  let id = localStorage.getItem("cf_session_id");
  if (!id){
    id = (globalThis.crypto?.randomUUID?.() || String(Date.now()));
    localStorage.setItem("cf_session_id", id);
  }
  return id;
}

/**
 * Send a prompt to the bot and return plain text.
 * If NEXT_PUBLIC_CHATBOT_URL is set, uses the webhook (no cookies).
 * Otherwise, uses cookie API: POST /api/chat/send { message }.
 */
export async function askBot(chatInput, meta){
  const text = String(chatInput ?? "").trim();
  if (!text) return "";

  // Prefer webhook if configured
  if (WEBHOOK_URL) {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      credentials: "omit",
      body: JSON.stringify({ chatInput: text, sessionId: getSessionId(), meta: meta || null }),
    });
    const data = await parseJsonSafe(res);
    if (!res.ok) throw new Error(data?.error || data?._raw || `HTTP ${res.status}`);
    return data.output ?? data.reply ?? "";
  }

  // Fallback to cookie API
  const url = join(API_BASE, "/chat/send");
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    credentials: "include",
    body: JSON.stringify({ message: text }),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw new Error(data?.error || data?._raw || `HTTP ${res.status}`);
  return data.reply ?? "";
}

/** Identify guest on landing (matches backend: POST /api/guest/start) */
export async function identifyUser({ name, email }){
  const url = join(API_BASE, "/guest/start");
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    credentials: "include",
    body: JSON.stringify({ name, email }),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw new Error(data?.error || "Identify failed");
  if (typeof window!=="undefined"){
    if (data?.identity?.name) localStorage.setItem("cf_user_name", data.identity.name);
    if (data?.identity?.email) localStorage.setItem("cf_user_email", data.identity.email);
  }
  return data;
}

/** Who am I? (matches backend: GET /api/me) */
export async function whoAmI(){
  const url = join(API_BASE, "/me");
  const res = await fetch(url, { credentials: "include" });
  const data = await parseJsonSafe(res);
  return { email: data?.email || "", isAuthenticated: !!data?.isAuthenticated, userKey: data?.userKey || "" };
}
