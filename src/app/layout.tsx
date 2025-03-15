"use client"; // Required for hooks like usePathname

import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ Get current route
import PageTransition from "@/components/PageTransition";

import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 🔥 Get the current route

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
       
        <main className="relative">
          <AnimatePresence mode="wait">
            <PageTransition key={pathname}>
              {children}
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
