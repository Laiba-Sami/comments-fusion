import React from "react";
import Navbar from "../components/landingPage_components/Navbar";
import Footer from "../components/landingPage_components/Footer";
import StoryLine from "../components/about-us/story-line";
import VisionMissionSection from "../components/about-us/VisionMissionSection";
import OurTeamSection from "../components/about-us/OurTeam";

const AboutUs = () => {
  return (
    
    <div className="bg-black min-h-screen px-4 py-10 bg-[linear-gradient(to_bottom,#000000,#33C6F4)] bg-fixed">
      <Navbar />
      <StoryLine />
      <VisionMissionSection />
      <OurTeamSection />
      <Footer/>

    </div>
  );
};

export default AboutUs;
