import React from "react";
import Navbar from "../components/landingPage_components/Navbar";
import Linkedin_Guaranteed from "../components/features_components/linkedinGuaranteed";
import FeaturesCards from "../components/features_components/featuresCards";
import Msgbox from "../components/features_components/msgBox";
import Multi_userPlan from "../components/features_components/Multi-userPlan";
import GroupPlan from "../components/features_components/groupPlan";
import StrategicAdvantage from "../components/features_components/strategicAdvantage";
import FaqsPage from "../components/LinkedIn_EngagementComponenet/faqsPage";
import Footer from "../components/landingPage_components/Footer";

export default function Features() {
  return (
<>
 <div className="min-h-screen w-full overflow-x-hidden bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed">
<Navbar/>
<Linkedin_Guaranteed/>
<FeaturesCards/>
<Msgbox/>
<Multi_userPlan/>
<GroupPlan/>
<StrategicAdvantage/>
<FaqsPage currentPage="features"/>
<Footer/>

</div>

</>
  );
}











