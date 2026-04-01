'use client'

import React from 'react'

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

    const ro = new ResizeObserver(computeScale)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    if (contentRef.current) ro.observe(contentRef.current)

    return () => {
      window.removeEventListener('resize', computeScale)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      ref={wrapperRef}
      className="relative isolate overflow-hidden min-h-[calc(100svh-64px)] pb-20 md:min-h-[calc(100svh-72px)] md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(80vw_60vh_at_50%_0%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(55vw_55vw_at_50%_40%,rgba(255,255,255,0.12)_0%,transparent_65%)] opacity-40" />
        <div className="absolute inset-y-0 left-0 w-[12vw] bg-[linear-gradient(to_right,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 w-[12vw] bg-[linear-gradient(to_left,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.16)_4%,rgba(255,255,255,0.08)_12%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A6F69] via-[#0A6F69]/70 to-transparent md:h-20" />
      </div>

      <div className="flex w-full justify-center pt-8 md:pt-12">
        <div
          ref={contentRef}
          style={{ transform: `scale(${scale})`, transformOrigin: 'top center', width: '100%' }}
        >
          <div className="container mx-auto flex items-center justify-center px-4 text-center">
            <div className="mx-auto max-w-[clamp(40rem,60vw,64rem)]">
              <div className="mb-6 flex justify-center md:mb-8">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 scale-110 bg-[radial-gradient(60%_140%_at_50%_50%,rgba(255,255,255,0.22)_0%,transparent_70%)] blur-md opacity-60 transition-opacity duration-500" />
                  <span className="relative inline-flex items-center gap-2 text-[clamp(1.15rem,2vw,1.6rem)] font-semibold text-white/90">
                    <span className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                      <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text font-semibold tracking-wide text-transparent">
                        NJSUG 2025 Webinar
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              <h1 className="text-[clamp(2.1rem,6.2vw,5rem)] font-extrabold leading-[1.05] tracking-tight">
                Automation
              </h1>
              <p className="mt-3 text-[clamp(0.95rem,1.9vw,1.35rem)] text-white/90 md:mt-4">
                Fri, Nov 21, 2025 | 10:00 AM - 11:00 AM ET
              </p>
            </div>
          </div>

          <div className="-mt-1 mx-auto flex w-full justify-center px-4 md:-mt-0.5 md:px-8">
            <div className="w-full max-w-[clamp(60rem,92vw,100rem)]">
              <Agenda compact />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#0A6F69] md:h-20"
        aria-hidden="true"
      />
    </section>
  )
}

export default HeroAgendaSection
