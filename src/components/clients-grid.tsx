"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  {
    name: "Motiv Ring",
    logo: "https://web-assets.same.dev/89360673/2062392507.webp",
    url: "https://advictorem.agency/case-studies/motiv-ring",
    bgColor: "#2E2E2E", // Dark Grey
  },
  {
    name: "AC Hotels",
    logo: "https://web-assets.same.dev/3993265427/2075004331.webp",
    url: "https://advictorem.agency/case-studies/ac-hotels",
    bgColor: "#D3D3D3", // Light Grey
  },
  {
    name: "Nestea",
    logo: "https://web-assets.same.dev/383566247/2761186924.webp",
    url: "https://advictorem.agency/case-studies/nestea",
    bgColor: "#00A9FF", // Aqua Blue
  },
  {
    name: "ESPN",
    logo: "https://web-assets.same.dev/1616286318/3692604017.webp",
    url: "https://advictorem.agency/case-studies/espn",
    bgColor: "#FF0000", // Red
  },
  {
    name: "LAFC",
    logo: "https://web-assets.same.dev/825918791/1060828862.webp",
    url: "https://advictorem.agency/case-studies/lafc",
    bgColor: "#000000", // Black
  },
  {
    name: "FOX",
    logo: "https://web-assets.same.dev/1518392135/3384299336.webp",
    url: "https://advictorem.agency/case-studies/fox-digital",
    bgColor: "#FFD700", // Yellow
  },
];

export default function ClientsGrid() {
  const [bgColor, setBgColor] = useState("#000000"); // Default background color

  return (
    <motion.section
      className="w-full min-h-screen py-10 px-[2rem] transition-all duration-700 max-w-6xl mx-auto"
      style={{ backgroundColor: bgColor }}
      id="clientsgrid"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Link key={index} href={client.url} target="_blank">
            <motion.div
              className="relative group h-[60vh] flex flex-col justify-center items-center overflow-hidden cursor-pointer transition-all duration-700 bg-[#FFFFFF1A]"
              onMouseEnter={() => setBgColor(client.bgColor)}
              onMouseLeave={() => setBgColor("#000000")} // Reset to default
            >
              {/* Client Name */}
              <p className="absolute top-40 text-white text-lg uppercase tracking-widest opacity-100 transition-opacity duration-500">
                {client.name}
              </p>

              {/* Image (Zooms in and fills box on hover) */}
              <motion.div
                className="absolute w-full h-full"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
