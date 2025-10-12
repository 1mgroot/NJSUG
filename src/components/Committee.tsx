import Image from 'next/image'

interface CommitteeMember {
  name: string
  company: string
  image: string
}

const committeeMembers: CommitteeMember[] = [
  {
    name: 'Changhong Shi',
    company: 'Merck',
    image: '/images/committee/Changhong Shi.jpg'
  },
  {
    name: 'Jeff Xia',
    company: 'Merck',
    image: '/images/committee/jeff-xia-2024-1.jpg'
  },
  {
    name: 'Chen Wang',
    company: 'Merck',
    image: '/images/committee/Chen Wang.jpg'
  },
  {
    name: 'Junze Zhang',
    company: 'Merck',
    image: '/images/committee/Junze.png'
  }

]

export function Committee() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Committee Members
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the dedicated team behind NJSUG 2025 Spring Meeting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.company}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              
              
              <p className="text-white/70 text-sm">
                {member.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
