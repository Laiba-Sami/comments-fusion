"use client";
import React from "react";
import { motion } from "framer-motion";

function Linkedin_Guaranteed() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="py-16 max-lg:py-12 max-md:py-10 px-4 max-md:mb-[-50px]">
          <h1 className="text-5xl font-bold text-center pt-32 max-lg:pt-26 max-md:pt-16 max-lg:text-4xl max-md:text-[26px] mt-12 ">
            Watch Your LinkedIn Soar
          </h1>

          <h1 className="text-[#33C6F4] text-5xl max-lg:text-4xl max-md:text-[26px] font-bold text-center pt-2">
            Measurable Growth, Guaranteed
          </h1>

          <div className="w-[70%] mx-auto max-lg:w-[80%] max-md:w-[95%] mt-10 max-md:mt-6">
            <h2 className="text-[21px] max-lg:text-[17px] max-md:text-[14px] text-center leading-relaxed max-w-[90%] mx-auto px-2">
          Get real conversations going on every LinkedIn post with genuine
          comments and likes that actually matter. We’ll handle the strategy
          and all the behind the scenes work, so you can stay focused on
          building what you’re great at.
        </h2>

          </div>

          <button className="max-md:mt-10 max-md:mb-16 w-[370px] h-[38px] max-lg:h-[35px] max-lg:w-[300px] max-md:w-[260px] bg-[linear-gradient(to_left,#33C6F4,#1E738E)] flex justify-center items-center italic text-[19px] max-lg:text-[16px] max-md:text-[15px] rounded-[10px] mt-12 max-lg:mt-8 max-md:mt-6 cursor-pointer mx-auto font-semibold hover:scale-104 transition-transform duration-300 ease-in-out">
            Join our LinkedIn
            <img
              src="images/features/LinkdinLogo.svg"
              alt=""
              className="w-6 h-6 max-md:w-5 max-md:h-5 ml-5"
            />
          </button>

          <div className="w-[60%] max-lg:w-[70%] max-md:w-[90%] mx-auto mt-14 max-md:mt-8">
            <h2 className="text-[21px] max-lg:text-[17px] max-md:text-[14px] text-center leading-relaxed max-w-[90%] mx-auto px-2">
              Plans that fit your needs — just $40/month for individuals, or
              $220/month for teams with unlimited clients.
            </h2>
          </div>
          <div className="block max-lg:hidden w-[80%] mx-auto"> 
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-center mt-[17%] max-lg:mt-[12%]"> 
          Boost visibility, drive engagement, and unlock
        </h1>

        <h1 className="text-[#33C6F4] text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-center pt-2">
          new opportunities on LinkedIn
        </h1>
      </div>

          <div className="block lg:hidden w-[80%] max-lg:w-[90%] max-md:w-[95%] mx-auto mt-[17%] max-lg:mt-[12%] max-md:mt-16 mb-16 max-md:mb-10">
            <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-center">
              Boost visibility, drive  
              <br />
              engagement, and
              <br />
              unlock new 
            </h1>
            <h1 className="text-[#33C6F4] text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-center pt-2 mb-0">
              opportunities on <br /> LinkedIn
            </h1>
        </div>

        </div>
      </motion.div>
    </>
  );
}

export default Linkedin_Guaranteed;
