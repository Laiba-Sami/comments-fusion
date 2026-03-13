// app/terms/page.tsx
import React from "react";
import Navbar from "../components/landingPage_components/Navbar";
import Footer from "../components/landingPage_components/Footer";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <div className="bg-black min-h-screen px-4 py-10 bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)] bg-fixed text-white">
      <Navbar />

      <main className="flex flex-col items-center pt-20 px-4 sm:px-6">
        {/* Page Title */}
        <h1 className="text-[#33C6F4] text-4xl sm:text-6xl font-extrabold my-6 text-center animate-fade-in">
          Terms & Conditions
        </h1>

        {/* Welcome Text */}
        <p className="max-w-6xl text-white text-lg sm:text-xl text-center mb-10 leading-loose font-light animate-slide-up">
          Welcome to Comments Fusion. These Terms and Conditions govern your access to and use of our platform, products, and services. By accessing or using Comments Fusion, you agree to be bound by these Terms.
        </p>

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

          {/* Terms Sections */}
          <div className="space-y-6 text-white/90 leading-relaxed relative z-10 text-base sm:text-lg">
            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">1.</span>
                Eligibility
              </h2>
              <p className="font-light">
                To use our Services, you must be at least 18 years old or the age of majority in your jurisdiction and legally capable of entering into binding contracts.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">2.</span>
                User Accounts
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to notify us immediately of any unauthorized access or use of your account.</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">3.</span>
                Use of Services
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Use our services for illegal or unauthorized purposes.</li>
                <li>Transmit malicious software or content that harms the platform or users.</li>
                <li>Violate any applicable laws or regulations.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">4.</span>
                Intellectual Property
              </h2>
              <p className="font-light">
                All content, software, and materials provided on Comments Fusion are the property of Comments Fusion or its licensors. You may not reproduce, redistribute, or exploit any part of our services without express permission.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">5.</span>
                Subscription and Payments
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Some features may be available only via paid subscriptions.</li>
                <li>Prices and billing cycles are disclosed at the time of purchase.</li>
                <li>By subscribing, you authorize us to charge the applicable fees using your provided payment method.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">6.</span>
                Termination
              </h2>
              <p className="font-light">
                We may suspend or terminate your account at our sole discretion if you breach these Terms. Upon termination, your right to use the services will cease immediately.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">7.</span>
                Limitation of Liability
              </h2>
              <p className="font-light">
                To the maximum extent permitted by law, Comments Fusion shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use our services.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">8.</span>
                Changes to Terms
              </h2>
              <p className="font-light">
                We reserve the right to modify these Terms at any time. Updates will be posted on this page, and continued use of the services constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
