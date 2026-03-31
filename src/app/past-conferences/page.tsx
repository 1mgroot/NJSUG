import { redirect } from 'next/navigation'

import { SPRING_MEETING_ARCHIVE_PATH } from '@/components/SpringMeetingArchivePage'

export default function PastConferences() {
  redirect(SPRING_MEETING_ARCHIVE_PATH)
}