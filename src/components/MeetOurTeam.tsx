import Image from 'next/image'

type TeamMember = {
  name: string
  company: string
  image?: string
  focus?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Changhong Shi',
    company: 'Merck',
    image: '/images/2025WebinarTeam/Changhong%20Shi.jpg',
  },
  {
    name: 'Jeff Xia',
    company: 'Merck',
    image: '/images/2025WebinarTeam/jeff-xia-2024-1.jpg',
  },
  {
    name: 'Junze Zhang',
    company: 'Merck',
    image: '/images/2025WebinarTeam/Junze.png',
  },
  {
    name: 'Vijay Sharma',
    company: 'Bristol Myers Squibb',
    image: '/images/2025WebinarTeam/Vijay%20Headshot%20Pic.JPG',
  },
  {
    name: 'Amy Zhang',
    company: 'Merck',
    image: '/images/2025WebinarTeam/Amy%20Zhang.jpeg',
  },
  {
    name: 'Madhusudhan Ginnaram',
    company: 'Merck',
  },

]

export function MeetOurTeam() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-teal-400/30 blur-3xl" />
        </div>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0%,_rgba(10,111,105,0)_65%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            2025 Webinar Team
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            The people making the NJSUG 2025 Webinar possible through thoughtful planning, execution, and community leadership.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border border-white/20 shadow-[0_8px_30px_rgba(7,157,149,0.25)]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} headshot`}
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 1024px) 144px, 160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-20 w-20 text-white/60"
                      aria-hidden="true"
                    >
                      <circle cx="32" cy="24" r="14" fill="currentColor" opacity="0.85" />
                      <path
                        d="M12 54c0-11.046 8.954-20 20-20s20 8.954 20 20v2H12z"
                        fill="currentColor"
                        opacity="0.65"
                      />
                    </svg>
                    <span className="sr-only">Headshot coming soon</span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/60">
                  {member.company}
                </p>
                {member.focus ? (
                  <p className="mt-3 text-sm text-white/70">
                    {member.focus}
                  </p>
                ) : null}
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

