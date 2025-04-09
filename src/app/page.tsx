import { Banner } from '@/components/Banner'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/images/backgroundImg.svg')] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <Banner />
      <EventContent />
      {/* Add other sections here */}
    </main>
  )
}
