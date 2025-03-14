'use client'

import Link from 'next/link'

export default function CurrentlySection() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 lg:py-40 relative">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="font-sequelWide text-5xl md:text-7xl lg:text-8xl uppercase mb-12 md:mb-24">Currently</h2>

        <div className="max-w-2xl">
          <h3 className="font-sequelWide text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
            Helping<br />
            Brands Win.
          </h3>

          <div className="flex justify-end mb-16">
            <Link
              href="https://advictorem.agency"
              target="_blank"
              className="inline-block font-sequelWide tracking-wider text-sm uppercase hover:opacity-80 transition-opacity"
            >
              Visit Ad Victorem
            </Link>
          </div>
        </div>

        {/* Video/background element would be here in the original */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-black to-zinc-900 opacity-30"></div>
      </div>
    </section>
  )
}
