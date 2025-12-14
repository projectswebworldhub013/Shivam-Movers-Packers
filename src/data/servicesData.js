// src/data/servicesData.js

import {
  FaPeopleCarry,
  FaHome,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaWarehouse,
} from "react-icons/fa";

import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";
import s7 from "../assets/images/services/s7.jpg";
import s8 from "../assets/images/services/s8.jpg";
import s9 from "../assets/images/services/s9.jpg";
import s10 from "../assets/images/services/s10.jpg";

const servicesData = [
  {
    id: 1,
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: FaPeopleCarry,
    image: s1,
    description:
      "Shivam Mover and Packer offers reliable packers and movers services designed to make relocation smooth, secure, and stress-free. From careful packing to safe transportation, every step is handled with professionalism.",
    features: [
      "High-quality packing materials",
      "Trained and experienced staff",
      "Safe loading and unloading",
      "On-time and damage-free delivery",
    ],
  },

  {
    id: 2,
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: FaHome,
    image: s2,
    description:
      "Our home shifting service ensures your household relocation is managed with complete care and efficiency. We treat every item as valuable and ensure safe delivery to your new home.",
    features: [
      "End-to-end home relocation",
      "Special handling for fragile items",
      "Door-to-door service",
      "Complete safety assurance",
    ],
  },

  {
    id: 3,
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: FaExchangeAlt,
    image: s3,
    description:
      "Shivam Mover and Packer provides professional office relocation services with minimal downtime. We ensure systematic packing, organized transport, and smooth setup at your new office location.",
    features: [
      "Planned and time-bound relocation",
      "IT equipment & furniture handling",
      "Confidential file safety",
      "Corporate-grade service standards",
    ],
  },

  {
    id: 4,
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: FaBoxOpen,
    image: s4,
    description:
      "Our household item shifting service focuses on safe movement of furniture, appliances, and personal belongings using proper packing and handling techniques.",
    features: [
      "Careful packing of household goods",
      "Furniture dismantling & reassembly",
      "Scratch-free handling",
      "Customized shifting solutions",
    ],
  },

  {
    id: 5,
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: FaTruckMoving,
    image: s5,
    description:
      "We specialize in intercity relocation services, ensuring your belongings reach their destination safely and on schedule, no matter the distance.",
    features: [
      "Long-distance relocation expertise",
      "Well-maintained transport vehicles",
      "Secure packaging for transit",
      "Timely and tracked delivery",
    ],
  },

  {
    id: 6,
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: FaCarSide,
    image: s6,
    description:
      "Shivam Mover and Packer provides safe and insured car transport services using specialized carriers to ensure your vehicle reaches its destination without damage.",
    features: [
      "Door-to-door vehicle pickup & delivery",
      "Open & enclosed carrier options",
      "Pre & post transport inspection",
      "Insurance coverage available",
    ],
  },

  {
    id: 7,
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: FaMotorcycle,
    image: s7,
    description:
      "Our bike transport service ensures safe relocation of two-wheelers with professional packaging and secure loading methods.",
    features: [
      "Scratch-free bike packaging",
      "Affordable pricing",
      "Secure loading & unloading",
      "Timely delivery assurance",
    ],
  },

  {
    id: 8,
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: FaDog,
    image: s8,
    description:
      "We understand pets are family. Our pet relocation service ensures comfortable, safe, and stress-free transportation with proper care and supervision.",
    features: [
      "Pet-friendly travel arrangements",
      "Safe & ventilated carriers",
      "Trained handlers",
      "Complete relocation assistance",
    ],
  },

  {
    id: 9,
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: FaDolly,
    image: s9,
    description:
      "Our loading and unloading services ensure safe handling of goods using proper tools, techniques, and experienced manpower.",
    features: [
      "Skilled manual & equipment handling",
      "Proper stacking methods",
      "Damage prevention techniques",
      "Fast and efficient execution",
    ],
  },

  {
    id: 10,
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: FaWarehouse,
    image: s10,
    description:
      "Shivam Mover and Packer offers secure warehouse and storage solutions for short-term and long-term needs with complete protection of your goods.",
    features: [
      "Clean & secure storage facilities",
      "Short & long-term storage options",
      "24/7 security monitoring",
      "Easy access & inventory management",
    ],
  },
];

export default servicesData;
