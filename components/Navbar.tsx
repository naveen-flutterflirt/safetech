"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 px-6 py-4 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href="/" className="flex items-center text-xl sm:text-2xl font-light text-white hover:opacity-80 transition-opacity">
          <span className="text-white/70">[</span>
          <span className="font-bold mx-0.5">S</span>
          <span className="text-white/70">]</span>
        </Link>
        <Link href="/" className="flex flex-col mt-1 text-white hover:opacity-80 transition-opacity">
          <span className="text-base sm:text-lg font-bold tracking-[0.15em] leading-none">SAFETECH</span>
          <span className="text-[0.45rem] sm:text-[0.55rem] font-medium tracking-[0.3em] text-gray-300 mt-1">SAFER TOMORROW</span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm lg:text-[15px] font-medium text-gray-200">
        <div className="relative group">
          <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors py-2">
            Solutions <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
          </Link>
          <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className="w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl flex flex-col overflow-hidden">
              <Link href="/solutions/cctv" className="block px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors">CCTV & Surveillance</Link>
              <Link href="/solutions/fire-safety" className="block px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors">Fire Safety Systems</Link>
              <Link href="/solutions/solar-power" className="block px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors">Solar Power</Link>
              <Link href="/solutions/solar-water-heating" className="block px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors">Solar Water Heating</Link>
            </div>
          </div>
        </div>
        <Link href="/business" className="hover:text-white transition-colors py-2">Business</Link>
        <Link href="/home" className="hover:text-white transition-colors py-2">Home</Link>
        <Link href="/about" className="hover:text-white transition-colors py-2">About</Link>
        <Link href="/why-choose-us" className="hover:text-white transition-colors py-2">Why Choose Us</Link>
        <Link href="/contact" className="hover:text-white transition-colors py-2">Contact</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/amc"
          className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 text-[13px] font-medium text-gray-200 hover:text-white group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          AMC Service
        </Link>
        <Link
          href="/contact#quote-form"
          className="hidden md:flex items-center gap-2 border border-white/40 rounded-full px-5 py-2 text-[13px] font-medium hover:bg-white/10 transition-colors backdrop-blur-sm text-white"
        >
          Get a Quote <ArrowRight size={14} />
        </Link>
        {/* Mobile menu toggle */}
        <button className="lg:hidden text-gray-200 hover:text-white transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
