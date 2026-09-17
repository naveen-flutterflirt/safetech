"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Home,
  Cctv,
  Flame,
  Sun,
  Droplets
} from "lucide-react";
import Link from "next/link";

export default function Hero() {

  return (
    // Switch between min-h-screen (mobile scroll) and exactly h-screen (desktop fixed)
    <section className="relative w-full min-h-screen lg:h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col">
      {/* Background Image */}
      {/* On desktop it covers 100vh statically, on mobile it acts as absolute behind content */}
      <div className="absolute lg:fixed inset-0 w-full h-full z-0">
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full"
          >
            <source src="/4k_chatgpt.mp4" type="video/mp4" />
          </video> */}
        <Image
          src="/images/test_hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Radial gradient vignette to keep the center vibrant while darkening edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_90%)]"></div>
        {/* Extra bottom gradient on mobile to ensure the bottom bar text remains readable when scrolled down */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent lg:hidden pointer-events-none"></div>
      </div>

      {/* Navigation removed, now global in layout.tsx */}

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-12 lg:px-16 pt-8 md:pt-16 lg:pt-28 pb-12 lg:pb-32 flex flex-col lg:flex-row justify-between items-start flex-grow">

        {/* Left Column */}
        <div className="max-w-2xl mt-15 w-full">
          <div className="mb-4 sm:mb-5 flex items-center gap-4">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-gray-300 uppercase">Integrated Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] mb-5 sm:mb-6 tracking-tight">
            Safer Spaces <br />
            <span className="text-[#f49c71]">Brighter</span> Tomorrow
          </h1>

          <p className="text-gray-200 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8 sm:mb-10 max-w-[500px]">
            Security, fire safety and clean energy solutions <br className="hidden md:block" />
            for homes, businesses and a more sustainable world.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-6">
            <Link href="/contact#quote-form" className="bg-white text-black font-semibold rounded-lg px-6 py-3 sm:py-3.5 text-sm flex justify-center items-center gap-2 hover:bg-gray-100 transition-colors">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/#services" className="border border-white/40 text-white rounded-lg px-6 py-3 sm:py-3.5 text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm text-center flex items-center justify-center">
              Explore Solutions
            </Link>
          </div>

          {/* Toggle and small text */}
          <div className="flex flex-col gap-3 items-start w-full sm:w-auto">

            <p className="text-gray-400 text-xs sm:text-[13px] pl-2 hidden sm:block">Solutions for every space</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:flex flex-col items-end gap-12 mt-4">
          <div className="text-right border-r border-white/30 pr-5 py-1">
            <p className="text-[10px] font-bold tracking-[0.2em] leading-[1.8] text-gray-300">
              SECURE<br />
              SMART<br />
              SUSTAINABLE
            </p>
          </div>
        </div>

      </main>

      {/* Bottom Bar */}
      <div className="relative lg:absolute mt-auto bottom-0 inset-x-0 z-20 border-t border-white/10 bg-black/60 lg:bg-black/40">
        <div className="px-6 md:px-12 lg:px-16 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-center gap-4">
            <Cctv size={24} className="text-gray-300 flex-shrink-0" strokeWidth={1} />
            <div>
              <h4 className="font-medium text-[13px] lg:text-[14px] mb-0.5">CCTV & Surveillance</h4>
              <p className="text-[11px] lg:text-[12px] text-gray-400">See More. Stay Safer.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Flame size={24} className="text-gray-300 flex-shrink-0" strokeWidth={1} />
            <div>
              <h4 className="font-medium text-[13px] lg:text-[14px] mb-0.5">Fire Safety Systems</h4>
              <p className="text-[11px] lg:text-[12px] text-gray-400">Early Alerts. Greater Protection.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Sun size={24} className="text-gray-300 flex-shrink-0" strokeWidth={1} />
            <div>
              <h4 className="font-medium text-[13px] lg:text-[14px] mb-0.5">Solar Power Solutions</h4>
              <p className="text-[11px] lg:text-[12px] text-gray-400">Clean Energy. Brighter Future.</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Droplets size={24} className="text-gray-300 flex-shrink-0" strokeWidth={1} />
              <div>
                <h4 className="font-medium text-[13px] lg:text-[14px] mb-0.5">Solar Water Heating</h4>
                <p className="text-[11px] lg:text-[12px] text-gray-400">Hot Water. A Greener Tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
