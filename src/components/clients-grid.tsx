'use client'

import Image from 'next/image'
import Link from 'next/link'

const clients = [
  {
    name: 'Motiv Ring',
    logo: 'https://web-assets.same.dev/89360673/2062392507.webp',
    url: 'https://advictorem.agency/case-studies/motiv-ring'
  },
  {
    name: 'AC Hotels',
    logo: 'https://web-assets.same.dev/3993265427/2075004331.webp',
    url: 'https://advictorem.agency/case-studies/ac-hotels'
  },
  {
    name: 'Nestea',
    logo: 'https://web-assets.same.dev/383566247/2761186924.webp',
    url: 'https://advictorem.agency/case-studies/nestea'
  },
  {
    name: 'ESPN',
    logo: 'https://web-assets.same.dev/1616286318/3692604017.webp',
    url: 'https://advictorem.agency/case-studies/espn'
  },
  {
    name: 'LAFC',
    logo: 'https://web-assets.same.dev/825918791/1060828862.webp',
    url: 'https://advictorem.agency/case-studies/lafc'
  },
  {
    name: 'FOX',
    logo: 'https://web-assets.same.dev/1518392135/3384299336.webp',
    url: 'https://advictorem.agency/case-studies/fox-digital'
  },
]

export default function ClientsGrid() {
  return (
    <section className="w-full bg-black" id='clientsgrid'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-900">
        {clients.map((client, index) => (
          <Link
            key={index}
            href={client.url}
            target="_blank"
            className="bg-black h-72 flex items-center justify-center p-8 hover:bg-zinc-900 transition-colors"
          >
            <div className="w-full max-w-[200px] relative h-12">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
