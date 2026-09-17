"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Building2,
  Home,
  Network,
  Smartphone,
  HardDrive,
  Wrench,
  Bot,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Server,
  Cloud,
  ChevronRight,
  Monitor,
  Clock,
  Users
} from "lucide-react";

export default function CCTVPage() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");
  const [activeNode, setActiveNode] = useState<string>("rooftop");

  const explorerData: Record<string, { title: string, desc: string, icon: JSX.Element }> = {
    rooftop: { title: "Rooftop Camera", desc: "Wide area monitoring with panoramic view.", icon: <Camera size={18} /> },
    indoor: { title: "Indoor Dome Camera", desc: "Discreet monitoring for offices and indoor spaces.", icon: <Camera size={18} /> },
    office: { title: "Office Area Camera", desc: "Keeps an eye on your workspaces and assets.", icon: <Camera size={18} /> },
    entrance: { title: "Entrance Camera", desc: "Monitors entry and exit points for better security.", icon: <Camera size={18} /> },
    parking: { title: "Parking Area Camera", desc: "Surveillance for vehicles and parking spaces.", icon: <Camera size={18} /> },
    corridor: { title: "Corridor Camera", desc: "Monitors hallways, staircases and common areas.", icon: <Camera size={18} /> },
    perimeter: { title: "Perimeter Camera", desc: "Monitors the outer boundary for enhanced security.", icon: <Camera size={18} /> },
    nvr: { title: "NVR / Server", desc: "Stores and manages video recordings.", icon: <Server size={18} /> },
    monitoring: { title: "Monitoring Room", desc: "Live view, recording and smart analytics.", icon: <Monitor size={18} /> },
    switch: { title: "Network Switch", desc: "Connects all cameras to the surveillance network.", icon: <Network size={18} /> },
  };
  const services = [
    { title: "CCTV Camera Installation", desc: "Professional installation and positioning of cameras for maximum coverage.", icon: <Camera size={24} /> },
    { title: "Commercial CCTV Systems", desc: "Complete surveillance solutions for offices, warehouses, shops, factories.", icon: <Building2 size={24} /> },
    { title: "Residential CCTV", desc: "Smart security systems for homes, villas, apartments and residential communities.", icon: <Home size={24} /> },
    { title: "IP & Network CCTV", desc: "Modern IP-based surveillance systems with high-resolution video and network connectivity.", icon: <Network size={24} /> },
    { title: "Remote Monitoring", desc: "Access your cameras remotely through mobile, tablet or computer.", icon: <Smartphone size={24} /> },
    { title: "DVR / NVR Systems", desc: "Reliable recording, storage and playback solutions for your surveillance network.", icon: <HardDrive size={24} /> },
    { title: "CCTV Maintenance & AMC", desc: "Regular maintenance, troubleshooting and system upgrades to keep your security running.", icon: <Wrench size={24} /> },
    { title: "AI / Smart Surveillance", desc: "Motion detection, human detection, vehicle detection and other intelligent capabilities.", icon: <Bot size={24} /> },
  ];

  const commercialSpaces = [
    "Offices", "Retail Stores", "Warehouses", "Factories",
    "Hotels", "Schools", "Hospitals", "Parking Areas"
  ];

  const residentialSpaces = [
    "Independent Houses", "Villas", "Apartments", "Gated Communities",
    "Garages", "Driveways", "Gardens", "Entrances"
  ];

  const processSteps = [
    { num: "01", title: "Site Survey", desc: "We understand your property and security requirements." },
    { num: "02", title: "Security Planning", desc: "Camera locations, coverage areas and equipment are planned." },
    { num: "03", title: "Installation", desc: "Our team installs and configures the complete system." },
    { num: "04", title: "Testing & Handover", desc: "Every camera and recording system is tested." },
    { num: "05", title: "Support & AMC", desc: "Ongoing maintenance and technical support." },
  ];

  const reasons = [
    { title: "High-Resolution Surveillance", desc: "Clear footage when you need it." },
    { title: "Professional Installation", desc: "Correct camera placement and clean installation." },
    { title: "Remote Access", desc: "Monitor your property from anywhere." },
    { title: "Reliable Recording", desc: "Secure and accessible video storage." },
    { title: "Scalable Systems", desc: "Start small and expand when required." },
    { title: "After-Sales Support", desc: "Maintenance and technical assistance when you need it." },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#3b82f6] selection:text-white">

      {/* 1. Hero Section (Updated Reference Style, Tan/Bronze Theme) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cctv/hero_cctv.webp"
            alt="CCTV Security Camera on Building"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for Text Readability - Dark mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:w-[60%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#3b82f6]"></div>
              <div className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                CCTV SURVEILLANCE SOLUTIONS
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-white">
              See More. <br />
              <span className="text-[#3b82f6]">Stay Safer.</span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
              Smart surveillance systems for homes, businesses and industrial spaces. Because a safer tomorrow begins with better visibility today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start mb-16">
              <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#3b82f6] text-white font-semibold rounded-full px-8 py-4 hover:bg-[#2563eb] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#3b82f6]/20">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#explorer" className="w-full sm:w-auto border border-white/40 text-white font-semibold rounded-full px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Explore CCTV Solutions <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Features Row */}
            <div className="flex items-center flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col items-center gap-3">
                <Eye size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Real-Time<br/>Monitoring</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <ShieldCheck size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Enhanced<br/>Security</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Smartphone size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Remote<br/>Access</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Users size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Peace<br/>of Mind</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What We Provide */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Surveillance Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We provide end-to-end CCTV services, from initial design and professional installation to intelligent monitoring and ongoing maintenance.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#3b82f6]/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3b82f6] mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CCTV Explorer (Interactive Layout) */}
      <section className="px-4 md:px-8 lg:px-12 py-16 bg-[#0a0a0a] relative z-20">

        {/* Main Full-Image Container */}
        <div className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden relative shadow-2xl bg-[#111] flex flex-col min-h-[800px] border border-white/5">

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/cctv/cctv_explore.webp"
              alt="CCTV Surveillance Ecosystem Explorer"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark gradients to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent w-full md:w-3/5 lg:w-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent w-full"></div>
          </div>

          {/* Foreground Overlay Content */}
          <div className="relative z-10 w-full h-full flex flex-col p-8 lg:p-12 flex-1">

            {/* Top Header & Badges */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-[#3b82f6]"></div>
                  <span className="text-[#3b82f6] font-bold tracking-widest text-xs uppercase">CCTV Surveillance Solutions</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  See More. <br />
                  Stay Safer.
                </h2>
                <p className="text-gray-400 font-medium text-lg">
                  Smart Surveillance for Safer Spaces.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-0">
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#3b82f6]/10 p-2 rounded-xl text-[#3b82f6]">
                    <Eye size={18} className="fill-[#3b82f6]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Real-Time<br />Monitoring</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#3b82f6]/10 p-2 rounded-xl text-[#3b82f6]">
                    <Clock size={18} className="fill-[#3b82f6]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">24/7<br />Security</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#3b82f6]/10 p-2 rounded-xl text-[#3b82f6]">
                    <Smartphone size={18} className="fill-[#3b82f6]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Remote<br />Access</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#3b82f6]/10 p-2 rounded-xl text-[#3b82f6]">
                    <ShieldCheck size={18} className="fill-[#3b82f6]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Peace<br />of Mind</span>
                </div>
              </div>
            </div>

            {/* Interactive Panels Area */}
            <div className="relative w-full flex-1 flex items-center">

              {/* Left Nav List - Floating */}
              <div className="w-64 md:w-72 flex flex-col gap-2 z-10 hidden sm:flex">
                {Object.entries(explorerData).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setActiveNode(key)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all shadow-sm backdrop-blur-md border shrink-0 ${activeNode === key
                      ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold border-transparent'
                      : 'bg-black/60 text-gray-300 font-semibold hover:bg-black/80 border-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${activeNode === key ? 'text-white' : 'text-gray-500'}`}>
                        {item.icon}
                      </div>
                      <span className="text-[13px] md:text-sm">{item.title}</span>
                    </div>
                    <ChevronRight size={16} className={activeNode === key ? 'text-white' : 'text-gray-500'} />
                  </button>
                ))}
              </div>

              {/* Right Detail Card - Floating */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-80 bg-[#111]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 z-10 hidden md:block">
                <h3 className="text-xl font-black text-white mb-2">{explorerData[activeNode].title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {explorerData[activeNode].desc}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-transparent rounded-full"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. CCTV Solutions by Space */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Space</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Whether securing a massive industrial complex or your family home, we have specific solutions designed for your environment.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-black/50 p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "commercial" ? 'bg-[#3b82f6] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "residential" ? 'bg-[#3b82f6] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Residential
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {(activeTab === "commercial" ? commercialSpaces : residentialSpaces).map((space, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 hover:border-white/10 transition-colors animate-in fade-in duration-300">
                <CheckCircle2 size={20} className="text-[#3b82f6]" />
                <span className="font-medium text-gray-200">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. Why Safetech */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Security shouldn't <br />be complicated.</h2>
            <p className="text-gray-400 text-lg mb-8">We handle the technical complexity so you don't have to. Our systems are built to be robust behind the scenes, and effortlessly simple for you to use.</p>
            <ShieldCheck size={80} className="text-[#3b82f6]/20" />
          </div>

          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {reasons.map((reason, idx) => (
              <div key={idx} className="border-l-2 border-[#3b82f6]/30 pl-5 py-2 hover:border-[#3b82f6] transition-colors">
                <h4 className="text-lg font-bold mb-1 text-white">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-32 text-center bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Your property deserves better protection.</h2>
          <p className="text-gray-400 text-xl mb-10">Let's design a CCTV system built specifically for your space.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#3b82f6] text-black font-semibold rounded-lg px-8 py-4 hover:bg-[#2563eb] transition-colors flex items-center justify-center">
              Get a Free Site Survey
            </Link>
            <Link href="/contact" className="w-full sm:w-auto border border-white/20 text-white font-semibold rounded-lg px-8 py-4 hover:bg-white/5 transition-colors flex items-center justify-center">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
