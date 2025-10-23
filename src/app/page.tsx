import { Navbar } from '@/components/Navbar'
import { PastPhotos } from '@/components/PastPhotos'
import HeroAgendaSection from '@/components/HeroAgendaSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "NJSUG 2025 Webinar - Automation | Statistical Programming Conference",
  description: "Join NJSUG's 2025 Webinar on Automation on November 21, 2025. Learn about automation in statistical programming, SAS, R, Python, and data science from industry experts. Free registration available.",
  keywords: [
    "NJSUG 2025",
    "automation webinar",
    "statistical programming automation",
    "SAS automation",
    "R automation",
    "Python automation",
    "data science webinar",
    "November 2025 webinar",
    "free statistical programming event",
    "biostatistics webinar"
  ],
  openGraph: {
    title: "NJSUG 2025 Webinar - Automation",
    description: "Join us on November 21, 2025 for an expert-led webinar on Automation in statistical programming.",
    url: "https://www.njsug.org",
    type: "website",
    images: [
      {
        url: "/images/NJSUGBanner.svg",
        width: 1200,
        height: 630,
        alt: "NJSUG 2025 Webinar - Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJSUG 2025 Webinar - Automation",
    description: "Join us on November 21, 2025 for an expert-led webinar on Automation in statistical programming.",
    images: ["/images/NJSUGBanner.svg"],
  },
  alternates: {
    canonical: "https://www.njsug.org",
  },
}

export default function Home() {
  // Structured Data (JSON-LD) for the event
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'NJSUG 2025 Webinar - Automation',
    description: 'A webinar focused on automation in statistical programming, featuring expert speakers and industry insights.',
    startDate: '2025-11-21T10:00:00-05:00',
    endDate: '2025-11-21T11:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: 'https://events.teams.microsoft.com/event/f9e551e4-c281-41fc-a241-ee6189e210e9@b1c14d5c-3625-45b3-a430-9552373a0c2f'
    },
    organizer: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey Statistical Users Group',
      url: 'https://www.njsug.org'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://events.teams.microsoft.com/event/f9e551e4-c281-41fc-a241-ee6189e210e9@b1c14d5c-3625-45b3-a430-9552373a0c2f',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01T00:00:00-05:00'
    },
    image: 'https://www.njsug.org/images/NJSUGBanner.svg'
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NJSUG - New Jersey Statistical Users Group',
    url: 'https://www.njsug.org',
    logo: 'https://www.njsug.org/images/NJSUGLogo.png',
    description: 'A professional organization for statistical programmers and data scientists in New Jersey, focusing on SAS, R, Python, and statistical software.',
    email: 'njsugcontact@gmail.com',
    sameAs: [
      'https://www.njsug.org'
    ]
  }

  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      <main className="min-h-screen bg-[#0A6F69] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />
        <HeroAgendaSection />

      {/* Past Conferences - redesigned marquee */}
      <PastPhotos />
      
      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg mb-4">
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
