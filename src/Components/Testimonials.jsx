import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Shivam Mover and Packer handled my household shifting with great care. Everything was packed professionally and delivered safely.",
  },
  {
    name: "Neha Verma",
    text: "The team was polite, punctual, and very well organized. My relocation experience was smooth and completely stress-free.",
  },
  {
    name: "Amit Sharma",
    text: "From packing to final delivery, the service was excellent. I truly appreciate their attention to detail and timely execution.",
  },
  {
    name: "Pooja Singh",
    text: "Reliable and trustworthy movers. All my belongings reached safely without any damage. Highly recommended.",
  },
  {
    name: "Rohit Malhotra",
    text: "Professional staff and transparent communication throughout the move. Shivam Mover and Packer made relocation easy.",
  },
  {
    name: "Anjali Gupta",
    text: "Very satisfied with the service. The team handled everything carefully and delivered on time as promised.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative bg-[#F7F8FA] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1A1A1A] mb-4">
            Trusted by Happy Clients of{" "}
            <span className="text-[#0A2A5A]">Shivam Mover and Packer</span>
          </h2>

          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
            Real experiences from customers who trusted us with their valuable
            belongings.
          </p>
        </motion.div>

        {/* Slider + Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-[#0A2A5A]/10 hover:bg-[#0A2A5A] hover:text-white transition-all z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-[#0A2A5A]/10 hover:bg-[#0A2A5A] hover:text-white transition-all z-10"
          >
            <FaChevronRight />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, i) => (
              <div key={i} className="px-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#0A2A5A]/10 hover:shadow-xl transition-all duration-300"
                >
                  {/* Accent Stripe */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F4A100] to-[#3B82F6] rounded-l-2xl" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3 text-[#F4A100]">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#0A2A5A] text-white flex items-center justify-center text-2xl">
                      <FaUserCircle />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-[#1A1A1A]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6B7280]">
                        Verified Customer
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/contact">
            <button className="px-10 py-3 rounded-full border-2 border-[#0A2A5A] text-[#0A2A5A] font-semibold hover:bg-[#0A2A5A] hover:text-white transition-all duration-300 shadow-lg">
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
