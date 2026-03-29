import Image from 'next/image'

import { springMeetingCommitteeMembers } from '@/components/Committee'
import { ContactUs } from '@/components/ContactUs'
import { EventBanner } from '@/components/EventBanner'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule, springMeetingSchedule } from '@/components/Schedule'

export const SITE_URL = 'https://www.njsug.org'
export const SPRING_MEETING_ARCHIVE_PATH = '/archive/njsug-2025-spring-meeting'
export const SPRING_MEETING_ARCHIVE_URL = `${SITE_URL}${SPRING_MEETING_ARCHIVE_PATH}`
export const SPRING_MEETING_START = '2025-05-13T09:00:00-04:00'
export const SPRING_MEETING_END = '2025-05-13T13:00:00-04:00'

export const SPRING_MEETING_KEYWORDS = [
  'NJSUG past events',
  'NJSUG 2025 Spring Meeting',
  'statistical programming conference',
  'SAS conference',
  'R Shiny presentations',
  'Python workshops',
  'Gen AI biometrics',
  'clinical trials statistics',
  'pharmaceutical programming',
  'statistical software event',
  'data science conference New Jersey',
]

export function getSpringMeetingStructuredData() {
  const eventLocation = {
    '@type': 'Place',
    name: 'Hyatt House Branchburg / Bridgewater',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3141 US-22',
      addressLocality: 'Branchburg',
      addressRegion: 'NJ',
      postalCode: '08876',
      addressCountry: 'US',
    },
  }

  const committeeProfiles = springMeetingCommitteeMembers.map((member) => {
    const profile: Record<string, unknown> = {
      '@type': 'Person',
      name: member.name,
      affiliation: {
        '@type': 'Organization',
        name: member.company,
      },
    }

    if (member.image) {
      profile.image = `${SITE_URL}${member.image}`
    }

    return profile
  })

  const scheduleEvents = springMeetingSchedule.map((item) => {
    const speakers = item.speaker
      ?.split(';')
      .map((segment) => segment.trim())
      .filter(Boolean)
      .map((segment) => {
        const [namePart, ...affiliationParts] = segment.split(',').map((part) => part.trim())
        const person: Record<string, unknown> = {
          '@type': 'Person',
          name: namePart,
        }

        if (affiliationParts.length) {
          person.affiliation = {
            '@type': 'Organization',
            name: affiliationParts.join(', '),
          }
        }

        return person
      })

    const session: Record<string, unknown> = {
      '@type': 'Event',
      name: item.title,
      description: item.speaker ? `${item.title} - ${item.speaker}` : item.title,
      eventStatus: 'https://schema.org/EventCompleted',
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Session time',
          value: item.time,
        },
      ],
    }

    if (speakers?.length) {
      session.performer = speakers
    }

    if (item.isBreak) {
      session.eventType = 'Break'
    }

    return session
  })

  const springMeetingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'NJSUG 2025 Spring Meeting',
    description:
      'NJSUG 2025 Spring Meeting in Branchburg, NJ featuring keynote talks, Gen AI in biometrics sessions, R Shiny workshops, and a panel on the future of statistical programming.',
    startDate: SPRING_MEETING_START,
    endDate: SPRING_MEETING_END,
    eventStatus: 'https://schema.org/EventCompleted',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: eventLocation,
    organizer: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey Area SAS Users Group',
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/event-photos/Group_1.jpg`,
    keywords: SPRING_MEETING_KEYWORDS.join(', '),
    subEvent: scheduleEvents,
    performer: committeeProfiles,
  }

  const committeeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': committeeProfiles,
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
        name: 'Archive',
        item: `${SITE_URL}/archive`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'NJSUG 2025 Spring Meeting',
        item: SPRING_MEETING_ARCHIVE_URL,
      },
    ],
  }

  return [springMeetingJsonLd, committeeJsonLd, breadcrumbJsonLd]
}

export function SpringMeetingArchivePage() {
  const structuredDataSchemas = getSpringMeetingStructuredData()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`spring-meeting-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />
        <EventBanner />
        <EventContent />
        <Schedule />
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-80" aria-hidden="true">
              <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-teal-400/30 blur-3xl" />
            </div>
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0%,_rgba(10,111,105,0)_65%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                2025 Spring Meeting Team
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-base text-white/75 sm:text-lg">
                The people making the NJSUG 2025 Spring Meeting possible through thoughtful planning, execution, and community leadership.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {springMeetingCommitteeMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border border-white/20 shadow-[0_8px_30px_rgba(7,157,149,0.25)]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} headshot`}
                        fill
                        sizes="(max-width: 640px) 144px, (max-width: 1024px) 144px, 160px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index < 2}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10">
                        <svg
                          viewBox="0 0 64 64"
                          className="h-20 w-20 text-white/60"
                          aria-hidden="true"
                        >
                          <circle cx="32" cy="24" r="14" fill="currentColor" opacity="0.85" />
                          <path
                            d="M12 54c0-11.046 8.954-20 20-20s20 8.954 20 20v2H12z"
                            fill="currentColor"
                            opacity="0.65"
                          />
                        </svg>
                        <span className="sr-only">Headshot coming soon</span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    {member.company ? (
                      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/60">
                        {member.company}
                      </p>
                    ) : null}
                  </div>

                  <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </article>
              ))}
            </div>
          </div>
        </section>
        <ContactUs />
      </main>
    </>
  )
}
