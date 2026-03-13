// src/components/signup-login_components/TestimonialsCarousel.jsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Stars from "./Stars";

export default function TestimonialsCarousel({ testimonials }) {
  const [idx, setIdx] = useState(0);

  // Automatically advance the carousel every 3 seconds:
  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(id);
  }, [testimonials.length]);

  // Handlers for the Previous/Next buttons:
  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const variants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  const { name, designation, rating, quote } = testimonials[idx];

  return (
    <>

      {/* The rotating testimonials */}
      <div className="flex-1 flex items-center justify-center my-8 relative">
        <button
          onClick={prev}
          className="absolute left-0 text-white text-3xl hover:opacity-80"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="relative w-full max-w-2xl min-h-[200px] mx-8">
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              key={idx}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="
                absolute inset-0
                border border-white rounded-lg
                p-6 bg-white/10
                flex flex-col gap-4
              "
            >
              {/* Header: name + stars */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{name}</p>
                  <p className="text-sm opacity-80">{designation}</p>
                </div>
                <Stars count={rating} />
              </div>

              {/* Quote */}
              <div>
                <hr className="border-white/50 mb-1" />
                <p className="text-sm leading-relaxed">{quote}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute right-0 text-white text-3xl hover:opacity-80"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </>
  );
}

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};
