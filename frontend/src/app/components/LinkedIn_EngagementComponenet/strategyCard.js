"use client";
import React from "react";
import { motion } from "framer-motion";


const allData = [
  {
    id: "businessPlan",
    log: "/images/LinkedIn_EngagementStrategy/businessPlan.svg",
    title: "Business Plan",
    price: "$200 / ",
    month: " month",
    btn: "Fuel client growth",
    description:
      "Built for agencies, teams, and communities that want to support unlimited clients in growing on LinkedIn.",
    features: [
      { li: "Includes everything from the Individual Plan" },
      {
        li: "Unlimited sub-accounts manage as many client accounts as you like, all under one flat rate",
      },
      {
        li: "2 Elite Engage AI membership for the Group Owner (advanced AI commenting, prospect tracking, and social signals)",
      },
      { li: "24-hour priority support" },
    ],
  },

  {
    id: "Solo Plan",
    log: "/images/LinkedIn_EngagementStrategy/soloPerson.svg",
    title: "Solo Plan",
    price: "$40 / ",
    month: " month",
    btn: "Boost your brand",
    description:
      "Perfect for solo professionals and entrepreneurs looking to grow their LinkedIn presence and boost personal engagement.",
    features: [
      { li: "Participate in up to 10 engagement sessions each week" },
      {
        li: "Full access to the LinkedIn Engagement Community",
      },
      {
        li: "Includes Engage AI Free Tier (AI commenting & prospect monitoring)",
      },
      { li: "48-hour priority support" },
    ],
  },
];

export default function StrategyCard() {

  
  return (
 <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >    
    <div className="pt-35">
      <h1 className="text-5xl font-bold text-center  ">
        LinkedIn Engagement <span className="text-[#33C6F4]"> Strategy</span>
      </h1>
      <div className=" mt-8 w-[60%] mx-auto  ">
        <h2 className="text-[20px]   text-center   ">
        Comment Fusion is your strategic playbook for boosting LinkedIn engagement through meaningful, high-impact comments. Stand out in your industry, spark real conversations, and grow your network with intention. No spam just authentic visibility.
        </h2>
      </div>

      <div className="flex justify-center items-center gap-34">
        {allData.map((item, index) => (
          <div key={index} className="flex justify-center items-center mt-16">
            <div className="w-97 h-122 border-2 border-[#33C6F4] bg-[#000000] opacity-80 rounded-[9px] p-5 ">
              <img src={item.log} alt="Logo" className="w-13 h-13"></img>

              <h1 className="text-[25px] font-bold mt-3">
                {item.title}
                <span
                  className={`${
                    index === 1 ? "ml-[110px]" : "ml-[45px]" 
                  } text-[#33C6F4] text-[20px] font-semibold`}
                >
                  {item.price} <span className="font-thin">{item.month}</span>
                </span>
              </h1>

              <h2 className="text-[14px] mt-4  ">
                {item.description}
              </h2>

              <ul className="list-none pl-1 mt-0">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="relative text-[13px] mt-4 before:content-['•'] before:absolute before:left-[-1px] before:top-[-5px] before:text-[18px] pl-4"
                  >
                    {feature.li}
                  </li>
                ))}
              </ul>

              <button className={`w-[95%] h-[30px]  bg-[linear-gradient(to_right,#33C6F4,#1E738E)] flex justify-center items-center italic text-[13px] rounded-[10px] mt-5 cursor-pointer mx-auto font-bold hover:scale-104  transition-transform duration-300 ease-in-out ${
                    index === 1 ? "mt-[54px]" : "mt-[36px]" 
                  } `} >
                {item.btn}
                <img
                  src="/images/LinkedIn_EngagementStrategy/Arrow.svg"
                  alt=""
                  className="w-2.6 h-3 font-thin ml-2.5"
                ></img>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   </motion.div>

  );
}
