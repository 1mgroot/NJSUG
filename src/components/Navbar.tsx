'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-primary font-bold text-2xl">
                NJSUG
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
                  Home
                </Link>
                <Link href="/conference" className="text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
                  Conference
                </Link>
                <Link href="/resources" className="text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
                  Resources
                </Link>
                <Link href="/about" className="text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
            Home
          </Link>
          <Link href="/conference" className="block text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
            Conference
          </Link>
          <Link href="/resources" className="block text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
            Resources
          </Link>
          <Link href="/about" className="block text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
            About
          </Link>
          <Link href="/contact" className="block text-gray-800 dark:text-white hover:text-primary px-3 py-2 rounded-md font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 