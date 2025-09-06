import Image from 'next/image';

export function Navbar() {
  return (
    <nav 
      className="w-full py-4 bg-transparent" 
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#main-content" aria-label="NJSUG Home">
              <Image
                src="/images/NJSUGLogo.png"
                alt="NJSUG - New Jersey Statistical Users Group Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 