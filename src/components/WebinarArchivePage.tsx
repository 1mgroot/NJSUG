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

type WebinarSpeaker = {
  name: string
  company: string
  title: string
  abstract: string[]
  bio: string[]
}

type DownloadItem = {
  label: string
  href: string
  description: string
}

const webinarSpeakers: WebinarSpeaker[] = [
  {
    name: 'Matt Becker',
    company: 'SAS Health and Life Science division',
    title: 'Prompt, Program, Submit: Generative AI for Faster SDTM, ADaM, and TLFs',
    abstract: [
      'The life sciences industry is seeing more requests for quick, compliant clinical trial submissions, which makes it even more important to improve programming operations. Generative artificial intelligence, especially large language models, could change how SDTM, ADaM, and TLFs are created in a big way.',
      'This presentation investigates practical applications of generative AI to automate and enhance clinical programming duties, from mapping raw data to SDTM domains to crafting ADaM specifications and generating common code or statistical summaries. The examples are aimed at reducing manual effort while preserving traceability, compliance, and productivity in SAS-based environments.',
    ],
    bio: [
      'Matt Becker is an Advisory Industry Consultant with the SAS Health and Life Science division. His more than 30 years of life science experience include over 8 years with SAS, concentrating on next-generation clinical trials, data management, analysis, advanced analytics, and deployment options in life sciences.',
    ],
  },
  {
    name: 'Karma Tarap',
    company: 'Clinical reporting innovation',
    title: 'Symphony: Composing Better Clinical Outputs',
    abstract: [
      'Symphony is a web application designed to simplify the creation and management of both mock shells and final outputs for tables, figures, and listings. Unlike static Word documents, it streamlines design, review, and standardization by connecting conceptualization directly to computation.',
      'Using reusable, standardized analysis blocks, Symphony automatically generates both mock shells and final outputs while enforcing the creation and reuse of CDISC ADaM metadata, supporting Analysis Results Metadata, and enabling exportable code for reproducibility. The platform also includes validation tracking, versioning, and metrics to improve transparency, traceability, quality, and timeline efficiency in clinical reporting.',
    ],
    bio: [
      'Karma Tarap is a seasoned professional with 20 years of experience in the pharmaceutical industry, specializing in innovation within statistical programming. With degrees in immunology, microbiology, bioinformatics, and data science, he brings a unique blend of expertise to his work.',
    ],
  },
]

const webinarDownloads: DownloadItem[] = [
  {
    label: 'Main Webinar Slides',
    href: '/downloads/2025-webinar/njsug-2025-main-slides.pdf',
    description: 'Opening, agenda, and closing deck from the NJSUG 2025 webinar.',
  },
  {
    label: 'Matt Becker Slides',
    href: '/downloads/2025-webinar/njsug-2025-matt-becker.pdf',
    description:
      'Slides for "Prompt, Program, Submit: Generative AI for Faster SDTM, ADaM, and TLFs."',
  },
  {
    label: 'Karma Tarap Slides',
    href: '/downloads/2025-webinar/njsug-2025-karma-tarap.pdf',
    description: 'Slides for "Symphony: Composing Better Clinical Outputs."',
  },
]

const speakerByTitle = new Map(webinarSpeakers.map((speaker) => [speaker.title, speaker]))

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
  'Matt Becker',
  'Karma Tarap',
  'clinical outputs',
  'generative AI',
]

export function getWebinarArchiveMetadata(): Metadata {
  return {
    title: 'NJSUG 2025 Webinar - Automation | Archive',
    description:
      'Explore the NJSUG 2025 webinar archive, including abstracts, speaker bios, and downloadable slides from Matt Becker and Karma Tarap.',
    keywords: WEBINAR_KEYWORDS,
    category: 'Event',
    alternates: {
      canonical: WEBINAR_ARCHIVE_URL,
    },
    openGraph: {
      title: 'NJSUG 2025 Webinar - Automation',
      description:
        'Explore the archived NJSUG webinar with speaker details and downloadable slides from Matt Becker and Karma Tarap.',
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
        'Explore the archived NJSUG webinar with speaker details and downloadable slides from Matt Becker and Karma Tarap.',
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

    const matchingSpeaker = speakerByTitle.get(item.topic)

    const subEvent: Record<string, unknown> = {
      '@type': 'Event',
      name: item.topic,
      description: matchingSpeaker
        ? matchingSpeaker.abstract.join(' ')
        : item.topic,
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
      'An archived NJSUG webinar focused on automation in statistical programming and clinical outputs, featuring Matt Becker and Karma Tarap.',
    startDate: '2025-11-21T10:00:00-05:00',
    endDate: '2025-11-21T11:00:00-05:00',
    eventStatus: 'https://schema.org/EventCompleted',
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

        <section className="container mx-auto px-4 pb-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                Archive Details
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Presentations and Slides</h2>
              <p className="mt-4 text-base leading-8 text-emerald-50/90">
                Explore the archived session abstracts, speaker bios, and downloadable slide decks
                from the NJSUG 2025 webinar.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {webinarSpeakers.map((speaker) => (
                <article
                  key={speaker.name}
                  className="rounded-3xl border border-white/10 bg-black/10 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                    {speaker.company}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{speaker.title}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/65">
                    {speaker.name}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                      Abstract
                    </p>
                    <div className="mt-4 space-y-4 text-base leading-8 text-emerald-50/90">
                      {speaker.abstract.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                      Speaker Bio
                    </p>
                    <div className="mt-4 space-y-4 text-base leading-8 text-emerald-50/90">
                      {speaker.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/65">
                Downloads
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {webinarDownloads.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    download
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10"
                  >
                    <p className="text-lg font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-wide text-emerald-100/70">
                      Download PDF
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

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
