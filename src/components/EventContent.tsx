import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function EventContent() {
  return (
    <div className="py-12 md:py-24 font-mono">
      <div className="container mx-auto px-4">
        {/* Grid Layout Container */}
        <div className="grid grid-cols-4 gap-8">
          {/* Left Column - Title */}
          <div className="col-span-1">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl" >
                NJSUG 2025
              </h1>
              <h1 className='text-4xl'>
                Spring Meeting
              </h1>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-2 col-start-3 text-white/50">
            {/* Event Details */}
            <div >
              <h2 className="text-2xl font-bold">
                Date: May 13th, 2025
              </h2>
              <h2 className="text-2xl font-bold">
                Time: 9:00 AM - 1:00 PM 
              </h2>
              <h2 className="text-2xl font-bold mb-2">
                Location: Hyatt House Branchburg / Bridgewater
              </h2>
              {/* <LocationAddress 
                address="3141 US-22, Branchburg, NJ 08876"
                className="mb-4" 
              /> */}
            </div>

            {/* Description */}
            <div className='mt-4'>
              <p className="text-lg">
                The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
                This event brings together SAS users, data analysts, and industry leaders to explore
                the latest trends, best practices, and innovations in data analytics.
              </p>
            </div>

            <div className='mt-4 text-white/50' >
              <p className='text-lg font-bold'>Registration is now full, </p>
              <p className='text-lg font-bold'>but we’d still love to have you!</p>
              <p className='text-lg'>Join our waitlist and we’ll be in touch if a spot opens up.</p>
            </div>

            {/* Register Button */}
            <div className='mt-4'>
            <Button asChild variant='custom'>
              <Link
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
              >
                JOIN WAITLIST
              </Link>
            </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
} 