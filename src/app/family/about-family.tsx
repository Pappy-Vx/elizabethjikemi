"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutFamily() {
  const [bgColor, setBgColor] = useState("bg-transparent text-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = window.innerHeight * 0.1;

      setBgColor(
        scrollY > transitionPoint ? "bg-[#000000CC] text-white" : "bg-transparent text-black"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-700 ease-in-out ${bgColor} relative z-50`}
    >
      {/* Hero Text Section */}
      <section className="min-h-screen pt-32 px-8 pb-16 flex items-center md:items-end max-w-6xl mx-auto">
        <h1 className="font-roadRadio text-3xl sm:text-5xl md:text-5xl leading-tight uppercase mb-8">
          Where strategy begins and legacy is lived out in the everyday.
        </h1>
      </section>

      {/* Image & Text Side-by-Side Section */}
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/girlplant.jpg"
              alt="Elizabeth as a child planting"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-6">
                Where It All Began
              </h3>

              <p className="text-md md:text-xl font-sourceSerif mb-6">
                I was raised in Nigeria, where the sun shines with boldness and community pulses
                like a steady heartbeat. In my neighborhood, values were not just taught through
                words but demonstrated in everyday actions. Aunties offered advice with passion,
                neighbors greeted one another like family, and respect was sacred in both speech and
                silence. Accountability wasn’t a solo act; it belonged to everyone. That kind of
                environment shaped my leadership more than any textbook ever could.
              </p>

              <p className="text-md md:text-xl font-sourceSerif mb-6">
                My love for systems started in the most surprising place: the church bulletin board.
                Week after week, I watched those humble grids of choir schedules and attendance
                sheets keep everything moving, even when the microphone failed or the power cut
                out. It was my first glimpse into the idea that systems are not cold or rigid. They
                are human in every way. They carry our stories, keep us connected, and help
                communities thrive.At age twelve, I was given the task of tracking food contributions for a major
                church event. What started as simple note-taking quickly became a full-blown
                logistics rescue mission. I noticed where supplies were falling short and spoke up
                about it.
              </p>

              <p className="text-md md:text-xl font-roadRadio mb-6">
                That experience taught me something I still believe today: good systems
                are rooted in care. They help us notice who is missing, what is being forgotten, and
                where support is needed most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
