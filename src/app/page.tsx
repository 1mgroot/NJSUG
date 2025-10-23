import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { PastPhotos } from '@/components/PastPhotos'
import { Agenda } from '@/components/Agenda'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A6F69] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />

      {/* Primary Hero: Upcoming Webinar */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]">
        {/* Decorative radial gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          {/* top-down light */}
          <div className="absolute inset-0 bg-[radial-gradient(80vw_60vh_at_50%_0%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-50" />
          {/* center soft glow */}
          <div className="absolute inset-0 bg-[radial-gradient(55vw_55vw_at_50%_40%,rgba(255,255,255,0.12)_0%,transparent_65%)] opacity-40" />
          {/* left edge line fading to center */}
          <div className="absolute inset-y-0 left-0 w-[12vw] bg-[linear-gradient(to_right,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
          {/* right edge line fading to center */}
          <div className="absolute inset-y-0 right-0 w-[12vw] bg-[linear-gradient(to_left,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
          {/* top blend under navbar to avoid harsh edge */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-[#0A6F69] via-[#0A6F69]/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 text-center flex items-center justify-center">
          <div className="mx-auto max-w-[clamp(40rem,60vw,64rem)]">
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-md scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <span className="relative inline-flex items-center gap-3 rounded-full bg-white/15 px-8 py-4 text-[clamp(1rem,1.6vw,1.3rem)] font-semibold text-white ring-1 ring-white/20 backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                    <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent font-semibold tracking-wide">
                      NJSUG 2025 Webinar
                    </span>
                  </div>
                </span>
              </div>
            </div>

            <h1 className="font-extrabold tracking-tight leading-[1.05] text-[clamp(2.1rem,6.2vw,5rem)]">
              Automation
            </h1>
            <p className="mt-3 md:mt-4 text-white/90 text-[clamp(0.95rem,1.9vw,1.35rem)]">
              Fri, Nov 21, 2025 · 10:00 AM – 11:00 AM ET
            </p>

            <div className="mt-[clamp(0.75rem,3vh,1.75rem)] flex justify-center">
              <a
                href="https://events.teams.microsoft.com/event/f9e551e4-c281-41fc-a241-ee6189e210e9@b1c14d5c-3625-45b3-a430-9552373a0c2f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register for 2025 Webinar"
              >
                <Button
                  variant="glass"
                  size="lg"
                  type="button"
                  className="px-[clamp(1.1rem,2.6vw,1.8rem)] py-[clamp(0.7rem,1.2vw,1rem)] text-[clamp(0.9rem,1.2vw,1.05rem)] rounded-xl"
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Agenda outside of the narrow hero container to allow wider layout */}
        <div className="mx-auto px-4 md:px-8 -mt-1 md:-mt-0.5 w-full flex justify-center">
          <div className="w-full max-w-[clamp(60rem,92vw,100rem)]">
            <Agenda compact />
          </div>
        </div>

        {/* Bottom fade to blend into page background */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent to-[#0A6F69]" aria-hidden="true" />
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
