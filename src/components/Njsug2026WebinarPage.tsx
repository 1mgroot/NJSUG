import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'

export const SITE_URL = 'https://www.njsug.org'
export const REGISTRATION_URL =
  'https://events.teams.microsoft.com/event/716f1807-ff47-400f-8628-e4ebe61e63e5@b1c14d5c-3625-45b3-a430-9552373a0c2f'
export const WEBINAR_2026_PATH = '/events/njsug-2026-webinar'
export const WEBINAR_2026_URL = `${SITE_URL}${WEBINAR_2026_PATH}`
export const WEBINAR_2026_START = '2026-05-08T10:00:00-04:00'
export const WEBINAR_2026_END = '2026-05-08T11:40:00-04:00'

type AgendaItem = {
  time: string
  title: string
  presenter: string
  affiliation?: string
  abstract?: string
}

type SpeakerProfile = {
  displayName: string
  name: string
  affiliation: string
  talkTitle: string
  time: string
  abstract: string
  bio: string[]
  image: {
    src: string
    alt: string
  }
}

const agendaItems: AgendaItem[] = [
  {
    time: '10:00 AM - 10:05 AM ET',
    title: 'Opening Remarks',
    presenter: 'NJSUG',
  },
  {
    time: '10:05 AM - 10:35 AM ET',
    title: 'PROC PPF - Past, Present, Future',
    presenter: 'Danny Modlin',
    affiliation: 'SAS',
    abstract:
      'As SAS celebrates its 50th anniversary, take a moment to consider the past, present, and future of statistical programming. In this presentation, look back at our roots, the SAS procedural programming language, reminisce over graphical user interfaces that changed the way we interact with code, and look to the future where AI tools assist with our programming based on an iterative, back-and-forth conversation with SAS copilots.',
  },
  {
    time: '10:35 AM - 11:35 AM ET',
    title: 'Le petit SAS package - a workshop about the "Hello World" SAS package.',
    presenter: 'Bartosz "Bart" Jab\u0142o\u0144ski',
    affiliation: 'yabwon',
    abstract:
      'This presentation will introduce the idea of SAS packages and answer questions such as what they are, what kinds of jobs they can be used for, and how they can benefit users. Since this session is workshop based, it will also include a demonstration showing how easy it is to get started with SAS packages and build one.',
  },
  {
    time: '11:35 AM - 11:40 AM ET',
    title: 'Closing Remarks',
    presenter: 'NJSUG',
  },
]

const speakerProfiles: SpeakerProfile[] = [
  {
    displayName: 'Danny Modlin',
    name: 'Danny Modlin',
    affiliation: 'SAS',
    talkTitle: 'PROC PPF - Past, Present, Future',
    time: '10:05 AM - 10:35 AM ET',
    abstract:
      'As SAS celebrates its 50th anniversary, take a moment to consider the past, present, and future of statistical programming. In this presentation, look back at our roots, the SAS procedural programming language, reminisce over graphical user interfaces that changed the way we interact with code, and look to the future where AI tools assist with our programming based on an iterative, back-and-forth conversation with SAS copilots.',
    bio: [
      'Danny Modlin is a Senior Analytical Training Consultant at SAS world headquarters in Cary, North Carolina. Since starting at SAS in 2011, Danny has taught and developed courses that span many areas of statistics and SAS platforms, with a specialization in the application of Bayesian analyses. Danny received his Bachelor of Science in Mathematics from Elon College (now Elon University), a Masters of Mathematics from the University of North Carolina at Wilmington, and a Masters of Statistics from North Carolina State University.',
      "Prior to his time at SAS, Danny was a mathematics, statistics, and computer science teacher at the middle school, high school, and collegiate levels. Outside of SAS, Danny's interests include local sports and meteorology.",
    ],
    image: {
      src: '/images/2026-webinar/danny-modlin.jpg',
      alt: 'Portrait of Danny Modlin',
    },
  },
  {
    displayName: 'Bartosz Jab\u0142o\u0144ski',
    name: 'Bartosz "Bart" Jab\u0142o\u0144ski',
    affiliation: 'yabwon',
    talkTitle: 'Le petit SAS package - a workshop about the "Hello World" SAS package.',
    time: '10:35 AM - 11:35 AM ET',
    abstract:
      'This presentation will introduce the idea of SAS packages and answer questions such as what they are, what kinds of jobs they can be used for, and how they can benefit users. Since this session is workshop based, it will also include a demonstration showing how easy it is to get started with SAS packages and build one.',
    bio: [
      'Bartosz "Bart" Jab\u0142o\u0144ski is a consultant, SAS educator, and longtime analytics professional with experience across higher education, telecommunications, clinical trials, and banking. A seasoned SAS programmer since 2009, he has taught SAS Programming at the Faculty of Mathematics and Information Science at Warsaw University of Technology since 2015.',
      'Bart is also a frequent speaker at local and international SAS conferences and the author and developer of the SAS Packages Framework, a practical code-sharing framework for SAS. He is an active member of the Polish SAS Users Group (PolSUG) and is widely known for his hands-on, problem-solving approach to SAS programming.',
    ],
    image: {
      src: '/images/2026-webinar/bartosz-jablonski.jpeg',
      alt: 'Portrait of Bartosz "Bart" Jab\u0142o\u0144ski',
    },
  },
]

