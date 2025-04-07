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
          <div>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-white",
              "leading-[1.2] tracking-tight",
              "mb-4 md:mb-0"
            )}>
              NJSUG 2025
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-light">
                Spring Meeting
              </span>
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-2">
            {/* Event Details */}
            <div className="space-y-2">
              <p className={cn(
                "text-base md:text-lg text-white/90",
                "font-medium"
              )}>
                Date: May 13th, 2025
              </p>
              <p className={cn(
                "text-base md:text-lg text-white/90",
                "font-medium"
              )}>
                Location: Hyatt House Branchburg, NJ
              </p>
            </div>

            {/* Description */}
            <p className={cn(
              "text-base md:text-lg text-white/80",
              "leading-relaxed"
            )}>
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