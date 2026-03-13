"use client";
import React from "react";
import { motion } from "framer-motion";

function Msgbox() {
  const msgData = [
    {
      title: "Engage with Others",
      discription:
        "Engage with posts from fellow members everyone gives and gets in equal measure.",
    },
    {
      title: "Boost Your Reach",
      discription:
        "With consistent, spaced-out engagement, your content stays in circulation longer increasing exposure to your first degree connections and ideal prospects.",
    },
    {
      title: "Expand Your Audience",
      discription:
        "The more people engage, the further your posts go helping you get discovered by new, relevant networks.",
    },
    {
      title: "Share Your Post",
      discription:
        "Submit your LinkedIn post during scheduled hours, and it will be assigned to 15 community members for authentic, diverse engagement.",
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-25 max-lg:text-4xl max-md:text-3xl mb-10 ">How it Works ? </h1>

      <div className="flex justify-center md:ml-4 gap-x-100 gap-y-4 px-6 max-lg:gap-x-15 max-md:gap-x-8 
      max-lg:gap-y-0 max-lg:px-0 flex-wrap">
        {msgData.map((item, index) => (
          <div
      key={index}
      className="flex hover:scale-105 transition-transform duration-300 ease-in-out mt-6 max-md:mt-4 mb-6 max-md:mb-4"
    >

            <div className="w-[395px] h-[220px] max-lg:w-[320px] max-lg:h-[180px] max-md:w-[260px] max-md:h-[150px] bg-[linear-gradient(to_top_left,_#4194A7_20%,_#33C6F4_100%)] rounded-3xl px-4 py-3 border-2  ">
              <h1 className="text-[25px] font-bold max-lg:text-[21px] max-md:text-[18px]">{item.title}</h1>
              <p className="text-[15px] mt-5 max-lg:text-[13px] max-lg:mt-3 max-md:mt-2  max-md:text-[12px]">{item.discription}</p>
            </div>
            <div className=" mt-49 max-lg:mt-40 max-md:mt-33 ml-[-19px] max-lg:ml-[-18px] max-md:ml-[-13px] w-10 h-11 max-lg:w-9 max-lg:h-10 max-md:w-7 max-md:h-8 bg-[#4194A7] rounded-bl-[35px]  rounded-b-[15px] border-2 border-t-2 border-t-[#4194A7] rotate-[-48deg] max-lg:rotate-[-46deg] max-md:rotate-[-50deg]"></div>
          </div>
        ))}
      </div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <button className="w-[330px] h-[38px] max-lg:h-[35px] max-lg:w-[300px] max-md:w-[260px] bg-[linear-gradient(to_right,#33C6F4,#1E738E)] flex justify-center items-center italic  text-[17px] max-lg:text-[16px] max-md:text-[15px] rounded-[10px] mt-12 max-lg:mt-8  cursor-pointer mx-auto font-semibold	hover:scale-104  transition-transform duration-300 ease-in-out">
          Boost your LinkedIn reach
        </button>
      </motion.div>
    </div>
  );
}

export default Msgbox;
