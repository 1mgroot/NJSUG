import { Navbar } from '@/components/Navbar'
import { PastPhotos } from '@/components/PastPhotos'
import { MeetOurTeam, webinarTeamMembers } from '@/components/MeetOurTeam'
import HeroAgendaSection from '@/components/HeroAgendaSection'
import { webinarAgendaItems } from '@/components/Agenda'
import type { Metadata } from 'next'

const SITE_URL = 'https://www.njsug.org'

const EVENT_KEYWORDS = [
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

export const metadata: Metadata = {
  title: 'NJSUG 2025 Webinar - Automation | Statistical Programming Conference',
  description:
    "Join NJSUG's 2025 Webinar on Automation on November 21, 2025. Learn about automation in statistical programming, SAS, R, Python, and data science from industry experts. Free registration available.",
  keywords: EVENT_KEYWORDS,
  category: 'Event',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'NJSUG 2025 Webinar - Automation',
    description:
      'Join us on November 21, 2025 for an expert-led webinar on Automation in statistical programming.',
    url: SITE_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey Statistical Users Group',
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
      'Join us on November 21, 2025 for an expert-led webinar on Automation in statistical programming.',
    images: [`${SITE_URL}/images/NJSUGBanner.svg`],
  },
}

export default function Home() {
  const registrationUrl =
    'https://events.teams.microsoft.com/event/f9e551e4-c281-41fc-a241-ee6189e210e9@b1c14d5c-3625-45b3-a430-9552373a0c2f'

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
        name: 'NJSUG - New Jersey Statistical Users Group',
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
        url: registrationUrl,
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
      url: registrationUrl,
    },
    organizer: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey Statistical Users Group',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      url: registrationUrl,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01T00:00:00-05:00',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Statistical programmers, data scientists, and biostatisticians',
    },
    keywords: EVENT_KEYWORDS.join(', '),
    image: `${SITE_URL}/images/NJSUGBanner.svg`,
    subEvent: agendaSubEvents,
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NJSUG - New Jersey Statistical Users Group',
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
    ],
  }

  const structuredDataSchemas = [eventJsonLd, organizationJsonLd, breadcrumbJsonLd]

  return (
    <>
      {/* Add structured data */}
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

        {/* Meet Our Team */}
        <MeetOurTeam />

        {/* Past Conferences - redesigned marquee */}
        <PastPhotos />

        {/* Contact Section */}
        <div id="contact" className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
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
