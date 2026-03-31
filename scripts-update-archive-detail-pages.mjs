import { readFileSync, writeFileSync } from 'node:fs'

const detailPage = `import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Navbar } from '@/components/Navbar'
import { legacyArchivePages } from '@/lib/legacyArchiveData'

const SITE_URL = 'https://www.njsug.org'

type ArchiveDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return Object.keys(legacyArchivePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ArchiveDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = legacyArchivePages[slug as keyof typeof legacyArchivePages]

  if (!page) {
    return {
      title: 'Archive Detail Not Found',
    }
  }

  return {
    title: page.title,
    description: \
      \
        \
          \
            \
              \
                \`Archived NJSUG presentation details for \${page.title}.\`,
    alternates: {
      canonical: \`${SITE_URL}/archive/\${slug}\`,
    },
    openGraph: {
      title: \`${'${page.title}'} | NJSUG Archive\`,
      description: \`Archived NJSUG presentation details for \${page.title}.\`,
      url: \`${SITE_URL}/archive/\${slug}\`,
      type: 'article',
      siteName: 'NJSUG - New Jersey Statistical Users Group',
      locale: 'en_US',
    },
  }
}

export default async function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
  const { slug } = await params
  const page = legacyArchivePages[slug as keyof typeof legacyArchivePages]

  if (!page) {
    notFound()
  }

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
`

writeFileSync('src/app/archive/[slug]/page.tsx', detailPage)

const archivePath = 'src/app/archive/page.tsx'
let archivePage = readFileSync(archivePath, 'utf8')
archivePage = archivePage.replace("const WAYBACK_BASE = 'https://web.archive.org/web/20240419185616/http://www.njsug.net/'\r\n", '')
archivePage = archivePage.replace("const archiveLink = (path: string) => `${WAYBACK_BASE}${path}`\r\n", "const archiveDetailLink = (path: string) => {\r\n  const [file, hash] = path.split('#')\r\n  return hash ? `/archive/${file}#${hash}` : `/archive/${file}`\r\n}\r\n")
archivePage = archivePage.replace(/archiveLink\(/g, 'archiveDetailLink(')
archivePage = archivePage.replace(
  'presenting it in the current njsug.org layout. Presentation links open the\r\n              corresponding archived pages from the April 19, 2024 Wayback Machine snapshot.',
  'presenting it in the current njsug.org layout. Detail pages now open inside\r\n              njsug.org, while some historical downloads and media still use the\r\n              preserved April 19, 2024 Wayback snapshot.'
)
writeFileSync(archivePath, archivePage)

const globalsPath = 'src/app/globals.css'
let globals = readFileSync(globalsPath, 'utf8')
const legacyStyles = `

.legacy-archive-content {
  line-height: 1.75;
}

.legacy-archive-content h2,
.legacy-archive-content h3 {
  color: #0f172a;
  font-weight: 700;
  line-height: 1.25;
}

.legacy-archive-content h2 {
  margin-top: 2rem;
  font-size: 1.75rem;
}

.legacy-archive-content h2:first-child {
  margin-top: 0;
}

.legacy-archive-content h3 {
  margin-top: 1.5rem;
  font-size: 1.125rem;
}

.legacy-archive-content p,
.legacy-archive-content ul,
.legacy-archive-content ol {
  margin-top: 1rem;
  color: #334155;
}

.legacy-archive-content ul,
.legacy-archive-content ol {
  padding-left: 1.5rem;
}

.legacy-archive-content a {
  color: #0f766e;
  text-decoration: underline;
  text-decoration-color: rgb(15 118 110 / 0.35);
  text-underline-offset: 0.2em;
}

.legacy-archive-content a:hover {
  color: #115e59;
  text-decoration-color: rgb(17 94 89 / 0.65);
}

.legacy-archive-content img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
}

.legacy-archive-content table {
  width: 100%;
}

.legacy-archive-content .container {
  margin-top: 2rem;
}

.legacy-archive-content .container:first-child {
  margin-top: 0;
}
`

if (!globals.includes('.legacy-archive-content')) {
  writeFileSync(globalsPath, `${globals}${legacyStyles}`)
}
