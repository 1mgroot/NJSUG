import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function EventContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className={cn(
            "text-4xl font-bold text-white",
            "leading-[46px] tracking-[-1.6px]",
            "mb-8"
          )}>
            NJSUG 2025 <br />Spring Meeting
          </h1>
          
          <div className="space-y-2 text-white/80">
            <p className="text-base font-bold leading-[26px] tracking-[-0.35px]">
              Date: May 13th, 2025
            </p>
            <p className="text-base font-bold leading-[26px] tracking-[-0.35px]">
              Location: Hyatt House Branchburg, NJ
            </p>
          </div>
          
          <div className="mt-6 space-y-6 max-w-[330px]">
            <p className="text-base font-bold leading-[26px] tracking-[-0.35px] text-white/80">
              The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
              This event brings together SAS users, data analysts, and industry leaders to explore
              the latest trends, best practices, and innovations in data analytics.
            </p>
            
            <div>
              <Button
                asChild
                variant="secondary"
                className={cn(
                  "bg-white/10 hover:bg-white/20",
                  "text-white",
                  "backdrop-blur"
                )}
              >
                <a 
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 