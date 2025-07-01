import type { Metadata } from "next"
import Header from "@/components/header";
import ResearchInfo from "@/components/ResearchInfo";
import Image from "next/image";

export const metadata = {
  title: 'Elizabeth Research • Problem Statement For E.J’S Doctorate Research',
  description: 'Exploring Blockchain and AI Integration for Operational Efficiency, Transparency, and Donor Engagement in African Nonprofits',
}

export default function Research() {
  return (
    <>
      {/* Fixed Background Image */}
      <div className="bg-white fixed top-0 left-0 w-full h-full z-0">
      </div>

      {/* Foreground Content */}
      <Header />
      <ResearchInfo />
    </>



  );
}
