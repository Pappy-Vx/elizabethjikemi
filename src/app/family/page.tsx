import type { Metadata } from "next"
import AwardsSection from '@/components/awards-section';
import Header from "@/components/header";
import Image from "next/image";
import AboutFamily from "./about-family";
import FamilyStrategy from "./family-strat";
import FamilyStake from "./family-stake";
import Change from "./change";
import FutureFamily from "./future-fam";

export const metadata = {
     title: 'Family • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
     description: 'Where strategy begins and legacy is lived out in the everyday.',
   }

export default function Family() {
  return (
<>
      {/* Fixed Background Image */}
      {/* <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/familybg.jpg"
          alt="family"
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </div>  */}
      <div className="bg-white fixed top-0 left-0 w-full h-full z-0">
      </div> 

      {/* Foreground Content */}
      <Header />
      <AboutFamily />
      <FamilyStrategy />
      <FamilyStake />
      <Change />
      <FutureFamily />
</>


    
  );
}
