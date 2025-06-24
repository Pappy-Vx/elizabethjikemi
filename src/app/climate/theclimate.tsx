"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function TheClimate() {
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
          Systems matter. So does the air we breathe. This is where stewardship meets strategy.
          <br />
        </h1>
      </section>
      <section className="mt-8 md:mt-[8rem] px-8 pb-16 flex items-start">
        <div className="w-full mx-auto">
          <div className="w-full ">
            <span className="flex flex-col md:flex-row items-center">
              <span><img src="/theclimate.png" alt="family-stakeholder" className="w-20" /></span>
              <h3 className="text-lg md:text-2xl font-sourceSerif font-bold mb-4 text-center">
                The Climate Around Us: Systems, Stewardship and Sustainability
              </h3>
            </span>

            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-4">
              For me, climate is not just about rising temperatures or melting ice. It is also about the mood of our world, the atmosphere in our boardrooms, and the condition of our shared home. It appears in the systems we build, the policies we support, and the everyday choices we make about how we care for people and places.
            </p>
            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-4">
              In my line of work, climate is not always the main focus, but it is always present. Every decision carries weight, and every system leaves a trace. The real question is not whether we are making an impact, but what kind of impact we are making. Are we building toward healing and restoration, or are we reinforcing patterns that no longer serve us?
            </p>
            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-6">
              As a child, I learned stewardship in quiet and practical ways. We turned off lights, reused containers, and respected what we had. It was not called sustainability then. It was simply common sense. Looking back, I see that those daily habits were early lessons in responsibility, not because it was trendy, but because it was necessary.
            </p>
            <br />
            <p className="text-md md:text-lg font-sourceSerif mb-6">
              Today, I believe those of us working in strategy, research and technology have a responsibility to keep the bigger picture in mind. Not as a checklist to complete, but as a core principle to live by. We are not just designing tools. We are helping shape the future.
            </p>
            <br />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
