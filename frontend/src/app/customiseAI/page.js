"use client";

import Layout from "../components/layout";
import MobileLayout from "../components/mobileLayout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tones = [
  {
    title: "Enlightenment",
    description:
      "The above is a LinkedIn post, and I would like to comment on it to engage with the author. The author is a senior executive at a large enterprise. I have never met and spoken with the author before, so our engagement must be professional and casual. Please don’t be rude.",
  },
  {
    title: "Insights",
    description:
      "The above is a LinkedIn post, and I would like to comment on it to engage with the author. The author is a senior executive at a large enterprise. I have messaged and emailed the author, so the engagement can be reasonably casual but must remain professional.",
  },
  {
    title: "Self Intro",
    description:
      "The above is a LinkedIn post, and I would like to comment on it to engage with the author. The author is a senior executive at a large enterprise. I have messaged and emailed the author before, so the engagement can be reasonably casual but must remain professional.",
  },
  {
    title: "Convert into DM",
    description:
      "The above is a LinkedIn post, and I would like to comment on it to engage with the author. The author is a senior executive at a large enterprise. I have never met and spoken with the author before, so our engagement must be professional and casual. Please don’t be rude.",
  },
];

export default function CustomizeAI() {
const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setScreenType("desktop");
    } else if (width >= 768) {
      setScreenType("tablet");
    } else {
      setScreenType("mobile");
    }
  };

  handleResize(); // set initial value
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


if (screenType === "desktop") {
    return (
      <Layout>
        <Head>
          <title>Customize AI</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="h-full p-6 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/customise_AI/customiseAIIcon.svg"
                alt="Customize AI Icon"
                width={30}
                height={30}
              />
              <h1 className="text-4xl font-semibold text-white">Customize AI</h1>
            </div>
            <button
              style={{ boxShadow: "0 2px 5px 5px #33C6F4" }}
              className="inline-flex items-center justify-center space-x-2 bg-[#33C6F4] text-white w-[130px] h-[42px] rounded-[10px] font-medium text-base"
            >
              <Image
                src="/images/customise_AI/plusIcon.svg"
                alt="Add Tone Icon"
                width={16}
                height={16}
              />
              <span>Add tone</span>
            </button>
          </div>

          <p className="text-slate-300 mb-8">
            Generate customized AI-driven tones to elevate your LinkedIn communications.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {tones.map((tone) => (
              <div
                key={tone.title}
                className="flex flex-col bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow"
              >
                <h3 className="flex items-center space-x-2 text-xl font-semibold text-white">
                  <Image
                    src="/images/customise_AI/toneIcon.svg"
                    alt="Tone Icon"
                    width={20}
                    height={20}
                  />
                  <span>{tone.title}</span>
                </h3>

                <div className="bg-[#33C6F470]/60 rounded-lg p-4 overflow-hidden">
                  <p className="text-slate-100 text-sm break-words line-clamp-5">
                    {tone.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow space-y-2">
              <Image
                src="/images/customise_AI/addToneIcon.svg"
                alt="Add Tone Icon"
                width={40}
                height={40}
              />
              <span className="text-lg font-medium text-white">Add tone</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
if (screenType === "tablet") {
  return (
      <MobileLayout>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#00252C] to-[#33C6F4] p-2 text-white font-sans relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/customise_AI/customiseAIIcon.svg"
              alt="Customize Icon"
              width={24}
              height={24}
            />
            <h1 className="text-2xl font-bold">Customize AI</h1>
          </div>
          <button className="bg-[#33C6F4] px-3 py-1 text-sm rounded-md flex items-center space-x-2 shadow-[0_2px_5px_3px_#33C6F4]">
            <Image
              src="/images/customise_AI/plusIcon.svg"
              alt="Add"
              width={8}
              height={8}
            />
            <span>Add tone</span>
          </button>
        </div>

        <p className="text-sm text-slate-300 mb-6">
          Create and manage AI-generated tones to enhance your LinkedIn interactions.
        </p>

        <div className="grid grid-cols-2 gap-6">
      {tones.map((tone, index) => (
        <div
          key={index}
          className="bg-black/90 border border-[#1B9DBF] rounded-xl p-3 shadow-md backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="/images/customise_AI/toneIcon.svg"
              alt="Tone Icon"
              width={16}
              height={16}
            />
            <h2 className="text-[14px] font-semibold text-white">{tone.title}</h2>
          </div>
          <div className="bg-[#33C6F4]/60 text-white text-xs p-2 rounded-lg">
            {tone.description}
          </div>
        </div>
      ))}

      <div className="col-span-2 flex justify-center h-40 ">
        <div className="flex flex-col items-center justify-center 
            bg-black/90 border border-[#1B9DBF] rounded-xl p-3 
            shadow-md backdrop-blur-md w-[80%] max-w-xs">
          <Image
            src="/images/customise_AI/addToneIcon.svg"
            alt="Add Tone"
            width={28}
            height={26}
          />
          <span className="text-sm text-white font-medium">Add tone</span>
        </div>
      </div>
    </div>

      </div>
    </MobileLayout>


  );
}
if (screenType === "mobile") {
  return (
    <MobileLayout>
  <Head>
    <title>Customize AI</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <div className="p-1 space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <Image
          src="/images/customise_AI/customiseAIIcon.svg"
          alt="Customize AI Icon"
          width={24}
          height={24}
        />
        <h1 className="text-2xl font-semibold text-white">Customize AI</h1>
      </div>
      
    </div>

    <p className="mt-4 text-slate-300 text-sm mb-4" >
      Generate customized AI-driven tones to elevate your LinkedIn communications.
    </p>

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        px-1
      "
    >
      {tones.map((tone, index) => (
        <motion.div
          key={index}
          whileTap={{ scale: 0.95 }}
          className="bg-[#000000CC] opacity-85 p-3 flex flex-col border border-blue-300 rounded-[14px] hover:scale-104 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="/images/customise_AI/toneIcon.svg"
              alt="Tone Icon"
              width={18}
              height={18}
            />
            <h1 className="text-[14px] font-bold text-white truncate">{tone.title}</h1>
          </div>
          <div className="w-full bg-[#33C6F470] p-2 rounded-[10px] overflow-hidden flex-1">
            <p className="text-[12.5px] text-white break-words line-clamp-4">
              {tone.description}
            </p>
          </div>
        </motion.div>
      ))}

      <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 rounded-[14px] shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow space-y-2">
        <Image
          src="/images/customise_AI/addToneIcon.svg"
          alt="Add Tone Icon"
          width={32}
          height={32}
        />
        <span className="text-sm font-medium text-white">Add tone</span>
      </div>
    </div>
  </div>
</MobileLayout>
  );
}
}
