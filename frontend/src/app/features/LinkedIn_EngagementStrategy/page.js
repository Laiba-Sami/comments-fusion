import React from "react";
import Navbar from "src/app/components/landingPage_components/Navbar";
import Footer from "src/app/components/landingPage_components/Footer";
import StrategyCard from "src/app/components/LinkedIn_EngagementComponenet/strategyCard";
import PeopleLinkedin from "src/app/components/LinkedIn_EngagementComponenet/peopleLinkedin";
import FaqsPage from "src/app/components/LinkedIn_EngagementComponenet/faqsPage";

export default function LinkedIn_EngagementStrategy() {
  return (
  <>
  {/* <div> */}
  <div className="bg-black min-h-screen px-4 py-10   bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)]  relative z-[1]">
  <Navbar />
  <StrategyCard />
  <PeopleLinkedin />
 <FaqsPage currentPage="LinkedIn_EngagementStrategy" />
    <Footer />
    </div>
  </>
  )
}
