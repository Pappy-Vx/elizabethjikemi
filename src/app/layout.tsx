import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anthony Wiktor Award-Winning Creative Director and Designer Who Moves Brands Forward",
  description: "Anthony Wiktor is a Webby Award-Winning Creative Director and Designer based in Los Angeles specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
