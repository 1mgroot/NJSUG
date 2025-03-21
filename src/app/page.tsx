import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  NJSUG 2025 Spring Meeting
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Date: May 13th, 2025<br />
                  Location: Hyatt House Branchburg, NJ
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  The New Jersey SAS Users Group (NJSUG) invites you to join our 2025 Spring Meeting! 
                  This event brings together SAS users, data analysts, and industry leaders to explore 
                  the latest trends, best practices, and innovations in data analytics.
                </p>
                <Link 
                  href="/conference" 
                  className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary/90 inline-block"
                >
                  Register Now
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/conference.jpg"
                  alt="NJSUG Conference"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Why Attend Our Conference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-primary text-5xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learn from Experts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gain insights from industry leaders and SAS experts through keynote speeches, workshops, and panel discussions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-primary text-5xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Network with Peers</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with fellow data professionals, share experiences, and build valuable relationships in the industry.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-primary text-5xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Discover Innovations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay updated on the latest trends, tools, and technologies in data analytics and SAS programming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to join us at NJSUG 2025?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't miss this opportunity to learn, network, and grow with the NJSUG community.
              Early bird registration is now open!
            </p>
            <Link 
              href="/conference" 
              className="bg-white text-primary px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 inline-block"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
