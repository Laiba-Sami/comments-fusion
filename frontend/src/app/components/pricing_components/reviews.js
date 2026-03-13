'use client';
import React from 'react';
import Image from 'next/image';

const ReviewsSection = () => {
  return (
    <section className="py-40 px-4 relative">
      <div className="max-w-4xl mx-auto relative h-[480px] max-lg:h-[410px] max-md:h-[350px]" >
        <Image
          src="/images/pricing/Polygon.png"
          alt="Triangle"
          fill
          style={{ objectFit: 'contain', zIndex: 1 }}
          className="pointer-events-none select-none"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center top-[-30] z-2"
        >
          <Image
  src="/images/pricing/1.png"
  alt="Product Hunt"
  width={160}
  height={160}
  className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px] max-md:w-[110px] max-md:h-[110px]"
/>

        </div>
        <div
          className="absolute flex flex-col items-center z-2 right-[65%] max-lg:right-[66%] max-md:right-[67%] bottom-[-20px]"
        >
          <Image src="/images/pricing/2.png" alt="Chrome" width={160} height={160} className='max-lg:w-[130px] max-lg:h-[130px] 
          max-md:w-[120px] max-md:mr-10 max-md:h-[110px]'/>
        </div>
        <div
  className="absolute bottom-[-20px] 
             left-[65%] 
             max-lg:left-[66%] 
             max-md:absolute left-1/2
             z-20 ">
          <Image src="/images/pricing/3.png"
           alt="Other" width={160} height={160}
            className='max-lg:w-[130px] max-lg:h-[130px] 
            max-md:ml-8 max-md:w-[110px] max-md:h-[110px]'/>
        </div>
        <div className="absolute left-1/2 top-80 max-lg:top-65 max-md:top-53 -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="text-white text-4xl max-lg:text-3xl max-md:text-2xl font-bold text-center drop-shadow-lg">Reviews</h2>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;