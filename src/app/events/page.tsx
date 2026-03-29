import type { Metadata } from 'next'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'
import { WEBINAR_2026_PATH } from '@/components/Njsug2026WebinarPage'

const SITE_URL = 'https://www.njsug.org'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Browse upcoming NJSUG events and registration information.',
  alternates: {
    canonical: `${SITE_URL}/events`,
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Events
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Upcoming NJSUG Programs
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            Explore upcoming NJSUG events and register for the next webinar.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/65">
              Featured Event
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              NJSUG 2026 Webinar
            </h2>
            <p className="mt-3 text-base leading-7 text-emerald-50/85">
              Future of Statistical Programming on May 8, 2026 from 10:00 AM to
              11:40 AM ET.
            </p>
            <Link
              href={WEBINAR_2026_PATH}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Open Event Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
