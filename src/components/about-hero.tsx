'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
    const [bgColor, setBgColor] = useState("bg-transparent text-black");
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const transitionPoint = window.innerHeight * 0.1; // When to start changing color
    
          if (scrollY > transitionPoint) {
            setBgColor("bg-[#000000CC] text-white"); // ✅ Now text turns white!
          } else {
            setBgColor("bg-transparent text-black");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <motion.div
        className={`h-[125vh]  transition-colors duration-700 ease-in-out ${bgColor} relative z-50`}
      >
        <section className="min-h-screen pt-32 px-8 pb-16  flex items-end">
             <h1 className="font-sequelWide text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight uppercase mb-8">
            Competition<br />
            and creativity<br />
            runs hard in<br />
            his veins.
          </h1>

        </section>
        </motion.div>
    )
}