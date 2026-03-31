import { writeFileSync } from 'node:fs'

const SNAPSHOT = '20240419185616'
const WAYBACK_PREFIX = `https://web.archive.org/web/${SNAPSHOT}/`
const LEGACY_BASE = 'http://www.njsug.net/'
const LEGACY_FILES = [
  'm2008q4.html',
  'm2009q1.html',
  'm2009q2.html',
  'm2009q3.php',
  'm2009q4.php',
  'm2010q1.php',
  'm2010q2.php',
  'm2010q3.php',
  'm2010q4.php',
  'm2011q1.php',
  'm2011q2.php',
  'm2011q4.php',
  'm2012q2.php',
  'm2013q4.php',
  'meet1998.html',
  'meet1999.html',
  'meet2000.html',
  'meet2001.html',
  'meet2002.html',
  'meet2003.html',
  'meet2004.html',
  'meet2005.html',
]

const legacyFileSet = new Set(LEGACY_FILES)

function stripTags(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&reg;/gi, '')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function findTagEnd(html, startIndex) {
  let quote = null

  for (let index = startIndex; index < html.length; index += 1) {
    const char = html[index]
    if (quote) {
      if (char === quote) {
        quote = null
      }
      continue
    }

    if (char === '"' || char === "'") {
      quote = char
      continue
    }

    if (char === '>') {
      return index
    }
  }

  return -1
}

function extractBalancedTag(html, startIndex) {
  const startTagEnd = findTagEnd(html, startIndex)
  if (startTagEnd === -1) {
    throw new Error(`Could not find tag end at index ${startIndex}`)
  }

  const startTag = html.slice(startIndex, startTagEnd + 1)
  const tagMatch = startTag.match(/^<([a-z0-9]+)/i)
  if (!tagMatch) {
    throw new Error(`Could not determine tag name at index ${startIndex}`)
  }

  const tagName = tagMatch[1]
  const tagPattern = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi')
  tagPattern.lastIndex = startIndex

  let depth = 0
  let match
  while ((match = tagPattern.exec(html))) {
    const token = match[0]
    const isClosing = /^<\//.test(token)
    const isSelfClosing = /\/>$/.test(token)

    if (!isClosing) {
      depth += 1
    }

    if (isClosing) {
      depth -= 1
    }

    if (!isClosing && isSelfClosing) {
      depth -= 1
    }

    if (depth === 0) {
      return html.slice(startIndex, tagPattern.lastIndex)
    }
  }

  throw new Error(`Could not find closing tag for <${tagName}>`)
}

function stripModernChrome(fragment) {
  let cleaned = fragment

  const startMarker = cleaned.indexOf('page content starts')
  if (startMarker !== -1) {
    const startCommentEnd = cleaned.indexOf('-->', startMarker)
    if (startCommentEnd !== -1) {
      cleaned = cleaned.slice(startCommentEnd + 3)
    }
  }

  const endMarker = cleaned.lastIndexOf('page content ends')
  if (endMarker !== -1) {
    const endCommentStart = cleaned.lastIndexOf('<!--', endMarker)
    if (endCommentStart !== -1) {
      let trimStart = endCommentStart
      const dividerCommentStart = cleaned.lastIndexOf('<!--', endCommentStart - 1)
      if (dividerCommentStart !== -1) {
        const dividerComment = cleaned.slice(dividerCommentStart, endCommentStart)
        if (/^\s*<!--\s*[.\- ]+\s*-->\s*$/s.test(dividerComment)) {
          trimStart = dividerCommentStart
        }
      }
      cleaned = cleaned.slice(0, trimStart)
    }
  }

  return cleaned.trim()
}

function extractContent(html, slug) {
  const modernContentMatch = html.match(/<div[^>]+id="content"[^>]*>/i)
  if (modernContentMatch?.index != null) {
    const contentStart = findTagEnd(html, modernContentMatch.index)
    const footerIndex = html.indexOf('<div id="footer">', contentStart + 1)
    if (contentStart !== -1 && footerIndex !== -1 && footerIndex > contentStart) {
      const cleanedModernContent = stripModernChrome(
        html.slice(contentStart + 1, footerIndex)
      )

      if (cleanedModernContent) {
        return cleanedModernContent
      }
    }

    try {
      const contentDiv = extractBalancedTag(html, modernContentMatch.index)
      const innerStart = contentDiv.indexOf('>') + 1
      const innerEnd = contentDiv.lastIndexOf('</div>')
      const cleanedModernContent = stripModernChrome(
        contentDiv.slice(innerStart, innerEnd)
      )

      if (cleanedModernContent) {
        return cleanedModernContent
      }
    } catch {
      const startMarker = html.indexOf('page content starts')
      const endMarker = html.indexOf('page content ends')
      if (startMarker !== -1 && endMarker !== -1 && endMarker > startMarker) {
        const start = html.indexOf('-->', startMarker)
        if (start !== -1) {
          return stripModernChrome(html.slice(start + 3, endMarker))
        }
      }
    }
  }

  const legacyTableMatch = html.match(/<table[^>]+id="AutoNumber3"[^>]*>/i)
  if (legacyTableMatch?.index != null) {
    const tableHtml = extractBalancedTag(html, legacyTableMatch.index)
    const cellMatches = [...tableHtml.matchAll(/<td\b[^>]*width="100%"[^>]*>/gi)]
    const contentCell = cellMatches.at(-1)

    if (contentCell?.index != null) {
      const cellHtml = extractBalancedTag(tableHtml, contentCell.index)
      const innerStart = cellHtml.indexOf('>') + 1
      const innerEnd = cellHtml.lastIndexOf('</td>')
      return cellHtml.slice(innerStart, innerEnd).trim()
    }
  }

  throw new Error(`Could not extract content for ${slug}`)
}

