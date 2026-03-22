import type { Metadata } from 'next'

import {
  getWebinarArchiveMetadata,
  WebinarArchivePage,
} from '@/components/WebinarArchivePage'

export const metadata: Metadata = getWebinarArchiveMetadata()

export default function Njsug2025WebinarArchivePage() {
  return <WebinarArchivePage />
}
