import { Banner } from '@/components/Banner'
import { ContactUs } from '@/components/ContactUs'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule } from '@/components/Schedule'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <Banner />
      <EventContent />
      <Schedule />
      <ContactUs />
      {/* Add other sections here */}
    </main>
  )
}
