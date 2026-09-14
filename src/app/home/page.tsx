import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, UserPlus } from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import {
  CFP_EVENT_COST,
  CFP_EVENT_DATE,
  CFP_LOCATION_NAME,
  CFP_PATH,
  CFP_REGISTRATION_DEADLINE,
  CFP_REGISTRATION_URL,
} from '@/components/NjsugPhilaSug2026CallForPapersPage'
import {
  WEBINAR_2026_PATH,
} from '@/components/Njsug2026WebinarPage'
import { SPRING_MEETING_ARCHIVE_PATH } from '@/components/SpringMeetingArchivePage'
import { WEBINAR_ARCHIVE_PATH } from '@/components/WebinarArchivePage'

const SITE_URL = 'https://www.njsug.org'
const HOME_URL = `${SITE_URL}/home`

const recentPrograms = [
  {
    title: 'NJSUG 2026 Webinar',
    eyebrow: 'Recent Archive',
    description:
      'Watch the Future of Statistical Programming recording and access shared materials.',
    href: WEBINAR_2026_PATH,
    cta: 'Open Event Page',
  },
  {
    title: 'NJSUG 2025 Webinar',
    eyebrow: 'Recent Archive',
    description:
      'Explore the archived 2025 automation webinar, including agenda and event details.',
    href: WEBINAR_ARCHIVE_PATH,
    cta: 'Open Archive Page',
  },
  {
    title: 'NJSUG 2025 Spring Meeting',
    eyebrow: 'Recent Archive',
    description:
      'Revisit the 2025 Spring Meeting program, speakers, team section, and event photos.',
    href: SPRING_MEETING_ARCHIVE_PATH,
    cta: 'Open Archive Page',
  },
]

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Join NJSUG for webinars, meetings, and community learning around SAS, statistical programming, and related analytics tools.',
  category: 'Organization',
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: 'NJSUG - New Jersey SAS Users Group',
    description:
      'Join NJSUG for webinars, meetings, and community learning around SAS, statistical programming, and related analytics tools.',
    url: HOME_URL,
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
    title: 'NJSUG - New Jersey SAS Users Group',
    description:
      'Join NJSUG for webinars, meetings, and community learning around SAS, statistical programming, and related analytics tools.',
    images: [`${SITE_URL}/images/NJSUGBanner.svg`],
  },
}

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NJSUG - New Jersey SAS Users Group',
    url: SITE_URL,
    logo: `${SITE_URL}/images/NJSUGLogo.png`,
    description:
      'A volunteer-based professional organization for SAS users and statistical programmers in the New Jersey and New York area.',
    email: 'njsugcontact@gmail.com',
    sameAs: [SITE_URL],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'General inquiries',
        email: 'njsugcontact@gmail.com',
        availableLanguage: ['English'],
      },
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NJSUG - New Jersey SAS Users Group',
    url: SITE_URL,
  }

  const structuredDataSchemas = [organizationJsonLd, websiteJsonLd]

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#0A6F69] text-white">
        <Navbar />

        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(80vw_60vh_at_50%_0%,rgba(255,255,255,0.16)_0%,transparent_72%)] opacity-60" />
            <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 pb-16 pt-10 md:pb-20 md:pt-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
                  Welcome
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  New Jersey SAS Users Group
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
                  NJSUG is a volunteer-based professional community for people interested
                  in SAS software, statistical programming, and related analytical tools
                  across New Jersey and nearby areas.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-50/85 md:text-lg">
                  We provide a place to share knowledge, exchange ideas, and learn from
                  webinars, meetings, and community-led programming content.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={CFP_PATH}
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200/25 bg-emerald-300/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-300/15"
                  >
                    View Event Details
                  </Link>
                  <Link
                    href="/join-mailing-list"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Join Mailing List
                  </Link>
                  <Link
                    href="/archive"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Explore Archive
                  </Link>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-white/15 bg-black/10 p-6 shadow-xl shadow-black/10 backdrop-blur-sm md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                  Upcoming Event
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  NJSUG &amp; PhilaSUG Joint In-Person Meeting 2026
                </h2>
                <p className="mt-2 text-lg text-emerald-50/95">
                  In-person event in Princeton, New Jersey
                </p>
                <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  <div className="py-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-emerald-100/65">
                      Date
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-white">
                      {CFP_EVENT_DATE}
                    </dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-emerald-100/65">
                      Location
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-white">
                      {CFP_LOCATION_NAME}
                    </dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-emerald-100/65">
                      Cost
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-white">
                      {CFP_EVENT_COST}
                    </dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-emerald-100/65">
                      Registration Due
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-white">
                      {CFP_REGISTRATION_DEADLINE}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={CFP_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#F2FFA8]"
                  >
                    <UserPlus className="mr-2 size-4" aria-hidden="true" />
                    Register for Free
                  </a>
                  <Link
                    href={CFP_PATH}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Event Details
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8 shadow-lg shadow-black/10 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                About NJSUG
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                A local users group built around practical learning
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-emerald-50/90">
                <p>
                  NJSUG brings together SAS users, statistical programmers, data
                  scientists, and analytics professionals for community-led learning.
                </p>
                <p>
                  Our programs focus on real-world talks, workshops, and discussions
                  spanning SAS, R, Python, reporting workflows, and modern analytical
                  tooling.
                </p>
                <p>
                  Membership and participation are open to anyone interested in the
                  community. We welcome attendees from industry, academia, and related
                  fields.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div className="relative h-full min-h-[320px]">
                <Image
                  src="/images/event-photos/Group_1.jpg"
                  alt="NJSUG community event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A6F69]/90 via-[#0A6F69]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/75">
                    Community
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Programs designed for sharing ideas and experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16 md:pb-20">
          <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8 shadow-lg shadow-black/10 backdrop-blur-sm">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                Programs
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Recent highlights
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {recentPrograms.map((program) => (
                <div
                  key={program.title}
                  className="rounded-3xl border border-white/10 bg-black/10 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/65">
                    {program.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {program.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-emerald-50/85">
                    {program.description}
                  </p>
                  <Link
                    href={program.href}
                    className="mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    {program.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-black/10 p-8 text-center shadow-lg shadow-black/10 backdrop-blur-sm md:p-10">
            <h2 className="text-3xl font-semibold text-white">Stay Connected</h2>
            <p className="mt-4 text-base leading-8 text-emerald-50/90 md:text-lg">
              Join the NJSUG mailing list for event announcements, community updates,
              and future programming news.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/join-mailing-list"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Join Mailing List
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Contact NJSUG
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
