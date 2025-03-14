'use client'

export default function ClientsSection() {
  return (
    <section className="py-20 bg-black px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sequelWide text-6xl md:text-7xl lg:text-8xl uppercase mb-16 opacity-20">Clients</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Client logos - adding a few examples */}
          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">ESPN</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">FOX</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">ABC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">AC HOTELS</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">LAFC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">MOTIV</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">NESTEA</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">TOYOTA</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">TMZ</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">AMC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">SOTHEBY'S</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">DIRECTV</div>
          </div>
        </div>
      </div>
    </section>
  )
}