function extractTitle(html, content, slug) {
  const headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)
  if (headingMatch) {
    const heading = stripTags(headingMatch[1])
    if (heading) return heading
  }

  const centeredBoldMatch = content.match(/<p[^>]*align="center"[^>]*>\s*<b>([\s\S]*?)<\/b>/i)
  if (centeredBoldMatch) {
    const heading = stripTags(centeredBoldMatch[1])
    if (heading) return heading
  }

  const styledCenteredBoldMatch = content.match(/<p[^>]*style="[^"]*text-align:\s*center[^"]*"[^>]*>[\s\S]*?<b>([\s\S]*?)<\/b>/i)
  if (styledCenteredBoldMatch) {
    const heading = stripTags(styledCenteredBoldMatch[1])
    if (heading) return heading
  }

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i)
  if (titleMatch) {
    const title = stripTags(titleMatch[1]).replace(/^NJSUG\s*[-:]*\s*/i, '').trim()
    if (title && title.toUpperCase() !== 'NJSUG') return title
  }

  return slug
}

function normalizeArchivedUrl(value) {
  if (!value || value.startsWith('mailto:') || value.startsWith('javascript:') || value.startsWith('#')) {
    return value
  }

  const absoluteWayback = value.match(/^https?:\/\/web\.archive\.org\/web\/\d+(?:[a-z_]+_)?\/(https?:\/\/.*)$/i)
  if (absoluteWayback) {
    return absoluteWayback[1]
  }

  const relativeWayback = value.match(/^\/web\/\d+(?:[a-z_]+_)?\/(https?:\/\/.*)$/i)
  if (relativeWayback) {
    return relativeWayback[1]
  }

  return value
}

function toLocalOrArchivedUrl(value, slug) {
  const normalized = normalizeArchivedUrl(value)
  if (!normalized || normalized.startsWith('mailto:') || normalized.startsWith('javascript:') || normalized.startsWith('#')) {
    return normalized
  }

  let resolved
  try {
    resolved = new URL(normalized, `${LEGACY_BASE}${slug}`)
  } catch {
    return value
  }

  if (/^(www\.)?njsug\.net$/i.test(resolved.hostname)) {
    const file = resolved.pathname.replace(/^\//, '')
    if (!file || file === 'index.html') {
      return '/'
    }
    if (file === 'archive.html') {
      return '/archive'
    }
    if (legacyFileSet.has(file)) {
      return `/archive/${file}${resolved.hash}`
    }
    return `${WAYBACK_PREFIX}${LEGACY_BASE}${file}${resolved.search}${resolved.hash}`
  }

  return normalized
}

function rewriteContent(content, slug) {
  let rewritten = content
    .replace(/<a\s+name=("([^"]+)"|'([^']+)')\s*>\s*<\/a>/gi, (_match, _quoted, doubleName, singleName) => {
      const name = doubleName || singleName
      return `<span id="${name}"></span>`
    })
    .replace(/\sstyle="font-weight:\s*bold;"/gi, '')
    .replace(/<style=\"font-weight:\s*bold;\">/gi, '')
    .replace(/<style='font-weight:\s*bold;'>/gi, '')

  rewritten = rewritten.replace(/\s(href|src)=("([^"]*)"|'([^']*)')/gi, (match, attr, _quoted, doubleValue, singleValue) => {
    const originalValue = doubleValue ?? singleValue ?? ''
    const nextValue = toLocalOrArchivedUrl(originalValue, slug)
    return ` ${attr}="${nextValue}"`
  })

  return rewritten
}

async function fetchHtml(slug) {
  const response = await fetch(`${WAYBACK_PREFIX}${LEGACY_BASE}${slug}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${slug}: ${response.status}`)
  }
  return response.text()
}

const data = {}
for (const slug of LEGACY_FILES) {
  const html = await fetchHtml(slug)
  const content = extractContent(html, slug)
  data[slug] = {
    title: extractTitle(html, content, slug),
    content: rewriteContent(content, slug),
  }
}

const output = `export const LEGACY_ARCHIVE_SNAPSHOT = '${SNAPSHOT}' as const\n\nexport const legacyArchivePages = ${JSON.stringify(data, null, 2)} as const\n\nexport type LegacyArchiveSlug = keyof typeof legacyArchivePages\n`
writeFileSync('src/lib/legacyArchiveData.ts', output)
