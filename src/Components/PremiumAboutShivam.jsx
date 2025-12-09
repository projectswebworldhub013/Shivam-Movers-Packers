import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/hero/h1.jpg"; // replace with Shivam image later

const PremiumAboutShivam = () => {
  return (
    <section className="relative w-full bg-[#F7F8FA] py-12 px-6 lg:px-20 overflow-hidden">

      {/* 🔵 Modern Gradient SVG Circles */}
      <div className="absolute inset-0 opacity-[0.22] pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="20%" cy="30%" r="220" stroke="#0A2A5A" strokeWidth="1.4" fill="none" />
          <circle cx="75%" cy="65%" r="260" stroke="#F4A100" strokeWidth="1.2" fill="none" />
          <circle cx="50%" cy="50%" r="340" stroke="#3B82F6" strokeWidth="0.9" fill="none" />
        </svg>
      </div>

      {/* 🔥 Top Heading Section */}
      <div className="text-center mb-10 relative z-10">
        <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
          About Shivam Mover and Packer
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mt-2">
          Trusted Experts in Smooth & Secure Relocation
        </h2>

        {/* Underline */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#0A2A5A] to-[#F4A100] mx-auto mt-3 rounded-full"></div>

        <p className="text-[#6B7280] max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
          Since 2010, <span className="text-[#0A2A5A] font-semibold">Shivam Mover and Packer</span> 
          has been delivering professional, reliable, and hassle-free relocation services 
          across Delhi NCR. Under the leadership of{" "}
          <span className="font-semibold text-[#F4A100]">Mr. Ashok Kumar Pal</span>, 
          we ensure every move is handled with care, planning, and complete accountability.
        </p>
      </div>

      {/* ⭐ Main Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Image */}
        <div className="relative w-full">
          <img
            src={aboutImg}
            alt="Shivam Mover and Packer"
            className="rounded-2xl shadow-2xl border border-gray-200"
          />

          {/* Accent Box */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#F4A100] rounded-xl opacity-75"></div>
        </div>

        {/* ⭐ Right Content */}
        <div className="space-y-7">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A5A] leading-tight">
            Moving with Trust,
            <span className="text-[#F4A100] block">Care & Professional Expertise</span>
          </h2>

          <p className="text-[#6B7280] text-lg leading-relaxed">
            With our skilled team, premium packing materials, and modern transport fleet,
            Shivam Mover and Packer ensures smooth relocation—whether it’s household shifting,
            office relocation, safe storage, or vehicle transportation.
            <br /><br />
            Every item is packed, managed, and delivered with utmost safety and professionalism.
          </p>

          {/* ✔ Bullet Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">

            <div className="p-5 rounded-xl shadow-md bg-white border-l-4 border-[#0A2A5A]">
              <h4 className="text-lg font-semibold text-black">Professional Packing</h4>
              <p className="text-gray-600 text-sm mt-1">
                Premium packing materials, trained experts, safe handling.
              </p>
            </div>

            <div className="p-5 rounded-xl shadow-md bg-white border-l-4 border-[#0A2A5A]">
              <h4 className="text-lg font-semibold text-black">Safe & Reliable Transport</h4>
              <p className="text-gray-600 text-sm mt-1">
                Timely delivery with secure loading and unloading.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <Link to="/about">
            <button className="px-10 py-3 rounded-lg bg-gradient-to-r from-[#0A2A5A] to-[#F4A100] text-white font-medium shadow-xl hover:scale-105 transition-all duration-300">
              Learn More →
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default PremiumAboutShivam;
