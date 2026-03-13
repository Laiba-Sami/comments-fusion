'use client';

import React, { useState, useEffect } from "react";
import Topbar from '../components/topBar';
import Sidebar from '../components/sidenav';
import PricingCard from '../components/pricing_components/PricingCard';
import PricingToggle from '../components/pricing_components/PricingToggle';
// import { fetchPlansData } from '../utils/api';  // Simulate fetching plans

const SubscriptionPlanDashboard = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Fetch plans data from the API
    const getPlansData = async () => {
      try {
        const plansData = await fetchPlansData(); // Replace with actual API call
        setPlans(plansData);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    getPlansData();
  }, []);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);  // Update the selected plan when user subscribes
  };

  const handleCancelSubscription = () => {
    setSelectedPlan(null);  // Cancel the subscription and reset to Free plan
  };

  return (
    <div className="text-white bg-gradient-to-b from-black to-[#33C6F4] min-h-screen">
      <Topbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          {/* Toggle for Yearly/Monthly */}
          <div className="flex justify-end mb-6">
            <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
          </div>

          {/* If a plan is selected, show subscription details */}
          {selectedPlan ? (
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Your Current Plan: {selectedPlan.title}</h3>
              <p className="text-xl">{selectedPlan.price} / {isYearly ? "Year" : "Month"}</p>
              <button
                onClick={handleCancelSubscription}
                className="bg-red-500 text-white py-2 px-4 rounded-full mt-4"
              >
                Cancel Subscription
              </button>
            </div>
          ) : (
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">You are on the Free Plan</h3>
              <p className="text-xl">No subscription selected yet.</p>
            </div>
          )}

          {/* Informative section after Free Plan */}
          <div className="text-center mb-6">
            <p className="text-xl font-semibold">
              Enjoy unlimited comments, 2 personalized tones, monitoring for 20 prospects, and weekly updates on their activity.
            </p>
            <p className="text-lg mt-4">
              By upgrading to a paid plan, you’ll unlock more features and have access to additional tools, such as priority support and advanced AI models. Take your monitoring to the next level!
            </p>
            <p className="text-md mt-4 text-[#33C6F4] font-semibold">
              You can cancel your plan at any time. No long-term commitments.
            </p>
          </div>

          {/* Displaying Plans */}
          <div className="grid grid-cols-3 gap-6">
            {plans.length > 0 ? (
              plans.map((plan) => (
                <PricingCard
                  key={plan.title}
                  {...plan}
                  isYearly={isYearly}
                  onSubscribe={handleSubscribe}  // Pass subscription handler
                />
              ))
            ) : (
              <p>Loading plans...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanDashboard;
