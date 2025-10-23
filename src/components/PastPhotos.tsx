'use client'

import Image from 'next/image'
import Link from 'next/link'

type EventPhoto = {
  id: number
  src: string
  alt: string
}

const photos: EventPhoto[] = [
  { id: 1, src: '/images/event-photos/Group_1.jpg', alt: 'NJSUG 2025 Spring Meeting Group Photo' },
  { id: 2, src: '/images/event-photos/Changhong_1.jpg', alt: 'Opening Remarks by Changhong Shi' },
  { id: 3, src: '/images/event-photos/Melodie_1.jpg', alt: "We're All Friends by Melodie Rush" },
  { id: 4, src: '/images/event-photos/Pavan_1.jpg', alt: 'R Shiny Use Cases by Sri Pavan Vemuri' },
  { id: 5, src: '/images/event-photos/Kevin_3.jpg', alt: 'Gen AI in Biometrics by Kevin Lee' },
  { id: 6, src: '/images/event-photos/Panel_2.jpg', alt: 'Panel Discussion' },
  { id: 7, src: '/images/event-photos/Panel_4.jpg', alt: 'Panel Discussion Continued' },
  { id: 8, src: '/images/event-photos/Jeff_1.jpg', alt: 'Closing Remarks by Jeff Xia' },
  { id: 9, src: '/images/event-photos/3.jpg', alt: 'Coffee' },
  { id: 10, src: '/images/event-photos/4.jpg', alt: 'Interactive Session' },
  { id: 12, src: '/images/event-photos/8.jpg', alt: 'Coffee Break Networking' },
  { id: 13, src: '/images/event-photos/ChenWangHost.jpg', alt: 'Host by Chen Wang' }
]

function Row({ reverse = false }: { reverse?: boolean }) {
  const sequence = [...photos, ...photos]

  return (
    <div className="relative overflow-hidden">
      <div className={`marquee-track flex items-center gap-6 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {sequence.map((p, idx) => (
          <Link key={`${p.id}-${idx}`} href="/past-conferences" className="relative h-36 w-64 md:h-44 md:w-80 lg:h-52 lg:w-88 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 352px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
              priority={idx < 2}
            />
          </Link>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A6F69] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A6F69] to-transparent" />
    </div>
  )
}

export function PastPhotos() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center pt-4 pb-8 md:pt-6 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5 md:mb-8">
          <h2 className="font-bold tracking-tight text-[clamp(1.25rem,3vw,2rem)] text-white/90">From Past Events</h2>
        </div>

        <div className="group space-y-6">
          <Row reverse />
        </div>

      </div>

      {/* Top fade to unify with hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-[#0A6F69]" aria-hidden="true" />

      {/* Animations and hover pause */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left { animation: marquee-left 30s linear infinite; }
        .animate-marquee-right { animation: marquee-right 30s linear infinite; }
        .group:hover .marquee-track { animation-play-state: paused; }
      `}</style>
    </section>
  )
}


