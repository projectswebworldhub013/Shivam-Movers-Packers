import React, { useState } from "react";
import {
  FaShieldAlt,
  FaClock,
  FaSmileBeam,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaPeopleCarry,
  FaStar,
  FaAngleDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg1.avif"; // ✅ background image

const features = [
  {
    title: "Safe & Secured Transportation",
    icon: FaShieldAlt,
    short: "Your belongings protected at every step.",
    description:
      "We follow strict safety standards using quality packing materials, careful loading techniques, and well-maintained vehicles to ensure your goods remain secure throughout the move.",
  },
  {
    title: "Committed On-Time Delivery",
    icon: FaClock,
    short: "Relocations planned with punctuality.",
    description:
      "Our structured process and experienced coordination help us deliver your belongings on schedule without unnecessary delays or disruptions.",
  },
  {
    title: "Wide Service Coverage",
    icon: FaMapMarkedAlt,
    short: "Flexible solutions for every type of move.",
    description:
      "Whether it’s a short-distance shift or a long-distance relocation, Shivam Movers & Packers manages moves efficiently with consistent service standards.",
  },
  {
    title: "Transparent & Honest Pricing",
    icon: FaMoneyCheckAlt,
    short: "No surprises, no hidden charges.",
    description:
      "We provide clear and detailed quotations so you understand the full cost of your move before we begin — ensuring complete transparency.",
  },
  {
    title: "Experienced Moving Professionals",
    icon: FaPeopleCarry,
    short: "Handled by trained experts.",
    description:
      "Our skilled team is trained to handle fragile items, heavy furniture, and valuable belongings with care, precision, and responsibility.",
  },
  {
    title: "Customer-Focused Service",
    icon: FaSmileBeam,
    short: "Built on trust and satisfaction.",
    description:
      "Customer satisfaction is at the heart of everything we do. Our consistent service quality has earned us long-term trust and repeat clients.",
  },
];

const WhyUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <FaStar className="text-[#F4A100] text-3xl mx-auto mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1A1A1A]">
            Why Choose{" "}
            <span className="text-[#0A2A5A]">
              Shivam Movers & Packers
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280]">
            A trusted relocation partner known for safety, reliability, and
            professional service — ensuring a smooth and stress-free moving
            experience every time.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#0A2A5A]/10 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-[#F7F8FA] border border-[#0A2A5A]/10">
                    <Icon className="text-[#0A2A5A] text-xl" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1A1A1A]">
                    {item.title}
                  </h3>
                </div>

                {/* Short Text */}
                <p className="text-sm text-[#6B7280]">
                  {item.short}
                </p>

                {/* Expand Icon */}
                <FaAngleDown
                  className={`mt-3 text-[#3B82F6] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

                {/* Expanded Description */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
