import type { Metadata } from 'next'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'

const SITE_URL = 'https://www.njsug.org'
const CONTACT_URL = `${SITE_URL}/contact`
const CONTACT_EMAIL = 'njsugcontact@gmail.com'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact NJSUG for questions about events, membership, volunteering, and community participation.',
  alternates: {
    canonical: CONTACT_URL,
  },
  openGraph: {
    title: 'Contact NJSUG',
    description:
      'Contact NJSUG for questions about events, membership, volunteering, and community participation.',
    url: CONTACT_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey SAS Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Contact NJSUG',
    description:
      'Contact NJSUG for questions about events, membership, volunteering, and community participation.',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            Reach out to NJSUG with questions about webinars, meetings, membership,
            volunteering, or future programming ideas.
          </p>

          <div className="mt-10 max-w-xl rounded-3xl border border-white/10 bg-black/10 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/65">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/65">
                Mailing List
              </p>
              <p className="mt-3 text-base leading-7 text-emerald-50/85">
                Receive NJSUG announcements about upcoming events and community
                programming.
              </p>
              <Link
                href="/join-mailing-list"
                className="mt-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Join Mailing List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
