import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">NJSUG</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The New Jersey SAS Users Group (NJSUG) brings together SAS users, data analysts, and industry leaders to explore the latest trends and best practices in data analytics.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/conference" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Conference
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Sign up for our newsletter to receive updates on upcoming events and resources.
            </p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} NJSUG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 