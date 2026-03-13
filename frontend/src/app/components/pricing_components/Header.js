import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="relative text-white py-24 px-4 max-lg:px-0 rounded-b-3xl overflow-hidden mt-10 mb-[-26px] max-md:mx-2">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-3xl">
          Discover your <span className="text-sky-400 italic">ideal plan</span>
        </h1>
        <p className="text-[22px] max-lg:text-[18px] max-md:text-[16px] text-center leading-snug tracking-tight font-semibold text-neutral-800 dark:text-white max-w-[85%] mx-auto px-2 mt-12">
  Start your 30-day free trial
  <span className="block mt-2 text-[18px] max-lg:text-[16px] max-md:text-[14px] font-normal text-neutral-500 dark:text-neutral-400">
    Explore all features today — no credit card, no hassle.
  </span>
</p>
 
      </div>

      <div className="mt-14 w-[100%] bg-black rounded-3xl  py-6 px-6 max-lg:py-4 max-lg:px-4 max-md:py-3 max-md:px-3 flex items-center justify-between gap-4 max-lg:gap-5 max-md:gap-4">
        <div className="flex-shrink-0 ">
          <button className="bg-sky-500 text-white font-bold text-lg max-lg:text-[14px] max-md:text-[12px] px-8 py-3 max-lg:px-6 max-lg:py-2 max-md:px-3 max-md:py-1.5  rounded-full leading-tight shadow-md">
            Install
            <span className="block text-xs max-lg:text-[11px] max-md:text-[9px] font-normal">Free Plan $0 →</span>
          </button>
        </div>

        <div className="text-white text-[20px] max-lg:text-[15px] max-md:text-[13.5px] text-center flex-1">
          <p className="leading-relaxed">
            <span className="block">
              Enjoy unlimited comments, personalized tones, monitoring for prospects,
            </span>
            <span className="block">
              and weekly updates on activity.
            </span>
          </p>
        </div>
      </div>

      <div className="hidden sm:block fixed bottom-4 right-4 w-[150px] h-[150px]  z-50 animate-bounce">
        <Image
          src="/images/chatBotIcon.svg"
          alt="Chatbot Icon"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
