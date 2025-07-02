import type { Metadata } from "next"

import Header from "@/components/header";



export const metadata = {
     title: 'Peer Reviewed Article • Elizabeth Jikiemi Award-Winning Project Manager and NGO Specialist',
     description: 'Elizabeth Jikiemi is a Super Award-Winning Project Manager and NGO Specialist based in Indiana specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
   }

export default function PeerReview() {
  return (
<>
      {/* Fixed Background Image */}
     <div className="bg-white fixed top-0 left-0 w-full h-full z-0">
      </div>

      {/* Foreground Content */}
      <Header />
      
      
      
</>


    
  );
}
