// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaPeopleCarry,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaWarehouse,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";
import VisitorCounter from "./VIsitorCounter";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// SERVICES DATA
const servicesData = [
  { name: "Packers & Movers Service", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Home Shifting Service", path: "/services/home-shifting", icon: FaHome },
  { name: "Office Relocation Service", path: "/services/office-relocation", icon: FaExchangeAlt },
  { name: "Household Item Shifting", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Intercity Relocation", path: "/services/intercity-relocation", icon: FaTruckMoving },
  { name: "Car Transport Service", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport Service", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Relocation Service", path: "/services/pet-relocation", icon: FaDog },
  { name: "Loading & Unloading Service", path: "/services/loading-unloading", icon: FaDolly },
  { name: "Warehouse & Storage Service", path: "/services/warehouse-storage", icon: FaWarehouse },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-[#F7F8FA] pt-20 pb-10 px-6 md:px-16 border-t border-[#E5E7EB]"
    >
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#6B7280]">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-[italiana] text-[#0A2A5A]">
            Shivam Packers & Movers
          </h4>
          <p className="leading-relaxed">
            Shivam Packers & Movers is a professional relocation company
            committed to delivering safe, reliable, and efficient packing,
            moving, transportation, and storage solutions. Our trained team and
            modern methods ensure a smooth and stress-free moving experience.
          </p>

          {/* WEBMAIL */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4A100] text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-[#FBBF24] transition"
          >
            Access Webmail
          </a>

          <div className="flex">
            <Translator />
            <div className="w-32"></div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#0A2A5A]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
              ["Certificates", "/certificates"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#F4A100] transition"
                >
                  <FaArrowRight className="text-[#F4A100]" /> {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-2xl font-[italiana] text-[#0A2A5A]">
            Email
          </h4>
          <ul className="mt-2 space-y-2">
            {[
              "shivammoverandpacker@gmail.com",
              "info@shivammoversandpackers.co.in",
            ].map((email, idx) => (
              <li key={idx}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-[#F4A100]"
                >
                  <FaEnvelope className="text-[#F4A100]" />
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#0A2A5A]">
            Our Services
          </h4>
          <ul className="space-y-2">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-[#F4A100] transition"
                >
                  <Icon className="text-[#F4A100]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#0A2A5A]">
            Contact Info
          </h4>

          <address className="not-italic leading-relaxed mb-4">
            Plot No. C-171, Ground Floor, Opposite Dental Study Circle, C Block,
            Near SKS & Partners, Encore Exports, Greater Kailash-I,
            New Delhi – 110048
          </address>

          <p className="mb-2 text-[#1A1A1A] font-medium">
            <FaPhoneAlt className="inline mr-2 text-[#F4A100]" />
            +91 77548 94878
          </p>
          <p className="mb-4 text-[#1A1A1A] font-medium">
            <FaPhoneAlt className="inline mr-2 text-[#F4A100]" />
            +91 84296 10820
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 text-lg text-[#1C1F23]">
            <a href="#" className="hover:text-[#F4A100]"><FaYoutube /></a>
            <a href="#" className="hover:text-[#F4A100]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#F4A100]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#F4A100]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#F4A100]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-xs text-[#6B7280] border-t border-[#E5E7EB] pt-6 space-y-2">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Shivam Packers & Movers. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0A2A5A] hover:text-[#F4A100]"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
