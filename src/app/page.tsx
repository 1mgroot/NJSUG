import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-400 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-white font-bold text-2xl">
            NJSUG
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            NJSUG Website
            <br />
            Coming Soon
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-xl text-white/90 mb-6">
              The New Jersey SAS Users Group (NJSUG) website is currently under development.
              We&apos;re working hard to bring you a new and improved experience.
            </p>
            <div className="text-lg text-white/80">
              <p className="mb-2">Expected Launch: April 2024</p>
              <p>Stay tuned for updates!</p>
            </div>
          </div>
          
          {/* Event Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Save the Date
            </h2>
            <div className="text-white/90 space-y-2 mb-6">
              <p className="text-xl">NJSUG 2025 Spring Meeting</p>
              <p>Date: May 13th, 2025</p>
              <p>Location: Hyatt House Branchburg, NJ</p>
            </div>
            <p className="text-white/80 italic">
              Registration details coming soon
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} New Jersey SAS Users Group (NJSUG). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
