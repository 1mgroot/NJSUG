import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, UserPlus } from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import {
  CFP_EVENT_COST,
  CFP_EVENT_DATE,
  CFP_PATH,
  CFP_REGISTRATION_URL,
} from '@/components/NjsugPhilaSug2026CallForPapersPage'
import { WEBINAR_2026_PATH } from '@/components/Njsug2026WebinarPage'

const SITE_URL = 'https://www.njsug.org'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Browse current and recent NJSUG event pages, recordings, and materials.',
  alternates: {
    canonical: `${SITE_URL}/events`,
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Events
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            NJSUG Programs
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            Explore upcoming NJSUG programs, calls for presenters, recordings, and
            shared presentation materials.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/10">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/65">
                In-Person Meeting &amp; Registration
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                NJSUG &amp; PhilaSUG Joint In-Person Meeting 2026
              </h2>
              <p className="mt-3 text-base leading-7 text-emerald-50/85">
                View the agenda for the {CFP_EVENT_DATE} in-person joint event. This
                is a {CFP_EVENT_COST.toLowerCase()} event, and advance registration is
                required.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={CFP_PATH}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  View Event Details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href={CFP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#F2FFA8]"
                >
                  Register Free
                  <UserPlus className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="rounded-lg border border-white/15 bg-black/10 p-6 shadow-lg shadow-black/10">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/65">
                Recent Webinar
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                NJSUG 2026 Webinar
              </h2>
              <p className="mt-3 text-base leading-7 text-emerald-50/85">
                Future of Statistical Programming on May 8, 2026, with recording and
                workshop materials now available.
              </p>
              <Link
                href={WEBINAR_2026_PATH}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open Event Page
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
