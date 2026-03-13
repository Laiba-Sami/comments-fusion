"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIGeneratedSmartComments() {
  return (
     <>
       <section className="text-white px-2 sm:px-6 mt-15 max-lg:mt-17 max-md:mx-4 max-sm:mx-6">
        <motion.div
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
               >
                <h2 className="hidden max-lg:block text-white mt-8  text-4xl max-lg:text-2xl text-center max-md:text-lg  font-bold ">
                   <span className="text-cyan-400 text-4xl max-lg:text-xl max-md:text-xl">➞</span>
                   AI Generated Smart Comments
                 </h2>
                 </motion.div>
       
       
       
       
             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center mt-2 justify-between gap-8 sm:gap-12">
               <motion.div
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 className="flex-1"
               >
                 <h2 className=" text-white text-4xl  max-lg:hidden   font-bold mb-6 flex items-center gap-3 ">
                   <span className="text-cyan-400 text-4xl max-lg:text-xl max-md:text-xl">➞ </span>
                    AI Generated Smart Comments
                 </h2>
       
                 <p className=" text-lg max-lg:text-[17px] max-md:text-[13px] max-lg:mb-4 mb-6  ">
                 Turn conversations into opportunities with AI powered, personal comments on LinkedIn!
                 </p>
       
                 <ul className="space-y-4 text-base mb-8 max-lg:mb-4 max-lg:text-[15px] max-md:text-[13px]">
                   <li>🔹 Effortless Engagement Instantly generated relevant responses</li>
                   <li>🔹Customizable Tones Match your brand voice (Professional, Witty, Friendly, etc.)</li>
                   <li>🔹Boost Visibility Increase reach & credibility with meaningful  interactions</li>
                   <li>🔹 Drive Conversations Build relationships and convert prospects seamlessly</li>
                 </ul>
       
                 <p className="text-lg max-lg:text-[16px] max-md:text-[13px] max-lg:mb-[-10px]">Click, Comment, Convert! Let AI handle engagement while you focus on growth</p>
       
                   <button className="cursor-pointer max-lg:hidden   bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3     rounded-full transition duration-300 shadow-md   gap-2 mx-auto my-6 w-full sm:w-auto">
               <img
                 src="/images/landing-page/chrome.svg"
                 alt="Chrome Icon"
                 className="w-5 h-5 inline-block align-middle mr-1.5 mt-[-3.5px]"
               />
               Download Free Chrome Extension
             </button>
               </motion.div>
       
               {/* Image Section */}
               <motion.div
                 initial={{ opacity: 0, x: 40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 className="flex-1 flex justify-center w-full mt-8 lg:mt-0"
               >
                 <div className="rounded-xl overflow-hidden shadow-md border border-cyan-400 p-2 max-w-full sm:max-w-[460px] w-full">
                   <Image
                     src="/images/landing-page/smart-commenting.gif"
                     alt="Smart Commenting Demo"
                     width={320}
                     height={240}
                     className="w-full h-auto object-cover rounded-xl"
                   />
                 </div>
               </motion.div>
             </div>
             {/* <  maxlg btn  */}
               <motion.div
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
               >
                  <button className="cursor-pointer hidden max-lg:block mt-8  bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3  max-lg:text-[13px] max-md:text-[12px] max-md:px-4 max-md:py-3  rounded-full transition duration-300 shadow-md   gap-2 mx-auto my-6 w-full sm:w-auto">
               <img
                 src="/images/landing-page/chrome.svg"
                 alt="Chrome Icon"
                 className="w-5 h-5 inline-block align-middle mr-1.5 mt-[-3.5px]"
               />
               Download Free Chrome Extension
             </button>
             </motion.div>
             </section>
       </>
  );
}
