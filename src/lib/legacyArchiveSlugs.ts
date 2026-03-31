import { legacyArchivePages } from '@/lib/legacyArchiveData'

const LEGACY_ARCHIVE_EXTENSION_PATTERN = /\.(html|php)$/i

export function toLegacyArchivePublicSlug(slug: string) {
  return slug.replace(LEGACY_ARCHIVE_EXTENSION_PATTERN, '')
}

export function resolveLegacyArchiveSlug(slug: string) {
  if (slug in legacyArchivePages) {
    return slug as keyof typeof legacyArchivePages
  }

  const htmlSlug = `${slug}.html`
  if (htmlSlug in legacyArchivePages) {
    return htmlSlug as keyof typeof legacyArchivePages
  }

  const phpSlug = `${slug}.php`
  if (phpSlug in legacyArchivePages) {
    return phpSlug as keyof typeof legacyArchivePages
  }

  return null
}

export function getLegacyArchiveStaticParams() {
  return Object.keys(legacyArchivePages).map((slug) => ({
    slug: toLegacyArchivePublicSlug(slug),
  }))
}
