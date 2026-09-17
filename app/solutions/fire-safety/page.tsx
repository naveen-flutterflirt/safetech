"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BellRing,
  Flame,
  Droplets,
  Waves,
  Radio,
  Lightbulb,
  Zap,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Factory,
  Home,
  HeartPulse,
  GraduationCap,
  Hotel,
  Package,
  Store,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export default function FireSafetyPage() {
  const [activeNode, setActiveNode] = useState("alarm");

  const nodeData: Record<string, { title: string; desc: string; points: string[] }> = {
    alarm: {
      title: "Fire Alarm System",
      desc: "Early detection and instant alerts to keep everyone safe.",
      points: ["Smoke & heat detectors", "Control panel", "Audio-visual alerts"]
    },
    sprinkler: {
      title: "Sprinkler System",
      desc: "Automatic fire suppression for effective and reliable protection.",
      points: ["Heat-activated", "Zone-specific targeting", "Reduces water damage"]
    },
    hydrant: {
      title: "Fire Hydrant System",
      desc: "Complete hydrant and hose reel systems for quick response.",
      points: ["High pressure water", "Strategic placement", "Easy access for firefighters"]
    },
    extinguisher: {
      title: "Fire Extinguishers",
      desc: "Supply, installation and maintenance of all types of extinguishers.",
      points: ["ABC powder", "CO2 extinguishers", "Foam & water base"]
    },
    lighting: {
      title: "Emergency Lighting",
      desc: "Guidance and illumination during emergencies.",
      points: ["Battery backup", "Illuminates exit paths", "Automatic activation"]
    },
    suppression: {
      title: "Fire Suppression",
      desc: "Clean agent, CO2, and specialized systems for critical areas.",
      points: ["No water damage", "Fast acting", "Safe for electronics"]
    },
    detection: {
      title: "Detection Systems",
      desc: "Smoke, heat and gas detectors for early fire detection.",
      points: ["High sensitivity", "Multi-sensor technology", "Integration with BMS"]
    },
    exit: {
      title: "Exit Signage",
      desc: "Clear, illuminated signs to guide occupants to safety.",
      points: ["Always visible", "Low power consumption", "Compliant with standards"]
    }
  };

  const services = [
    { title: "Fire Alarm Systems", desc: "Early detection and instant alerts to keep people safe.", icon: <BellRing size={24} /> },
    { title: "Fire Extinguishers", desc: "Supply, installation and maintenance of all types of fire extinguishers.", icon: <Flame size={24} /> },
    { title: "Fire Sprinkler Systems", desc: "Automatic fire suppression for effective and reliable protection.", icon: <Droplets size={24} /> },
    { title: "Fire Hydrant Systems", desc: "Complete hydrant and hose reel systems for quick response.", icon: <Waves size={24} /> },
    { title: "Fire Detection Systems", desc: "Smoke, heat and gas detectors for early fire detection.", icon: <Radio size={24} /> },
    { title: "Emergency Lighting", desc: "Guidance and illumination during emergencies.", icon: <Lightbulb size={24} /> },
    { title: "Fire Suppression Systems", desc: "Clean agent, CO2, and specialized suppression systems for critical areas.", icon: <Zap size={24} /> },
    { title: "AMC & Maintenance", desc: "Regular inspection, servicing and compliance support to keep your systems ready.", icon: <Wrench size={24} /> },
  ];

  const sectors = [
    { name: "Commercial Buildings", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
    { name: "Industrial Facilities", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
    { name: "Residential Complexes", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
    { name: "Hospitals & Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
    { name: "Educational Institutions", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
    { name: "Hotels & Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" },
    { name: "Warehouses & Logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" },
    { name: "Retail Stores & Malls", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
  ];

  const processSteps = [
    { num: "01", title: "Site Assessment", desc: "We analyze your space and identify fire safety requirements." },
    { num: "02", title: "System Design", desc: "Customized design as per safety standards and regulations." },
    { num: "03", title: "Installation", desc: "Professional installation by certified technicians." },
    { num: "04", title: "Testing & Commissioning", desc: "Complete testing to ensure optimal performance." },
    { num: "05", title: "Maintenance & Support", desc: "Ongoing service, AMC and compliance assistance." },
  ];

  const reasons = [
    { title: "Certified & Compliant Solutions", desc: "As per national and international standards." },
    { title: "Experienced Team", desc: "Skilled professionals with proven expertise." },
    { title: "Reliable Products", desc: "High-quality, tested and trusted equipment." },
    { title: "End-to-End Service", desc: "From design to maintenance." },
    { title: "Customized Solutions", desc: "Tailored to your specific needs." },
    { title: "Dedicated Support", desc: "We're always here when you need us." },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#ef4444] selection:text-white">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden bg-[#0a0a0a]">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fire_safety/hero_fire.webp"
            alt="Fire Safety Hero"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay from left to mask any baked-in text on the image and ensure our HTML text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent w-full md:w-[75%] lg:w-[65%]"></div>
          <div className="absolute inset-0 bg-[#0a0a0a]/40 md:hidden"></div> {/* Extra readability on mobile */}

          {/* Bottom fade to blend seamlessly into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 md:px-8 lg:px-4 w-full max-w-[1400px] mx-auto flex flex-col items-center md:items-start text-center md:text-left pt-20 lg:pt-24">

          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-gray-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="w-4 h-px bg-[#ef4444]"></span> FIRE SAFETY SYSTEMS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-black leading-[1.1] mb-6 tracking-tight text-white">
            Prevent. Protect. <br />
            <span className="text-[#ef4444]">Save Lives.</span>
          </h1>

          <p className="text-gray-200 text-lg sm:text-xl font-bold mb-3 max-w-2xl">
            Complete fire safety solutions for a safer tomorrow.
          </p>

          <p className="text-gray-400 text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            From design and installation to maintenance, we provide end-to-end fire safety systems that protect people, property and your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#059669] text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-[#047857] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="#explorer" className="w-full sm:w-auto border border-white/20 bg-black/40 backdrop-blur-sm text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-white/10 transition-colors text-center flex items-center justify-center">
              Explore Fire Safety Solutions
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#ef4444]" size={28} />
              <span className="text-[13px] font-bold text-gray-200 leading-tight">Compliant<br />Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <Wrench className="text-[#ef4444]" size={28} />
              <span className="text-[13px] font-bold text-gray-200 leading-tight">Expert<br />Installation</span>
            </div>
            <div className="flex items-center gap-3">
              <Radio className="text-[#ef4444]" size={28} />
              <span className="text-[13px] font-bold text-gray-200 leading-tight">24/7<br />Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Fire Safety Solutions */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-[#ef4444]">Fire Safety</span> Solutions</h2>
              <p className="text-gray-400 mt-4 max-w-2xl">We provide comprehensive fire safety systems designed, installed and maintained to meet your specific requirements and safety standards.</p>
            </div>
            <div className="flex items-center gap-2 text-[#ef4444] font-medium whitespace-nowrap">
              <div className="w-6 h-px bg-[#ef4444]"></div> End-to-End Fire Protection for Every Space
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#ef4444]/30 transition-all group flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#ef4444]/10 rounded-full flex items-center justify-center text-[#ef4444] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-white text-gray-200 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive "Explore a Complete Fire Safety System" */}
      <section className="px-4 md:px-8 lg:px-12 py-16 bg-white relative z-20">

        {/* Main Full-Image Container */}
        <div className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden relative shadow-md bg-[#f8f9fa] flex flex-col min-h-[800px]">

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/fire_safety/fire_explorer3.webp"
              alt="Fire Safety Building Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* White gradient overlays to ensure text readability on the left and right panels */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent w-full md:w-3/5 lg:w-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent w-full"></div>
          </div>

          {/* Foreground Overlay Content */}
          <div className="relative z-10 w-full h-full flex flex-col p-8 lg:p-12 flex-1">

            {/* Top Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-[#ef4444]"></span> EXPLORE OUR SOLUTION
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111] mb-4 leading-tight tracking-tight">
                  Explore a Complete <br />
                  <span className="text-[#ef4444]">Fire Safety System</span>
                </h2>
                <p className="text-gray-700 font-medium text-lg">
                  See how different fire safety components work together <br className="hidden md:block" />
                  to protect your building, people and assets.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-gray-700 tracking-widest uppercase bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                <span className="w-6 h-px bg-[#ef4444]"></span> INTEGRATED. RELIABLE. LIFE-SAVING.
              </div>
            </div>

            {/* Interactive Panels Area */}
            <div className="relative w-full flex-1 flex items-center">

              {/* Left Nav List - Floating */}
              <div className="w-64 md:w-72 flex flex-col gap-2 z-10 hidden sm:flex">
                {[
                  { id: "alarm", name: "Fire Alarm System", icon: <Flame size={18} /> },
                  { id: "sprinkler", name: "Sprinkler System", icon: <Droplets size={18} /> },
                  { id: "hydrant", name: "Fire Hydrant System", icon: <Waves size={18} /> },
                  { id: "extinguisher", name: "Fire Extinguishers", icon: <Flame size={18} /> },
                  { id: "lighting", name: "Emergency Lighting", icon: <Lightbulb size={18} /> },
                  { id: "suppression", name: "Fire Suppression", icon: <Zap size={18} /> },
                  { id: "detection", name: "Detection Systems", icon: <Radio size={18} /> },
                  { id: "exit", name: "Exit Signage", icon: <Lightbulb size={18} /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveNode(item.id as any)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all shadow-sm backdrop-blur-md ${(activeNode === item.id || (activeNode === 'panel' && item.id === 'alarm') || (activeNode === 'detector' && item.id === 'detection'))
                      ? 'bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-semibold border-transparent'
                      : 'bg-black/60 text-gray-300 font-semibold hover:bg-black/80 border-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${(activeNode === item.id || (activeNode === 'panel' && item.id === 'alarm') || (activeNode === 'detector' && item.id === 'detection'))
                        ? 'text-white'
                        : 'text-gray-500'
                        }`}>
                        {item.icon}
                      </div>
                      <span className="text-[13px] md:text-sm">{item.name}</span>
                    </div>
                    <ChevronRight size={16} className={(activeNode === item.id || (activeNode === 'panel' && item.id === 'alarm') || (activeNode === 'detector' && item.id === 'detection')) ? 'text-white' : 'text-gray-400'} />
                  </button>
                ))}
              </div>

              {/* Pointers Container (Absolute) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* We will add pointers here later. pointer-events-auto on individual points. */}
              </div>

              {/* Right Detail Card - Floating */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 z-10 hidden md:block">
                <h3 className="text-xl font-black text-gray-900 mb-2">{nodeData[activeNode].title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {nodeData[activeNode].desc}
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {nodeData[activeNode].points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#ef4444] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-[#ef4444] text-white font-semibold py-3.5 rounded-xl hover:bg-[#dc2626] transition-colors flex items-center justify-center gap-2 text-sm shadow-md shadow-red-500/20">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions for Every Sector */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Solutions for <span className="text-[#ef4444]">Every Sector</span></h2>
            </div>
            <p className="text-gray-400 text-sm md:mt-0 mt-2 font-medium">Tailored fire safety solutions for diverse environments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <h3 className="font-bold text-white text-lg w-2/3 leading-tight">{sector.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
              <p className="text-gray-400 mt-2 text-lg">A simple and reliable process from assessment to ongoing support.</p>
            </div>
            <span className="text-[#ef4444] font-semibold text-sm mt-4 md:mt-0">Your Safety, Our Commitment</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 relative justify-between">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start gap-4 max-w-[220px] group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#111] border-2 border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                  {idx === 0 && <ShieldCheck size={24} />}
                  {idx === 1 && <Wrench size={24} />}
                  {idx === 2 && <Zap size={24} />}
                  {idx === 3 && <Radio size={24} />}
                  {idx === 4 && <HeartPulse size={24} />}
                </div>
                <div>
                  <div className="font-black text-2xl text-[#ef4444] mb-1">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Safetech */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-[0.8] lg:sticky top-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why <span className="text-[#ef4444]">Safetech</span></h2>
            <p className="text-gray-400 text-lg mb-8">More than just fire safety systems — a safer future.</p>
            <div className="inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div> Trusted. Compliant. Always Prepared.
            </div>
          </div>

          <div className="flex-[1.2] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#ef4444]">
                  {idx === 0 && <ShieldCheck size={24} />}
                  {idx === 1 && <Building2 size={24} />}
                  {idx === 2 && <Flame size={24} />}
                  {idx === 3 && <Wrench size={24} />}
                  {idx === 4 && <CheckCircle2 size={24} />}
                  {idx === 5 && <HeartPulse size={24} />}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">{reason.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 border-t border-white/10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop"
          alt="Fire Sprinkler Background"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="relative z-10 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              A Safer Tomorrow <br />
              <span className="text-[#ef4444]">Starts Today.</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-lg">Let's design a fire safety system built specifically for your space.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#ef4444] text-white font-semibold rounded-lg px-8 py-4 hover:bg-[#dc2626] transition-colors flex items-center justify-center gap-2">
                Get a Free Site Survey <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto border border-white/20 bg-black/40 backdrop-blur-sm text-white font-semibold rounded-lg px-8 py-4 hover:bg-white/5 transition-colors flex items-center justify-center">
                Talk to an Expert
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <CheckCircle2 size={16} className="text-[#ef4444]" /> No-Obligation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <CheckCircle2 size={16} className="text-[#ef4444]" /> Expert Advice
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <CheckCircle2 size={16} className="text-[#ef4444]" /> Customized Solutions
              </div>
            </div>
          </div>

          <div className="hidden md:block opacity-30 transform -rotate-12">
            <div className="font-['Brush_Script_MT',cursive] text-7xl text-white">Protect<br />What Matters</div>
          </div>
        </div>
      </section>

    </div>
  );
}
