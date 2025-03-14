'use client'

import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="w-full bg-black text-white p-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-sm uppercase mb-3 opacity-80">Get in touch</h3>
          <div className="flex gap-4 mb-12">
            <Link href="https://twitter.com/creativeanthony" className="font-sequelWide text-2xl" target="_blank">TW</Link>
            <Link href="https://www.instagram.com/anthonydesigner/" className="font-sequelWide text-2xl" target="_blank">IG</Link>
            <Link href="https://www.linkedin.com/in/anthonywiktor/" className="font-sequelWide text-2xl" target="_blank">LN</Link>
            <Link href="https://www.behance.net/ad_victorem" className="font-sequelWide text-2xl" target="_blank">BE</Link>
            <Link href="https://medium.com/advictorem" className="font-sequelWide text-2xl" target="_blank">M</Link>
          </div>

          <h2 className="font-sequelWide text-5xl md:text-6xl uppercase mb-4">Want to move forward?</h2>
          <Link href="mailto:hello@anthonydesigner.com" className="font-sequelWide text-5xl md:text-6xl uppercase underline hover:opacity-80 transition-opacity">
            Drop a line.
          </Link>
        </div>

        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="font-sequelWide text-xs uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
