import type { Metadata } from "next"
import ExpertiseSection from '@/components/expertise-section';
import ClientsSection from '@/components/clients-section';
import AwardsSection from '@/components/awards-section';
import Header from "@/components/header";
import AboutHero from "@/components/about-hero";
import Image from "next/image";
import TheClimate from "./theclimate";
import OrganizationClimate from "./organization-climate";
import DataClimate from "./data-climate";
import PersonalClimate from "./personal-climate";
import FutureClimate from "./future-climate";

export const metadata = {
     title: 'Climate • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
     description: 'Elizabeth Jikiemi is a Super Award-Winning Project Manager and NGO Specialist based in Indiana specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
   }

export default function Climate() {
  return (
<>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/climatebg.jpg"
          alt="climate"
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </div> 

      {/* Foreground Content */}
      <Header />
      <TheClimate />
      <OrganizationClimate />
      <DataClimate />
      <PersonalClimate />
      <FutureClimate />
</>


    
  );
}
