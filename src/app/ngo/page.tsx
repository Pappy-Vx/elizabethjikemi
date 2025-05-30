import type { Metadata } from "next"
import ExpertiseSection from '@/components/expertise-section';
import ClientsSection from '@/components/clients-section';
import AwardsSection from '@/components/awards-section';
import Header from "@/components/header";
import AboutHero from "@/components/about-hero";
import Image from "next/image";

export const metadata = {
     title: 'Non-Profit • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
     description: 'Elizabeth Jikiemi is a Super Award-Winning Project Manager and NGO Specialist based in Indiana specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
   }

export default function Ngo() {
  return (
<>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/ngo.jpg"
          alt="Non-Profit"
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </div> 

      {/* Foreground Content */}
      <Header />
      <AboutHero />
      {/* <BioSection /> */}
      <ExpertiseSection />
      {/*   */}
      <ClientsSection />
      <AwardsSection />
</>


    
  );
}
