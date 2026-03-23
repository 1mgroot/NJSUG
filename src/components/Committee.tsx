import Image from 'next/image'

export interface CommitteeMember {
  name: string
  company?: string
  image?: string
  note?: string
}

export const springMeetingCommitteeMembers: CommitteeMember[] = [
  {
    name: 'Changhong Shi',
    company: 'Merck',
    image: '/images/committee/Changhong Shi.jpg',
  },
  {
    name: 'Jeff Xia',
    company: 'Merck',
    image: '/images/committee/jeff-xia-2024-1.jpg',
  },
  {
    name: 'Chen Wang',
    company: 'Merck',
    image: '/images/committee/Chen Wang.jpg',
  },
  {
    name: 'Junze Zhang',
    company: 'Merck',
    image: '/images/committee/Junze.png',
  },
]

export const steeringCommitteeMembers: CommitteeMember[] = [
  {
    name: 'Junze Zhang',
    image: '/images/lastest_committee/Junze.JPG',
  },
  {
    name: 'Changhong Shi',
    image: '/images/lastest_committee/Changhong Shi.jpg',
  },
  {
    name: 'Jeff Xia',
    image: '/images/lastest_committee/jeff-xia-2024-1.jpg',
  },
  {
    name: 'Chen Ling',
    image: '/images/lastest_committee/photo_Chen_Ling.png',
  },
  {
    name: 'Madhusudhan Ginnaram',
    image: '/images/lastest_committee/madhu_photo.png',
  },
  {
    name: 'Vijay Sharma',
    image: '/images/lastest_committee/Vijay Headshot Pic.JPG',
  },
  {
    name: 'Amy Zhang',
    image: '/images/lastest_committee/Amy Zhang.jpeg',
  },
  {
    name: 'Feiyang Du',
  },
  {
    name: 'Sarah Alavi',
  },
]

export const pastSteeringCommitteeMembers: CommitteeMember[] = [
  {
    name: 'Chen Wang',
    note: 'Steering Committee member (2025)',
    image: '/images/committee/Chen Wang.jpg',
  },
]

export function Committee() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Steering Committee
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the team helping guide NJSUG programs and community efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steeringCommitteeMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              {member.image ? (
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              ) : (
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-white/35 bg-black/10 text-3xl font-semibold text-white/80">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>

              {!member.image ? (
                <p className="text-sm text-white/70">Photo coming soon</p>
              ) : null}
            </div>
          ))}
        </div>

        <details className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/15 bg-black/10 p-6 text-white">
          <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
            <span className="inline-flex items-center gap-3">
              <span>Past Steering Committee Members</span>
              <span className="text-sm font-normal text-white/65">Click to expand</span>
            </span>
          </summary>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastSteeringCommitteeMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-white/20 bg-white/10 p-6 text-center"
              >
                {member.image ? (
                  <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-white/35 bg-black/10 text-3xl font-semibold text-white/80">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                )}

                <h3 className="mb-2 text-xl font-semibold text-white">{member.name}</h3>
                {member.note ? (
                  <p className="text-sm text-white/70">{member.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  )
}
