import type { Metadata } from 'next'

import {
  getNjsugPhilaSug2026CfpMetadata,
  NjsugPhilaSug2026CallForPapersPage,
} from '@/components/NjsugPhilaSug2026CallForPapersPage'

export const metadata: Metadata = getNjsugPhilaSug2026CfpMetadata()

export default function EventNjsugPhilaSug2026Route() {
  return <NjsugPhilaSug2026CallForPapersPage />
}
