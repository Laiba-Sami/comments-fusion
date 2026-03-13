"use client";
import { motion } from "framer-motion";
import React from "react";

function StrategicAdvantage() {
  const messagesData = [
    {
      img: "images/features/messageIcon.svg",
      text: "20 high-quality comments",
    },
    {
      img: "images/features/messageIconBox2.svg",
      text: "250 views 3,000 engaged eyes",
    },
  ];

  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-40 max-md:mt-[-200px]"

        >
                
      <div className="w-[90%] max-lg:w-[94%] max-md:w-[95%] mx-auto rounded-t-[200px] max-lg:rounded-t-[140px] 
      max-md:rounded-t-[110px] bg-[#000000CC] px-8 py-16 max-lg:py-10 max-md:pt-4">

        <h1 className="text-5xl text-center font-bold max-lg:text-4xl max-md:text-3xl max-md:mt-6">
          Your strategic advantage
        </h1>
        <p className="text-[20px] text-center mt-8 max-lg:mt-2.5 max-lg:text-[18px] max-md:text-[15px] max-md:mb-[-30px]">
          Numbers that just make sense for your clients
        </p>

        <div className="flex justify-center gap-12 mt-10 max-lg:mt-0">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-10 max-lg:mt-6">
  <div className="flex flex-col lg:flex-row items-center gap-6">

    <div className="relative flex justify-center max-md:mb-[-10px]">
      <div className="flex mt-9">
        <div className="w-[290px] h-[160px] max-lg:w-[260px] max-lg:h-[145px] max-md:w-[210px] max-md:h-[125px] bg-[linear-gradient(to_top_left,_#4194A7_20%,_#33C6F4_100%)] rounded-3xl px-8 py-3 border-2">
          <div className="flex justify-center mt-4 max-lg:mt-3 max-md:mt-2">
            <img src="images/features/messageIcon.svg" className="w-7 max-lg:w-6 max-md:w-5" />
          </div>
          <p className="text-[22px] font-semibold text-center mt-2 max-lg:text-[18px] max-md:text-[16px]">
            20 high-quality comments
          </p>
        </div>
        <div className="mt-34 ml-[-15px] max-md:ml-[-14px] w-9 h-11 max-lg:w-8 max-lg:mt-31 max-md:mt-26 max-lg:h-9 bg-[#4194A7] rounded-bl-[35px] rounded-b-[15px] border-2 border-t-2 border-t-[#4194A7] rotate-[-50deg] max-md:rotate-[-52deg]"></div>
      </div>
    </div>

<div className="flex lg:flex-col items-center justify-center">
  <h1 className="hidden lg:block font-bold text-2xl">7 Days</h1>

  <img
    src="images/features/7dayArrrow.svg"
    className="rotate-90 lg:rotate-0 w-16 h-12 transition-transfo
    rm duration-300 ml-[-10]"

  />
    <h1 className="block lg:hidden text-sm italic mb-1 ml-[-15]">7 Days</h1>



    </div>

    <div className="relative flex justify-center">
      <div className="flex mt-3">
        <div className="w-[290px] h-[160px] max-lg:w-[260px] max-lg:h-[145px] max-md:w-[210px] max-md:h-[125px] bg-[linear-gradient(to_top_left,_#4194A7_20%,_#33C6F4_100%)] rounded-3xl px-8 py-3 border-2">
          <div className="flex justify-center mt-4 max-lg:mt-3 max-md:mt-2">
            <img src="images/features/messageIconBox2.svg" className="w-7 max-lg:w-6 max-md:w-5" />
          </div>
          <p className="text-[22px] font-semibold text-center mt-2 max-lg:text-[18px] max-md:text-[16px]">
            250 views 3,000 engaged eyes
          </p>
        </div>
        <div className="mt-34 ml-[-15px] max-md:ml-[-14px] w-9 h-11 max-lg:w-8 max-lg:mt-31 max-md:mt-26 max-lg:h-9 bg-[#4194A7] rounded-bl-[35px] rounded-b-[15px] border-2 border-t-2 border-t-[#4194A7] rotate-[-50deg] max-md:rotate-[-52deg]"></div>
      </div>
    </div>
  </div>
</div>

        </div>

        <div className="flex  justify-center mt-10 max-lg:mt-7 max-md:mt-4">
          <h1 className="w-[60%] text-center max-lg:text-[14px] max-md:text-[12px] max-lg:w-[87%] max-md:w-[92%]">
          How you use it is entirely your call. Offer it as a loyalty perk to
          impress your clients, or bundle it as premium add-on to grow your
          revenue. Either way, you’re the strategic pro delivering solutions
          before your clients even know they need them.
          </h1>
        </div>
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[20px] text-center font-bold mt-5 max-lg:mt-3 max-md:mt-2 max-lg:text-[16px] max-md:text-[12px]
                  bg-gradient-to-r from-[#33C6F4] to-[#4194A7] text-transparent bg-clip-text"
      >
        More visibility = satisfied clients = stronger retention.
      </motion.h1>

          <h1 className="text-[20px] text-center  mt-8 max-lg:mt-5 max-md:mt-4 max-lg:text-[16px] max-md:text-[18px]">
         Behind every win, there’s you the one making it possible.
        </h1>
      </div>
      </motion.div>
    </>
  );
}

export default StrategicAdvantage;
