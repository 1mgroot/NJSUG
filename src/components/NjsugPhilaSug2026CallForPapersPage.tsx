import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  UserPlus,
} from 'lucide-react'

import { Navbar } from '@/components/Navbar'

export const SITE_URL = 'https://www.njsug.org'
export const CFP_PATH = '/events/njsug-philasug-2026'
export const CFP_URL = `${SITE_URL}${CFP_PATH}`
export const CFP_EVENT_NAME = 'NJSUG & PhilaSUG Joint In-Person Meeting 2026'
export const CFP_EVENT_DATE = 'Friday, October 9, 2026'
export const CFP_EVENT_START = '2026-10-09'
export const CFP_EVENT_COST = 'Free'
export const CFP_REGISTRATION_DEADLINE = 'Friday, September 18, 2026'
export const CFP_CONTACT_EMAIL = 'njsugcontact@gmail.com'
export const CFP_REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfei8rXH3CWpYru64mae6QyFnxbCQtmvV_71pwNViTNDXxDXA/viewform?usp=header'
export const CFP_LOCATION_NAME = 'NJHA Conference and Event Center'
export const CFP_LOCATION_STREET = '760 Alexander Rd'
export const CFP_LOCATION_CITY = 'Princeton'
export const CFP_LOCATION_REGION = 'NJ'
export const CFP_LOCATION_POSTAL_CODE = '08543'
export const CFP_LOCATION_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=NJHA%20Conference%20and%20Event%20Center%20760%20Alexander%20Rd%20Princeton%20NJ%2008543'

const attendanceBenefits = [
  'Hear practical presentations from industry experts',
  'Explore current SAS technologies, AI, automation, and analytics',
  'Exchange ideas with peers from across the region',
  'Build connections within the New Jersey and Philadelphia SAS communities',
]

type AgendaItem = {
  time: string
  title: string
  speaker?: string
  description?: string
  participants?: string[]
  kind?: 'break'
}

const agendaItems: AgendaItem[] = [
  { time: '9:00–9:30 AM', title: 'Breakfast', kind: 'break' },
  { time: '9:30–9:35 AM', title: 'Opening' },
  {
    time: '9:35–10:35 AM',
    title:
      'Keynote from SAS — Working with the SAS® Extension for SAS® Visual Studio Code',
    speaker: 'Rob Collum (SAS)',
  },
  {
    time: '10:35–11:05 AM',
    title:
      'YAMAA: a language-agnostic YAML schema to map and derive CDISC data from ODM to SDTM and ADaM',
    speaker: 'Yilong Zhang (New York University)',
  },
  { time: '11:05–11:15 AM', title: 'Break', kind: 'break' },
  {
    time: '11:15–11:35 AM',
    title: 'Loading SAS Datasets from CSV Without Truncation',
    speaker: 'Cara Cuiule (Wharton Research Data Services, The Wharton School)',
  },
  {
    time: '11:35 AM–12:05 PM',
    title:
      'A demonstration of ProcClinSafe®, a SAS based Safety Surveillance Reporting Software',
    speaker: 'Charles E. B. Jones, PhD (Pi Epsilon Statistical Consulting, LLC)',
  },
  { time: '12:05–1:15 PM', title: 'Lunch Break', kind: 'break' },
  {
    time: '1:15–2:05 PM',
    title:
      'Panel Discussion: Innovation and Technology Strategy for Statistical Programming',
    participants: [
      'Ryan Yu — Director, Head of Scientific Computing Technology (Regeneron)',
      'Changhong Shi — Executive Director, Statistical Programming (Merck)',
      'Sangeeta Bhattacharya — Senior Director, Clinical & Statistical Programming; Head, Immunology & Medical Affairs (Johnson & Johnson)',
      'Matthew Cohen — Director of Technical Services (Wharton Research Data Services, University of Pennsylvania)',
      'Moderator: Krutika Parvatikar — Senior Statistical Programming Scientist (Merck)',
    ],
  },
  { time: '2:05–2:15 PM', title: 'Break', kind: 'break' },
  {
    time: '2:15–2:45 PM',
    title: 'SAS® Programming Techniques for Efficiency and Code Optimization',
    speaker: 'Jay Iyengar (Data Systems Consultants LLC)',
  },
  {
    time: '2:45–3:15 PM',
    title:
      'SKILL.md + SAS: Turning Clinical Programming SOPs into Executable AI Workflows',
    speaker: 'Kevin Lee (Clinvia)',
  },
  { time: '3:15–3:25 PM', title: 'Closing and Pictures' },
]

