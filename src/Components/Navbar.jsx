import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTruckMoving,
  FaChevronDown,
  FaChevronUp,
  FaPeopleCarry,
  FaExchangeAlt,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaCodeBranch,
  FaYoutube,
  FaWarehouse,
} from "react-icons/fa";

import logo from "../assets/images/shivam-logo.png"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Branches", path: "/locations", icon: <FaCodeBranch /> },
    { name: "Gallery", path: "/gallery", icon: <FaBoxOpen /> },
    { name: "Contact us", path: "/contact", icon: <FaPhone /> },
  ];

  const services = [
  {
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: <FaPeopleCarry />,
  },
  {
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: <FaHome />,
  },
  {
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: <FaExchangeAlt />,
  }
  ,
  {
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: <FaBoxOpen />,
  },
  {
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: <FaTruckMoving />,
  },
  {
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: <FaCarSide />,
  },
  {
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: <FaMotorcycle />,
  },
  {
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: <FaDog />,
  },
  {
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: <FaDolly />,
  },
  {
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: <FaWarehouse />,
  },
];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔹 Top Header */}
      <div
        className={`bg-[#0A2A5A] text-white text-sm md:text-base overflow-hidden transition-all duration-500 ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="relative w-full overflow-hidden h-10 flex items-center">
          <div className="marquee-track flex whitespace-nowrap">
            {/* Duplicate text for infinite scroll */}
            {[1, 2].map((i) => (
              <p key={i} className="flex items-center gap-6 px-10">
                <FaTruckMoving className="text-[#F4A100]" />
                Welcome to{" "}
                <span className="text-[#F4A100] font-semibold">
                  Shivam Mover and Packer
                </span>
                <span className="text-white">|</span>
                <FaBoxOpen className="text-[#F4A100]" />
                Trusted, Safe & Professional Relocation Services Since 2010
                <span className="text-white">|</span>
                <FaPhone className="text-[#F4A100]" />
                Call Us: +91 77548 94878‬
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Shivam Mover and Packer" className="h-14" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-[#0A2A5A]">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative text-md">
                {link.name === "Services" ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 transition hover:text-[#F4A100]">
                      {link.icon}
                      {link.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>

                    {/* Dropdown */}
                    <ul className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-[#0A2A5A] hover:bg-[#F4A100]/10 hover:text-[#F4A100] transition"
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 transition hover:text-[#F4A100]"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-5 text-[#0A2A5A] text-lg">
            <a href="#" target="_blank" className="hover:text-[#F4A100]">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" className="hover:text-[#F4A100]">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="hover:text-[#F4A100]">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" className="hover:text-[#F4A100]">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-[#0A2A5A]" size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 rounded-l-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-[#0A2A5A] text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#0A2A5A]" size={22} />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="px-4 mt-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.name === "Services" ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-3 border-b text-[#0A2A5A] hover:text-[#F4A100] transition"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pl-6">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.path}
                            className="flex items-center gap-3 py-3 text-sm text-[#0A2A5A] hover:text-[#F4A100] transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center gap-2 py-3 border-b text-[#0A2A5A] hover:text-[#F4A100] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="px-4 mt-6 flex gap-5 text-[#0A2A5A] text-xl">
          <FaFacebookF className="hover:text-[#F4A100]" />
          <FaInstagram className="hover:text-[#F4A100]" />
          <FaTwitter className="hover:text-[#F4A100]" />
          <FaLinkedinIn className="hover:text-[#F4A100]" />
        </div>
      </div>

      {/* 🔹 Marquee Animation CSS */}
      <style>
        {`
          .marquee-track {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}
