import React from "react";

function GroupPlan() {
  const groupItems = [
    {
      img: "images/features/logoStructure/structureFirst.svg",
      heading: "Business Networking Groups",
      text: `Empower your members to stand out on LinkedIn and expand your community’s impact.`,
      mtImg: "mt-6.5 max-lg:mt-5.5",
      mrImg: "mr-37 max-lg:mr-31",
      mlDiv: "ml-120 max-lg:ml-100 max-md:ml-88",
      mtDiv: "mt-0",
    },
    {
      img: "images/features/logoStructure/structureSecond.svg",
      heading: "Co-Working Spaces",
      text: `Add value to your space by giving clients a simple way to boost their online presence.`,
      mtImg: "mt-37 max-lg:mt-30",
      mrImg: "ml-37 max-lg:ml-30.5",
      mlDiv: "mr-135 max-lg:mr-105 max-md:mr-95",
      mtDiv: "mt-36 max-lg:mt-28",
    },
    {
      img: "images/features/logoStructure/Structurethird.svg",
      heading: "Marketing Agencies",
      text: `Position yourself as the go-to partner by integrating LinkedIn visibility into your strategy offering.`,
      mtImg: "mt-66 max-lg:mt-54.5",
      mrImg: "mr-37 max-lg:mr-31",
      mlDiv: "ml-120 max-lg:ml-100 max-md:ml-88",
      mtDiv: "mt-66 max-lg:mt-52.5",
    },
    {
      img: "images/features/logoStructure/structureFourth.svg",
      heading: "VA Service Providers",
      text: `Own the spotlight from behind the scenes making your clients the stars.`,
      mtImg: "mt-98 max-lg:mt-80",
      mrImg: "ml-37 max-lg:ml-30.5",
      mlDiv: "mr-135 max-lg:mr-105 max-md:mr-95",
      mtDiv: "mt-98 max-lg:mt-78",
    },
    {
      img: "images/features/logoStructure/structureFifth.svg",
      heading: "LinkedIn Content Specialists",
      text: `You write it, we make sure the right people see it. That’s teamwork.`,
      mtImg: "mt-128 max-lg:mt-105",
      mrImg: "mr-37 max-lg:mr-31",
      mlDiv: "ml-120 max-lg:ml-100 max-md:ml-88",
      mtDiv: "mt-128 max-lg:mt-103",
    },
    {
      img: "images/features/logoStructure/structureSixth.svg",
      heading: "Commerce Networks",
      text: `Empower local businesses by boosting visibility and credibility for their leaders.`,
      mtImg: "mt-159 max-lg:mt-131",
      mrImg: "ml-37 max-lg:ml-30.5",
      mlDiv: "mr-125 max-lg:mr-105 max-md:mr-95",
      mtDiv: "mt-159 max-lg:mt-127",
    },
    {
      img: "images/features/logoStructure/structureSeventh.svg",
      heading: "Startup Networks & Incubators",
      text: `Give your founders the connections and trust they need to lead and grow.`,
      mtImg: "mt-189 max-lg:mt-155",
      mrImg: "mr-37 max-lg:mr-30.5",
      mlDiv: "ml-120 max-lg:ml-100 max-md:ml-88",
      mtDiv: "mt-189 max-lg:mt-155",
    },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-45 max-lg:text-4xl max-md:text-3xl">
        Who benefits from the
        <span className="text-[#33C6F4]"> Group Plan</span>?
      </h1>
      <div className="overflow-x-auto mb-0">
      <div className="relative flex justify-center mt-20 mb-0 origin-top scale-100 max-lg:scale-[0.80] max-md:scale-[0.60]">
          <img
            src="images/features/logoStructure/logoStructure.svg"
            className="w-67 max-lg:w-55"
          />

          {groupItems.map((item, index) => (
            <React.Fragment key={index}>
              <img
                src={item.img}
                className={`w-17 max-lg:w-14 absolute ${item.mrImg} ${item.mtImg} hover:scale-107 transition-transform duration-300 ease-in-out`}
              />
              <div
                className={`absolute w-100 max-lg:w-80 max-md:w-70 ml-18 ${item.mtDiv} ${item.mlDiv}`}
              >
                <h1 className="text-[#33C6F4] text-2xl font-bold absolute max-lg:text-xl max-md:text-lg">
                  {item.heading}
                </h1>
                <p className="mt-8 max-lg:text-[14px] max-md:text-[12px]">
                  {item.text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default GroupPlan;
