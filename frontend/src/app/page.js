// app/components/HeroSection.js
"use client";

import Navbar from "./components/landingPage_components/Navbar";
import HeroText from "./components/landingPage_components/HeroText";
import Reviews from "./components/landingPage_components/Reviews";
import DecorativeBirds from "./components/landingPage_components/DecorativeBirds";
import FeaturesSection from "./components/landingPage_components/FeaturesSection";
import LeadConversionFlow from "./components/landingPage_components/LeadConversionFlow";
import ThreeSteps from "./components/landingPage_components/ThreeSteps";
import OneClickCommenting from "./components/landingPage_components/OneClickCommenting";
import AIGeneratedSmartComments from "./components/landingPage_components/AIGeneratedSmartComments";
import MonitorEngagement from "./components/landingPage_components/MonitorEngagement";
import FAQSection from "./components/landingPage_components/FAQSection";
import Footer from "./components/landingPage_components/Footer";
import NewfeaturesSection from "./components/landingPage_components/newfeaturesSection";
import PeopleReviews from "./components/landingPage_components/peopleReviews";

export default function HomePage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed overflow-x-hidden">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden ">
        <HeroText />
        <DecorativeBirds />
        <Reviews />
      </section>
      <NewfeaturesSection/>
      <LeadConversionFlow />
      <ThreeSteps/>
      <OneClickCommenting/>
      <AIGeneratedSmartComments/>
      <MonitorEngagement/>
      <PeopleReviews/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
