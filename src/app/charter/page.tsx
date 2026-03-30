import type { Metadata } from 'next'

import { Navbar } from '@/components/Navbar'

const SITE_URL = 'https://www.njsug.org'
const CHARTER_URL = `${SITE_URL}/charter`

type CharterSection = {
  title: string
  paragraphs: string[]
}

const charterSections: CharterSection[] = [
  {
    title: 'Purpose',
    paragraphs: [
      'The New Jersey Area SAS Users Group (NJSUG) is a non-profit, independent, and volunteer-based professional organization that brings together individuals in New Jersey and New York who are interested in SAS software. Our primary objective is to provide a forum to share knowledge, exchange ideas, and promote best practices about using SAS software and/or integrating SAS with other open source tools for data analysis and reporting. NJSUG operates as an official SAS users group but maintains its independence from SAS Institute.',
    ],
  },
  {
    title: 'Governance',
    paragraphs: [
      "NJSUG is governed by an Executive Committee comprised of volunteer members from different industries. The Committee is responsible for overseeing the organization's functioning and growth, meeting monthly or as needed. All members serve two-year terms or ad-hoc arrangements to bring fresh perspectives and ideas.",
      'Steering Committee membership is a distinct, invitation-only membership. Steering Committee members are selected through a nomination and voting process conducted among current Steering Committee members. Individuals may be nominated based on prior contributions to NJSUG activities and contributions to the New Jersey SAS user community through outstanding technical expertise, recognized technical contributions, or leadership in NJSUG programming.',
      'Nominations are discussed internally and confirmed through voting to support continuity and effective operation of the organization. Steering Committee membership is reviewed periodically.',
    ],
  },
  {
    title: 'Membership',
    paragraphs: [
      'Membership in NJSUG is open to anyone who is interested in SAS software in the New Jersey and New York area. Members can attend the webinars and meetings without additional fees. Membership dues may be collected annually or as approved by the Executive Committee.',
    ],
  },
  {
    title: 'Meetings and Events',
    paragraphs: [
      'NJSUG typically offers one in-person meeting and one online webinar per year. Additional online webinars and other activities, such as training classes, may be organized to meet the needs and interests of members.',
    ],
  },
  {
    title: 'Amendments to the Charter',
    paragraphs: [
      'Amendments to this charter may be proposed by any member of NJSUG. Proposed amendments will be reviewed by the Executive Committee, and approval requires a majority vote of the Committee members.',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Charter',
  description:
    'Read the amended NJSUG charter, including the organization purpose, governance, membership, meetings, events, and amendment process.',
  alternates: {
    canonical: CHARTER_URL,
  },
  openGraph: {
    title: 'NJSUG Charter',
    description:
      'Read the amended NJSUG charter, including the organization purpose, governance, membership, meetings, events, and amendment process.',
    url: CHARTER_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey SAS Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'NJSUG Charter',
    description:
      'Read the amended NJSUG charter, including the organization purpose, governance, membership, meetings, events, and amendment process.',
  },
}

export default function CharterPage() {
  return (
    <main className="min-h-screen bg-[#0A6F69] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Governing Document
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Charter
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            This page reflects the NJSUG charter and summarizes the
            organization's purpose, governance model, membership, event cadence,
            and amendment process.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-6">
          {charterSections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-white/15 bg-white/8 p-8 shadow-lg shadow-black/10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-emerald-50/90">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
