"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ProblemStat() {
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
            className={`min-h-screen transition-colors duration-700 ease-in-out ${bgColor} relative z-50`}
        >
            <section className="min-h-screen pt-32 px-8 pb-16  flex items-center md:items-end max-w-6xl">
                <h1 className="font-roadRadio text-3xl sm:text-5xl md:text-5xl leading-tight uppercase mb-8">
                    PROBLEM STATEMENT FOR MY DOCTORATE RESEARCH
                    <br />
                </h1>
            </section>
            {/* Image & Text Side-by-Side Section */}
            <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="/aiblock.avif"
                            alt="Ai-blockchain"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-6">
                               Exploring Blockchain and AI Integration for Operational Efficiency, Transparency, and Donor Engagement in African Nonprofits
                            </h3>

                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                Nonprofits in Africa face constant pressure to prove their impact, stay transparent with donors, and manage operations efficiently, all while dealing with tight budgets, small teams, and limited access to the right tools. Many of the digital solutions out there are either too expensive, too complex, or don’t take local realities into account.
                            </p>

                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                Donors often want to see exactly how their contributions are being used, but most nonprofits don’t have the systems in place to show this in real time. On the other side, teams are overwhelmed with managing customer care, staying consistent on social media, and analyzing data to improve engagement. The few AI tools available are rarely built with privacy or affordability in mind, especially for organizations working in African contexts.
                            </p>
                            <p className="text-md md:text-xl font-roadRadio mb-6">
                                I’m exploring how blockchain can help with transparent donation tracking and how AI tools can support customer care and communication, without compromising privacy or requiring huge budgets. If these are problems you're also trying to figure out, you’re welcome to follow the research as it develops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
