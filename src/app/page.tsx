import { Banner } from '@/components/Banner'
import { EventContent } from '@/components/EventContent'

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/images/backgroundImg.svg')] bg-cover bg-center bg-no-repeat text-white">
      <Banner />
      <EventContent />
      {/* Add other sections here */}
    </main>
  )
}
