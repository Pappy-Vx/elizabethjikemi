'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 px-8 py-6 flex justify-between items-center bg-white">
      <div className="logo">
        <Link href="/" className="text-black hover:opacity-80 transition duration-300">
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 23.9824V0.0175781H8.63514L17.2703 11.6992V0.0175781H25.9054V23.9824H17.2703L8.63514 12.3008V23.9824H0Z" fill="black"/>
            <path d="M27.3649 23.9824V0.0175781H36.0001V23.9824H27.3649Z" fill="black"/>
          </svg>
        </Link>
      </div>
      <nav>
        <Link
          href="/about"
          className="font-sequelWide tracking-widest uppercase text-sm hover:opacity-80 transition duration-300"
        >
          About
        </Link>
      </nav>
    </header>
  )
}
