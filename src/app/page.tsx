"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import ClientsGrid from "@/components/clients-grid";
import CurrentlySection from "@/components/currently-section";
import Header from "@/components/header";
export default function Home() {
  const [bgColor, setBgColor] = useState("bg-white text-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = window.innerHeight * 0.1; // When to start changing color

      if (scrollY > transitionPoint) {
        setBgColor("bg-black text-white");
      } else {
        setBgColor("bg-white text-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-700 ease-in-out ${bgColor}`}
    >
      <Header />
      <Hero />
      <ClientsGrid />
      <CurrentlySection />
    </motion.div>
  );
}
