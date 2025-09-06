import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function EventContent() {
  return (
    <section 
      id="event-details" 
      className="py-12 md:py-24 font-mono"
      aria-labelledby="event-title"
    >
      <div className="container mx-auto px-4">
        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Title */}
          <div className="col-span-1">
            <header>
              <h1 id="event-title" className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                NJSUG 2025
              </h1>
              <p className="text-4xl font-bold mt-2">
                Spring Meeting
              </p>
            </header>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-1 md:col-span-2 md:col-start-3 text-white/50">
            {/* Event Details */}
            <div className="space-y-2" aria-label="Event information">
              <div className="text-2xl font-bold">
                <time dateTime="2025-05-13">Date: May 13th, 2025</time>
              </div>
              <div className="text-2xl font-bold">
                <time dateTime="09:00/13:00">Time: 9:00 AM - 1:00 PM</time>
              </div>
              <div className="text-2xl font-bold">
                Location: Hyatt House Branchburg / Bridgewater
              </div>
              <address className="text-2xl font-bold mb-2 not-italic">
                Address: 3141 US-22, Branchburg, NJ 08876
              </address>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-lg">
                The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
                This event brings together SAS users, data analysts, and industry leaders to explore
                the latest trends, best practices, and innovations in data analytics.
              </p>
            </div>

            <div className="mt-4 text-white/50" role="alert" aria-live="polite">
              <p className="text-lg font-bold">Registration is now full,</p>
              <p className="text-lg font-bold">but we'd still love to have you!</p>
              <p className="text-lg">Join our waitlist and we'll be in touch if a spot opens up.</p>
            </div>

            {/* Register Button */}
            <div className="mt-4">
              <Button asChild variant="custom">
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join waitlist for NJSUG 2025 Spring Meeting (opens in new tab)"
                >
                  JOIN WAITLIST
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 