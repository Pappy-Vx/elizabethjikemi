import type { Metadata } from "next"
import Header from "@/components/header";
import Image from "next/image";
import TheCalling from "./the-calling";
import DiffStrat from "./diff-strat";
import FundRaising from "./fundraising";
import CenterPeople from "./centre-people";
import Technology from "./technology";
import Voice from "./voice";
import HeartWork from "./heart-work";

export const metadata = {
  title: 'Non-Profit • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
  description: 'Elizabeth Jikiemi is a Super Award-Winning Project Manager and NGO Specialist based in Indiana specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
}

export default function Ngo() {
  return (
    <>
      {/* Fixed Background Image */}
      {/* <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/ngo.jpg"
          alt="Non-Profit"
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </div>  */}
      <div className="bg-white fixed top-0 left-0 w-full h-full z-0">
      </div>

      {/* Foreground Content */}
      <Header />
      <TheCalling />
      <DiffStrat />
      <FundRaising />
      <CenterPeople />
      <Technology />
      <Voice />
      <HeartWork />


    </>



  );
}
