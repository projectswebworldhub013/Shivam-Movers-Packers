// src/components/WhoWeAre.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
  FaPeopleCarry,
  FaHome,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
} from "react-icons/fa";

import img1 from "../assets/images/s1.jpg";
import img2 from "../assets/images/s2.jpg";
import img3 from "../assets/images/s3.jpg";
import img4 from "../assets/images/s4.jpg";
import img5 from "../assets/images/s5.jpg";
import img6 from "../assets/images/s6.jpg";

// BRAND COLOR SCHEME
const COLORS = {
  primary: "#0A2A5A", // Navy Blue
  secondary: "#F4A100", // Orange
  background: "#F7F8FA",
  surface: "#FFFFFF",
  heading: "#1A1A1A",
  body: "#6B7280",
};

// UPDATED SERVICE DATA
const services = [
  {
    title: "Packers & Movers Service",
    description:
      "Professional packing and safe moving handled by trained experts.",
    image: img1,
    link: "/services/packers-and-movers",
    icon: <FaPeopleCarry />,
  },
  {
    title: "Home Shifting Service",
    description:
      "Hassle-free and secure shifting for all household goods.",
    image: img2,
    link: "/services/home-shifting",
    icon: <FaHome />,
  },
  {
    title: "Office Relocation Service",
    description:
      "Smooth office shifting with minimal downtime and full safety.",
    image: img4,
    link: "/services/office-relocation",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Household Item Shifting",
    description:
      "Safe transport of furniture, electronics & fragile items.",
    image: img5,
    link: "/services/household-shifting",
    icon: <FaBoxOpen />,
  },
  {
    title: "Intercity Relocation",
    description:
      "Fast and reliable long-distance moving with full protection.",
    image: img6,
    link: "/services/intercity-relocation",
    icon: <FaTruckMoving />,
  },
  {
    title: "Car Transport Service",
    description:
      "Move your car anywhere with GPS-tracked, secure carriers.",
    image: img3,
    link: "/services/car-transport",
    icon: <FaCarSide />,
  },
];

const WhoWeAre = () => {
  return (
    <>
      {/* ================================
          ⭐ AUTO-SLIDING SERVICES SECTION
      ================================= */}
      <section
        className="relative py-10 px-6 md:px-16 overflow-hidden"
        style={{ background: COLORS.background }}
      >
        {/* BG Orbs */}
        <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-[#0A2A5A]/10 blur-[140px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#F4A100]/10 blur-[140px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14">
            <div>
              <p
                className="uppercase tracking-widest text-sm font-semibold mb-1"
                style={{ color: COLORS.secondary }}
              >
                Who We Are
              </p>

              <h2
                style={{ fontFamily: "Italiana, serif", color: COLORS.heading }}
                className="text-4xl md:text-5xl font-light leading-tight"
              >
                Shivam Mover & Packer
              </h2>

              <p
                className="mt-3 max-w-xl text-base leading-relaxed"
                style={{ color: COLORS.body }}
              >
                We provide secure, fast, and reliable packing and moving
                solutions handled by trained professionals for a stress-free
                moving experience.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-6 md:mt-0 px-7 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-all"
              style={{ background: COLORS.secondary, color: "white" }}
            >
              Explore More →
            </Link>
          </div>

          {/* SLIDER WRAPPER */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-slideSlow w-max">
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[320px] rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  style={{
                    background: COLORS.surface,
                    borderColor: "#E5E7EB",
                  }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-60 object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>

                  <div className="p-5">
                    <h3
                      style={{
                        fontFamily: "Italiana, serif",
                        color: COLORS.heading,
                      }}
                      className="text-xl font-light mb-1"
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-2"
                      style={{ color: COLORS.body }}
                    >
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: COLORS.secondary }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDER ANIMATION */}
      <style>
        {`
          @keyframes slideSlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slideSlow {
            animation: slideSlow 40s linear infinite;
          }
        `}
      </style>

      {/* ================================
          ⭐ QUOTE FORM SECTION
      ================================= */}
      <section className="py-5 px-6 md:px-20 bg-white relative overflow-hidden">
        <div className="text-center mb-6">
          <h2
            style={{
              fontFamily: "Italiana, serif",
              color: COLORS.primary,
            }}
            className="text-4xl md:text-5xl font-light uppercase"
          >
            Get Your Free Moving Quote
          </h2>
          <p
            className="italic text-base mt-1"
            style={{ color: COLORS.body }}
          >
            “Fast, Safe & Hassle-Free Moving — Every Time.”
          </p>
        </div>

        <form
          action="https://formsubmit.co/info@shivammoversandpackers.co.in"
          method="POST"
          className="max-w-5xl mx-auto p-8 rounded-3xl shadow-xl border"
          style={{ background: COLORS.background, borderColor: "#E5E7EB" }}
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              {
                icon: <FaUser />,
                name: "name",
                placeholder: "Full Name",
              },
              {
                icon: <FaEnvelope />,
                name: "email",
                placeholder: "Email Address",
              },
              {
                icon: <FaPhone />,
                name: "phone",
                placeholder: "Mobile Number",
              },
              {
                icon: <FaMapMarkerAlt />,
                name: "postalCode",
                placeholder: "Postal Code",
              },
            ].map((field, i) => (
              <div
                key={i}
                className="flex items-center bg-white border rounded-xl px-4 h-[50px] shadow-sm"
                style={{ borderColor: "#D1D5DB" }}
              >
                <span className="mr-3" style={{ color: COLORS.secondary }}>
                  {field.icon}
                </span>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent outline-none text-sm"
                  required
                />
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { placeholder: "From", icon: <FaMapMarkerAlt />, name: "movingFrom" },
              { placeholder: "To", icon: <FaMapMarkerAlt />, name: "movingTo" },
            ].map((field, i) => (
              <div
                key={i}
                className="flex items-center bg-white border rounded-xl px-4 h-[50px] shadow-sm"
                style={{ borderColor: "#D1D5DB" }}
              >
                <span className="mr-3" style={{ color: COLORS.secondary }}>
                  {field.icon}
                </span>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent outline-none text-sm"
                  required
                />
              </div>
            ))}

            {/* Service Dropdown */}
            <div
              className="flex items-center bg-white border rounded-xl px-4 h-[50px] shadow-sm"
              style={{ borderColor: "#D1D5DB" }}
            >
              <FaTruck className="mr-3" style={{ color: COLORS.secondary }} />
              <select
                name="service"
                className="w-full bg-transparent outline-none text-sm"
                required
              >
                <option value="">Select Service</option>
                <option value="Packers & Movers">Packers & Movers</option>
                <option value="Home Shifting">Home Shifting</option>
                <option value="Office Relocation">Office Relocation</option>
                <option value="Transport">Transport</option>
              </select>
            </div>

            <button
              type="submit"
              className="h-[50px] w-full text-white rounded-xl text-sm font-semibold shadow-md hover:scale-[1.02] transition-all"
              style={{ background: COLORS.primary }}
            >
              Submit
            </button>
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request - Shivam Mover & Packer"
          />
          <input
            type="hidden"
            name="_next"
            value="https://shivammoversandpackers.co.in/"
          />
        </form>
      </section>
    </>
  );
};

export default WhoWeAre;
