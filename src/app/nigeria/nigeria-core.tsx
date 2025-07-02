"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function NigeriaCore() {
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
          Where my story began. Where my strength is rooted.
          <br />
        </h1>
      </section>
      {/* Image & Text Side-by-Side Section */}
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/began.jpeg"
              alt="story-began"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-6">
                 Nigeria at the Core: Where the Story Began
              </h3>

              <p className="text-md md:text-xl font-sourceSerif mb-6">
                I was born in Lagos, Nigeria, which feels a lot like being born into the middle of a drum solo. The city is full of sound, movement, and heat. Even the traffic has rhythm. Some of my earliest memories include sitting on my mother’s lap in the back of a bustling restaurant, copying numbers from the ledgers she was updating. She had been a trained teacher, then became a Coca-Cola regional distributor, and later ran a restaurant. My father, once a boxer, worked as a mechanical engineer and later became a kindergarten school bus driver. His strength was quiet but steady. Together they raised nine of us, which meant that even simple things like brushing your teeth or finding your shoes often became a group activity.
              </p>

              <p className="text-md md:text-xl font-sourceSerif mb-6">
                Growing up in that kind of family taught me how to lead from the middle. It showed me how to listen beyond the words and how to negotiate from a place of love. Being Yoruba grounded me in something deep. I was raised on proverbs and prayers, both delivered with conviction. Faith had rhythm. Respect carried weight. Storytelling was more than entertainment. It was a tool and a way of shaping vision. Those cultural anchors shaped my view of the world long before I ever studied frameworks or designed systems.
              </p>

              <p className="text-md md:text-xl font-sourceSerif mb-6">
                The way I lead today, with strategy, intuition, and collaboration, is a direct reflection of that foundation. I lead the way I was raised — with care, with flexibility, and with a strong belief that people, no matter how chaotic the moment may seem, are always worth building with.
              </p>

              <p className="text-md md:text-xl font-roadRadio mb-6">
                 Today, I believe those of us working in strategy, research and technology have a responsibility to keep the bigger picture in mind. Not as a checklist to complete, but as a core principle to live by. We are not just designing tools. We are helping shape the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
