import { Committee } from '@/components/Committee'
import { ContactUs } from '@/components/ContactUs'
import { EventBanner } from '@/components/EventBanner'
import { EventContent } from '@/components/EventContent'
import { Navbar } from '@/components/Navbar'
import { Schedule } from '@/components/Schedule'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Past Conferences - NJSUG 2025 Spring Meeting",
  description: "Explore NJSUG's 2025 Spring Meeting highlights featuring expert presentations on SAS, R, Python, Gen AI in Biometrics, and panel discussions on the future of statistical programming.",
  keywords: [
    "NJSUG past events",
    "statistical programming conference",
    "SAS conference",
    "R Shiny presentations",
    "Python workshops",
    "Gen AI biometrics",
    "clinical trials statistics",
    "pharmaceutical programming",
    "statistical software event",
    "data science conference New Jersey"
  ],
  openGraph: {
    title: "Past Conferences - NJSUG 2025 Spring Meeting",
    description: "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    url: "https://www.njsug.org/past-conferences",
    type: "website",
    images: [
      {
        url: "/images/event-photos/Group_1.jpg",
        width: 1200,
        height: 630,
        alt: "NJSUG 2025 Spring Meeting Group Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Past Conferences - NJSUG 2025 Spring Meeting",
    description: "Explore highlights from NJSUG's 2025 Spring Meeting featuring expert speakers on statistical programming and data science.",
    images: ["/images/event-photos/Group_1.jpg"],
  },
  alternates: {
    canonical: "https://www.njsug.org/past-conferences",
  },
}

export default function PastConferences() {
  return (
    <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <EventBanner />
      <EventContent />
      <Schedule />
      <Committee />
      <ContactUs />
    </main>
  )
}
