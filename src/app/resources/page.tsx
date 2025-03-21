import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse our collection of SAS resources, code samples, presentations, and more.
            </p>
          </div>
        </section>

        {/* Resources Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Presentations</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Slides and materials from previous NJSUG meetings and conferences.
                </p>
                <Link
                  href="#presentations"
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  View Presentations
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Code Samples</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Useful SAS code samples and snippets contributed by our members.
                </p>
                <Link
                  href="#code-samples"
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  View Code Samples
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Tutorials, guides, and external resources for learning SAS.
                </p>
                <Link
                  href="#learning-resources"
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  View Learning Resources
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Presentations Section */}
            <div id="presentations" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                Presentations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Introduction to SAS Viya
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learn about SAS Viya, the cloud-native, in-memory analytics engine.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Presented by John Smith | Fall 2024
                  </div>
                  <a
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 inline-block text-sm"
                  >
                    Download Slides (PDF)
                  </a>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Advanced Data Visualization in SAS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Techniques for creating compelling visualizations with SAS.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Presented by Jane Doe | Spring 2024
                  </div>
                  <a
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 inline-block text-sm"
                  >
                    Download Slides (PDF)
                  </a>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Best Practices for Clinical Trial Data Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Strategies for efficient and accurate clinical data analysis.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Presented by Robert Johnson | Fall 2023
                  </div>
                  <a
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 inline-block text-sm"
                  >
                    Download Slides (PDF)
                  </a>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Machine Learning with SAS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Introduction to machine learning techniques using SAS.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Presented by Sarah Williams | Spring 2023
                  </div>
                  <a
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 inline-block text-sm"
                  >
                    Download Slides (PDF)
                  </a>
                </div>
              </div>
            </div>
            
            {/* Code Samples Section */}
            <div id="code-samples" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                Code Samples
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Data Cleaning and Preparation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    SAS code for common data cleaning and preparation tasks.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Missing Value Imputation
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Data Standardization
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Outlier Detection
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Date Formatting
                    </a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Statistical Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    SAS code for statistical analysis and modeling.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Linear Regression
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Logistic Regression
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Survival Analysis
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      ANOVA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Learning Resources Section */}
            <div id="learning-resources" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                Learning Resources
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Online Courses
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Free and paid online courses for learning SAS.
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.sas.com/en_us/training/overview.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        SAS Training & Certification
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Official SAS training courses and certification programs.
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://www.coursera.org/specializations/sas-programming"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        SAS Programming Specialization on Coursera
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A beginner-friendly specialization created by SAS.
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/learning/topics/sas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        LinkedIn Learning SAS Courses
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Various SAS courses available on LinkedIn Learning.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Books & Guides
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Recommended books and guides for SAS programmers.
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium text-gray-800 dark:text-white">
                        The Little SAS Book: A Primer
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        By Lora Delwiche and Susan Slaughter - A great introduction to SAS programming.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium text-gray-800 dark:text-white">
                        SAS Programming in the Pharmaceutical Industry
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        By Jack Shostak - Essential for SAS programmers in pharma.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium text-gray-800 dark:text-white">
                        Applied Statistics and the SAS Programming Language
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        By Ronald P. Cody and Jeffrey K. Smith - Statistical analysis with SAS.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Online Communities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Join these communities to connect with other SAS users.
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://communities.sas.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        SAS Communities
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Official SAS community forum for questions and discussions.
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/r/sas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        r/SAS on Reddit
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Reddit community for SAS programmers and users.
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://stackoverflow.com/questions/tagged/sas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Stack Overflow - SAS Tag
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Technical questions and answers related to SAS.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 