import { Navbar } from '@/components/Navbar'
import { PastPhotos } from '@/components/PastPhotos'
import HeroAgendaSection from '@/components/HeroAgendaSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A6F69] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <HeroAgendaSection />

      {/* Past Conferences - redesigned marquee */}
      <PastPhotos />
      
      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg mb-4">
              For more information about NJSUG events and how to get involved:
            </p>
            <p className="text-xl font-semibold">
              Contact us at: <span className="text-yellow-300">njsugcontact@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
