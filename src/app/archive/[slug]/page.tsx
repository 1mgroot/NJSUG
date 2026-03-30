import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Navbar } from '@/components/Navbar'
import { legacyArchivePages } from '@/lib/legacyArchiveData'
import {
  getLegacyArchiveStaticParams,
  resolveLegacyArchiveSlug,
  toLegacyArchivePublicSlug,
} from '@/lib/legacyArchiveSlugs'

const SITE_URL = 'https://www.njsug.org'

type ArchiveDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getLegacyArchiveStaticParams()
}

export async function generateMetadata({ params }: ArchiveDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const resolvedSlug = resolveLegacyArchiveSlug(slug)

  if (!resolvedSlug) {
    return {
      title: 'Archive Detail Not Found',
    }
  }

  const page = legacyArchivePages[resolvedSlug]
  const canonicalSlug = toLegacyArchivePublicSlug(resolvedSlug)

  return {
    title: page.title,
    description: `Archived NJSUG presentation details for ${page.title}.`,
    alternates: {
      canonical: `${SITE_URL}/archive/${canonicalSlug}`,
    },
    openGraph: {
      title: `${page.title} | NJSUG Archive`,
      description: `Archived NJSUG presentation details for ${page.title}.`,
      url: `${SITE_URL}/archive/${canonicalSlug}`,
      type: 'article',
      siteName: 'NJSUG - New Jersey SAS Users Group',
      locale: 'en_US',
    },
  }
}

export default async function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
  const { slug } = await params
  const resolvedSlug = resolveLegacyArchiveSlug(slug)

  if (!resolvedSlug) {
    notFound()
  }

  const page = legacyArchivePages[resolvedSlug]

  return (
    <main className="min-h-screen bg-[#007A73] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-16 pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
              Legacy Detail
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-50/90 md:text-lg">
              This archived detail page is now hosted within njsug.org. Some downloads,
              images, and external references still point to preserved archived files while
              we continue moving historical assets.
            </p>
            <div className="mt-6">
              <Link
                href="/archive"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50 transition hover:bg-white/15"
              >
                Back to Archive
              </Link>
            </div>
          </div>

          <article className="legacy-archive-content mt-8 rounded-[2rem] border border-white/15 bg-white px-6 py-8 text-slate-800 shadow-2xl shadow-black/10 md:px-10 md:py-10">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </article>
        </div>
      </section>
    </main>
  )
}
