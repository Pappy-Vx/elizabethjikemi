"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black text-white p-8 pt-16 z-[999] relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="font-tungsten tracking-[.7rem] text-lg uppercase mb-3 ">Get in touch</h3>
          <div className="flex flex-row items-center  gap-2 md:gap-4 mb-12  ">
            <Link
              href="https://twitter.com/creativeanthony"
              target="_blank"
              className="font-sequelWide text-xl md:text-4xl  flex flex-row gap-0 justify-center items-center"
            >
              <span className="hover:text-[#05B2FF]">TW</span>{" "}
              <span className="text-[#05B2FF]">.</span>
            </Link>
            <Link
              href="https://www.instagram.com/anthonydesigner/"
              target="_blank"
              className="font-sequelWide text-xl md:text-4xl flex flex-row gap-0 justify-center items-center"
            >
              <span className="hover:text-[#E112FC]">IG</span>{" "}
              <span className="text-[#E112FC]">.</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/anthonywiktor/"
              target="_blank"
              className="font-sequelWide text-xl md:text-4xl flex flex-row gap-0 justify-center items-center"
            >
              <span className="hover:text-[#094290]">LN</span>{" "}
              <span className="text-[#094290]">.</span>
            </Link>
            <Link
              href="https://www.behance.net/ad_victorem"
              target="_blank"
              className="font-sequelWide text-xl md:text-4xl flex flex-row gap-0 justify-center items-center"
            >
              <span className="hover:text-[#1F86FF]">BE</span>{" "}
              <span className="text-[#1F86FF]">.</span>
            </Link>
            <Link
              href="https://medium.com/advictorem"
              target="_blank"
              className="font-sequelWide text-xl md:text-4xl flex flex-row gap-0 justify-center items-center"
            >
              <span className="hover:text-[#00A257]">M</span>{" "}
              <span className="text-[#00A257]">.</span>
            </Link>
          </div>

          <h2 className="font-sequelWide text-2xl md:text-4xl uppercase mb-4">
            Want to move forward?
          </h2>
          <Link
            href="mailto:hello@anthonydesigner.com"
            className="font-sequelWide text-2xl md:text-4xl uppercase underline hover:opacity-80 transition-opacity"
          >
            Drop a line.
          </Link>
        </div>

        <div className=" flex justify-end ">
          <button
            onClick={scrollToTop}
            className="back-to-top font-300 font-tungsten tracking-[.7rem] text-md uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
