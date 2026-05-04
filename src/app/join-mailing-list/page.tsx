import type { Metadata } from 'next'

import { JoinMailingListForm } from '@/components/JoinMailingListForm'
import { Navbar } from '@/components/Navbar'

const SITE_URL = 'https://www.njsug.org'
const JOIN_MAILING_LIST_URL = `${SITE_URL}/join-mailing-list`

export const metadata: Metadata = {
  title: 'Join Mailing List',
  description:
    'Join the NJSUG mailing list for announcements about webinars, meetings, and community programs.',
  alternates: {
    canonical: JOIN_MAILING_LIST_URL,
  },
  openGraph: {
    title: 'Join the NJSUG Mailing List',
    description:
      'Join the NJSUG mailing list for announcements about webinars, meetings, and community programs.',
    url: JOIN_MAILING_LIST_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey SAS Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Join the NJSUG Mailing List',
    description:
      'Join the NJSUG mailing list for announcements about webinars, meetings, and community programs.',
  },
}

export default function JoinMailingListPage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
              Mailing List
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Join NJSUG Mailing List
            </h1>
            <p className="mt-6 text-base leading-8 text-emerald-50/90 md:text-lg">
              Receive NJSUG announcements about webinars, meetings, calls for speakers,
              and community programming.
            </p>
            <p className="mt-4 text-base leading-8 text-emerald-50/85 md:text-lg">
              Your request will be sent to the NJSUG team so we can add you to the
              community mailing list.
            </p>
          </div>

          <div className="lg:pl-2">
            <JoinMailingListForm />
          </div>
        </div>
      </section>
    </main>
  )
}
