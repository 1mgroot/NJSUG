import type { Metadata } from 'next'

import { webinarAgendaItems } from '@/components/Agenda'
import HeroAgendaSection from '@/components/HeroAgendaSection'
import { MeetOurTeam, webinarTeamMembers } from '@/components/MeetOurTeam'
import { Navbar } from '@/components/Navbar'
import { PastPhotos } from '@/components/PastPhotos'

export const SITE_URL = 'https://www.njsug.org'
export const REGISTRATION_URL =
  'https://events.teams.microsoft.com/event/f9e551e4-c281-41fc-a241-ee6189e210e9@b1c14d5c-3625-45b3-a430-9552373a0c2f'

export const WEBINAR_ARCHIVE_PATH = '/archive/njsug-2025-webinar'
export const WEBINAR_ARCHIVE_URL = `${SITE_URL}${WEBINAR_ARCHIVE_PATH}`

export const WEBINAR_KEYWORDS = [
  'NJSUG 2025',
  'automation webinar',
  'statistical programming automation',
  'SAS automation',
  'R automation',
  'Python automation',
  'data science webinar',
  'November 2025 webinar',
  'free statistical programming event',
  'biostatistics webinar',
  'NJSUG leadership team',
  'Merck statistical programming community',
  'pharmaceutical analytics meetup',
]

export function getWebinarArchiveMetadata(): Metadata {
  return {
    title: 'NJSUG 2025 Webinar - Automation | Archive',
    description:
      "Explore NJSUG's archived 2025 Webinar on Automation from November 21, 2025, featuring speakers on automation in statistical programming, SAS, R, Python, and data science.",
    keywords: WEBINAR_KEYWORDS,
    category: 'Event',
    alternates: {
      canonical: WEBINAR_ARCHIVE_URL,
    },
    openGraph: {
      title: 'NJSUG 2025 Webinar - Automation',
      description:
        'Explore the archived NJSUG webinar from November 21, 2025 on automation in statistical programming.',
      url: WEBINAR_ARCHIVE_URL,
      type: 'website',
      siteName: 'NJSUG - New Jersey SAS Users Group',
      locale: 'en_US',
      images: [
        {
          url: `${SITE_URL}/images/NJSUGBanner.svg`,
          width: 1200,
          height: 630,
          alt: 'NJSUG 2025 Webinar - Automation',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NJSUG 2025 Webinar - Automation',
      description:
        'Explore the archived NJSUG webinar from November 21, 2025 on automation in statistical programming.',
      images: [`${SITE_URL}/images/NJSUGBanner.svg`],
    },
  }
}

export function getWebinarStructuredData() {
  const teamMemberProfiles = webinarTeamMembers.map((member) => {
    const profile: Record<string, unknown> = {
      '@type': 'Person',
      name: member.name,
      jobTitle: member.focus ?? 'NJSUG 2025 Webinar Organizing Team',
      affiliation: {
        '@type': 'Organization',
        name: member.company,
      },
      memberOf: {
        '@type': 'Organization',
        name: 'NJSUG - New Jersey SAS Users Group',
        url: SITE_URL,
      },
    }

    if (member.image) {
      profile.image = `${SITE_URL}${member.image}`
    }

    return profile
  })

  const agendaSubEvents = webinarAgendaItems.map((item) => {
    const presenters = item.presenters
      .split(/,|&|and/gi)
      .map((name) => name.trim())
      .filter(Boolean)

    const subEvent: Record<string, unknown> = {
      '@type': 'Event',
      name: item.topic,
      description: item.topic,
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: REGISTRATION_URL,
      },
    }

    if (presenters.length) {
      subEvent.performer = presenters.map((name) => ({
        '@type': 'Person',
        name,
      }))
    }

    return subEvent
  })

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'NJSUG 2025 Webinar - Automation',
    description:
      'A webinar focused on automation in statistical programming, featuring expert speakers and industry insights.',
    startDate: '2025-11-21T10:00:00-05:00',
    endDate: '2025-11-21T11:00:00-05:00',
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
      validFrom: '2025-01-01T00:00:00-05:00',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Statistical programmers, data scientists, and biostatisticians',
    },
    keywords: WEBINAR_KEYWORDS.join(', '),
    image: `${SITE_URL}/images/NJSUGBanner.svg`,
    url: WEBINAR_ARCHIVE_URL,
    subEvent: agendaSubEvents,
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NJSUG - New Jersey SAS Users Group',
    url: SITE_URL,
    logo: `${SITE_URL}/images/NJSUGLogo.png`,
    description:
      'A professional organization for statistical programmers and data scientists in New Jersey, focusing on SAS, R, Python, and statistical software.',
    email: 'njsugcontact@gmail.com',
    sameAs: [SITE_URL],
    member: teamMemberProfiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Event information',
        email: 'njsugcontact@gmail.com',
        availableLanguage: ['English'],
      },
    ],
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
        name: 'NJSUG 2025 Webinar',
        item: WEBINAR_ARCHIVE_URL,
      },
    ],
  }

  return [eventJsonLd, organizationJsonLd, breadcrumbJsonLd]
}

export function WebinarArchivePage() {
  const structuredDataSchemas = getWebinarStructuredData()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#0A6F69] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />
        <HeroAgendaSection />
        <MeetOurTeam />
        <PastPhotos />

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
