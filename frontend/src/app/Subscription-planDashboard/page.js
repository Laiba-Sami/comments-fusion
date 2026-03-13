'use client';
import React, { useState } from "react";
import Topbar from '../components/topBar';
import Sidebar from '../components/sidenav';
import PricingCard from '../components/pricing_components/PricingCard';
import PricingToggle from '../components/pricing_components/PricingToggle';

const yearlyPlans = [
  {
    title: "Starter",
    price: "$9.45",
    features: [
      "Unlimited comments",
      "5 custom tones",
      "40 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated daily",
      "Priority support (24 hours)",
      "Advanced AI model (GPT-4o)"
    ]
  },
  {
    title: "Premium",
    price: "$22",
    highlight: true,
    features: [
      "Unlimited comments",
      "10 custom tones",
      "160 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated daily",
      "Priority support (24 hours)",
      "Advanced AI models (GPT-4o, GPT-4, GPT-4.5)"
    ]
  },
  {
    title: "Agency",
    price: "$62",
    features: [
      "Unlimited comments",
      "Unlimited custom tones",
      "2,000 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated twice daily",
      "Priority support (24 hours)",
      "Early access to Beta features",
      "Advanced AI models (Google Gemini, GPT-4o, GPT-4, GPT-4.5)"
    ]
  }
];

const monthlyPlans = [
  {
    title: "Starter",
    price: "$11.90",
    features: [
      "Unlimited comments",
      "5 custom tones",
      "40 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated daily",
      "Priority support (24 hours)",
      "Advanced AI model (GPT-4o)"
    ]
  },
  {
    title: "Premium",
    price: "$25",
    highlight: true,
    features: [
      "Unlimited comments",
      "10 custom tones",
      "160 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated daily",
      "Priority support (24 hours)",
      "Advanced AI models (GPT-4o, GPT-4, GPT-4.5)"
    ]
  },
  {
    title: "Agency",
    price: "$75",
    features: [
      "Unlimited comments",
      "Unlimited custom tones",
      "2,000 prospects monitoring",
      "Daily & real-time monitoring update",
      "Social signals - updated twice daily",
      "Priority support (24 hours)",
      "Early access to Beta features",
      "Advanced AI models (Google Gemini, GPT-4o, GPT-4, GPT-4.5)"
    ]
  }
];

function Subscription_planDashboard() {
  const [isYearly, setIsYearly] = useState(true);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

 return (
  <>
  <div
      className="
         text-white
       bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)]
        bg-cover bg-center max-h-screen
        overflow-y-auto
        p-2
        space-y-4
      "
    >
    <Topbar />
    <div className="flex flex-nowrap">
      <Sidebar />

      <div className="flex-1 px-0 sm:px-2 lg:px-2 py-6">
        {/* Toggle aligned to the right */}
        <div className=" pl-[75%] px-8">
          <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        {/* Plans grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6"> */}
        <div className="grid grid-cols-3 gap-6 max-lg:gap-5 max-md:gap-2">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </div>
    </div>
  </>
);
}

export default Subscription_planDashboard;
