"use client";

export const dynamic = "force-dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function OAuthContent() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      router.replace("/main_dashboard");
    }
  }, [token, router]);

  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed
      "
    >
      <div
        className="
          p-12
          w-full max-w-md
          rounded-2xl
          border-2 border-[#33C6F4]
          bg-black bg-opacity-50 backdrop-blur-lg
          flex flex-col items-center
          space-y-5
        "
      >
        {/* Chatbot icon */}
        <div className="flex justify-center">
          <Image
            src="/images/chatBotIcon.svg"
            width={120}
            height={120}
            alt="chatbot icon"
            className="mb-[-0.5rem]"
          />
        </div>

        {/* Signing in spinner and message */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <h1 className="text-2xl italic font-semibold tracking-wide text-white">
              Signing In...
            </h1>
          </div>
          <p className="text-lg text-gray-200">
            Redirecting to the dashboard...
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed
      "
    >
      <div
        className="
          p-12
          w-full max-w-md
          rounded-2xl
          border-2 border-[#33C6F4]
          bg-black bg-opacity-50 backdrop-blur-lg
          flex flex-col items-center
          space-y-5
        "
      >
        <div className="flex justify-center">
          <Image
            src="/images/chatBotIcon.svg"
            width={120}
            height={120}
            alt="chatbot icon"
            className="mb-[-0.5rem]"
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <h1 className="text-2xl italic font-semibold tracking-wide text-white">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function OAuthSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OAuthContent />
    </Suspense>
  );
}
