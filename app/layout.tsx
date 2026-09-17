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
    template: "%s | Safetech",
    default: "Safetech - Complete Security, Safety & Energy Solutions",
  },
  description: "Protect your home and business with Safetech. We provide professional CCTV, Fire Safety Systems, Solar Power, and Solar Water Heating solutions from installation to maintenance.",
  keywords: ["Safetech", "CCTV installation", "Fire Safety Systems", "Solar Panels", "Solar Geyser", "Security Systems", "Commercial Safety"],
  openGraph: {
    title: "Safetech - Complete Security, Safety & Energy Solutions",
    description: "Protect your home and business with Safetech. We provide professional CCTV, Fire Safety Systems, Solar Power, and Solar Water Heating solutions.",
    siteName: "Safetech",
    images: [
      {
        url: "/images/hero_image.webp",
        width: 1200,
        height: 630,
        alt: "Safetech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safetech - Security, Safety & Energy Solutions",
    description: "Professional CCTV, Fire Safety Systems, Solar Power, and Solar Water Heating solutions.",
    images: ["/images/hero_image.webp"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" toastOptions={{ className: 'bg-[#111] text-white border border-white/10' }} />
      </body>
    </html>
  );
}
