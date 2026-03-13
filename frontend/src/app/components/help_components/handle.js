import React from "react";

export default function Main_Handle({
  title,
  secondTitle,
  thirdTitle,
  fourTitle,
  fifthTitle,
  Data,
  Data2,
}) {
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-1  "> {title} </h1>

      <div className=" mt-3 w-[70%] mx-auto ">
        <h1 className="text-[20px]  font-medium text-center mr-1 mt-[-5px] ">
          {secondTitle}
        </h1>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="relative w-[700px]">
          <input
            type="text"
            placeholder="Search for articles"
            className="w-full h-10 text-white border border-white p-2 pr-10 rounded-[10px] bg-transparent placeholder-white outline-none"
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

      <div className=" bg-black/60 backdrop-blur-md   rounded-[20px] pt-2 pb-[-20px]  mt-6">
        <h1 className="text-2xl w-[80%]   font-medium  mt-3 ml-10 mb-[20px]">
          {fourTitle}
        </h1>

        <div className="  flex flex-col justify-center  gap-6">
          {Data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center cursor-pointer">
                <div className="  p-3 w-[94%] h-[34px] border-2 border-white rounded-[5px] flex items-center hover:border-[#33C6F4] transition-all duration-300 ease-in-out">
                  <p className="font-normal">{item.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-2xl  font-medium  mt-7 ml-7">{thirdTitle}</h1>

        <div className=" flex flex-col justify-center mt-4 gap-6">
          {Data2.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center cursor-pointer">
                <div className="  p-3 w-[94%] h-[32px] border-2 border-white rounded-[5px] flex items-center hover:border-[#33C6F4] transition-all duration-300 ease-in-out">
                  <p className="font-normal">{item.p}</p>
                </div>
              </div>
            </div>
          ))}
          <h1 className="text-2xl  font-medium  mt-0 ml-7">{fifthTitle}</h1>
        </div>
      </div>
    </>
  );
}
