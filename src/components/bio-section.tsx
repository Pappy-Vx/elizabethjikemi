'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BioSection() {
  return (
    <section className="min-h-screen pt-32 px-8 pb-16 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-sequelWide text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight uppercase mb-8">
            Competition<br />
            and creativity<br />
            runs hard in<br />
            his veins.
          </h1>

          <p className="text-base mb-4">
            Given that Anthony grew up in Chicago rooting for sports legends like <strong>MICHAEL JORDAN</strong> and <strong>WALTER PAYTON</strong>, that's no surprise.
          </p>

          <p className="text-base mb-4">
            Anthony brings that competitive spirit to his branding and design work, leading to shelves full of awards, and being listed in Web Designer Magazine's <strong>HOT 100</strong> list twice.
          </p>

          <p className="text-base mb-4">
            Case in point: Anthony's recent work for tech startup Motiv won a <strong>WEBBY AWARD</strong> and helped generate the company's first thousand sales with almost zero advertising.
          </p>

          <p className="text-base mb-6">
            In addition to helping clients like ESPN and Netflix rise to victory against their competitors, Anthony shares his passion with future design professionals, leading creative workshops at <strong>USC's</strong> Annenberg Digital Lounge, serving on the board of AIGA Los Angeles and as an expert panelist for the annual GlobalTrend Marketing Awards.
          </p>

          <Link
            href="/static/anthony-wiktor-resume-2019-719528748d2e5155aaf7ac8516f6c417.pdf"
            target="_blank"
            className="inline-block font-sequelWide text-sm uppercase underline mb-8 hover:opacity-80 transition-opacity"
          >
            Download Resume
          </Link>
        </div>

        <div>
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src="https://web-assets.same.dev/862165757/3602889100.webp"
              alt="Anthony Wiktor"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-sequelWide text-sm mb-2 uppercase">Education</h3>
              <p className="uppercase text-sm font-bold mb-1">Woodbury University</p>
              <p className="text-sm text-gray-700 mb-4">BFA Graphic Design, 2006</p>
            </div>

            <div>
              <h3 className="font-sequelWide text-sm mb-2 uppercase">Experience</h3>
              <p className="uppercase text-sm font-bold mb-1">Principal, Creative Director</p>
              <p className="text-sm text-gray-700 mb-2">AD VICTOREM, 2017-</p>

              <p className="uppercase text-sm font-bold mb-1">Creative Director</p>
              <p className="text-sm text-gray-700 mb-2">AZUBU.TV, 2015-2017</p>

              <p className="uppercase text-sm font-bold mb-1">Independent Creative Director</p>
              <p className="text-sm text-gray-700 mb-2">CONSENSUS INC., 2013-2015</p>

              <p className="uppercase text-sm font-bold mb-1">Creative Director</p>
              <p className="text-sm text-gray-700 mb-2">STARMEN DESIGN GROUP, 2008-2014</p>

              <p className="uppercase text-sm font-bold mb-1">Marketing Art Director</p>
              <p className="text-sm text-gray-700 mb-4">SOTHEBY'S REAL ESTATE, 2006-2008</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