export const CFP_KEYWORDS = [
  'NJSUG PhilaSUG 2026 joint event',
  'NJSUG PhilaSUG 2026 agenda',
  'SAS user group meeting',
  'statistical programming conference',
  'Princeton NJ SAS event',
  'October 2026 SAS event',
  'clinical programming presentation',
]

export function getNjsugPhilaSug2026CfpMetadata(): Metadata {
  return {
    title: 'NJSUG & PhilaSUG Joint In-Person Meeting 2026',
    description:
      'View the agenda and register for the NJSUG & PhilaSUG Joint In-Person Meeting on Friday, October 9, 2026, in Princeton, NJ.',
    keywords: CFP_KEYWORDS,
    category: 'Event',
    alternates: {
      canonical: CFP_URL,
    },
    openGraph: {
      title: 'NJSUG & PhilaSUG Joint In-Person Meeting 2026',
      description:
        'View the agenda for the NJSUG & PhilaSUG Joint In-Person Meeting in Princeton, NJ.',
      url: CFP_URL,
      type: 'website',
      siteName: 'NJSUG - New Jersey SAS Users Group',
      locale: 'en_US',
      images: [
        {
          url: `${SITE_URL}/images/NJSUGBanner.svg`,
          width: 1200,
          height: 630,
          alt: 'NJSUG banner',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NJSUG & PhilaSUG Joint In-Person Meeting 2026',
      description:
        'View the agenda and registration details for the October 9, 2026 joint event.',
      images: [`${SITE_URL}/images/NJSUGBanner.svg`],
    },
  }
}

export function getNjsugPhilaSug2026CfpStructuredData() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${CFP_URL}#event`,
    name: CFP_EVENT_NAME,
    description:
      'A joint in-person meeting from NJSUG and PhilaSUG for SAS users, statistical programmers, data scientists, clinical programmers, and analytics professionals.',
    startDate: CFP_EVENT_START,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: CFP_LOCATION_NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CFP_LOCATION_STREET,
        addressLocality: CFP_LOCATION_CITY,
        addressRegion: CFP_LOCATION_REGION,
        postalCode: CFP_LOCATION_POSTAL_CODE,
        addressCountry: 'US',
      },
    },
    organizer: [
      {
        '@type': 'Organization',
        name: 'NJSUG - New Jersey SAS Users Group',
        url: SITE_URL,
        email: CFP_CONTACT_EMAIL,
      },
      {
        '@type': 'Organization',
        name: 'PhilaSUG',
      },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'SAS users, statistical programmers, data scientists, and analytics professionals',
    },
    keywords: CFP_KEYWORDS.join(', '),
    image: `${SITE_URL}/images/NJSUGBanner.svg`,
    url: CFP_URL,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: CFP_REGISTRATION_URL,
    },
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'NJSUG & PhilaSUG Joint In-Person Meeting 2026',
    description:
      'Event page for the NJSUG & PhilaSUG Joint In-Person Meeting, including the agenda, event date, location, and registration information.',
    url: CFP_URL,
    about: {
      '@id': `${CFP_URL}#event`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey SAS Users Group',
      url: SITE_URL,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/home`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Events',
        item: `${SITE_URL}/events`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Joint In-Person Meeting 2026',
        item: CFP_URL,
      },
    ],
  }

  return [eventJsonLd, webPageJsonLd, breadcrumbJsonLd]
}

export function NjsugPhilaSug2026CallForPapersPage() {
  const structuredDataSchemas = getNjsugPhilaSug2026CfpStructuredData()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`njsug-philasug-2026-cfp-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#0A6F69] text-white">
        <Navbar />

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <Image
            src="/images/event-photos/Group_1.jpg"
            alt="NJSUG community event attendees"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#073f3c]/75" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A6F69]/25 via-[#0A6F69]/70 to-[#0A6F69]" />

          <div className="container mx-auto px-4 pb-16 pt-14 md:pb-24 md:pt-20">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                NJSUG &amp; PhilaSUG Joint
                <span className="block">In-Person Meeting 2026</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
                Join the regional SAS and life sciences community for a day of
                learning, connection, and shared expertise in Princeton, New Jersey.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={CFP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-[#F2FFA8]"
                >
                  <UserPlus className="size-4" aria-hidden="true" />
                  Register for Free
                </a>
                <Link
                  href="#agenda"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <CalendarDays className="size-4" aria-hidden="true" />
                  View Agenda
                </Link>
              </div>

              <div className="mt-10 grid max-w-5xl gap-3 text-sm font-medium text-white sm:grid-cols-2 lg:grid-cols-3">
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Registration due: {CFP_REGISTRATION_DEADLINE}
                </p>
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Event date: {CFP_EVENT_DATE}
                </p>
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Location: {CFP_LOCATION_CITY}, {CFP_LOCATION_REGION}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="container mx-auto px-4 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/75">
              Joint In-Person Meeting
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              One regional community, together for a day of learning
            </h2>
            <p className="mt-5 text-base leading-8 text-emerald-50/90">
              NJSUG and PhilaSUG are bringing SAS programmers, statisticians, data
              scientists, clinical programmers, and analytics professionals together
              in Princeton for practical presentations, new ideas, and meaningful
              professional connections.
            </p>
            <p className="mt-3 text-base leading-8 text-emerald-50/90">
              Come to learn from regional peers, explore developments in SAS and
              analytics, and share experiences with colleagues from across New Jersey,
              Philadelphia, and the surrounding life sciences community.
            </p>
          </div>

          <div className="mt-10 rounded-lg border border-white/15 bg-black/10 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/70">
                  Location
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {CFP_LOCATION_NAME}
                </h3>
                <p className="mt-2 text-base leading-7 text-emerald-50/90">
                  {CFP_LOCATION_STREET}, {CFP_LOCATION_CITY}, {CFP_LOCATION_REGION}{' '}
                  {CFP_LOCATION_POSTAL_CODE}
                </p>
              </div>
              <a
                href={CFP_LOCATION_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Open Map
              </a>
            </div>
          </div>
        </section>

        <section id="agenda" className="bg-[#F6FBF4] py-14 text-slate-950 md:py-16">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Event Agenda
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              Friday, October 9, 2026
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
              A full day of presentations, discussion, and networking with the NJSUG
              and PhilaSUG communities.
            </p>

            <ol className="mt-8 max-w-5xl overflow-hidden rounded-lg border border-emerald-900/10 bg-white shadow-sm">
              {agendaItems.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className={`grid gap-3 border-b border-emerald-900/10 p-5 last:border-b-0 md:grid-cols-[11rem_1fr] md:gap-6 ${
                    item.kind === 'break' ? 'bg-emerald-50/70' : ''
                  }`}
                >
                  <time className="text-sm font-semibold text-emerald-800">
                    {item.time}
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    {item.speaker ? (
                      <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
                        {item.speaker}
                      </p>
                    ) : null}
                    {item.description ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    ) : null}
                    {item.participants ? (
                      <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
                        {item.participants.map((participant) => (
                          <li key={participant}>{participant}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="registration"
          className="bg-[#E7F4ED] py-14 text-slate-950 md:py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                  Attendee Registration
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                  Register by {CFP_REGISTRATION_DEADLINE}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                  Attendance is free, but advance registration is mandatory for every
                  attendee. Join SAS programmers, statisticians, data scientists,
                  clinical programmers, and analytics professionals for a day of
                  learning, collaboration, and networking.
                </p>
              </div>
              <a
                href={CFP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                <UserPlus className="size-4" aria-hidden="true" />
                Register for Free
              </a>
            </div>

            <div className="mt-10 border-t border-emerald-900/15 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Why Attend
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {attendanceBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle2
                      className="mt-0.5 size-5 flex-none text-emerald-700"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/75">
                Join Us in Princeton
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Register for the joint NJSUG and PhilaSUG meeting.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-50/90">
                Review the agenda, register to attend, or contact NJSUG with questions
                about the upcoming joint meeting.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={CFP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#F2FFA8]"
              >
                <UserPlus className="size-4" aria-hidden="true" />
                Register for Free
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact NJSUG
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
