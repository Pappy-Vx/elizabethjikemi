"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
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
      <section className="min-h-screen pt-32 px-8 pb-16  flex items-end">
        <h1 className="font-roadRadio text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight uppercase mb-8">
          Competition and 
          <br />
          creativity runs hard 
          <br />
          in his veins.
        </h1>
      </section>
      <section className="mt-8 md:mt-[8rem] px-8 pb-16 flex items-start">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full ">
            <p className="text-xl font-sourceSerif  mb-4">
              Given that Elizabeth grew up in Nigeria rooting for sports legends
              like <br />{" "}
              <span className="relative">
                <span className="text-link font-roadRadio text-sm cursor-pointer">
                  Jay Jay Okocha
                </span>
                <Image
                  src="/jayjay.gif"
                  alt="Image"
                  className="hover-image"
                  width={300}
                  height={400}
                  style={{ objectFit: "cover", pointerEvents: "none" }}
                  priority
                />{" "}
              </span>
              and{" "}
              <span className="relative">
                {" "}
                <span className="text-link font-roadRadio text-sm cursor-pointer">
                  Thierry Henry
                </span>{" "}
                <Image
                  src="/henry.gif"
                  alt="Image"
                  className="hover-image"
                  width={300}
                  height={400}
                  style={{ objectFit: "cover", pointerEvents: "none" }}
                  priority
                />{" "}
              </span>{" "}
              , that's no surprise.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Elizabeth brings that competitive and strategic spirit to her
              passion and work place , making her follow in footstep great
              legends in chess like, <br />{" "}
              <span className="relative">
                <span className="text-link font-roadRadio text-sm cursor-pointer">
                  Polgar Sisters
                </span>{" "}
                <Image
                  src="/polgar.jpg"
                  alt="Image"
                  className="hover-image"
                  width={300}
                  height={400}
                  style={{ objectFit: "cover", pointerEvents: "none" }}
                  priority
                />{" "}
              </span>
              list twice.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Elizabeth Jikiemi is a data and AI enthusiast dedicated to
              equipping nonprofits with technological tools to amplify their
              impact. With over a decade of experience in tech, finance, and
              social impact, she specializes in business intelligence, cloud
              security, and nonprofit fundraising strategies.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-6">
            Elizabeth’s journey began with a passion for data-driven decision-making, leading her to work across industries to bridge the gap between technology and philanthropy.
            </p>
            <p className="text-xl font-sourceSerif mb-6">
            Recognized as one of the <span className="font-roadRadio text-sm ">100 Heroines</span>  Changing the Nation (Nigeria at 100 Awards, 2014) and <span className="font-roadRadio text-sm ">Global Humanitarian of the Year</span>  (Women 4 Africa UK, 2015).
            </p>
            <p className="text-xl font-sourceSerif mb-6">
            Author of 'Successfully Telling Stories with Data' and a leader in nonprofit technology transformation.
            </p>
            <br />
            <Link
              href="/Elizabeth-Jikiemi-Resume.pdf"
              // download="Elizbeth-Jikiemi-Resume.pdf"
              target="_blank"
              // rel="noopener noreferrer"
              className="inline-block font-roadRadio text-sm uppercase underline mb-8 hover:opacity-80 transition-opacity"
            >
              Download Resume
            </Link>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className=" mt-8">
              <div>
                <h3 className="font-tungsten text-lg tracking-[.7rem] mb-2 uppercase">
                  Education
                </h3>
                <p className="text-lg font-roadRadio text-white ">
                  California Miramar University
                </p>
                <p className="text-lg font-roadRadio text-white mb-6">
                  Doctorate in Business, (2021 – Present)
                </p>
                <p className="text-lg font-roadRadio text-white ">
                  Harvard University
                </p>
                <p className="text-lg font-roadRadio text-white mb-6">
                  Graduate Certificate in Nonprofit Management, (2024 – Present)
                </p>
                <p className="text-lg font-roadRadio text-white ">
                  California Miramar University
                </p>
                <p className="text-lg font-roadRadio text-white mb-6">
                  MBA, (2017 – 2019)
                </p>
                <p className="text-lg font-roadRadio text-white ">
                  Olabisi Onabanjo University
                </p>
                <p className="text-lg font-roadRadio text-white mb-6">
                  Bachelor's Degree in History & Diplomatic Studies, (2004 –
                  2008).
                </p>
              </div>

              <div>
                <h3 className="font-tungsten text-lg tracking-[.7rem] mb-2 uppercase">
                  Experience
                </h3>
                <p className="text-lg font-roadRadio text-white ">
                Senior Technical Project Manager  
                </p>
                <p className="text-lg font-roadRadio text-white mb-4">
                Exponent Partners, (2024–Present)
                </p>

                <p className="text-lg font-roadRadio text-white ">
                Prospect Development Analyst
                </p>
                <p className="text-lg font-roadRadio text-white mb-4">
                Cross Catholic Nonprofit Organization, (2022–2024)
                </p>

                <p className="text-lg font-roadRadio text-white ">
                Business Analyst
                </p>
                <p className="text-lg font-roadRadio text-white mb-4">
                Pacific Care, (2019–2020)
                </p>

                <p className="text-lg font-roadRadio text-white ">
                Project IT & Finance Manager
                </p>
                <p className="text-lg font-roadRadio text-white mb-4">
                ZTE, (2014–2017).
                </p>
              </div>
              <h3 className="font-tungsten tracking-[.5rem] text-md uppercase mb-3 ">
                Reach out on
              </h3>
              <div className="flex flex-row items-center  gap-2 md:gap-4 mb-12  ">
                <Link
                  href="https://x.com/blackzeuss?s=21"
                  target="_blank"
                  className="font-roadRadio text-md md:text-xl  flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#05B2FF]">TW</span>{" "}
                  <span className="text-[#05B2FF]">.</span>
                </Link>
                <Link
                  href="https://pin.it/1jkDSfZzg"
                  target="_blank"
                  className="font-roadRadio text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#FF0000]">PI</span>{" "}
                  <span className="text-[#FF0000]">.</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jikiemielizabeth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  className="font-roadRadio text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#094290]">LN</span>{" "}
                  <span className="text-[#094290]">.</span>
                </Link>
                <Link
                  href="https://www.facebook.com/share/1MVeziBjer/?mibextid=wwXIfr"
                  target="_blank"
                  className="font-roadRadio text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#1F86FF]">FB</span>{" "}
                  <span className="text-[#1F86FF]">.</span>
                </Link>
                <Link
                  href="https://medium.com/@elizabethjk"
                  target="_blank"
                  className="font-roadRadio text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#00A257]">M</span>{" "}
                  <span className="text-[#00A257]">.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
