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
      'The New Jersey SAS Users Group (NJSUG) is an independent, volunteer-led professional organization founded in 1998 that supports individuals and organizations in New Jersey who work with SAS software and other statistical software. NJSUG brings together people from industry, academia, and other sectors with an interest in statistical programming, data analytics, and data-driven reporting.',
      'NJSUG fosters learning and collaboration within the New Jersey SAS user community by creating opportunities to share practical experience, discuss analytical approaches, and encourage the effective use of SAS and other analytical tools, including open-source technologies. This mission is advanced through conferences, educational meetings, webinars, and other community activities.',
      'NJSUG functions as an officially recognized SAS users group while operating independently from the SAS Institute.',
    ],
  },
  {
    title: 'Governance',
    paragraphs: [
      'NJSUG is guided by a Steering Committee composed of volunteer members who provide continuity, coordination, and oversight for group activities. The Steering Committee is responsible for planning and organizing meetings and events, supporting educational initiatives, and representing NJSUG within the broader SAS user community.',
      'Steering Committee members are selected through a nomination and voting process conducted among current Steering Committee members. Individuals may be nominated based on prior contributions to NJSUG activities and contributions to the New Jersey SAS user community through technical expertise, content development, or event planning. Nominations are discussed internally and confirmed through voting to support continuity and effective operation of the organization. Steering Committee membership is reviewed periodically.',
    ],
  },
  {
    title: 'Membership',
    paragraphs: [
      'Membership is open to anyone in New Jersey or nearby areas with an interest in SAS software or other open-source technologies. Members are encouraged to participate in group activities, attend meetings or webinars, and contribute to the community. No formal dues are required unless approved by the leadership team to cover specific group activities.',
    ],
  },
  {
    title: 'Meetings and Events',
    paragraphs: [
      'NJSUG shall host regular meetings to advance its purpose. Events may include in-person meetings, webinars, workshops, training sessions, and social mixers. The frequency of events will be determined by member interest and leadership capacity, with the goal of offering meaningful content throughout the year.',
    ],
  },
  {
    title: 'Finances',
    paragraphs: [
      'Any funds collected for NJSUG activities shall be used transparently to support the mission. These might include costs for venue space, refreshments, speaker incentives, or educational resources. The leadership team will provide a summary of how funds are used if such funds are collected.',
    ],
  },
  {
    title: 'Amendments',
    paragraphs: [
      'This charter may be amended by a proposal from any member and approval by the leadership team. Amendments should align with the purpose and best interests of NJSUG and be communicated to members once adopted.',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Charter',
  description:
    'Read the NJSUG charter, including the organization purpose, governance, membership, events, finances, and amendment process.',
  alternates: {
    canonical: CHARTER_URL,
  },
  openGraph: {
    title: 'NJSUG Charter',
    description:
      'Read the NJSUG charter, including the organization purpose, governance, membership, events, finances, and amendment process.',
    url: CHARTER_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey Statistical Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'NJSUG Charter',
    description:
      'Read the NJSUG charter, including the organization purpose, governance, membership, events, finances, and amendment process.',
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
            NJSUG Charter
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
            This page reflects the current NJSUG charter and summarizes how the
            organization defines its purpose, leadership structure, membership,
            events, finances, and amendment process.
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
