import React from "react";
import imgRight from "../assets/images/shivam/s2.jpg";
import {
  FaTruckMoving,
  FaShieldAlt,
  FaUsers,
  FaMedal,
} from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="bg-[#F7F8FA] text-[#1A1A1A] px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
      
      {/* Section Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide leading-snug">
          <span className="text-[#0A2A5A]">Driven by Trust,</span>
          <br />
          Perfected with Experience
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed">
          At{" "}
          <span className="text-[#0A2A5A] font-medium">
            Shivam Mover and Packer
          </span>
          , every relocation is planned and executed with care, responsibility,
          and professionalism. Our commitment is to deliver safe handling,
          transparent processes, and dependable moving solutions.
        </p>

        {/* Decorative Line */}
        <div className="mt-6 w-20 h-[3px] bg-[#F4A100] mx-auto rounded-full"></div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-[#1A1A1A] leading-snug">
            “Relocation handled with care, precision, and complete peace of mind.”
          </h3>

          <p className="mt-5 text-[#6B7280] leading-relaxed text-sm sm:text-base md:text-lg max-w-xl">
            Shivam Mover and Packer was established with a simple goal — to make
            moving a smooth and stress-free experience. From careful packing to
            secure transportation, our trained professionals manage every step
            with attention and accountability.
          </p>

          <p className="mt-4 text-[#6B7280] leading-relaxed text-sm sm:text-base max-w-xl">
            Backed by modern equipment, a skilled workforce, and a customer-first
            approach, we ensure that every household or office relocation is
            completed safely, efficiently, and on schedule.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={imgRight}
              alt="Shivam Mover and Packer Professional Services"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <p className="mt-4 italic text-[#6B7280] text-sm max-w-md">
            “Every item handled responsibly — every move delivered with trust.”
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1A1A1A]/10 mt-20 mb-14"></div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        
        <StatCard
          icon={FaTruckMoving}
          value="2500+"
          label="Successful Relocations Completed"
        />

        <StatCard
          icon={FaShieldAlt}
          value="100%"
          label="Safe & Secure Handling"
        />

        <StatCard
          icon={FaUsers}
          value="1800+"
          label="Satisfied Clients"
        />

        <StatCard
          icon={FaMedal}
          value="10+"
          label="Years of Trusted Service"
        />
      </div>

      {/* Background Brand Text */}
      <h1 className="absolute bottom-0 right-0 text-[22vw] md:text-[12vw] font-semibold text-[#1A1A1A] opacity-[0.04] select-none uppercase leading-none">
        Shivam
      </h1>
    </section>
  );
};

export default OurStory;

/* Reusable Stat Card */
const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl py-8 px-6 text-center shadow-md border border-[#0A2A5A]/5 hover:shadow-lg transition-all duration-500">
      <Icon className="text-[#F4A100] text-3xl mx-auto mb-4" />
      <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A]">
        {value}
      </h3>
      <p className="text-sm text-[#6B7280] mt-2">{label}</p>
    </div>
  );
};
