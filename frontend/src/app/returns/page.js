// app/refund/page.tsx
import React from "react";
import Navbar from "../components/landingPage_components/Navbar";
import Footer from "../components/landingPage_components/Footer";
import Image from "next/image";

const RefundPolicy = () => {
  return (
    <div className="bg-black min-h-screen px-4 py-10 bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed text-white">
      <Navbar />

      <main className="flex flex-col items-center pt-20 px-4 sm:px-6">
        {/* Page Title */}
        <h1 className="text-[#33C6F4] text-4xl sm:text-6xl font-extrabold my-6 text-center animate-fade-in">
          Return & Refund Policy
        </h1>

        {/* Intro Text */}
        <p className="max-w-6xl text-white text-lg sm:text-xl text-center mb-10 leading-loose font-light animate-slide-up">
        At Comments Fusion, we strive to deliver exceptional digital services. However, we understand that occasionally things may not go as planned.
        we’ve outlined a clear and fair return and refund policy to support your experience with us;        </p>

        {/* Glassmorphic Container */}
        <div className="w-full max-w-screen-xl xl:px-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 sm:p-14 text-white relative z-10 animate-fade-in">
          {/* Background Mascot */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/authPage/mascot.svg"
              alt="Background Mascot"
              fill
              style={{ objectFit: "contain" }}
              className="animate-float opacity-10"
              priority
            />
          </div>

          {/* Refund Policy Sections */}
          <div className="space-y-6 text-white/90 leading-relaxed relative z-10 text-base sm:text-lg">
            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">1.</span>
                Subscription Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li><strong>Monthly Subscriptions:</strong> Refunds are not provided for partially used periods.</li>
                <li><strong>Annual Subscriptions:</strong> You may request a refund within the first 14 days of purchase. After that period, refunds are issued only for technical failures on our end.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">2.</span>
                Refund Process
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Contact our support team at [insert email address] within the applicable time frame.</li>
                <li>Include your order number and a brief reason for the refund request.</li>
                <li>Refunds will be processed back to your original payment method within 7–10 business days.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">3.</span>
                Non-Refundable Items
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Services already rendered.</li>
                <li>Custom integrations or one-time service fees.</li>
                <li>Promotional or trial periods.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">4.</span>
                Canceling Subscriptions
              </h2>
              <p className="font-light">
                You may cancel your subscription at any time from your account dashboard. Access to premium features will continue until the end of your billing cycle.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">5.</span>
                Chargebacks
              </h2>
              <p className="font-light">
                Unauthorized chargebacks will be investigated. Accounts involved in fraudulent disputes may be permanently banned.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
