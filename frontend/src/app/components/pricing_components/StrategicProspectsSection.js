'use client';
import React from 'react';

const StrategicCommentingSection = () => {
  const plans = [
    {
      name: 'Free',
      comments: true,
      models: 'GPT 4-o mini',
      tones: '3',
      charLimit: '200',
    },
    {
      name: 'Starter',
      comments: true,
      models: 'GPT 4-o',
      tones: '5',
      charLimit: 'Unlimited',
    },
    {
      name: 'Premium',
      comments: true,
      models: 'GPT 4-o\nGPT 3.5-mini\nGPT-4.5',
      tones: '10',
      charLimit: 'Unlimited',
    },
    {
      name: 'Agency',
      comments: true,
      models: 'Google Gemini\nGPT 4-o\nGPT 3.5-mini\nGPT-4.5',
      tones: 'Unlimited',
      charLimit: 'Unlimited',
    },
  ];

  const prospectsFeatures = [
    { label: 'Number of prospects', key: 'prospects' },
    { label: 'Lists creation', key: 'lists' },
    { label: 'Automated update', key: 'update' },
    { label: 'Email notification', key: 'email' },
    { label: 'Real-time update request', key: 'realtime' },
    { label: 'Bulk import', key: 'bulk' },
  ];

  const prospectsPlans = [
    {
      name: 'Free',
      prospects: '10',
      lists: '3',
      update: 'Weekly',
      email: 'Weekly',
      realtime: false,
      bulk: false,
    },
    {
      name: 'Starter',
      prospects: '40',
      lists: '7',
      update: 'Daily',
      email: 'Daily',
      realtime: true,
      bulk: false,
    },
    {
      name: 'Premium',
      prospects: '160',
      lists: '32',
      update: 'Twice a day',
      email: 'Daily',
      realtime: true,
      bulk: true,
    },
    {
      name: 'Agency',
      prospects: '2,000',
      lists: 'Unlimited',
      update: 'Twice a day',
      email: 'Daily',
      realtime: true,
      bulk: true,
    },
  ];

  const renderCheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-white bg-[#0DB2E5] rounded-full p-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const renderCrossIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-white bg-gray-400 rounded-full p-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
return (
  <section className="w-full px-2 sm:px-4 py-10">
    <div className="mb-16">

      <div className="bg-white text-black text-2xl font-semibold px-6 py-2 
                      rounded-[12px] mb-0 shadow-sm max-lg:text-xl max-md:text-lg
                      max-lg:py-1.5 max-md:py-2 max-lg:px-4"> 
              Strategic Commenting
      </div>
        <div className="block md:hidden grid grid-cols-[120px_repeat(4,1fr)] w-full mt-5 text-white
        text-xs sm:text-sm font-bold border-b border-white/50 pb-2">
        <div className="text-left px-1 sm:px-2">Feature</div>
        <div className="text-center">Free</div>
        <div className="text-center">Starter</div>
        <div className="text-center">Premium</div>
        <div className="text-center">Agency</div>
      </div>

      <div className="text-white text-sm mt-5">
        {[
          { label: "Unlimited GenAI comments", key: "comments", isIcon: true },
          { label: "GenAI models", key: "models" },
          { label: "Custom tones", key: "tones" },
          { label: "Custom tones character limit", key: "charLimit" }
        ].map((feature, rowIdx) => (

          <div
            key={rowIdx}
            className="grid
             grid-cols-[120px_repeat(4,1fr)]
             md:grid-cols-[160px_repeat(4,1fr)]
             lg:grid-cols-[160px_repeat(4,1fr)]
              w-full text-xs sm:text-sm"
          >
            <div className=" p-3 sm:p-5 border-r border-white/50 text-left 
            break-words text-[12px] sm:text-[13px] max-md:px-1 max-md:w-30">
              {feature.label}
            </div>

            {plans.map((plan, idx) => (
              
              <div
                key={idx}
                className={`pl-2 p-2 max-md:px-1 max-md:py-5 max-md:ml-0 text-center flex justify-center 
                   break-words ${
                  idx !== plans.length - 1 ? "border-r border-white/50"
                   : ""
                }`}
              >
                {feature.isIcon
                  ? plan[feature.key]
                    ? renderCheckIcon()
                    : renderCrossIcon()
                  : plan[feature.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Prospects Monitoring Section */}
    <div className="mb-16">
      <div className="bg-white text-black text-2xl font-semibold px-6 py-2 
                      rounded-[12px] mb-0 shadow-sm max-lg:text-xl max-md:text-lg
                      max-lg:py-1.5 max-md:py-2 max-lg:px-4"> 
              Prospects Monitoring
      </div>
          <div className="block md:hidden grid grid-cols-[120px_repeat(4,1fr)] w-full mt-5 text-white
        text-xs sm:text-sm font-bold border-b border-white/50 pb-2">
        <div className="text-left px-1 sm:px-2">Feature</div>
        <div className="text-center">Free</div>
        <div className="text-center">Starter</div>
        <div className="text-center">Premium</div>
        <div className="text-center">Agency</div>
      </div>
      <div className="text-white text-sm mt-5">
        {prospectsFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="grid
             grid-cols-[120px_repeat(4,1fr)]
             md:grid-cols-[160px_repeat(4,1fr)]
             lg:grid-cols-[160px_repeat(4,1fr)]
              w-full text-xs sm:text-sm"
          >
            <div className=" p-3 sm:p-5 border-r border-white/50 text-left 
            break-words text-[12px] sm:text-[13px] max-md:px-1 max-md:w-30">
              {feature.label}
            </div>

            {prospectsPlans.map((plan, pidx) => (
              <div

                key={pidx}
                className={`pl-2 p-2 max-md:px-1 max-md:py-5 max-md:ml-0 text-center flex justify-center 
                   break-words ${
                  idx !== prospectsFeatures.length  ? "border-r border-white/50"
                   : ""
                }`}
              >
                {typeof plan[feature.key] === "boolean"
                  ? plan[feature.key]
                    ? renderCheckIcon()
                    : renderCrossIcon()
                  : plan[feature.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
export default StrategicCommentingSection;
