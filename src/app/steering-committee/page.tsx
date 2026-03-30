import type { Metadata } from 'next'

import { Committee } from '@/components/Committee'
import { Navbar } from '@/components/Navbar'

const SITE_URL = 'https://www.njsug.org'
const STEERING_COMMITTEE_URL = `${SITE_URL}/steering-committee`

export const metadata: Metadata = {
  title: 'Steering Committee',
  description:
    'Meet the NJSUG Steering Committee members supporting events, programs, and community engagement.',
  alternates: {
    canonical: STEERING_COMMITTEE_URL,
  },
  openGraph: {
    title: 'NJSUG Steering Committee',
    description:
      'Meet the NJSUG Steering Committee members supporting events, programs, and community engagement.',
    url: STEERING_COMMITTEE_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey SAS Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'NJSUG Steering Committee',
    description:
      'Meet the NJSUG Steering Committee members supporting events, programs, and community engagement.',
  },
}

export default function SteeringCommitteePage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Leadership
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Steering Committee
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            NJSUG is supported by a steering committee that helps shape programming,
            strengthen the community, and keep our events moving forward.
          </p>
        </div>

        <Committee />
      </section>
    </main>
  )
}
