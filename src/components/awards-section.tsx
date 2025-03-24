'use client'

export default function AwardsSection() {
  const awards = [
    { name: 'Webby Award', project: 'Motiv Ring', year: '2018' },
    { name: 'FWA Award', project: 'ESPN', year: '2017' },
    { name: 'W3 Gold Award', project: 'AC Hotels', year: '2016' },
    { name: 'FWA Award', project: 'Espn FC Brazil', year: '2014' },
    { name: 'Communication Arts Award', project: 'Netflix', year: '2012' },
    { name: 'Webby Advertising Award', project: 'YouTube', year: '2011' },
    { name: 'FWA Creative Award', project: 'YouTube', year: '2010' },
  ]

  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-roadRadio text-2xl md:text-7xl lg:text-8xl uppercase mb-16 ">Awards</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-t border-gray-800 py-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <p className="text-sm opacity-80">{award.name}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm opacity-80">{award.project}</p>
                </div>
                <div className="col-span-1 text-right">
                  <p className="text-sm opacity-80">{award.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
