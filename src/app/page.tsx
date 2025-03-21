import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary px-16 py-12 sm:px-40 sm:py-32">
      <div className="space-y-16">
        <div className="text-white -space-y-1">
          <h2 className="text-3xl font-medium leading-none">NJ</h2>
          <h2 className="text-3xl font-medium leading-none">SUG</h2>
        </div>
        
        <div className="space-y-8">
          <h1 className="text-[56px] font-bold text-white leading-[1.1]">
            NJSUG 2025 Spring<br />Meeting
          </h1>
          
          <div className="space-y-2">
            <p className="text-white/70 text-xl font-light">Date: May 13th, 2025</p>
            <p className="text-white/70 text-xl font-light">Location: Hyatt House Branchburg, NJ</p>
          </div>
          
          <div className="max-w-3xl space-y-6">
            <p className="text-white/70 text-xl font-light leading-relaxed">
              The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting!
              This event brings together SAS users, data analysts, and industry leaders to explore
              the latest trends, best practices, and innovations in data analytics.
            </p>
            
            <p className="text-white/70 italic text-xl font-light">
              Our official website is currently under development and will be launched soon.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="inline-block bg-white/5 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-white/90 text-lg font-normal">Coming Soon</span>
            </div>
            
            <div>
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=WkDVRZWwDkKjyvM5Wus2VN9UuMwD-oRCuKj7WGJvRMRUOEozS0VYVDU3NVRTVjJNMFFYWDBIUEU3OS4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur px-6 py-3 rounded-full text-white/90 text-lg font-normal"
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
