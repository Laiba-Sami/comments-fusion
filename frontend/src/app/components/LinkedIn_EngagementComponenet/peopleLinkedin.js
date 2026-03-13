"use client";
import { motion } from "framer-motion";

export default function PeopleLinkedin() {
  const allData = [
    {
      heading: "Engage & Earn",
      description:
        "Tired of babysitting your WhatsApp pod and dealing with drama for no reward? Let our software manage the chaos so you can finally get paid.",
      heading2: "No Limits, One Plan",
      description2:
        "Invite unlimited clients under one price. Each gets their own LinkedIn engagement hub to boost posts, grow their network, and build visibility.",
    },
    {
      heading: "Engage Smarter with AI",
      description:
        "Your members use the Free Tier, while you unlock Elite perks like smarter AI comments and advanced engagement tracking.",
      heading2: "Access Made Simple",
      description2:
        "No hassle setup just share the code and empower your team or clients to shine on LinkedIn.",
    },
    {
      heading: "Engage Like a Pro",
      description:
        "Our 13-1-1 strategy delivers thoughtful comments over five days to keep your posts fresh and visible to the right audience.",
      heading2: "Fast-Track Support",
      description2:
        "Need help? Group Plan members get faster responses and full support.",
    },
  ];

  return (
      
<>
  
          
    <div className="mt-25">

         <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      <h1 className="text-5xl font-bold text-center  ">
        Help your people stand out on{" "}
        <span className="text-[#33C6F4]"> LinkedIn</span>
      </h1>

      <div className=" mt-8 w-[68%] mx-auto mb-29 ">
        <h2 className=" text-[20px]   text-center   ">
         The Group Plan is designed for agencies, teams, and communities looking to deliver measurable LinkedIn success at scale. Support unlimited clients with powerful tools to optimize profiles, create content, and drive engagement all from one centralized platform. Streamline your efforts and maximize impact with a solution built for collaboration and growth
        </h2>
      </div>
    </motion.div>

{/* <div className="flex justify-end  mb-[-15px]">
<img className="w-15 h-15 mr-30 flex flex-end" src="/images/LinkedIn_EngagementStrategy/linkedin.svg"></img>
</div> */}


  <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
       
      {allData.map((item, index) => (
        <div key={index} className="mt-[-55px]">
          <div className=" flex justify-center mr-66 mt-2 items-center ">
            <div className="w-[290px] h-[150px] bg-[#33C6F4] rounded-3xl px-4 py-1.5  ">
              <h1 className="text-[15px] font-bold ml-3 pb-[5px] ">{item.heading}</h1>

              <div className="w-[255px] h-[100px] rounded-[10px] text-[13px]  px-4 py-2.5 bg-[linear-gradient(to_right,#000000CC,#1E738E)]">
                <p>{item.description}</p>
              </div>
            </div>
            <div className="relative z-[-1] mt-30 ml-[-10px] w-7 h-10 bg-[#33C6F4] rounded-bl-[35px]  rounded-b-[15px] rotate-[-55deg] "></div>
          </div>


          <div
            className={`flex justify-center items-center   ${
              index === allData.length - 1 ? "ml-71 mt-[-40px]" : "ml-67 mt-[-45px]"
            }`}
          >
            {index !== allData.length - 1 && (
              <div className="relative z-[-1] mt-[120px] mr-[-10px] w-7 h-10 bg-[#33C6F4] rounded-bl-[35px] rounded-b-[15px] rotate-[55deg]"></div>
            )}

            <div className="w-[290px] h-[150px] bg-[#33C6F4] rounded-3xl px-4 py-1.5 ">
              <h1 className="text-[15px] ml-3 font-bold pb-[5px]">{item.heading2}</h1>

              <div className="w-[255px] h-[100px] rounded-[10px] text-[13px]  px-4 py-2.5 bg-[linear-gradient(to_right,#000000CC,#1E738E)]">
                <p>{item.description2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

       <button className="w-[280px] h-[38px]  bg-[linear-gradient(to_right,#33C6F4,#1E738E)] flex justify-center items-center  text-[16px] rounded-[10px] mt-25 cursor-pointer mx-auto font-semibold	hover:scale-104  transition-transform duration-300 ease-in-out">
        Secure Your Plan Now
                  <img
                  src="/images/LinkedIn_EngagementStrategy/Arrow.svg"
                  alt=""
                  className="w-3 h-4  ml-2.5"></img>
              </button>
    </motion.div>

    </div>
    </>
  );
}




{
  /* <div className="relative z-[-1] mt-30 ml-[-10px] w-7 h-10 bg-[#33C6F4] rounded-bl-[35px]  rounded-b-[15px] rotate-[-55deg] "></div> */
}
{
  /* <div className="relative z-[-1]  mb-30 mr-[-30px] w-7 h-10 bg-[#33C6F4] rounded-bl-[15px]  rounded-b-[35px] rotate-[115deg] "></div> */
}
{
  /* <div className="relative z-[-2]  mt-30 mr-[-10px]   w-7 h-10 bg-[#33C6F4] rounded-bl-[35px]  rounded-b-[15px] rotate-[65deg] "></div> */
}
