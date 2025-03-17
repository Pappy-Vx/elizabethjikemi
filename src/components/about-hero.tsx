"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
              Given that Anthony grew up in Chicago rooting for sports legends
              like <span className="font-sequelWide text-sm">MICHAEL JORDAN</span> and{" "}
              <span className="font-sequelWide text-sm">WALTER PAYTON</span>, that's no surprise.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Anthony brings that competitive spirit to his branding and design
              work, leading to shelves full of awards, and being listed in Web
              Designer Magazine's <span className="font-sequelWide text-sm">HOT 100</span> list twice.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-4">
              Case in point: Anthony's recent work for tech startup Motiv won a{" "}
              <span className="font-sequelWide text-sm">WEBBY AWARD</span> and helped generate the company's
              first thousand sales with almost zero advertising.
            </p>
            <br />
            <p className="text-xl font-sourceSerif mb-6">
              In addition to helping clients like ESPN and Netflix rise to
              victory against their competitors, Anthony shares his passion with
              future design professionals, leading creative workshops at{" "}
              <span className="font-sequelWide text-sm">USC's</span> Annenberg Digital Lounge, serving on the
              board of AIGA Los Angeles and as an expert panelist for the annual
              GlobalTrend Marketing Awards.
            </p>
            <br />
            <Link
              href="/static/anthony-wiktor-resume-2019-719528748d2e5155aaf7ac8516f6c417.pdf"
              target="_blank"
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
                <p className="text-lg font-sequelWide text-white mb-4">AD VICTOREM, 2017-</p>

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
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
