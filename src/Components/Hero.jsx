import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaTruckMoving,
  FaWarehouse,
  FaBoxes,
  FaHandsHelping,
} from "react-icons/fa";

// Background Images (replace with correct files)
import h1 from "../assets/images/hero/h1.jpg";
import h2 from "../assets/images/hero/h2.jpg";
import h3 from "../assets/images/hero/h3.jpg";

// Shivam Mover and Packer color palette
const COLORS = {
  primary: "#0A2A5A",
  secondary: "#F4A100",
  background: "#F7F8FA",
  surface: "#FFFFFF",
  textHeading: "#1A1A1A",
  textBody: "#6B7280",
  accent: "#3B82F6",
};

const quotes = [
  "Trusted Packers & Movers Since 2010.",
  "Safe. Fast. Affordable Relocation.",
  "Your Move, Our Responsibility.",
  "Shifting Made Simple & Stress-Free.",
];

const servicesHighlight = [
  { icon: <FaTruckMoving />, label: "All India Relocation" },
  { icon: <FaBoxes />, label: "Professional Packing" },
  { icon: <FaWarehouse />, label: "Secure Warehousing" },
  { icon: <FaHandsHelping />, label: "100% Assistance" },
];

const images = [h1, h2, h3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto background change every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-28 relative w-full h-[90vh] md:h-[85vh] overflow-hidden font-sans">

      {/* Background Images with Fade + Zoom */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0000008c]" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 mt-10">

        {/* Typing Animation Heading */}
        <TypeAnimation
          sequence={quotes.flatMap((q) => [q, 2500])}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-[1.8rem] md:text-5xl font-bold tracking-wide drop-shadow-xl text-white"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Shivam Mover and Packer — Trusted, Affordable & Hassle-Free Relocation Services Across India.
        </motion.p>

        {/* CTA BUTTONS */}
        <div className="mt-10 md:mt-8 flex flex-wrap gap-4 justify-center">

          {/* Primary Button */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F4A100] text-white font-semibold py-3 px-10 rounded-full shadow-lg 
            hover:bg-[#ffba26] transition-all"
          >
            Learn More
          </motion.a>

          {/* Outlined Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-2 border-white text-white font-semibold py-3 px-10 rounded-full shadow-lg 
            hover:bg-white hover:text-[#0A2A5A] transition-all"
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Service Highlights */}
        <div className="mt-12 hidden md:flex flex-wrap justify-center gap-10 text-white/90">
          {servicesHighlight.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.25 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl text-[#F4A100]">{service.icon}</div>
              <p className="mt-2 text-sm md:text-base font-medium text-white">
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