export const WEBINAR_2026_KEYWORDS = [
  'NJSUG 2026 webinar',
  'Future of Statistical Programming',
  'statistical programming webinar',
  'SAS webinar',
  'SAS packages',
  'Danny Modlin',
  'Bartosz Jab\u0142o\u0144ski',
  'May 2026 webinar',
  'online statistical programming event',
  'New Jersey SAS Users Group',
]

export function getNjsug2026WebinarMetadata(): Metadata {
  return {
    title: 'NJSUG 2026 Webinar - Future of Statistical Programming',
    description:
      'Register for the NJSUG 2026 Webinar on May 8, 2026 featuring Danny Modlin and Bartosz Jab\u0142o\u0144ski on the future of statistical programming, SAS, and SAS packages.',
    keywords: WEBINAR_2026_KEYWORDS,
    category: 'Event',
    alternates: {
      canonical: WEBINAR_2026_URL,
    },
    openGraph: {
      title: 'NJSUG 2026 Webinar - Future of Statistical Programming',
      description:
        'Join the NJSUG 2026 Webinar on May 8, 2026 for sessions from Danny Modlin and Bartosz Jab\u0142o\u0144ski.',
      url: WEBINAR_2026_URL,
      type: 'website',
      siteName: 'NJSUG - New Jersey SAS Users Group',
      locale: 'en_US',
      images: [
        {
          url: `${SITE_URL}/images/NJSUGBanner.svg`,
          width: 1200,
          height: 630,
          alt: 'NJSUG 2026 Webinar - Future of Statistical Programming',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NJSUG 2026 Webinar - Future of Statistical Programming',
      description:
        'Join the NJSUG 2026 Webinar on May 8, 2026 for sessions from Danny Modlin and Bartosz Jab\u0142o\u0144ski.',
      images: [`${SITE_URL}/images/NJSUGBanner.svg`],
    },
  }
}

export function getNjsug2026WebinarStructuredData() {
  const agendaSubEvents = agendaItems.map((item) => {
    const subEvent: Record<string, unknown> = {
      '@type': 'Event',
      name: item.title,
      description: item.abstract ?? item.title,
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: REGISTRATION_URL,
      },
      performer: [
        {
          '@type': 'Person',
          name: item.presenter,
        },
      ],
    }

    return subEvent
  })

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'NJSUG 2026 Webinar - Future of Statistical Programming',
    description:
      'An online NJSUG webinar exploring the future of statistical programming with sessions from Danny Modlin and Bartosz Jab\u0142o\u0144ski.',
    startDate: WEBINAR_2026_START,
    endDate: WEBINAR_2026_END,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: REGISTRATION_URL,
    },
    organizer: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey SAS Users Group',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      url: REGISTRATION_URL,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01T00:00:00-05:00',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Statistical programmers, data scientists, and biostatisticians',
    },
    keywords: WEBINAR_2026_KEYWORDS.join(', '),
    image: `${SITE_URL}/images/NJSUGBanner.svg`,
    url: WEBINAR_2026_URL,
    subEvent: agendaSubEvents,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
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
        name: 'NJSUG 2026 Webinar',
        item: WEBINAR_2026_URL,
      },
    ],
  }

  return [eventJsonLd, breadcrumbJsonLd]
}

