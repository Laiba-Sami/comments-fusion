"use client";
import React from "react";
import Image from "next/image";

const OurTeamSection = () => {
  return (
    <section className="text-white py-20 px-4 md:py-45 md:px-6 text-center max-lg:mt-[-80px]">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-bold">Our Team</h2>
      </div>

      {/* CEO Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mb-10 md:mb-12 gap-6 md:gap-0">
        {/* Image */}
        <div className="w-full md:w-[48%] flex-shrink-0 flex justify-center mb-6 md:mb-0">
          <Image
            src="/images/about-us/murad.png"
            alt="Murad Butt"
            width={430}
            height={430}
            className="rounded-md object-cover w-full max-w-[320px] md:max-w-[430px] border-0"
          />
        </div>
        {/* Divider */}
        <div className="hidden md:block h-[320px] md:h-[430px] w-[1.5px] bg-white mx-4 md:mx-8 my-auto" />
        {/* Text */}
        <div className="w-full md:w-[52%] flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            <span className="text-cyan-400">CEO</span> - Murad Butt
          </h3>
          <p className="text-base md:text-lg text-cyan-400 font-bold mb-2">
            <span className="text-cyan-400">Murad Butt</span>{" "}
            <span className="text-white font-normal">
              is the visionary founder of
              <span className="font-bold text-white"> Comments Fusion</span>, a
              dynamic platform revolutionizing the way online conversations are
              managed and engaged with. With a strong passion for digital
              innovation and community engagement,
              <span className="text-cyan-400"> Murad</span> launched Comments
              Fusion to streamline comment management, amplify user interaction,
              and empower creators, brands, and publishers to cultivate thriving
              online communities.
            </span>
          </p>
          <p className="text-base md:text-lg text-white mb-2">
            Under <span className="text-cyan-400">Murad&rsquo;s</span>{" "}
            leadership,
            <span className="font-bold"> Comments Fusion</span> is shaping the
            future of comment systems by blending smart moderation tools,
            real-time analytics, and seamless integration across platforms. His
            commitment to transparency, user empowerment, and meaningful
            discourse drives the mission behind the brand.
          </p>
          <p className="text-base md:text-lg text-white">
            Whether you&rsquo;re a content creator, business, or publisher,
            <span className="text-cyan-400"> Murad</span> is dedicated to making
            sure your audience&rsquo;s voice is not only heard but valued.
          </p>
        </div>
      </div>

      {/* Co-Founder Section (Mirroring CEO Layout) */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mb-10 md:mb-12 gap-6 md:gap-0">
        {/* Image */}
        <div className="w-full md:w-[48%] flex-shrink-0 flex justify-center mb-6 md:mb-0">
          <Image
            src="/images/about-us/Arslan.png"
            alt="Arslan Ashraf"
            width={430}
            height={430}
            className="rounded-md object-cover w-full max-w-[320px] md:max-w-[430px] border-0"
          />
        </div>
        {/* Divider */}
        <div className="hidden md:block h-[320px] md:h-[430px] w-[1.5px] bg-white mx-4 md:mx-8 my-auto" />
        {/* Text */}
        <div className="w-full md:w-[52%] flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            <span className="text-cyan-400">Co-Founder</span> - Arslan Ashraf
          </h3>
          <p className="text-base md:text-lg text-cyan-400 font-bold mb-2">
            <span className="text-cyan-400">Arslan Ashraf</span>{" "}
            <span className="text-white font-normal">
              is the strategic co-founder of{" "}
              <span className="font-bold">Comments Fusion</span>, bringing a
              sharp focus on product innovation, user experience, and technical
              solutions. With a strong background in digital solutions and
              platform development, Arslan co-founded Comments Fusion alongside
              Murad Butt to transform how digital communities interact,
              moderate, and grow.
            </span>
          </p>
          <p className="text-base md:text-lg text-white mb-2">
            Arslan plays a key role in shaping the platform’s core architecture
            and ensuring it delivers impactful features and reliable systems.
            His vision and leadership help bridge the gap between user needs and
            scalable tech solutions, making Comments Fusion a go-to choice for
            businesses, publishers, and creators alike.
          </p>
          <p className="text-base md:text-lg text-white">
            Together with Murad, Arslan is committed to building a platform that
            fosters healthier conversations and empowers community-driven
            growth.
          </p>
        </div>
      </div>

      <div className="relative w-full bg-[#042E46] rounded-t-[80px] md:rounded-t-[300px] py-14 md:py-24 px-2 md:px-8 overflow-hidden mt-16 md:mt-24">
        <div className="hidden lg:block absolute right-[10px] md:left-[40px] bottom-0 w-20 md:w-40 h-auto z-10">
          <Image
            src="images/landing-page/faq-bot.svg"
            alt="Bot Left"
            width={80}
            height={160}
            className="w-full h-auto"
          />
        </div>

        <div className="hidden lg:block absolute left-[10px] md:left-[40px] bottom-0 w-20 md:w-40 h-auto z-10">
          <Image
            src="images/landing-page/faq-bot.svg"
            alt="Bot Right"
            width={80}
            height={160}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center z-20 relative">
          <p className="text-white text-base md:text-lg mb-2 md:mb-4 max-lg:mt-14">
            Join thousands of professionals using Comments Fusion to connect
            smarter, engage faster, and grow stronger right on LinkedIn.
          </p>
          <p className="text-white text-lg md:text-2xl font-bold mb-6 md:mb-8">
            Start your journey one smart comment at a time.
          </p>

          <button
            className="bg-[#2FB2E2] hover:bg-[#25a2cd] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg transition-all duration-200 border-none outline-none min-w-[160px] md:min-w-[220px] min-h-[44px]"
            style={{ boxShadow: "0 4px 24px 0 rgba(47,178,226,0.18)" }}
          >
            <Image
              src="/images/landing-page/chrome.svg"
              alt="chrome"
              width={24}
              height={28}
              className="mr-2 md:mr-3"
            />
            Download the Extension
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
