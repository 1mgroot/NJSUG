import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.njsug.org'),
  title: {
    default: "NJSUG - New Jersey SAS Users Group",
    template: "%s | NJSUG"
  },
  description: "Join NJSUG for expert-led seminars, webinars, and conferences on statistical programming, SAS, R, Python, and data science. Connect with pharmaceutical and biotech professionals in New Jersey.",
  keywords: [
    "NJSUG",
    "New Jersey SAS Users Group",
    "statistical programming",
    "SAS programming",
    "R programming",
    "Python data science",
    "biostatistics",
    "clinical trials",
    "pharmaceutical statistics",
    "data analytics",
    "biometrics",
    "statistical software",
    "data science New Jersey",
    "automation in statistics"
  ],
  authors: [{ name: "NJSUG" }],
  creator: "NJSUG",
  publisher: "NJSUG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.njsug.org",
    siteName: "NJSUG - New Jersey SAS Users Group",
    title: "NJSUG - New Jersey SAS Users Group",
    description: "Join NJSUG for expert-led seminars, webinars, and conferences on statistical programming, SAS, R, Python, and data science.",
    images: [
      {
        url: "/images/NJSUGLogo.png",
        width: 1200,
        height: 630,
        alt: "NJSUG Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJSUG - New Jersey SAS Users Group",
    description: "Join NJSUG for expert-led seminars, webinars, and conferences on statistical programming, SAS, R, Python, and data science.",
    images: ["/images/NJSUGLogo.png"],
  },
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.njsug.org" />
        <meta name="theme-color" content="#0A6F69" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
