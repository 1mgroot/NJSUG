import { Banner } from '@/components/Banner'
import { ContactUs } from '@/components/ContactUs'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule } from '@/components/Schedule'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "NJSUG - New Jersey Statistical Users Group Conference",
  "description": "Join leading pharmaceutical statisticians and programmers for insights on SAS, R, Python, and Gen AI in clinical trials and biometrics.",
  "startDate": "2024-12-01T08:30:00-05:00",
  "endDate": "2024-12-01T13:00:00-05:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Conference Venue",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NJ",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "New Jersey Statistical Users Group",
    "email": "njsugcontact@gmail.com"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://njsug.vercel.app",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "performer": [
    {
      "@type": "Person",
      "name": "Melodie Rush",
      "affiliation": "SAS"
    },
    {
      "@type": "Person", 
      "name": "Sri Pavan Vemuri",
      "affiliation": "Regeneron"
    },
    {
      "@type": "Person",
      "name": "Kevin Lee"
    }
  ],
  "subEvent": [
    {
      "@type": "Event",
      "name": "SAS®, SQL, R, and Python: We're All Friends",
      "startDate": "2024-12-01T09:15:00-05:00",
      "endDate": "2024-12-01T10:00:00-05:00",
      "performer": {
        "@type": "Person",
        "name": "Melodie Rush",
        "affiliation": "SAS"
      }
    },
    {
      "@type": "Event", 
      "name": "Gen AI in Biometrics: Transforming Clinical trials with Supercharged Efficiency and Innovation",
      "startDate": "2024-12-01T10:45:00-05:00",
      "endDate": "2024-12-01T11:15:00-05:00",
      "performer": {
        "@type": "Person",
        "name": "Kevin Lee"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main id="main-content" className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />
        <Banner />
        <EventContent />
        <Schedule />
        <ContactUs />
      </main>
    </>
  )
}
