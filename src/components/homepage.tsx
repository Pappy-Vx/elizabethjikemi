"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const clients = [
  { name: "Motiv Ring", logo: "https://web-assets.same.dev/89360673/2062392507.webp", url: "https://advictorem.agency/case-studies/motiv-ring", bgColor: "#2E2E2E" },
  { name: "AC Hotels", logo: "https://web-assets.same.dev/3993265427/2075004331.webp", url: "https://advictorem.agency/case-studies/ac-hotels", bgColor: "#D3D3D3" },
  { name: "Nestea", logo: "https://web-assets.same.dev/383566247/2761186924.webp", url: "https://advictorem.agency/case-studies/nestea", bgColor: "#00A9FF" },
  { name: "ESPN", logo: "https://web-assets.same.dev/1616286318/3692604017.webp", url: "https://advictorem.agency/case-studies/espn", bgColor: "#FF0000" },
  { name: "LAFC", logo: "https://web-assets.same.dev/825918791/1060828862.webp", url: "https://advictorem.agency/case-studies/lafc", bgColor: "#000000" },
  { name: "FOX", logo: "https://web-assets.same.dev/1518392135/3384299336.webp", url: "https://advictorem.agency/case-studies/fox-digital", bgColor: "#FFD700" },
];

export default function Homepage() {
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Default: White Background

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = window.innerHeight * 0.1;

      if (scrollY > transitionPoint) {
        setBgColor("#000000"); // Change to black on scroll
      } else {
        setBgColor("#FFFFFF"); // Revert to white when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToClientsGrid = () => {
    const section = document.getElementById("clientsgrid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="min-h-screen transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: bgColor, color: bgColor === "#000000" ? "white" : "black" }} // Adjust text color based on background
    >
      {/* Hero Section */}
      <section className="min-h-screen pt-32 px-8 max-w-6xl mx-auto flex flex-col justify-center">
        <h1 className="font-sequelWide text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight uppercase">
          Shifting brands from<br />
          giving up to moving<br />
          forward.
        </h1>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={scrollToClientsGrid}
            title="Scroll down"
            className="loader h-6 md:h-14 w-[.5px] cursor-pointer"
          ></button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full min-h-screen py-10 px-[2rem] transition-all duration-700" id="clientsgrid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Link key={index} href={client.url} target="_blank">
              <motion.div
                className="relative group h-[60vh] flex flex-col justify-center items-center overflow-hidden cursor-pointer transition-all duration-700 bg-[#FFFFFF1A]"
                onMouseEnter={() => setBgColor(client.bgColor)}
                onMouseLeave={() => setBgColor(window.scrollY > window.innerHeight * 0.1 ? "#000000" : "#FFFFFF")}
              >
                {/* Client Name */}
                <p className="absolute top-40 text-white text-lg uppercase tracking-widest opacity-100 transition-opacity duration-500">
                  {client.name}
                </p>

                {/* Image (Zooms in on hover) */}
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
      </section>
      <section className="w-full  py-24 md:py-32 lg:py-40 relative">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="font-sequelWide text-2xl md:text-7xl lg:text-8xl uppercase mb-12 md:mb-24">Currently</h2>

        <div className="max-w-2xl">
          <h3 className="font-sequelWide text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
            Helping<br />
            Brands Win.
          </h3>

          <div className="flex justify-end mb-16">
            <Link
              href="https://advictorem.agency"
              target="_blank"
              className="inline-block font-sequelWide tracking-wider text-sm uppercase hover:opacity-80 transition-opacity"
            >
              Visit Ad Victorem
            </Link>
          </div>
        </div>

        {/* Video/background element would be here in the original */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-black to-zinc-900 opacity-30"></div>
      </div>
    </section>
    </motion.div>
  );
}
