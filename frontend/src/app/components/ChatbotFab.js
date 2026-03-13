"use client";
import { useState } from "react";
import Image from "next/image";
import ChatbotWindow from "./chatbotWindow";

export default function ChatbotFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-2 right-4 text-white p-3 rounded-full transition-colors animate-bounce z-[60]"
        aria-label="Open chatbot"
      >
        <Image
          src="/images/chatBotIcon.svg"
          alt="Chatbot Icon"
          width={80}
          height={80}
        />
      </button>

      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
    </>
  );
}
