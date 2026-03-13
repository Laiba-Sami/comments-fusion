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
          Privacy Policy
        </h1>

        {/* Welcome Text */}
        <p className="max-w-6xl text-white text-lg sm:text-xl text-center mb-10 leading-loose font-light animate-slide-up">
          At Comments Fusion, we value your privacy and are committed to protecting your personal information.
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

          {/* Privacy Sections */}
          <div className="space-y-6 text-white/90 leading-relaxed relative z-10 text-base sm:text-lg">
            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">1.</span>
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li><strong>Personal Information:</strong> Name, email address, payment details, etc.</li>
                <li><strong>Usage Data:</strong> Device type, IP address, browser type, pages visited, etc.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">2.</span>
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>To provide and maintain our services.</li>
                <li>To communicate with you about updates, promotions, or important changes.</li>
                <li>To improve and personalize the user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">3.</span>
                Sharing Your Information
              </h2>
              <p className="font-light">We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Third-party service providers (e.g., payment processors, analytics tools).</li>
                <li>Legal authorities if required by law or to protect our rights.</li>
              </ul>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">4.</span>
                Data Security
              </h2>
              <p className="font-light">
                We use industry-standard security measures to protect your information. However, no system is 100% secure. Use our services at your own risk.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">5.</span>
                Your Rights
              </h2>
              <p className="font-light">Depending on your location, you may have rights such as:</p>
              <ul className="list-disc pl-6 space-y-1 font-light">
                <li>Access to your personal data.</li>
                <li>Request correction or deletion.</li>
                <li>Object to or restrict processing.</li>
              </ul>
              <p className="mt-2 font-light">
                To exercise these rights, contact us at: <a href="mailto:info@commentsfusion.com" className="text-[#33C6F4] underline">info@commentsfusion.com</a>
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">6.</span>
                Third-Party Links
              </h2>
              <p className="font-light">
                Our platform may contain links to third-party sites. We are not responsible for their privacy practices.
              </p>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <span className="text-[#33C6F4] font-extrabold text-3xl mr-1">7.</span>
                Changes to This Policy
              </h2>
              <p className="font-light">
                We may update this policy. Changes will be posted on this page, and continued use of our services indicates your agreement.
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
