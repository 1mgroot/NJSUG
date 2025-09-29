import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#007A73] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/images/NJSUGLogo.png"
              alt="NJSUG Logo"
              width={150}
              height={150}
              className="mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to NJSUG
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-100">
            New Jersey Software User Group - Connecting developers, sharing knowledge, building community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/past-conferences"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#007A73] bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              View Past Conferences
            </Link>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#007A73] transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About NJSUG</h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            The New Jersey Software User Group is a community of passionate developers, 
            architects, and technology enthusiasts. We organize conferences, meetups, and 
            workshops to share knowledge, learn new technologies, and build lasting 
            professional relationships.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Stay Connected</h2>
          <p className="text-lg text-gray-100 mb-8">
            Join our community and stay updated on upcoming events and opportunities.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg mb-4">
              For more information about NJSUG events and how to get involved:
            </p>
            <p className="text-xl font-semibold">
              Contact us at: <span className="text-yellow-300">info@njsug.org</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
