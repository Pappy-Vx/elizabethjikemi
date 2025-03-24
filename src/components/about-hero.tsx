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
        <h1 className="font-sequelWide text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight uppercase mb-8">
          Competition
          <br />
          and creativity
          <br />
          runs hard in
          <br />
          his veins.
        </h1>
      </section>
      <section className="mt-8 md:mt-[8rem] px-8 pb-16 flex items-start">
        <div className="w-full mx-auto flex flex-col items-center md:flex-row md:justify-between ">
          <div className="w-full md:w-[55%]">
            <p className="text-xl font-sourceSerif  mb-4">
              Given that Elizabeth grew up in Nigeria rooting for sports legends
              like{" "}
              <br /> <span className="relative"><span className="text-link font-sequelWide text-sm cursor-pointer">
                Jay Jay Okochaa
              </span>
              <Image
                src="/jayjay.gif"
                alt="Image"
                className="hover-image"
                width={300}
                height={400}
                style={{ objectFit: "cover", pointerEvents: "none", }}
                priority
              />{" "}</span>
              
              and <span className="relative"> <span className="text-link font-sequelWide text-sm cursor-pointer">Thierry Henry</span>               <Image
                src="/henry.gif"
                alt="Image"
                className="hover-image"
                width={300}
                height={400}
                style={{ objectFit: "cover", pointerEvents: "none", }}
                priority
              />{" "}</span> ,
              that's no surprise.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Elizabeth brings that competitive and strategic spirit to her
              passion and work place , making her follow in footstep great
              legends in chess like,{" "}
              <br/> <span className="relative"><span className="text-link font-sequelWide text-sm cursor-pointer">Polgar Sisters</span>{" "}              <Image
                src="/polgar.jpg"
                alt="Image"
                className="hover-image"
                width={300}
                height={400}
                style={{ objectFit: "cover", pointerEvents: "none", }}
                priority
              />{" "}</span>
              list twice.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Case in point: Anthony's recent work for tech startup Motiv won a{" "}
              <span className="font-sequelWide text-sm">WEBBY AWARD</span> and
              helped generate the company's first thousand sales with almost
              zero advertising.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-6">
              In addition to helping clients like ESPN and Netflix rise to
              victory against their competitors, Anthony shares his passion with
              future design professionals, leading creative workshops at{" "}
              <span className="font-sequelWide text-sm">USC's</span> Annenberg
              Digital Lounge, serving on the board of AIGA Los Angeles and as an
              expert panelist for the annual GlobalTrend Marketing Awards.
            </p>
            <br />
            <Link
              href="/Elizabeth-Jikiemi-Resume.pdf"
              // download="Elizbeth-Jikiemi-Resume.pdf"
              target="_blank"
              // rel="noopener noreferrer"
              className="inline-block font-sequelWide text-sm uppercase underline mb-8 hover:opacity-80 transition-opacity"
            >
              Download Resume
            </Link>
          </div>

          <div className="flex items-center justify-center w-full md:w-[45%]">
            <div className=" mt-8">
              <div>
                <h3 className="font-tungsten text-lg tracking-[.7rem] mb-2 uppercase">
                  Education
                </h3>
                <p className="text-lg font-sequelWide text-white ">
                  Woodbury University
                </p>
                <p className="text-lg font-sequelWide text-white mb-6">
                  BFA Graphic Design, 2006
                </p>
              </div>

              <div>
                <h3 className="font-tungsten text-lg tracking-[.7rem] mb-2 uppercase">
                  Experience
                </h3>
                <p className="text-lg font-sequelWide text-white ">
                  Principal, Creative Director
                </p>
                <p className="text-lg font-sequelWide text-white mb-4">
                  AD VICTOREM, 2017-
                </p>

                <p className="text-lg font-sequelWide text-white ">
                  Creative Director
                </p>
                <p className="text-lg font-sequelWide text-white mb-4">
                  AZUBU.TV, 2015-2017
                </p>

                <p className="text-lg font-sequelWide text-white ">
                  Independent Creative Director
                </p>
                <p className="text-lg font-sequelWide text-white mb-4">
                  CONSENSUS INC., 2013-2015
                </p>

                <p className="text-lg font-sequelWide text-white ">
                  Creative Director
                </p>
                <p className="text-lg font-sequelWide text-white mb-4">
                  STARMEN DESIGN GROUP, 2008-2014
                </p>

                <p className="text-lg font-sequelWide text-white ">
                  Marketing Art Director
                </p>
                <p className="text-lg font-sequelWide text-white mb-4">
                  SOTHEBY'S REAL ESTATE, 2006-2008
                </p>
              </div>
              <h3 className="font-tungsten tracking-[.5rem] text-md uppercase mb-3 ">
                Get in touch
              </h3>
              <div className="flex flex-row items-center  gap-2 md:gap-4 mb-12  ">
                <Link
                  href="https://x.com/blackzeuss?s=21"
                  target="_blank"
                  className="font-sequelWide text-md md:text-xl  flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#05B2FF]">TW</span>{" "}
                  <span className="text-[#05B2FF]">.</span>
                </Link>
                <Link
                  href="https://pin.it/1jkDSfZzg"
                  target="_blank"
                  className="font-sequelWide text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#FF0000]">PI</span>{" "}
                  <span className="text-[#FF0000]">.</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jikiemielizabeth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  className="font-sequelWide text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#094290]">LN</span>{" "}
                  <span className="text-[#094290]">.</span>
                </Link>
                <Link
                  href="https://www.facebook.com/share/1MVeziBjer/?mibextid=wwXIfr"
                  target="_blank"
                  className="font-sequelWide text-md md:text-xl flex flex-row gap-0 justify-center items-center"
                >
                  <span className="hover:text-[#1F86FF]">FB</span>{" "}
                  <span className="text-[#1F86FF]">.</span>
                </Link>
                <Link
                  href="https://medium.com/@elizabethjk"
                  target="_blank"
                  className="font-sequelWide text-md md:text-xl flex flex-row gap-0 justify-center items-center"
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
