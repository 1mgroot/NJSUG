import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NJSUG - New Jersey Statistical Users Group | Pharmaceutical Statistics & Programming Conference",
    template: "%s | NJSUG"
  },
  description: "Join NJSUG (New Jersey Statistical Users Group) for cutting-edge pharmaceutical statistics, clinical trial programming, and data science. Featuring SAS, R, Python, and Gen AI in biometrics.",
  keywords: [
    "NJSUG", "New Jersey Statistical Users Group", "pharmaceutical statistics", 
    "clinical trials", "SAS programming", "R programming", "Python", 
    "statistical programming", "biometrics", "data science", "Gen AI",
    "Merck", "Sanofi", "Regeneron", "pharmaceutical conference"
  ],
  authors: [{ name: "NJSUG" }],
  creator: "NJSUG",
  publisher: "New Jersey Statistical Users Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://njsug.vercel.app",
    siteName: "NJSUG - New Jersey Statistical Users Group",
    title: "NJSUG - Pharmaceutical Statistics & Programming Conference",
    description: "Join leading pharmaceutical statisticians and programmers for insights on SAS, R, Python, and Gen AI in clinical trials and biometrics.",
    images: [
      {
        url: "/images/NJSUGBanner.svg",
        width: 1200,
        height: 630,
        alt: "NJSUG Conference Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJSUG - Pharmaceutical Statistics & Programming Conference",
    description: "Join leading pharmaceutical statisticians and programmers for insights on SAS, R, Python, and Gen AI in clinical trials.",
    images: ["/images/NJSUGBanner.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code-here", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://njsug.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#007A73" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
