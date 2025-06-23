"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutFamily() {
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
      <section className="min-h-screen pt-32 px-8 pb-16  flex items-center md:items-end">
        <h1 className="font-roadRadio text-3xl sm:text-5xl md:text-5xl leading-tight uppercase mb-8">
          Where strategy begins and legacy is lived out in the everyday.
          <br />
        </h1>
      </section>
      <section className="mt-8 md:mt-[8rem] px-8 pb-16 flex items-start">
        <div className="w-full mx-auto">
          <div className="w-full ">
            <span className="flex flex-col md:flex-row items-center">
                <span><img src="/babystep.png" alt="baby-step" className="w-20" /></span>
                <h3 className="text-lg md:text-2xl font-sourceSerif font-bold mb-4">
              Where It All Began
            </h3>
            </span>
            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-4">
              I was raised in Nigeria, where the sun shines with boldness and community pulses like a steady heartbeat. In my neighborhood, values were not just taught through words but demonstrated in everyday actions. Aunties offered advice with passion, neighbors greeted one another like family, and respect was sacred in both speech and silence. Accountability wasn’t a solo act; it belonged to everyone. That kind of environment shaped my leadership more than any textbook ever could. It taught me to lead with empathy, to plan with people at the center, and to always make space for others at the table.
            </p>
            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-4">
             My love for systems started in the most surprising place: the church bulletin board. Week after week, I watched those humble grids of choir schedules and attendance sheets keep everything moving, even when the microphone failed or the power cut out. It was my first glimpse into the idea that systems are not cold or rigid. They are human in every way. They carry our stories, keep us connected, and help communities thrive.
            </p>
            <br />

            <p className="text-md md:text-lg font-sourceSerif mb-6">
              At age twelve, I was given the task of tracking food contributions for a major church event. What started as simple note-taking quickly became a full-blown logistics rescue mission. I noticed where supplies were falling short and spoke up about it. That experience taught me something I still believe today: good systems are rooted in care. They help us notice who is missing, what is being forgotten, and where support is needed most. It’s a mindset I bring into every room, every spreadsheet, and every strategy session I lead.
            </p>
            <br />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
