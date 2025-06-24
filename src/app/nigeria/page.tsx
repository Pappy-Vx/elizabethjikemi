import type { Metadata } from "next"
import ExpertiseSection from '@/components/expertise-section';
import ClientsSection from '@/components/clients-section';
import AwardsSection from '@/components/awards-section';
import Header from "@/components/header";
import AboutHero from "@/components/about-hero";
import Image from "next/image";
import NigeriaCore from "./nigeria-core";

export const metadata = {
     title: 'Nigeria • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
     description: 'Where my story began. Where my strength is rooted.',
   }

export default function Nigeria() {
  return (
<>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/nigeriabg.jpg"
          alt="nigeria"
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </div> 

      {/* Foreground Content */}
      <Header />
      <NigeriaCore />
      {/* <BioSection /> */}
      <ExpertiseSection />
      {/*   */}
      <ClientsSection />
      <AwardsSection />
</>


    
  );
}
