export default function Home() {
  return (
    <div className="min-h-screen bg-primary">

      
      {/* Content section */}
      <div className="min-h-[488px] bg-primary">
        <div className="ml-[166px] pt-[38px] max-w-[330px]">
          <h1 className="text-[36px] font-bold text-white leading-[46px] tracking-[-1.6px] mb-8">
            NJSUG 2025 <br />Spring Meeting
          </h1>
          
          <div className="space-y-2 opacity-50">
            <p className="text-[16px] font-bold text-white leading-[26px] tracking-[-0.35px]">Date: May 13th, 2025</p>
            <p className="text-[16px] font-bold text-white leading-[26px] tracking-[-0.35px]">Location: Hyatt House Branchburg, NJ</p>
          </div>
          
          <div className="mt-6 space-y-6 max-w-[330px]">
            <p className="text-[16px] font-bold text-white leading-[26px] tracking-[-0.35px] opacity-50">
              The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
              This event brings together SAS users, data analysts, and industry leaders to explore
              the latest trends, best practices, and innovations in data analytics.
            </p>
            
            <p className="text-[16px] italic font-bold text-white leading-[26px] tracking-[-0.35px] opacity-50">
              Our official website is currently under development and will be launched soon.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            
            <div>
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur px-6 py-3 rounded-full text-white font-medium"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
