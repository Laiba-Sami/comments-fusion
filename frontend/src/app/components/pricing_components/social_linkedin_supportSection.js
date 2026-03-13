'use client';
import React from 'react';

const SalesInsightsSection = () => {
  const plans = ['Free', 'Starter', 'Premium', 'Agency'];

  const features = [
    {
      category: 'Social Signals & Sales Insights',
      rows: [
        { label: 'Sales insights', values: [false, true, true, true] },
        { label: 'Custom sales recommendations', values: ['2 per day', '7 per day', '12 per day', 'Unlimited'] },
        { label: 'Engagement touchpoints', values: [false, true, true, true] },
        { label: 'Social signals (beta)', values: ['Weekly', 'Daily', 'Daily', 'Daily'] },
      ]
    },
    {
      category: 'LinkedIn Content Optimization Suite',
      rows: [
        { label: 'Connection request notes', values: [false, true, true, true] },
        { label: 'Recommendations', values: [false, true, true, true] },
        { label: 'About section', values: [false, true, true, true] },
        { label: 'Experience section', values: [false, true, true, true] },
        { label: 'Event description', values: [false, true, true, true] },
        { label: 'Articles', values: [false, false, true, true] },
        { label: 'Posts', values: [false, false, true, true] },
      ]
    },
    {
      category: 'Support',
      rows: [
        { label: 'Customer support', values: [false, 'Priority (48 hours)', 'Priority (24 hours)', 'Priority (24 hours)'] },
        { label: 'Flexible billing cycles', values: [false, true, true, true] },
      ]
    }
  ];

  const renderCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white bg-[#0DB2E5] rounded-full p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const renderCrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white bg-gray-400 rounded-full p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
  <section className="w-full px-2 sm:px-4 py-10 max-md:mt-[-50px] max-md:mb-[-50px]">
      {features.map((section, sIdx) => (
        <div key={sIdx} className="mb-16">
          {/* <div className="bg-white text-black text-xl md:text-2xl font-semibold px-6 py-2 rounded-[12px] mb-0 shadow-sm"> */}
              <div className="bg-white text-black text-2xl font-semibold px-6 py-2 
                rounded-[12px] mb-0 shadow-sm max-lg:text-xl max-md:text-lg
                 max-lg:py-1.5 max-md:py-2 max-lg:px-4">
            {section.category}
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
              {section.rows.map((feature, fIdx) => (
                <div
                 key={fIdx} 
                 className="grid
             grid-cols-[120px_repeat(4,1fr)]
             md:grid-cols-[160px_repeat(4,1fr)]
             lg:grid-cols-[160px_repeat(4,1fr)]
              w-full text-xs sm:text-sm"
          >
                  {/* <div className="p-4 border-r border-white/50 bg-transparent">{feature.label}</div> */}
                    <div className="p-3 sm:p-5 border-r border-white/50 text-left 
            break-words text-[12px] sm:text-[13px] max-md:px-1 max-md:w-30">
              {feature.label}
              </div>
                  {feature.values.map((value, idx) => (
                     <div
                key={idx}
                className={`pl-2 p-2 max-md:px-1 max-md:py-5 max-md:ml-0 text-center flex justify-center 
                   break-words ${
                  idx !== plans.length - 1 ? "border-r border-white/50"
                   : ""
                }`}
              >
                      {typeof value === 'boolean' ? (value ? renderCheckIcon() : renderCrossIcon()) : <span>{value}</span>}
                     
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
      ))}
    </section>
  );
};

export default SalesInsightsSection;
