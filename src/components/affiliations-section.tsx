'use client'

export default function AffiliationsSection() {
  return (
    <section className="py-20 bg-white text-black relative z-50 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sequelWide text-2xl md:text-7xl lg:text-8xl uppercase mb-16 ">Affiliations</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* AIGA LA Logo */}
          <div className="h-12 w-full flex items-center justify-center opacity-70">
            <div className="text-center text-sm">AIGA LA</div>
          </div>

          {/* USC Logo */}
          <div className="h-12 w-full flex items-center justify-center opacity-70">
            <div className="text-center text-sm">USC</div>
          </div>

          {/* Other affiliations */}
          <div className="h-12 w-full flex items-center justify-center opacity-70">
            <div className="text-center text-sm">3% Conference</div>
          </div>

          <div className="h-12 w-full flex items-center justify-center opacity-70">
            <div className="text-center text-sm">Designmatters</div>
          </div>

          <div className="h-12 w-full flex items-center justify-center opacity-70">
            <div className="text-center text-sm">LACMA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
