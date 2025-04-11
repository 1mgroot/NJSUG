import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              src="/images/NJSUGLogo.png"
              alt="NJSUG Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
} 