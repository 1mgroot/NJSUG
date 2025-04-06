import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NJSUG 2025 Spring Meeting",
  description: "New Jersey SAS Users Group Spring Meeting 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-[url('/images/backgroundImg.svg')] bg-no-repeat bg-cover"
      )}>
        {children}
      </body>
    </html>
  );
}
