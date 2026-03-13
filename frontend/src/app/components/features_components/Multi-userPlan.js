"use client"
import React from "react";
import { motion } from "framer-motion";

function Multi_userPlan() {
  return (
    <div className= "mb-6">
      <h1 className="text-5xl font-bold text-center pt-20 max-lg:text-4xl max-md:text-3xl">
        Multi-User Plan{" "}
      </h1>
      <h2 className="text-[23px] mt-3 font-bold text-center max-lg:text-[20px] max-md:text-[18px]">
        Designed for agencies, communities, and business networks
      </h2>
      <div className="flex justify-evenly mt-8 gap-[0%] max-lg:gap-[30%] mb-6">
        <img src="images/features/downleftArrow.svg" className="w-10 h-10 max-lg:w-8 max-lg:h-8 ml-5" />
        <img src="images/features/downrightArrow.svg" className="w-10 h-10 max-lg:w-8 max-lg:h-8" />
      </div>


      <div className="flex justify-center gap-34 max-lg:gap-[10%] mt-7 max-lg:mt-5">

      <div className="relative w-70 h-70 max-lg:w-60 max-lg:h-60 max-md:w-[95%] max-md:h-[95%] ">
        <img
          src="images/features/hexagon.svg"
          className="w-full h-full"
          alt="hexagon"
        />
        <div className="absolute inset-0 flex items-center text-center text-[16px] justify-center mt-1 text-white max-lg:text-[14px] max-md:text-[9px]">
          Get unlimited client
          <br />
          access to our LinkedIn
          <br />
          Engagement Community
          <br />
          for just $200/month no
          <br />
          manual work, just
          <br />
          proven results.
        </div>
      </div>

      <img src="/images/features/eqauls.svg" className="w-13 max-lg:w-10 max-md:w-4"/>

      <div className="relative w-70 h-70 max-lg:w-60 max-lg:h-60 max-md:w-[95%] max-md:h-[95%] ">
        <img
          src="images/features/hexagon.svg"
          className="w-full h-full"
          alt="hexagon"
        />
        <div className="absolute inset-0 flex items-center  text-[16px] text-center justify-center mt-1 text-white max-lg:text-[14px] max-md:text-[9px]">
          This isn’t limited to
          <br />
         LinkedIn coaches or
          <br />
          lead gen agencies it’s a
          <br />
          powerful value add for
          <br />
          any business, in
          <br />
          any industry.
        </div>
      </div>

      </div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <button className="w-[330px] h-[38px] max-lg:h-[35px] max-lg:w-[300px] max-md:w-[260px] bg-[linear-gradient(to_right,#33C6F4,#1E738E)] 
        flex justify-center items-center italic  text-[17px] max-lg:text-[16px] max-md:text-[15px] rounded-[10px] mt-12 max-lg:mt-8  
        cursor-pointer mx-auto font-semibold	hover:scale-104  transition-transform duration-300 ease-in-out max-md:mt-10">

         Explore Team Plans
        </button>
      </motion.div>

    </div>
  );
}

export default Multi_userPlan;

