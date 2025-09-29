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
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/past-conferences" 
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Past Conferences
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 