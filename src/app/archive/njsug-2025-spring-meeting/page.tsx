import type { Metadata } from 'next'

import {
  SITE_URL,
  SPRING_MEETING_ARCHIVE_URL,
  SPRING_MEETING_KEYWORDS,
  SpringMeetingArchivePage,
} from '@/components/SpringMeetingArchivePage'

export const metadata: Metadata = {
  title: 'NJSUG 2025 Spring Meeting',
  description:
    "Explore NJSUG's 2025 Spring Meeting highlights featuring expert presentations on SAS, R, Python, Gen AI in Biometrics, and panel discussions on the future of statistical programming.",
  keywords: SPRING_MEETING_KEYWORDS,
  category: 'Event',
  alternates: {
    canonical: SPRING_MEETING_ARCHIVE_URL,
  },
  openGraph: {
    title: 'NJSUG 2025 Spring Meeting',
    description:
      "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    url: SPRING_MEETING_ARCHIVE_URL,
    type: 'article',
    siteName: 'NJSUG - New Jersey Area SAS Users Group',
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
    title: 'NJSUG 2025 Spring Meeting',
    description:
      "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    images: [`${SITE_URL}/images/event-photos/Group_1.jpg`],
  },
}

export default function SpringMeetingArchiveRoute() {
  return <SpringMeetingArchivePage />
}
