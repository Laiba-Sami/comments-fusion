"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const desktopSteps = [
  {
    img: "/images/landing-page/1.png",
    style: "left-[12%] top-[-5%] max-lg:top-[8%]",
    textAlign: "text-left",
  },
  {
    img: "/images/landing-page/right-Arrow.png",
    style: "left-[45%] top-[-1%] max-lg:top-[9%]",
    isArrow: true,
  },
  {
    img: "/images/landing-page/2.png",
    style: "left-[65%] top-[-5%] max-lg:top-[8%]",
    textAlign: "text-right",
  },
  {
    img: "/images/landing-page/3.png",
    style: "left-[25%] top-[21%] max-lg:top-[28%]",
    textAlign: "text-right",
  },
  {
    img: "/images/landing-page/left-Arrow.png",
    style: "left-[49%] top-[25%] max-lg:top-[29%]",
    isArrow: true,
  },
  {
    img: "/images/landing-page/4.png",
    style: "left-[65%] top-[23%] max-lg:top-[29%]",
    textAlign: "text-left",
  },
  {
    img: "/images/landing-page/5.png",
    style: "left-[25%] top-[48%] max-lg:top-[49%]" ,
    textAlign: "text-left",
  },
  {
    img: "/images/landing-page/right-Arrow.png",
    style: "left-[50%] top-[50%]",
    isArrow: true,
  },
  {
    img: "/images/landing-page/6.png",
    style: "left-[65%] top-[47%] max-lg:top-[48%]",
    textAlign: "text-right",
  },
  {
    img: "/images/landing-page/left-Arrow.png",
    style: "left-[68%] top-[76%] ",
    isArrow: true,
  },
  {
    img: "/images/landing-page/7.png",
    style: "left-[35%] top-[70%] max-lg:top-[67%]",
    textAlign: "text-center",
  },
];

const mobileSteps = [
  {
    img: "/images/landing-page/1.png",
    label: "Step 1",
  },
  {
    img: "/images/landing-page/2.png",
    label: "Step 2",
  },
  {
    img: "/images/landing-page/3.png",
    label: "Step 3",
  },
  {
    img: "/images/landing-page/4.png",
    label: "Step 4",
  },
  {
    img: "/images/landing-page/5.png",
    label: "Step 5",
  },
  {
    img: "/images/landing-page/6.png",
    label: "Step 6",
  },
  {
    img: "/images/landing-page/7.png",
    label: "Final Step",
  },
];

export default function LeadConversionFlow() {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-5xl font-bold mb-30 mt-10 max-lg:text-4xl max-md:text-xl max-lg:mb-0">
            Freelancer Struggling to turm <br />
            <span className="text-[#33C6F4]">Cold Leads into Clients</span>
          </h2>
        </motion.div>

        <div className="text-center mb-12 max-lg:mt-[-50px]"></div>

        <div className="hidden md:block relative w-full max-w-5xl mx-auto min-h-[1000px] md:min-h-[1200px] flex justify-center">
          <Image
            src="/images/landing-page/Clip-path-group.svg"
            alt="Lead Flow Path"
            fill
            className="object-contain pointer-events-none select-none"
            style={{ zIndex: 0 }}
            priority
          />

          {desktopSteps.map((step, idx) =>
            step.isArrow ? (
              <div
                key={idx}
                className={`absolute ${step.style} z-10`}
                style={{ width: "7%", height: "10%" }}
              >
                <Image
                  src={step.img}
                  alt={step.isArrow ? "Arrow" : step.label || "Lead Step"}
                  fill
                  className="object-contain"
                  draggable={false}
                  priority
                />
              </div>
            ) : (
              <motion.div
                key={idx}
                className={`absolute ${step.style} z-20 flex flex-col items-center`}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  width: idx === 9 ? "20%" : "20%",
                  minHeight: idx === 9 ? "220px" : "180px",
                  height: "auto",
                }}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={step.img}
                    alt={step.label || "Lead Step"}
                    fill
                    className="object-contain rounded-xl"
                    draggable={false}
                    priority
                  />
                </div>
                {step.label && (
                  <div
                    className={`mt-3 text-base md:text-lg font-semibold whitespace-pre-line ${step.textAlign} max-w-[200px]`}
                  >
                    {step.label}
                  </div>
                )}
              </motion.div>
            )
          )}
        </div>

        <div className="md:hidden w-full max-w-sm mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {mobileSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.01 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-50 mb-4 mt-8 text-[10px]">
                  <Image
                    src={step.img}
                    alt={step.label}
                    fill
                    className="object-contain rounded-xl"
                    draggable={false}
                    priority
                  />
                </div>
                {idx < mobileSteps.length - 1 && (
                  <div className="relative w-8 h-4 my-0.5 mt-4 mb-[-36]">
                    <Image
                      src="/images/landing-page/right-Arrow.png"
                      alt="Arrow"
                      fill
                      className="object-contain rotate-90"
                      draggable={false}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
