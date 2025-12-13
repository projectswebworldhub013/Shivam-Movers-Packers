import React from "react";
import imgLeft from "../assets/images/s7.jpg";
import imgCenter from "../assets/images/s5.jpg";
import imgRight from "../assets/images/s9.jpg";
import { Link } from "react-router-dom";

const ShivamGallery = () => {
  return (
    <section className="relative w-full bg-[#F7F8FA] py-20 px-6 md:px-20 overflow-hidden font-['Roboto']">
      
      {/* Background Brand Text */}
      <h1 className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] md:text-[15vw] font-extrabold text-[#1A1A1A] opacity-[0.04] select-none z-0 uppercase tracking-tight">
        Shivam
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        
        {/* Decorative Accent */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="block w-16 sm:w-20 h-[2px] bg-[#F4A100]"></span>
          <span className="text-[#F4A100] text-sm tracking-widest uppercase font-semibold">
            Excellence in Every Move
          </span>
          <span className="block w-16 sm:w-20 h-[2px] bg-[#F4A100]"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight max-w-4xl mx-auto">
          <span className="italic text-[#F4A100]">“</span>
          Moving Lives with Care, Trust & Precision —
          <span className="text-[#0A2A5A]"> Shivam Packers & Movers</span>
          <span className="italic text-[#F4A100]">”</span>
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white group hover:shadow-xl hover:shadow-[#0A2A5A]/10 transition-all duration-500">
            <img
              src={imgLeft}
              alt="Secure Packing"
              className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-[15px] md:text-base text-[#6B7280] max-w-xs mt-4">
            Secure packing solutions using premium materials to ensure maximum
            safety of your valuables.
          </p>
        </div>

        {/* Center Column */}
        <div className="flex justify-center items-center h-full">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white transition-all duration-700 hover:scale-[1.03] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A5A]/30 via-transparent to-transparent"></div>
            <img
              src={imgCenter}
              alt="Professional Transport"
              className="h-full w-full object-cover max-h-[500px] sm:max-h-[550px] md:max-h-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full">
          <p className="text-[15px] md:text-base text-[#6B7280] text-right max-w-xs ml-auto mb-4">
            A dedicated team trained to handle every move with responsibility,
            punctuality, and professionalism.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white group hover:shadow-xl hover:shadow-[#0A2A5A]/10 transition-all duration-500">
            <img
              src={imgRight}
              alt="Experienced Team"
              className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-20 mt-16 flex justify-center">
        <Link to="/gallery">
          <button className="relative bg-[#0A2A5A] text-white px-10 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-[#3B82F6] transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">View Our Work</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ShivamGallery;
