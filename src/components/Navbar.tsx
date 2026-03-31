import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/NJSUGLogo.png"
                alt="NJSUG Logo"
                width={60}
                height={60}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/archive"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Archive
            </Link>
            <div className="group relative">
              <Link
                href="/events"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
              >
                Events
              </Link>
              <div className="invisible absolute left-0 top-full z-20 mt-2 min-w-64 rounded-2xl border border-white/15 bg-[#0A6F69]/95 p-2 opacity-0 shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <Link
                  href="/events/njsug-2026-webinar"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  NJSUG 2026 Webinar
                </Link>
              </div>
            </div>
            <Link
              href="/steering-committee"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Steering Committee
            </Link>
            <Link
              href="/charter"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Charter
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
