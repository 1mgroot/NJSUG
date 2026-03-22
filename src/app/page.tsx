import type { Metadata } from 'next'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'
import { WEBINAR_ARCHIVE_PATH } from '@/components/WebinarArchivePage'

const SITE_URL = 'https://www.njsug.org'

export const metadata: Metadata = {
  title: 'NJSUG | Homepage Refresh in Progress',
  description:
    'The NJSUG homepage is being refreshed. Visit the archive to browse recent events including the NJSUG 2025 Webinar and Spring Meeting.',
  category: 'Organization',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'NJSUG | Homepage Refresh in Progress',
    description:
      'The NJSUG homepage is being refreshed. Visit the archive to browse recent events and presentations.',
    url: SITE_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey Statistical Users Group',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/images/NJSUGBanner.svg`,
        width: 1200,
        height: 630,
        alt: 'NJSUG homepage refresh in progress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NJSUG | Homepage Refresh in Progress',
    description:
      'The NJSUG homepage is being refreshed. Visit the archive to browse recent events and presentations.',
    images: [`${SITE_URL}/images/NJSUGBanner.svg`],
  },
}

export default function Home() {
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
    name: 'NJSUG - New Jersey Statistical Users Group',
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

        <section className="container mx-auto px-4 pb-20 pt-10 md:pb-24 md:pt-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
              Homepage Refresh
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A new NJSUG home page is on the way.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 md:text-lg">
              We&apos;re rebuilding the main landing page. In the meantime, the
              current event content has been preserved in the archive so visitors
              can still access recent NJSUG programs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/archive"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open Archive
              </Link>
              <Link
                href={WEBINAR_ARCHIVE_PATH}
                className="inline-flex items-center justify-center rounded-full border border-emerald-200/25 bg-emerald-300/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-300/15"
              >
                View NJSUG 2025 Webinar
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                <h2 className="text-xl font-semibold text-white">What&apos;s Available Now</h2>
                <p className="mt-3 text-sm leading-7 text-emerald-50/85">
                  The archive includes the NJSUG 2025 Webinar, the NJSUG 2025
                  Spring Meeting, and the legacy presentation collection.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                <h2 className="text-xl font-semibold text-white">Contact</h2>
                <p className="mt-3 text-sm leading-7 text-emerald-50/85">
                  For more information about NJSUG events and how to get involved,
                  email <span className="text-yellow-300">njsugcontact@gmail.com</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
