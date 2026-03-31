import type { Metadata } from 'next'

import {
  getNjsug2026WebinarMetadata,
  Njsug2026WebinarPage,
} from '@/components/Njsug2026WebinarPage'

export const metadata: Metadata = getNjsug2026WebinarMetadata()

export default function EventNjsug2026WebinarPage() {
  return <Njsug2026WebinarPage />
}
