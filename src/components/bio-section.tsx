'use client'

import Link from 'next/link'

export default function BioSection() {
  return (
    <section className="min-h-screen pt-32 px-8 pb-16 bg-[#000000CC] z-10 relative text-white flex items-start">
      <div className="w-full mx-auto flex flex-row justify-between ">
        <div className='w-[60%]'>
         
          <p className="text-4xl font-sourceSerif  mb-4">
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


          <div className=" mt-8">
            <div>
              <h3 className="font-tungsten text-sm mb-2 uppercase">Education</h3>
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
