import { Committee } from '@/components/Committee'
import { ContactUs } from '@/components/ContactUs'
import { EventBanner } from '@/components/EventBanner'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule } from '@/components/Schedule'

export default function PastConferences() {
  return (
    <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <EventBanner />
      <EventContent />
      <Schedule />
      <Committee />
      <ContactUs />
    </main>
  )
}
