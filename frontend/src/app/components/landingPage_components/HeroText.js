import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-3xl z-10 mt-45 mx-auto px-4 sm:px-0 max-md:w-[80%] max-lg:mt-[-50]  max-md:mt-0"
    >
      <h1 className="text-5xl font-bold leading-tight max-lg:text-4xl max-md:text-3xl ">
        Automate 200+ Comments & Turn
        <span className="text-[#33C6F4]"> Engagement to Revenue !</span>
      </h1>
      <p className="mt-6 text-lg text-gray-300  max-lg:text-[17px]  max-md:text-[14px] max-md:mt-4">
        Never miss a client! Automate comments, Capture leads,<br className="hidden sm:block" />Grow with AI.
      </p>
      <button className="cursor-pointer bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3  max-lg:text-[13px] max-md:text-[12px] max-md:px-3 max-md:py-2.5  rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2 mx-auto my-6 w-full sm:w-auto">
        <img
          src="/images/landing-page/chrome.svg"
          alt="Chrome Icon"
          className="w-5 h-5 inline-block align-middle"
        />
        Download Free Chrome Extension
      </button>
      <p className="mt-3 text-sm text-gray-200 max-md:text-[14px]">No credit card required</p>
    </motion.div>
  );
}
