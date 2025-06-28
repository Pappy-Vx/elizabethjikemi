"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function TheCalling() {
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
                    Systems that serve. Stories that stick.
                    <br />
                </h1>
            </section>
            {/* Image & Text Side-by-Side Section */}
            <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="/call.avif"
                            alt="the-call"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-6">
                                The Calling: When Impact Became Personal
                            </h3>

                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                I didn’t stumble into nonprofit work. It found me. Called me. And didn’t let go.
                            </p>

                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                It began the day I saw not one or two, but at least seven girls just like Aisha. Girls who were lost, overlooked, and forgotten. One of them once told me she liked pizza and would sometimes hang around a place she called "Fiza." I never forgot the way she said it.
                            </p>

                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                Someone mentioned that the Sultan of the Hausa community in Lagos might be able to help. I went to his palace, hoping to find someone who cared. I was dismissed instead. As I walked away, something shifted inside me.
                            </p>
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                I thought about the millions of people in Nigeria who are slipping through the cracks. Cracks so wide it feels like no one even sees them. I knew then that I wanted to be one of the people who chooses to care. Not in theory, but with everything I had.
                            </p>
                            <p className="text-md md:text-xl font-roadRadio mb-6">
                                Impact, to me, isn’t just about programs or plans. It is about choosing love when it’s easier to look away. Sometimes it is about carrying anger and turning it into action. But always, it is about refusing to be indifferent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
