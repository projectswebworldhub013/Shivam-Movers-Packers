// src/components/WhyChooseUs.jsx
import React from "react";
import {
  FaCogs,
  FaCertificate,
  FaUsersCog,
  FaTools,
  FaShieldAlt,
  FaTruckMoving,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const items = [
  {
    icon: <FaCogs />,
    title: "Advanced Moving Technology",
    desc: "Modern tools, GPS-enabled trucks, and safe packing materials for total item protection.",
  },
  {
    icon: <FaUsersCog />,
    title: "Trained & Verified Staff",
    desc: "Professional, uniformed, and experienced movers ensuring careful and efficient handling.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Delhi NCR Wide Network",
    desc: "Fast and reliable relocation services across Delhi, Noida, Gurugram, Faridabad & Ghaziabad.",
  },
  {
    icon: <FaCertificate />,
    title: "Certified & Trusted Company",
    desc: "15+ years of trust with thousands of satisfied clients across residential & corporate sectors.",
  },
  {
    icon: <FaTools />,
    title: "Premium Quality Packing",
    desc: "High-grade boxes, bubble wraps, foam sheets & anti-shock materials for maximum safety.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transit Insurance Available",
    desc: "Optional insurance coverage to keep your belongings safe from unexpected damages.",
  },
  {
    icon: <FaChartLine />,
    title: "15+ Years of Experience",
    desc: "Trusted since 2010 — delivering smooth, systematic & safe moving services.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    desc: "A dedicated support team to help you throughout your relocation journey.",
  },
];

export default function WhyShivam() {
  return (
    <section className="w-full py-12 px-6 lg:px-28 relative overflow-hidden bg-[#F7F8FA]">

      {/* Hollow Circles Background */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] -z-20"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="120" stroke="#0A2A5A" strokeWidth="2" strokeOpacity="0.10"/>
        <circle cx="800" cy="150" r="100" stroke="#F4A100" strokeWidth="2" strokeOpacity="0.08"/>
        <circle cx="600" cy="500" r="180" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.06"/>
        <circle cx="1000" cy="600" r="80" stroke="#0A2A5A" strokeWidth="2" strokeOpacity="0.07"/>
        <circle cx="400" cy="650" r="60" stroke="#F4A100" strokeWidth="2" strokeOpacity="0.06"/>
      </svg>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-10 right-10 w-[250px] h-[250px] bg-[#F4A100]/15 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 left-5 w-[280px] h-[280px] bg-[#0A2A5A]/15 blur-[130px] rounded-full -z-10"></div>

      {/* Dotted Background Wave */}
      <div className="absolute top-1/2 left-0 w-full opacity-40 -z-10">
        <svg width="100%" height="100">
          <path
            d="M0 50 C 200 10, 400 90, 600 50 S 900 50, 1200 50"
            stroke="#0A2A5A"
            strokeWidth="2"
            strokeDasharray="6 10"
            fill="none"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-light text-[#1A1A1A]"
          style={{ fontFamily: "Italiana, serif" }}
        >
          Why Choose{" "}
          <span className="text-[#0A2A5A] font-normal">
            Shivam Mover and Packer
          </span>
        </h2>
        <p className="text-[#6B7280] text-lg mt-2 max-w-2xl mx-auto">
          Experience safe, secure & stress-free relocation backed by reliability, expertise, and modern tools.
        </p>
      </div>

      {/* Premium Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-7 text-center transition-all duration-500 relative group rounded-2xl bg-white shadow-md hover:shadow-xl"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-gradient-to-br from-[#0A2A5A]/20 to-[#F4A100]/20 rounded-2xl"></div>

            {/* Icon */}
            <div
              className="mx-auto w-16 h-16 flex items-center justify-center rounded-full 
                bg-gradient-to-br from-[#F4A100]/10 to-[#0A2A5A]/10
                text-[#0A2A5A] text-2xl shadow-md group-hover:shadow-[0_0_20px_#0A2A5A] 
                transition-all duration-300"
            >
              {item.icon}
            </div>

            <h3 className="mt-3 text-lg md:text-xl font-semibold text-[#1A1A1A]">
              {item.title}
            </h3>

            <p className="mt-2 text-[#6B7280] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
