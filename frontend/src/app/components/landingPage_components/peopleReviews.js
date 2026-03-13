"use client";
import React from "react";
import { motion } from "framer-motion";

function PeopleReviews() {
  const cardData = [
    {
      logo: "images/landing-page/peopleReviews1.svg",
      stars: "/images/landing-page/reviewsfiveStars.svg",
      name: "Rose Thompson",
      p: "I’ve been using Comments Fusion for 6 months and it’s made collaboration much easier. The real-time updates and integrations save us time every day. The UI is sleek and intuitive.",
      p1: "I especially love how customizable the dashboard is. It’s helped my team stay on top of deadlines.",
      p2: "If you’re running a small business or remote team, I highly recommend giving it a try.",
    },
    {
      logo: "images/landing-page/peopleReviews2.svg",
      stars: "/images/landing-page/reviewsfourStars.svg",
      name: "Brandon William",
      p: "Comments Fusion has really streamlined our marketing process. Scheduling campaigns is now much easier, and the analytics give us solid insights.",
      p1: "One downside is that the learning curve is a bit steep for new users, and I’d love more onboarding tutorials.",
      p2: "Overall, it’s a valuable tool and worth the investment if you’re ready to dig into the features.",
    },
    {
      logo: "images/landing-page/peopleReviews3.svg",
      stars: "/images/landing-page/reviewsfiveStars.svg",
      name: "Crista Munchkins",
      p: "I’ve used a lot of tools in this space, but Comments fusion stands out for its simplicity and speed. It didn’t take long for my team to get up and running, and the learning curve was practically nonexistent.",
      p1: "The drag and drop interface is incredibly user friendly, and I love how it syncs seamlessly with Google Drive.",
      p2: "It would be nice to have more advanced permission controls, but overall it's a fantastic experience.",
    },
    {
      logo: "images/landing-page/peopleReviews4.svg",
      stars: "/images/landing-page/reviewsfourStars.svg",
      name: "Charles Mitchell",
      p: "Comments fusion has become a core part of our daily workflow. What impressed me most is how stable and reliable it is no bugs, no downtime",
      p1: "We especially appreciate the built in templates and integrations with Slack and Notion. It saved us hours of manual work each week.",
      p2: "Hoping to see more analytics features added soon, but as it stands, it’s well worth the price.",
    },
    {
      logo: "images/landing-page/peopleReviews5.svg",
      stars: "/images/landing-page/reviewsfiveStars.svg",
      name: "Balie Parker",
      p: "What really setComments fusion apart is the support team they’re fast, friendly, and actually listen to feedback.",
      p1: "The app itself is well thought out: everything feels where it should be, and the onboarding walkthrough was clear and helpfu",
      p2: "We’d love to see a mobile app in the future, but the web version handles 90% of our needs. Highly recommended for startups and small teams.",
    },
  ];


  return (
    <>
    <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl  font-bold text-center  mb-12">
          Reviews
          </h2>



    <div className="flex gap-6  ">
      <motion.div
        initial={{ x: `0` }}
        animate={{ x: `-100%` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6 "
      >
       {cardData.map((item, index) => (
    <div
      key={index}
      className="flex-shrink-0 bg-[#000000CC] px-4 py-5 max-sm:px-3 max-sm:py-4 text-white flex 
                 w-[340px] h-[385px] border border-blue-300 rounded-[15px] 
                 max-lg:w-[300px] max-lg:h-[325px] max-sm:w-[260px] max-sm:h-[300px]"
    >
      
      <div>
        <div className="flex">
        <img src={item.logo} alt="Logo" className="w-12 h-12 max-lg:w-10 max-lg:h-10 ml-3 max-sm:w-9 max-sm:h-9" />
        <div className="flex flex-col">
        <h1 className="text-[18px] ml-6 max-sm:ml-4 font-bold max-lg:text-[16px] max-sm:text-[14px]">{item.name}</h1>
        <img src={item.stars} className="w-28 ml-6 max-sm:ml-4 mt-1.5 max-lg:w-23 max-sm:w-19"  />
      </div>
      </div>
        <div className="bg-[#33C6F4D9] h-57 max-lg:h-50  mt-10 max-lg:mt-7 max-sm:mt-5 px-2 py-3 rounded-[15px] overflow-hidden">
          <p className="text-[12.5px] max-lg:text-[11px] max-sm:text-[10px]">{item.p}</p>
          <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2 max-sm:text-[10px]">{item.p1}</p>
          <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2 max-sm:text-[10px]">{item.p2}</p>
        </div>
          </div>
      
    </div>
  ))}
      </motion.div>

      <motion.div
        initial={{ x: `0` }}
        animate={{ x: `-100%` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0  gap-6"
      >
        {cardData.map((item, index) => (
     <div
      key={index}
      className="flex-shrink-0 bg-[#000000CC] px-4 py-5 max-sm:px-3 max-sm:py-4 text-white flex 
                 w-[340px] h-[385px] border border-blue-300 rounded-[15px] 
                 max-lg:w-[300px] max-lg:h-[325px] max-sm:w-[260px] max-sm:h-[300px]"
    >
      
      <div>
        <div className="flex">
        <img src={item.logo} alt="Logo" className="w-12 h-12 max-lg:w-10 max-lg:h-10 ml-3 max-sm:w-9 max-sm:h-9" />
        <div className="flex flex-col">
        <h1 className="text-[18px] ml-6 max-sm:ml-4 font-bold max-lg:text-[16px] max-sm:text-[14px]">{item.name}</h1>
        <img src={item.stars} className="w-28 ml-6 max-sm:ml-4 mt-1.5 max-lg:w-23 max-sm:w-19"  />
      </div>
      </div>
        <div className="bg-[#33C6F4D9] h-57 max-lg:h-50   mt-10 max-lg:mt-7 max-sm:mt-5 px-2 py-3 rounded-[15px] overflow-hidden">
          <p className="text-[12.5px] max-lg:text-[11px] max-sm:text-[10px]">{item.p}</p>
          <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2 max-sm:text-[10px]">{item.p1}</p>
          <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2 max-sm:text-[10px]">{item.p2}</p>
        </div>
          </div>
      
    </div>
  ))}
      </motion.div>
    </div>
    </>
  )}
export default PeopleReviews;








































































//   const scrollingCards = [...cardData, ...cardData]; // Infinite effect

//   return (
//     <div className="overflow-hidden  w-full mt-10">
//     <motion.div
//   style={{ willChange: "transform" }}
//   className="flex gap-6 w-max"
//   animate={{ x: [0, -1820] }}
//   transition={{
//     duration: 20,
//     ease: "linear",
//     repeat: Infinity,
//   }}
// >
//   {scrollingCards.map((item, index) => (
//     <div
//       key={index}
//       className="flex-shrink-0 bg-[#000000CC] px-4 py-5 text-white flex 
//                  w-[340px] h-[385px] border border-blue-300 rounded-[15px] 
//                  max-lg:w-[300px] max-lg:h-[325px]"
//     >
      
//       <div>
//         <div className="flex">
//         <img src={item.logo} alt="Logo" className="w-12 h-12 max-lg:w-10 max-lg:h-10 ml-3" />
//         <div className="flex flex-col">
//         <h1 className="text-[18px] ml-6 font-bold max-lg:text-[16px]">{item.name}</h1>
//         <img src={item.stars} className="w-28 ml-6 mt-1.5 max-lg:w-23"  />
//       </div>
//       </div>
//         <div className="bg-[#33C6F4D9] h-57 max-lg:h-50  mt-10 max-lg:mt-7 px-2 py-3 rounded-[15px] overflow-hidden">
//           <p className="text-[12.5px] max-lg:text-[11px]">{item.p}</p>
//           <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2">{item.p1}</p>
//           <p className="text-[12.5px] max-lg:text-[11px] mt-3 max-lg:mt-2">{item.p2}</p>
//         </div>
//           </div>
      
//     </div>
//   ))}
//  </motion.div>

//     </div>
//   );
// }