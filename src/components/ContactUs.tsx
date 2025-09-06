import { Mail } from "lucide-react";

export function ContactUs() {
  return (
    <section 
      id="contact" 
      className="py-12 md:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 id="contact-heading" className="mb-6 text-3xl font-bold tracking-tight">
            Contact Us
          </h2>
          <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <a 
              href="mailto:njsugcontact@gmail.com"
              className="text-lg font-medium"
              aria-label="Send email to NJSUG contact"
            >
              njsugcontact@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 