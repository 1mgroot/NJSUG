'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Agenda } from '@/components/Agenda'

export function HeroAgendaSection() {
  const wrapperRef = React.useRef<HTMLElement | null>(null)
  const contentRef = React.useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const computeScale = () => {
      const wrapper = wrapperRef.current
      const content = contentRef.current
      if (!wrapper || !content) return

      const naturalHeight = content.offsetHeight
      const naturalWidth = content.offsetWidth
      if (naturalHeight === 0 || naturalWidth === 0) return

      const heightRatio = (wrapper.clientHeight - 12) / naturalHeight
      const widthRatio = (wrapper.clientWidth - 12) / naturalWidth
      const nextScale = Math.min(1, heightRatio, widthRatio)
      setScale(Number.isFinite(nextScale) ? nextScale : 1)
    }

    computeScale()
    window.addEventListener('resize', computeScale)

    // React to layout changes more robustly
    const ro = new ResizeObserver(computeScale)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    if (contentRef.current) ro.observe(contentRef.current)

    return () => {
      window.removeEventListener('resize', computeScale)
      ro.disconnect()
    }
  }, [])

  return (
    <section ref={wrapperRef} className="relative isolate overflow-hidden min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]">
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

      {/* Scalable content wrapper: scales hero + agenda together to fit viewport */}
      <div className="w-full flex justify-center pt-8 md:pt-12">
        <div
          ref={contentRef}
          style={{ transform: `scale(${scale})`, transformOrigin: 'top center', width: '100%' }}
        >
          <div className="container mx-auto px-4 text-center flex items-center justify-center">
            <div className="mx-auto max-w-[clamp(40rem,60vw,64rem)]">
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_140%_at_50%_50%,rgba(255,255,255,0.22)_0%,transparent_70%)] blur-md scale-110 opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                  <span className="relative inline-flex items-center gap-2 text-[clamp(1rem,1.6vw,1.3rem)] font-semibold text-white/90">
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
                  <div className="relative group">
                    {/* Enhanced breathing glow with green accent */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DAFFA9]/40 via-white/20 to-[#DAFFA9]/40 blur-lg scale-110 opacity-70 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
                    {/* Additional outer glow for prominence */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DAFFA9]/20 via-transparent to-[#DAFFA9]/20 blur-xl scale-125 opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
                    <Button
                      variant="glass"
                      size="lg"
                      type="button"
                      className="relative px-[clamp(1.3rem,3vw,2.2rem)] py-[clamp(0.8rem,1.4vw,1.2rem)] text-[clamp(1rem,1.3vw,1.15rem)] font-semibold rounded-xl backdrop-blur-md shadow-[0_8px_32px_rgba(218,255,169,0.3)] hover:bg-white/25 hover:shadow-[0_12px_40px_rgba(218,255,169,0.4)] transition-all duration-300 transform hover:scale-105"
                    >
                      Register
                    </Button>
                  </div>
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
        </div>
      </div>

      {/* Bottom fade to blend into page background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent to-[#0A6F69]" aria-hidden="true" />
    </section>
  )
}

export default HeroAgendaSection


