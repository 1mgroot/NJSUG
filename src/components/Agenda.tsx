import React from 'react'

interface AgendaItem {
  topic: string
  presenters: string
}

const agendaItems: AgendaItem[] = [
  {
    topic: 'Opening Remarks',
    presenters: 'Changhong Shi',
  },
  {
    topic:
      'Prompt, Program, Submit: Generative AI for Faster SDTM, ADaM, and TLFs',
    presenters: 'Matt Becker',
  },
  {
    topic: 'Symphony: Composing Better Clinical Outputs',
    presenters: 'Karma Tarap',
  },
  {
    topic: 'Closing Remarks',
    presenters: 'Jeff Xia & Junze Zhang',
  },
]

function BodyCell({ children }: { children: React.ReactNode }) {
  return <div className="text-white/90 text-sm md:text-base leading-relaxed">{children}</div>
}

export function Agenda({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mx-auto ${compact ? 'mt-6' : 'mt-10'} w-full ${compact ? 'max-w-[clamp(48rem,78vw,80rem)]' : 'max-w-[clamp(52rem,85vw,88rem)]'} text-left`}>
      <div className={`relative rounded-2xl bg-white/12 ring-1 ring-white/20 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] ${compact ? 'rounded-xl' : ''}`}>
        {/* soft neutral glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(140%_100%_at_10%_-10%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(100%_90%_at_90%_10%,rgba(255,255,255,0.12),transparent_40%)]" aria-hidden="true" />

        <div className={`relative ${compact ? 'p-4 md:p-5' : 'p-6 md:p-8'}`}>

          {/* body rows */}
          <div className="divide-y divide-white/10">
            {agendaItems.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 gap-4 ${compact ? 'py-3 md:py-3.5' : 'py-4 md:py-5'}`}
              >
                {/* Topic + Presenters */}
                <div className="md:col-span-12">
                  <BodyCell>
                    <div className={`font-semibold text-white ${compact ? 'text-[0.98rem]' : ''}`}>
                      {item.topic}
                    </div>
                    <div className={`text-white/70 mt-1 ${compact ? 'text-[0.9rem]' : ''}`}>{item.presenters}</div>
                  </BodyCell>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda


