'use client';

const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="w-full flex justify-start mb-8 mt-4">
      <div className="flex items-center gap-2 bg-gray-800 p-1 rounded-full mt-[-10px] mb-8">
        <button
          className={`px-6 py-2 rounded-full text-sm ${
            !isYearly ? 'bg-sky-500 text-white' : 'bg-transparent text-gray-300'
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm ${
            isYearly ? 'bg-sky-500 text-white' : 'bg-transparent text-gray-300'
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default PricingToggle;