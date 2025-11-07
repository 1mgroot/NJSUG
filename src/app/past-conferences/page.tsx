import { Committee, springMeetingCommitteeMembers } from '@/components/Committee'
import { ContactUs } from '@/components/ContactUs'
import { EventBanner } from '@/components/EventBanner'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule, springMeetingSchedule } from '@/components/Schedule'
import type { Metadata } from 'next'

const SITE_URL = 'https://www.njsug.org'
const PAST_EVENT_URL = `${SITE_URL}/past-conferences`
const SPRING_MEETING_START = '2025-05-13T09:00:00-04:00'
const SPRING_MEETING_END = '2025-05-13T13:00:00-04:00'

const PAST_EVENT_KEYWORDS = [
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

export const metadata: Metadata = {
  title: 'Past Conferences - NJSUG 2025 Spring Meeting',
  description:
    "Explore NJSUG's 2025 Spring Meeting highlights featuring expert presentations on SAS, R, Python, Gen AI in Biometrics, and panel discussions on the future of statistical programming.",
  keywords: PAST_EVENT_KEYWORDS,
  category: 'Event',
  alternates: {
    canonical: PAST_EVENT_URL,
  },
  openGraph: {
    title: 'Past Conferences - NJSUG 2025 Spring Meeting',
    description:
      "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    url: PAST_EVENT_URL,
    type: 'article',
    siteName: 'NJSUG - New Jersey Statistical Users Group',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/images/event-photos/Group_1.jpg`,
        width: 1200,
        height: 630,
        alt: 'NJSUG 2025 Spring Meeting Group Photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Past Conferences - NJSUG 2025 Spring Meeting',
    description:
      "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    images: [`${SITE_URL}/images/event-photos/Group_1.jpg`],
  },
}

export default function PastConferences() {
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
      description: item.speaker ? `${item.title} — ${item.speaker}` : item.title,
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

  const pastEventJsonLd = {
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
      name: 'NJSUG - New Jersey Statistical Users Group',
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/event-photos/Group_1.jpg`,
    keywords: PAST_EVENT_KEYWORDS.join(', '),
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
        name: 'Past Conferences',
        item: PAST_EVENT_URL,
      },
    ],
  }

  const structuredDataSchemas = [pastEventJsonLd, committeeJsonLd, breadcrumbJsonLd]

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`past-conference-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />
        <EventBanner />
        <EventContent />
        <Schedule />
        <Committee />
        <ContactUs />
      </main>
    </>
  )
}
