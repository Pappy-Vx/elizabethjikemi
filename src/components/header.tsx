"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = window.innerHeight * 0.1; // Start color change early

      setIsScrolled(scrollY > transitionPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 px-8 py-6 flex justify-between items-center bg-transparent transition-colors duration-700 z-[999] ${
        isScrolled ? "text-white" : "text-black"
      }`}
    >
      <div
        className="logo flex items-center space-x-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href="/"
          className="hover:opacity-80 transition duration-300 flex flex-row gap-2 items-center"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="713.000000pt"
            height="702.000000pt"
            viewBox="0 0 713.000000 702.000000"
            preserveAspectRatio="xMidYMid meet"
            className="h-10 w-10"
          >
            <g
              transform="translate(0.000000,702.000000) scale(0.100000,-0.100000)"
              stroke="none"
              fill={isScrolled ? "white" : "black"}
            >
              <path
                d="M20 5960 l0 -1060 2473 0 2472 0 1060 1060 1060 1060 -3533 0 -3532
0 0 -1060z"
              />
              <path
                d="M20 3490 l0 -1060 1123 0 1122 0 1060 1060 1060 1060 -2183 0 -2182
0 0 -1060z"
              />
              <path
                d="M4680 3355 l0 -1195 -492 0 c-271 0 -1318 5 -2326 11 -1008 6 -1835
10 -1837 7 -2 -2 -7 -491 -11 -1086 l-7 -1082 2459 0 2459 0 1098 1098 1097
1097 0 1173 0 1172 -1220 0 -1220 0 0 -1195z"
              />
            </g>
          </svg>
          <div className="overflow-hidden flex space-x-1">
            {/* "Elizabeth" fades in first */}
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-bold"
            >
              ELIZABETH
            </motion.span>

            {/* "Jikiemi" fades in slightly later */}
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
              className="font-bold"
            >
              JIKIEMI
            </motion.span>
          </div>
        </Link>
      </div>
      <nav>
        <Link
          href="/about"
          className={`font-tungsten font-bold tracking-[.5rem] uppercase text-md hover:opacity-80 transition duration-300 ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
