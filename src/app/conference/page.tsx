'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ConferencePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    dietary: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to an API
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              NJSUG 2025 Spring Conference
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us for a day of learning, networking, and collaboration with fellow SAS users and data professionals.
            </p>
          </div>
        </section>

        {/* Conference Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Conference Details</h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Event Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">📅</span>
                      <div>
                        <strong className="font-medium">Date:</strong> May 13th, 2025
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">⏰</span>
                      <div>
                        <strong className="font-medium">Time:</strong> 8:30 AM - 5:00 PM
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">📍</span>
                      <div>
                        <strong className="font-medium">Location:</strong> Hyatt House Branchburg, NJ<br />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          30 Branchburg Road, Branchburg Township, NJ 08876
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pricing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">🌟</span>
                      <div>
                        <strong className="font-medium">Early Bird (until April 1):</strong> $149
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">🎟️</span>
                      <div>
                        <strong className="font-medium">Regular:</strong> $199
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">🏢</span>
                      <div>
                        <strong className="font-medium">Corporate Group (5+ attendees):</strong> $129 per person
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">🎓</span>
                      <div>
                        <strong className="font-medium">Students:</strong> $79
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Registration</h2>
                
                {submitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-900">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">Thank you for registering!</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Your registration for the NJSUG 2025 Spring Conference has been received. 
                      We've sent a confirmation email to {formData.email} with all the details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dietary Restrictions
                      </label>
                      <input
                        type="text"
                        id="dietary"
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        placeholder="e.g., Vegetarian, Gluten-free, etc."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-primary text-white font-medium py-3 px-4 rounded-md ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
                      }`}
                    >
                      {isSubmitting ? 'Processing...' : 'Register Now'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 