// src/components/HowWeWork.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  primary: "#0A2A5A", // Deep Navy Blue
  secondary: "#F4A100", // Bright Moving Orange
  background: "#F7F8FA",
  surface: "#FFFFFF",
  heading: "#1A1A1A",
  body: "#6B7280",
  accent: "#3B82F6",
};

export default function HowWeWork() {
  const steps = [
    {
      title: "CONSULTATION",
      desc: "We assess your shifting requirements, inventory, and timeline to create a personalized and efficient moving plan.",
    },
    {
      title: "PROFESSIONAL PACKING",
      desc: "Using premium boxes, bubble wraps, foam, and protective packaging, we ensure complete safety of every item.",
    },
    {
      title: "SAFE TRANSPORTATION",
      desc: "Items are moved using GPS-enabled trucks, trained drivers, and secure loading-unloading procedures.",
    },
    {
      title: "UNPACKING & SETUP",
      desc: "We carefully unpack and help arrange your essentials, ensuring a comfortable and stress-free settling-in process.",
    },
  ];

  return (
    <section
      className="relative py-10 px-6 md:px-14 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFFFF, #F7F8FA)",
      }}
    >
      {/* Glow Background Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#0A2A5A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A100]/10 rounded-full blur-3xl"></div>

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      ></div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center mb-16 z-10"
      >
        <h4
          className="text-xl md:text-2xl tracking-widest font-light uppercase"
          style={{
            color: colors.primary,
          }}
        >
          Shivam Mover and Packer
        </h4>

        <h2
          className="text-4xl md:text-5xl font-light mt-3 drop-shadow-md"
          style={{
            color: colors.secondary,
            fontFamily: "'Italiana', serif",
          }}
        >
          How We Work
        </h2>

        <p
          className="mt-4 max-w-3xl mx-auto text-lg"
          style={{
            color: colors.body,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          A streamlined, professional, and secure relocation process—designed to give you a smooth moving experience.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[75px] left-0 right-0 mx-auto w-full h-[3px] 
          bg-gradient-to-r from-[#0A2A5A] via-[#F4A100] to-[#0A2A5A]
          shadow-[0_0_25px_rgba(10,42,90,0.5)]"></div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group p-8 rounded-2xl bg-white shadow-xl border border-gray-200 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step Number Background */}
              <div
                className="absolute -top-14 left-1/2 -translate-x-1/2 text-7xl font-extrabold opacity-10"
                style={{
                  color: colors.primary,
                  fontFamily: "'Italiana', serif",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Dot */}
              <div
                className="w-6 h-6 rounded-full mx-auto mb-6 
                bg-gradient-to-br from-[#0A2A5A] to-[#F4A100] 
                shadow-lg shadow-[#0A2A5A]/40"
              ></div>

              {/* Card Title */}
              <h3
                className="text-xl font-semibold mb-4 text-center"
                style={{
                  color: colors.primary,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-center"
                style={{
                  color: colors.body,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
