"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ResearchInfo() {
  const [bgColor, setBgColor] = useState("bg-transparent text-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = window.innerHeight * 0.1; // When to start changing color

      if (scrollY > transitionPoint) {
        setBgColor("bg-[#000000CC] text-white"); // ✅ Now text turns white!
      } else {
        setBgColor("bg-transparent text-[#ffffff]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-700 ease-in-out ${bgColor} relative z-50`}
    >
      <section className="min-h-screen pt-32 px-8 pb-16  flex items-center md:items-end">
        <h1 className="font-roadRadio text-3xl sm:text-5xl md:text-5xl leading-tight uppercase mb-8">
          PROBLEM STATEMENT FOR MY DOCTORATE RESEARCH
        </h1>
      </section>
      <section className="mt-8 md:mt-[8rem] px-8 pb-16 flex items-start">
        <div className="w-full mx-auto">
          <div className="w-full ">
            <h3 className="text-2xl font-sourceSerif font-bold mb-4">
              
            </h3>
            <br />
            <p className="text-lg font-sourceSerif mb-4">
              Nonprofits in Africa face constant pressure to prove their impact, stay transparent with donors, and manage operations efficiently, all while dealing with tight budgets, small teams, and limited access to the right tools. Many of the digital solutions out there are either too expensive, too complex, or don’t take local realities into account.
            </p>
            <br />
            <p className="text-lg font-sourceSerif mb-4">
              Donors often want to see exactly how their contributions are being used, but most nonprofits don’t have the systems in place to show this in real time. On the other side, teams are overwhelmed with managing customer care, staying consistent on social media, and analyzing data to improve engagement. The few AI tools available are rarely built with privacy or affordability in mind, especially for organizations working in African contexts.
            </p>
            <br />

            <p className="text-lg font-sourceSerif mb-6">
              I’m exploring how blockchain can help with transparent donation tracking and how AI tools can support customer care and communication, without compromising privacy or requiring huge budgets. If these are problems you're also trying to figure out, you’re welcome to follow the research as it develops.

            </p>
            <br />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