export function Njsug2026WebinarPage() {
  const structuredDataSchemas = getNjsug2026WebinarStructuredData()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`njsug-2026-webinar-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#0A6F69] text-white">
        <Navbar />

        <section
          id="agenda"
          className="relative isolate overflow-hidden min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)] pb-20 md:pb-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(80vw_60vh_at_50%_0%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(55vw_55vw_at_50%_40%,rgba(255,255,255,0.12)_0%,transparent_65%)] opacity-40" />
            <div className="absolute inset-y-0 left-0 w-[12vw] bg-[linear-gradient(to_right,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
            <div className="absolute inset-y-0 right-0 w-[12vw] bg-[linear-gradient(to_left,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
            <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-[#0A6F69] via-[#0A6F69]/70 to-transparent" />
          </div>

          <div className="w-full flex justify-center pt-8 md:pt-12">
            <div className="w-full">
              <div className="container mx-auto px-4 text-center flex items-center justify-center">
                <div className="mx-auto max-w-[clamp(40rem,60vw,64rem)]">
                  <div className="mb-6 md:mb-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[radial-gradient(60%_140%_at_50%_50%,rgba(255,255,255,0.22)_0%,transparent_70%)] blur-md scale-110 opacity-60 transition-opacity duration-500 pointer-events-none" />
                      <span className="relative inline-flex items-center gap-2 text-[clamp(1.15rem,2vw,1.6rem)] font-semibold text-white/90">
                        <span className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                          <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent font-semibold tracking-wide">
                            NJSUG 2026 Webinar
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>

                  <h1 className="font-extrabold tracking-tight leading-[1.05] text-[clamp(1.85rem,4.6vw,4.1rem)] whitespace-nowrap">
                    Future of Statistical Programming
                  </h1>
                  <p className="mt-3 md:mt-4 text-white/90 text-[clamp(0.95rem,1.9vw,1.35rem)]">
                    Fri, May 8, 2026 | 10:00 AM - 11:40 AM ET
                  </p>

                  <div className="mt-[clamp(0.75rem,3vh,1.75rem)] flex justify-center">
                    <Link
                      href={REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Register for 2026 Webinar"
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DAFFA9]/40 via-white/20 to-[#DAFFA9]/40 blur-lg scale-110 opacity-70 group-hover:opacity-90 transition-all duration-500 animate-pulse" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DAFFA9]/20 via-transparent to-[#DAFFA9]/20 blur-xl scale-125 opacity-50 group-hover:opacity-70 transition-all duration-700" />
                        <span className="relative inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-[clamp(1.3rem,3vw,2.2rem)] py-[clamp(0.8rem,1.4vw,1.2rem)] text-[clamp(1rem,1.3vw,1.15rem)] font-semibold text-white backdrop-blur-md shadow-[0_8px_32px_rgba(218,255,169,0.3)] transition-all duration-300 hover:bg-white/25 hover:shadow-[0_12px_40px_rgba(218,255,169,0.4)] group-hover:scale-105">
                          Register
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-6 flex w-full justify-center px-4 md:px-8">
                <div className="w-full max-w-[clamp(60rem,92vw,100rem)]">
                  <div className="relative mx-auto w-full max-w-[clamp(48rem,78vw,80rem)] text-left">
                    <div className="relative rounded-xl bg-white/12 ring-1 ring-white/20 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(140%_100%_at_10%_-10%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(100%_90%_at_90%_10%,rgba(255,255,255,0.12),transparent_40%)]"
                        aria-hidden="true"
                      />

                      <div className="relative p-4 md:p-5">
                        <div className="mb-4 md:mb-5">
                          <h2 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                            Agenda
                          </h2>
                        </div>

                        <div className="divide-y divide-white/10">
                          {agendaItems.map((item) => (
                            <div
                              key={`${item.time}-${item.title}`}
                              className="grid grid-cols-1 gap-4 py-3 md:py-3.5"
                            >
                              <div className="md:col-span-12">
                                <div className="text-white/90 text-sm md:text-base leading-relaxed">
                                  <div className="font-semibold text-white text-[0.98rem]">
                                    {item.title}
                                  </div>
                                  <div className="mt-1 text-[0.9rem] text-white/70">
                                    {item.presenter}
                                  </div>
                                  <div className="mt-1 text-[0.84rem] text-white/60">
                                    {item.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent to-[#0A6F69]"
            aria-hidden="true"
          />
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                  Speakers
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Speaker Lineup</h2>
              </div>

              <div className="mt-8 space-y-6">
                {speakerProfiles.map((speaker) => (
                  <article
                    key={speaker.name}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-black/10"
                  >
                    <div className="grid h-full gap-6 p-6 md:grid-cols-[160px_minmax(0,1fr)] md:items-start">
                      <div className="flex justify-center md:justify-start">
                        <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)]">
                          <Image
                            src={speaker.image.src}
                            alt={speaker.image.alt}
                            fill
                            sizes="160px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                          {speaker.time}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {speaker.talkTitle}
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/65">
                          {speaker.displayName}
                        </p>
                        <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                          {speaker.affiliation}
                        </p>
                        <p className="mt-4 text-base leading-8 text-emerald-50/90">
                          {speaker.abstract}
                        </p>
                        <div className="mt-6 border-t border-white/10 pt-6">
                          <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                            Presenter Bio
                          </p>
                        </div>
                        <div className="mt-4 space-y-4 text-base leading-8 text-emerald-50/90">
                          {speaker.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="contact" className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <p className="mb-4 text-lg">
                For more information about NJSUG events and how to get involved:
              </p>
              <p className="text-xl font-semibold">
                Contact us at: <span className="text-yellow-300">njsugcontact@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
