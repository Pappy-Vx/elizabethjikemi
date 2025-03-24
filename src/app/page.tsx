import type { Metadata } from "next"
import Homepage from "@/components/homepage";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Elizabeth Jikiemi | Portfolio",
  description: "This is a detailed portfolio of Elizabeth Jikiemi, a Project Manager and NGO Lead, based in United State of America.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
}
export default function Home() {
  
  return (
    
      <>
      <Header />
      <Homepage />
      </>

    
  );
}
