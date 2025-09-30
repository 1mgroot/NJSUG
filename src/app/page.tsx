import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { PastPhotos } from '@/components/PastPhotos'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A6F69] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />

      {/* Primary Hero: Upcoming Webinar (Apple-style minimal, immersive) */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]">
        {/* Decorative radial gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(45vw_45vw_at_50%_20%,#DAFFA9_0%,transparent_60%)] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(35vw_35vw_at_75%_65%,#00D1C1_0%,transparent_60%)] opacity-20" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 text-center flex items-center justify-center">
          <div className="mx-auto max-w-4xl -translate-y-[2vh] md:-translate-y-[3vh]">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[clamp(0.8rem,1.2vw,0.95rem)] font-semibold text-white/90 ring-1 ring-white/20 backdrop-blur">
                <span className="size-2 rounded-full bg-[#DAFFA9]"></span>
                Coming NJSUG 2025 Webinar
              </span>
            </div>

            <h1 className="font-extrabold tracking-tight leading-[1.05] text-[clamp(2.5rem,7.5vw,5.5rem)]">
              Automation
            </h1>
            <p className="mt-4 text-white/90 text-[clamp(1rem,2.2vw,1.5rem)]">
              November 12, 2025
            </p>

            <div className="mt-[clamp(1rem,4vh,2.5rem)] flex justify-center">
              <Button variant="custom" size="lg" type="button" aria-label="Register for 2025 Webinar" className="px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.8rem,1.6vw,1.1rem)] text-[clamp(0.95rem,1.4vw,1.125rem)] rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
                Register
              </Button>
            </div>
            <p className="mt-6 text-[clamp(0.8rem,1.1vw,0.95rem)] text-white/70">Schedule and speakers coming soon.</p>
          </div>
        </div>

        {/* Bottom fade to blend into page background */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A6F69]" aria-hidden="true" />
      </section>

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
