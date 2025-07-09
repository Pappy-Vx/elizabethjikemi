"use client"; // Required for hooks like usePathname
import { useState, useEffect } from "react";
import { BadgeInfo } from "lucide-react";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ Get current route
import PageTransition from "@/components/PageTransition";

import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 🔥 Get the current route
  const [showModal, setShowModal] = useState(false);

   useEffect(() => {
  const hasSeen = localStorage.getItem("newsletter-shown");
  if (!hasSeen) {
    const timer = setTimeout(() => {
      setShowModal(true);
      localStorage.setItem("newsletter-shown", "true");
    }, 10000);
    return () => clearTimeout(timer);
  }
}, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 12000); // 12 seconds

    return () => clearTimeout(timer);
  }, []);
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
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[1000] flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white max-w-lg w-full rounded-xl p-8 shadow-2xl text-black relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                >
                  &times;
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl md:text-3xl font-bold font-roadRadio mb-4 text-center">
                  Let’s Stay Connected
                </h2>
                <p className="text-sm md:text-base text-center mb-6 font-sourceSerif">
                  Get monthly insights, and practical tools for building systems that work in the real world. I'll share what I'm learning and building...
                </p>

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowModal(false);
                    // Handle form submission logic here
                  }}
                  className="flex flex-col gap-4"
                >
                  <input type="text"
                  placeholder="Enter your Name"
                   className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs gap-4 flex flex-row items-center justify-center text-center mb-6 font-sourceSerif mt-4"> <span><BadgeInfo /></span> Promise not to spam you. Just the goodies in your inbox, once a month.</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </body>
    </html>
  );
}
