"use client";
import Navbar from "../components/landingPage_components/Navbar";
import Footer from "../components/landingPage_components/Footer";
import { useState } from "react";
import Image from "next/image";
import { sendContactMessage } from "../utils/api";

export default function ContactUs() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNo: "",
  });

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // No validation, directly submit the form data
    try {
      const response = await sendContactMessage(form);
      setForm({ fullName: "", email: "", phoneNo: "", message: "" }); // Reset the form after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 py-10 bg-[linear-gradient(to_bottom,_#000000_45%,_#33C6F4_100%)] bg-fixed text-white min-h-screen">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center mt-10">
            Contact Us
          </h1>

          {/* Background Image (Floating Mascot) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/authPage/mascot.svg"
              alt="Background Mascot"
              fill
              style={{ objectFit: "contain" }}
              className="animate-float opacity-10"
              priority
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-12 text-white">
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-5 px-2 sm:px-0">
              <h2 className="text-2xl font-bold">We&rsquo;re Here to Help</h2>
              <p className="text-white/80 leading-relaxed">
                Got a question, need support, or want to explore how Comments
                Fusion can help your team grow faster on LinkedIn? We&rsquo;d
                love to hear from you.
              </p>
              <p className="text-white/80 leading-relaxed hidden md:block">
                Whether you&rsquo;re facing a technical issue, have feedback, or
                want to learn more about premium features, our team is just a
                message away.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full h-10 px-4 rounded-md border border-white/40 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-10 px-4 rounded-md border border-white/40 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNo"
                  name="phoneNo"
                  type="tel"
                  value={form.phoneNo}
                  onChange={handleChange}
                  className="w-full h-10 px-4 rounded-md border border-white/40 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-white/40 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
