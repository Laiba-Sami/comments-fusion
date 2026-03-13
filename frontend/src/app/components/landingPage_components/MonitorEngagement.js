import Image from "next/image";
import { motion } from "framer-motion";

export default function MonitorEngagement() {
  return (
    <section className="text-white py-12 sm:py-20 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-12">
        {/* Heading */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         
        >
        <h2 className="text-white text-5xl max-lg:text-4xl  font-bold text-center
        max-md:text-[26px]">
         <span className="text-white sm:text-[#33C6F4] max-md:text-[20px]"> Monitor Engagement & Prospects</span>


        </h2>
        </motion.div>

        {/* Text */}
        <p className=" text-lg w-[87%] max-lg:text-[16px] max-md:text-[13px] max-lg:w-[95%] ">
          Stay ahead by tracking and aggregating all your LinkedIn interactions in one place. Leverage AI-powered insights to analyze engagement, track AI-generated comments, and receive real-time notifications when someone interacts with your posts. Gain actionable analytics on likes, replies, and overall performance to refine your strategy and boost visibility. With secure data handling and AI-driven suggestions, you can optimize your engagement approach, build meaningful connections.
        </p>

        {/* Image with hover animation only */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-400 p-2 sm:p-4 transition-transform duration-500 hover:scale-105 hover:-translate-y-1 max-w-full sm:max-w-6xl mx-auto w-full">
          <Image
            src="/images/landing-page/dashboard.png"
            alt="Monitor Engagement Dashboard - Track and analyze your LinkedIn interactions and engagement in one place."
            width={1000}
            height={667}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
        </div>

        {/* Button */}
         <button className="cursor-pointer bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3  max-lg:text-[13px] max-md:text-[12px] max-md:px-3 max-md:py-2.5  rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2 mx-auto my-6 w-full sm:w-auto">
        <img
          src="/images/landing-page/chrome.svg"
          alt="Chrome Icon"
          className="w-5 h-5 inline-block align-middle"
        />
        Download Free Chrome Extension
      </button>
      </div>
    </section>
  );
}
