'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VisionMissionSection = () => {
  return (
    <section className="relative py-8 px-3 md:py-2 md:px-20 text-white font-sans overflow-hidden">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-bold">
          Vision <span className="text-sky-400">&</span> Mission
        </h2>
      </div>
<div className="relative flex flex-col md:flex-row items-center justify-center min-h-[500px] gap-6 md:gap-16 lg:gap-24">
  <div
    className="relative md:mr-[-16px] w-full md:w-[48%] rounded-[24px]
     p-4 sm:p-5 md:p-6 lg:p-8 text-sm sm:text-base md:text-xl lg:text-2xl 
     leading-relaxed md:leading-loose shadow-lg md:mt-[-200px] lg:mt-[-400px]"
    style={{
      minHeight: '200px',
      borderRadius: '24px',
      background:
        'linear-gradient(110.61deg, rgba(44, 127, 152, 0.87) 23.77%, rgba(30, 115, 142, 0.87) 83.65%)',
    }}
  >
    <span className="block text-left whitespace-pre-line">
      To become the leading AI driven engagement platform that
      redefines digital networking, enabling every professional to build
      authentic relationships and grow their business through intelligent
      conversation.
    </span>

    <div
      className="hidden md:block absolute bottom-[-40px] right-8 w-0 h-0"
      style={{
        borderTop: '40px solid rgba(44, 127, 152, 0.87)',
        borderLeft: '40px solid transparent',
      }}
    ></div>

    <motion.div
      className="hidden lg:block absolute left-0 bottom-[-270px] z-20"
      animate={{
        x: [0, 100, 180, 90, -20, 0],
        y: [0, -100, -40, 70, 40, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Image
        src="/images/chatBotIcon.svg"
        alt="Bot"
        width={140}
        height={140}
      />
    </motion.div>
  </div>

  <div
    className="relative md:ml-[-16px] w-full md:w-[48%] rounded-[24px] 
     p-4 sm:p-5 md:p-6 lg:p-8 text-sm sm:text-base md:text-xl lg:text-2xl 
     leading-relaxed md:leading-loose shadow-lg mt-6 md:mt-[220px] lg:mt-[500px]"
    style={{
      minHeight: '200px',
      borderRadius: '24px',
      background:
        'linear-gradient(110.61deg, rgba(44, 127, 152, 0.87) 23.77%, rgba(30, 115, 142, 0.87) 83.65%)',
    }}
  >
    <span className="block text-left whitespace-pre-line">
      To empower business owners, marketers, and professionals with
      innovative tools that turn online engagement into real world
      opportunities by simplifying, personalizing, and scaling meaningful
      interactions.
    </span>

    <div
      className="hidden md:block absolute -top-10 left-8 w-0 h-0"
      style={{
        borderBottom: '40px solid rgba(44, 127, 152, 0.87)',
        borderRight: '40px solid transparent',
      }}
    ></div>

    <motion.div
      className="hidden lg:block absolute right-0 top-[-220px] z-20"
      animate={{
        x: [0, -100, -180, -90, 20, 0],
        y: [0, 100, 40, -70, -40, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Image
        src="/images/chatBotIcon.svg"
        alt="Bot"
        width={140}
        height={140}
      />
    </motion.div>
  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-1 mt-16 md:mt-32 items-center text-center md:text-left">
  <div>
    <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4 md:mb-0 text-center max-md:mb-[-30px] lg:ml-100">
      Revolutionizing Conversations{' '}<br />
      One comment at<br /> a time
    </h3>
  </div>

  <div className="block lg:hidden w-[90%] h-px bg-white mx-auto my-0 col-span-full mt-8" />

  <div className="relative w-full">
    <div className="hidden lg:block absolute left-0 top-0 h-full border-l border-white"></div>

    <div className="px-4 lg:pl-16 text-base md:text-2xl font-light leading-relaxed mt-10 lg:mt-0 text-white 
    max-lg:text-center max-sm:mt-[-4px] max-sm:mb-6">
      At <span className="font-bold">Comments Fusion</span>, we believe<br />
      real growth starts with real conversations.<br />
      Built for professionals, marketers, and<br />
      relationship-driven teams, our Chrome<br />
      and Edge extension empowers you to<br />
      effortlessly comment, connect, & convert<br />
      right inside LinkedIn.
    </div>
  </div>
</div>

    </section>
  );
};

export default VisionMissionSection;
