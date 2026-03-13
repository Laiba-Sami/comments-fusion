import React from "react";
import Header from "../components/pricing_components/Header";
import PricingToggle from "../components/pricing_components/PricingToggle";
import PricingSection from "../components/pricing_components/PricingSection";
import Navbar from "../components/landingPage_components/Navbar";
import Footer from "../components/landingPage_components/Footer";
import ReviewsSection from "../components/pricing_components/reviews";
import IncludedSection from "../components/pricing_components/included";
import StrategicCommentingSection from "../components/pricing_components/StrategicProspectsSection";
import SocialInsightsSection from "../components/pricing_components/social_linkedin_supportSection";
import FaqSection from "../components/pricing_components/FAQSection";
const PricingPage = () => {
  return (
    
    <div className="min-h-screen w-full overflow-x-hidden 
    bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] 
    bg-fixed  max-md:p-2">
      <Navbar />
      <Header />
      <PricingSection />
      <ReviewsSection />
      <IncludedSection />
      <StrategicCommentingSection/>
      <SocialInsightsSection/>
      <FaqSection />
      <Footer/>

    </div>
  );
};

export default PricingPage;
