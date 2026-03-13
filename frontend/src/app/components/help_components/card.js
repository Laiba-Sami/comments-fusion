"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Card({ cardData }) {
  const router = useRouter();

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-[-5px] ">
        Welcome to our <span className="text-[#33C6F4]"> Help Center</span>
      </h1>

      <div className="flex justify-center items-center mt-5">
        <div className="relative w-[750px]">
          <input
            type="text"
            placeholder="Search for articles"
            className="w-full h-8 text-white border border-white p-2 pr-10 rounded-[10px] bg-transparent placeholder-white outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white absolute right-4 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
        </div>
      </div>
       
      <div className="flex flex-wrap justify-center mt-9 gap-6">
        
        {cardData.map((item, index) => (
         
          <div
            key={index}
            onClick={() => router.push(`/help/${item.id}`)}
            className="cursor-pointer"
          >
             <motion.div
         whileTap={{ scale: 0.95 }}
         >
            <div className=" bg-[#000000CC] opacity-85   p-[18px] pb-2  flex w-[290px] h-[185px] border border-blue-300 rounded-[10px] hover:scale-104 transition-transform duration-300 ease-in-out">
              <img
                src={item.logo}
                alt="Logo"
                className={`mt-2 ${
                  index < 2 ? "w-5.5 h-5.5 ml-[4px] mt-3" : "w-7 h-7"
                }`}
              ></img>

              <div className="flex flex-col">
                <h1
                  className={`ml-4 mt-1  text-[14px] font-bold  ${
                    [2, 5].includes(index) || index >= cardData.length - 3
                      ? "pt-1.5"
                      : ""
                  }`}
                >
                  {item.Title}
                </h1>

                <div
                  className={`w-[255px] h-[90px] bg-[#33C6F470] p-3 mt-4 ml-[-29px]  rounded-[10px]  ${
                    [2, 5].includes(index) || index >= cardData.length - 3
                      ? "mt-7"
                      : ""
                  } `}
                >
                  <p className={`text-[12.5px]`}>{item.p}</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        
        ))}
      </div>
      
    </>
  );
}
