"use client";
import { useState, useRef, useEffect } from 'react';
import MobileSidebar from './mobileSidenav';
import Image from 'next/image';
import "../../../styles/globals.css";
import Link from "next/link"; 
import ChatbotFab from './ChatbotFab';

export default function MobileLayout({ children }) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen((prev) => !prev);
  };

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    }

    if (isProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  return (
    <>
      <div
        className="flex flex-col h-screen text-white
        bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)]
        bg-cover bg-center overflow-y-auto p-2 space-y-2"
      >
        {/* Mobile Header */}
        <header className="w-full flex-shrink-0 relative">
          <div className="flex items-center justify-between p-4 relative z-10">
            {/* Drawer/Menu Icon */}
            <button
              onClick={toggleMobileDrawer}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          <Link href="/"
           className="flex flex-col items-center gap-1 hover:scale-105 transition-transform duration-200 ease-in-out">
            <Image
              src="/images/topbar/logo.svg"
              alt="COMMENTS'USION Logo"
              width={140}
              height={40}
              className="block"
            />
            <div className="text-center text-[8px] italic leading-none">
              Comments with solution
            </div>
          </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-8 h-8 bg-[#33C6F4] rounded-full flex items-center justify-center"
              >
                <span className="text-sm font-bold text-black">A</span>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute top-12 right-0 w-64 z-50">
                  <div className="bg-[#0A0A0A] border border-white/10 shadow-lg rounded-xl p-4 backdrop-blur-xl">
                    <div className="text-white mb-2">
                      <div className="font-semibold text-base">Anonymous User</div>
                      <div className="text-xs text-white/70">Free <span className="italic">(X days left)</span></div>
                    </div>

                    <div className="border-t border-white/10 my-2" />

                    <ul className="text-sm space-y-3 text-white">
                      <li className="flex items-center gap-2 hover:text-[#33C6F4] cursor-pointer">My Settings</li>
                      <li className="flex items-center gap-2 hover:text-[#33C6F4] cursor-pointer"> FAQ’s</li>
                      <li className="flex items-center gap-2 hover:text-[#33C6F4] cursor-pointer"> Community</li>
                      <li className="flex items-center gap-2 text-yellow-300 hover:text-yellow-100 cursor-pointer text-base">⬆ Upgrade Plan</li>
                    </ul>

                   <div className="flex justify-center">
            <button className="mt-4 bg-[#1E88E5] hover:bg-[#1565C0] text-white font-bold px-4 py-2 rounded-full transition">
              Logout
            </button>
          </div>


                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Mobile Drawer Overlay */}
        {isMobileDrawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMobileDrawer}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-black/80 backdrop-blur-md shadow-lg
          transform transition-transform duration-300 ease-in-out z-50
          ${isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-start mt-6 px-4 py-3 border-b border-white/20">
            <button
              onClick={toggleMobileDrawer}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
            <MobileSidebar />
          </div>
        </div>

        {/* Main Content */}
       <div className="flex flex-col min-h-screen bg-transparent">
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
           {/* <button className="fixed bottom-2 right-4 text-white p-3 rounded-full transition-colors animate-bounce">
                    <Image
                      src="/images/chatBotIcon.svg"
                      alt="Chatbot Icon"
                      width={80}
                      height={80}
                    />
                  </button> */}
                  <ChatbotFab/>
        </div>

        
      </div>
    </>
  );
}
