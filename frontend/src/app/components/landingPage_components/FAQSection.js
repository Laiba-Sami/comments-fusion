"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does CommentsFusion personalize my comments?",
    answer:
      "CommentsFusion uses AI to analyze posts and generate contextual, industry-specific responses based on your chosen tone (Professional, Friendly, Witty, etc.)",
  },
  {
    question: "Can I edit the AI - generated comments before posting?",
    answer:
      "Yes! You have full control edit, refine, or post instantly with just one click.",
  },
  {
    question: "How does the DM conversion feature work?",
    answer:
      "When a prospect replies to your comment, you can click the tone button again to generate a structure DM designed to move the conversation toward an appointment.",
  },
  {
    question: "How many comments can i generate per month?",
    answer:
      "You can automate up to 50 personalized comments per month on Basic package, ensuring high engagement without spammy interactions.    ",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-12 sm:py-20 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-row items-start justify-between gap-12 ">
        {/* FAQ Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl  font-bold text-center  mb-8">
            FAQ&rsquo;s
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/30 rounded-xl transition-all duration-300"
              >
                <button
                  className="w-full text-left p-5 max-md:py-3.5 max-md:px-4 flex rounded-xl items-center gap-4 max-md:gap-2 text-white font-semibold text-lg hover:bg-white/10"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-2xl text-cyan-400">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span className="text-[18px] max-lg:text-[15px] max-md:text-[13px]">
                    {faq.question}
                  </span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 pt-0text-[15.5px] max-lg:text-[14px] max-md:text-[13px]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bot Image with Floating Animation */}
        <motion.div
          className=" lg:w-1/3 flex justify-center items-start pt-45 "
          animate={{
            y: [0, -180, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <img
            src="images/landing-page/faq-bot.svg"
            alt="FAQ Bot"
            className=" w-[420px] max-lg:w-[240px] max-md:w-[175px] h-[300px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
