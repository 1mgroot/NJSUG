import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function EventContent() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Grid Layout Container */}
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Left Column - Title */}
          <div className="text-4xl">
            NJSUG 2025
          </div>

          {/* Right Column - Content */}
          <div className="col-span-2">
            {/* Event Details */}
            <div >
              <p className="text-2xl">
                Date: May 13th, 2025
              </p>
              <p className="text-2xl">
                Location: Hyatt House Branchburg, NJ
              </p>
            </div>

            {/* Description */}
            <p className="text-lg">
              The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
              This event brings together SAS users, data analysts, and industry leaders to explore
              the latest trends, best practices, and innovations in data analytics.
            </p>

            {/* Register Button */}
            
              <Button asChild>
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
                >
                  REGISTER
                </Link>
              </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
} 