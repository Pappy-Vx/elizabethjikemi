"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="logo">
        <Link href="/" className="hover:opacity-80 transition duration-300">
          <svg
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23.9824V0.0175781H8.63514L17.2703 11.6992V0.0175781H25.9054V23.9824H17.2703L8.63514 12.3008V23.9824H0Z"
              fill={isScrolled ? "white" : "black"} // Change color dynamically
            />
            <path
              d="M27.3649 23.9824V0.0175781H36.0001V23.9824H27.3649Z"
              fill={isScrolled ? "white" : "black"} // Change color dynamically
            />
          </svg>
        </Link>
      </div>
      <nav>
        <Link
          href="/about"
          className={`font-sequelWide tracking-widest uppercase text-sm hover:opacity-80 transition duration-300 ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
