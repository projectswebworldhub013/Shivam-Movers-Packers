// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/images/hero/hero4.jpg";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section
      className="mt-28 relative w-full min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Neutral Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-5 sm:px-8 text-center"
      >
        {/* Small Subtitle */}
        <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-300 mb-3">
          About Us
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-snug mb-5">
          Shivam Packers & Movers
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-10">
          Established in 2010 and guided by{" "}
          <span className="text-white">Mr. Ashok Kumar Pal</span>,  
          Shivam Packers & Movers is committed to providing dependable,
          professional, and safe relocation services.  
          We handle every move with care, precision, and responsibility —
          ensuring a smooth and stress-free experience for our customers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-10 rounded-full shadow-lg 
            hover:bg-white hover:text-[#0A2A5A] transition-all"
            >
              Get Free Quote
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/gallery"
              className="bg-[#F4A100] text-white font-semibold py-3 px-10 rounded-full shadow-lg 
            hover:bg-[#ffba26] transition-all"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
