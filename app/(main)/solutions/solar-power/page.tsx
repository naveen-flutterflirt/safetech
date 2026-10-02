"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Battery,
  Zap,
  Home,
  Building2,
  Factory,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Banknote,
  Leaf,
  Activity,
  LineChart,
  Settings,
  ChevronDown,
  ChevronRight,
  Plug
} from "lucide-react";

export default function SolarPowerPage() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "industrial">("commercial");
  const [activeNode, setActiveNode] = useState<string>("panels");
  const [activeComponent, setActiveComponent] = useState<number>(0);

  const services = [
    { title: "Solar Panel Systems", desc: "High-efficiency photovoltaic systems designed to generate clean electricity from sunlight.", icon: <Sun size={24} /> },
    { title: "On-Grid Solar Systems", desc: "Connect your solar installation with the electricity grid and reduce your conventional electricity consumption.", icon: <Plug size={24} /> },
    { title: "Off-Grid Solar Systems", desc: "Independent solar solutions with battery storage for locations requiring greater energy independence.", icon: <Battery size={24} /> },
    { title: "Hybrid Solar Systems", desc: "Combine solar generation, battery storage and grid power for flexible energy management.", icon: <Zap size={24} /> },
    { title: "Solar Inverters", desc: "Convert solar energy into usable electricity while managing system performance.", icon: <Activity size={24} /> },
    { title: "Solar Battery Storage", desc: "Store excess solar energy and use it when sunlight isn't available.", icon: <Battery size={24} /> },
    { title: "Commercial Solar", desc: "Scalable solar installations designed for offices, shops, hotels, warehouses and other businesses.", icon: <Building2 size={24} /> },
    { title: "Industrial Solar", desc: "Large-scale systems designed to support high-energy-demand facilities.", icon: <Factory size={24} /> },
  ];

  const spaces = {
    residential: ["Homes", "Villas", "Apartments", "Farmhouses", "Residential societies"],
    commercial: ["Offices", "Shops", "Hotels", "Schools", "Hospitals", "Restaurants"],
    industrial: ["Factories", "Warehouses", "Manufacturing units", "Large facilities", "Industrial campuses"]
  };

  const explorerData: Record<string, { title: string, desc: string, icon: JSX.Element }> = {
    sunlight: { title: "1. Sunlight", desc: "Solar panels capture sunlight and convert it into DC electricity.", icon: <Sun size={18} /> },
    panels: { title: "2. Solar Panels", desc: "High-efficiency photovoltaic panels generate DC power from sunlight.", icon: <Sun size={18} /> },
    combiner: { title: "3. DC Combiner Box", desc: "Combines DC output from multiple panels with protection.", icon: <Settings size={18} /> },
    inverter: { title: "4. Inverter", desc: "Converts DC electricity to AC power for building use.", icon: <Activity size={18} /> },
    ac_panel: { title: "5. AC Distribution Panel", desc: "Distributes solar power to different floors and building loads.", icon: <Settings size={18} /> },
    grid: { title: "6. Grid Connection", desc: "Excess power can be fed back to the utility grid (net metering).", icon: <Plug size={18} /> },
    battery: { title: "7. Battery Storage", desc: "Stores excess solar energy for use during low sunlight or power outages.", icon: <Battery size={18} /> },
    usage: { title: "8. Building Usage", desc: "Solar power supplies electricity to lighting, appliances, HVAC and other systems.", icon: <Building2 size={18} /> },
  };

  const benefits = [
    { title: "Reduce Electricity Costs", desc: "Generate your own electricity and reduce dependence on conventional power.", icon: <Banknote size={24} /> },
    { title: "Clean Energy", desc: "Use renewable energy and reduce your environmental impact.", icon: <Leaf size={24} /> },
    { title: "Energy Independence", desc: "Generate and manage more of your own electricity.", icon: <ShieldCheck size={24} /> },
    { title: "Long-Term Value", desc: "A properly designed solar system can provide value over many years.", icon: <LineChart size={24} /> },
    { title: "Smart Energy Management", desc: "Monitor and manage your solar generation and consumption.", icon: <Activity size={24} /> },
    { title: "Scalable Systems", desc: "Build a system that can grow with your energy requirements.", icon: <Building2 size={24} /> },
  ];

  const processSteps = [
    { num: "01", title: "Consultation", desc: "We understand your energy requirements." },
    { num: "02", title: "Site Assessment", desc: "Our team evaluates your property, roof area, orientation and energy usage." },
    { num: "03", title: "System Design", desc: "We design a solar system around your requirements." },
    { num: "04", title: "Installation", desc: "Professional installation of panels, inverter, wiring and supporting equipment." },
    { num: "05", title: "Testing & Commissioning", desc: "The complete system is tested and configured." },
    { num: "06", title: "Support", desc: "We provide maintenance and technical support after installation." },
  ];

  const components = [
    { title: "Solar Panels", purpose: "Generate electricity" },
    { title: "Solar Inverter", purpose: "Convert and manage power" },
    { title: "Mounting Structure", purpose: "Secure panels to the installation surface" },
    { title: "Solar Battery", purpose: "Store excess energy" },
    { title: "DC/AC Protection", purpose: "Protect the electrical system" },
    { title: "Monitoring System", purpose: "Track solar generation and performance" },
  ];


  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#eab308] selection:text-black overflow-hidden">

      {/* 1. Hero Section (Updated Reference Style, Original Theme) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solar_power/hero_solar.webp"
            alt="Solar Panels on Modern Home"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for Text Readability - Dark mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent lg:w-2/3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <div className="mb-4 text-xs font-bold tracking-widest text-[#eab308] uppercase">
              CLEAN ENERGY. BRIGHTER TOMORROW.
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-white">
              Harness <br />
              the Power <br />
              <span className="text-[#eab308]">of the Sun</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
              Reliable solar solutions for homes, businesses and industries. Save energy, reduce costs and build a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
              <Link href="#explorer" className="w-full sm:w-auto bg-[#eab308] text-black font-semibold rounded-full px-8 py-4 hover:bg-[#ca8a04] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#eab308]/20">
                Explore Solar Solutions <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Features Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl z-20">
          <div className="bg-[#111] rounded-2xl shadow-2xl p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border border-white/5">

            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0">
                <Leaf className="text-[#eab308]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Lower Electricity Bills</h4>
                <p className="text-gray-400 text-xs leading-snug">Cut your energy costs significantly.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0">
                <Settings className="text-[#eab308]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Sustainable Future</h4>
                <p className="text-gray-400 text-xs leading-snug">Clean, renewable and eco-friendly energy.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0">
                <Zap className="text-[#eab308]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Reliable Performance</h4>
                <p className="text-gray-400 text-xs leading-snug">Designed for long-term efficiency.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0">
                <Activity className="text-[#eab308]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Custom Solutions</h4>
                <p className="text-gray-400 text-xs leading-snug">For homes, businesses and industries.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What We Provide */}
      <section className="px-6 md:px-12 lg:px-16 pt-32 pb-20 bg-[#111] border-y border-white/5 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Solar Power Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From system design to installation and ongoing support, we help you build a solar system suited to your energy requirements.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#eab308]/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#eab308] mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solar Power Explorer (Interactive Layout) */}
      <section className="px-4 md:px-8 lg:px-12 py-16 bg-[#0a0a0a] relative z-20">

        {/* Main Full-Image Container */}
        <div className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden relative shadow-2xl bg-[#111] flex flex-col min-h-[800px] border border-white/5">

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/solar_power/solar_explore.webp"
              alt="Solar Power Ecosystem Explorer"
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
                  <div className="w-12 h-[2px] bg-[#eab308]"></div>
                  <span className="text-[#eab308] font-bold tracking-widest text-xs uppercase">Solar Power Solution</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  From Sunlight <br />
                  to Sustainable Power
                </h2>
                <p className="text-gray-400 font-medium text-lg">
                  Clean Energy. Smarter Buildings. A Brighter Tomorrow.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-0">
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#eab308]/10 p-2 rounded-xl text-[#eab308]">
                    <Leaf size={18} className="fill-[#eab308]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Lower<br />Energy Bills</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#eab308]/10 p-2 rounded-xl text-[#eab308]">
                    <Zap size={18} className="fill-[#eab308]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Clean<br />Energy</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#eab308]/10 p-2 rounded-xl text-[#eab308]">
                    <LineChart size={18} className="fill-[#eab308]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Long-Term<br />Savings</span>
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
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all shadow-sm backdrop-blur-md border ${activeNode === key
                      ? 'bg-gradient-to-r from-[#eab308] to-[#ca8a04] text-black font-semibold border-transparent'
                      : 'bg-black/60 text-gray-300 font-semibold hover:bg-black/80 border-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${activeNode === key ? 'text-black' : 'text-gray-500'}`}>
                        {item.icon}
                      </div>
                      <span className="text-[13px] md:text-sm">{item.title.split('. ')[1]}</span>
                    </div>
                    <ChevronRight size={16} className={activeNode === key ? 'text-black' : 'text-gray-500'} />
                  </button>
                ))}
              </div>

              {/* Right Detail Card - Floating */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-80 bg-[#111]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 z-10 hidden md:block">
                <h3 className="text-xl font-black text-white mb-2">{explorerData[activeNode].title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {explorerData[activeNode].desc}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#eab308] to-transparent rounded-full"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions For Every Space */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Designed Around Your Needs</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Scalable solutions tailored to specific energy requirements across various sectors.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-black/50 p-1.5 rounded-full border border-white/10 overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "residential" ? 'bg-[#eab308] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "commercial" ? 'bg-[#eab308] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveTab("industrial")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "industrial" ? 'bg-[#eab308] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Industrial
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {spaces[activeTab].map((space, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 hover:border-white/10 transition-colors animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 size={24} className="text-[#eab308]" />
                <span className="font-medium text-gray-200">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Go Solar? */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">More Than Just Lower Bills.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover the long-term advantages of investing in a Safetech solar power system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#eab308]/30 transition-colors">
                <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center text-[#eab308] mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Solar Process */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">From Consultation To Clean Energy</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our streamlined process ensures a hassle-free transition to solar power.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 rounded-3xl bg-[#111]/50 backdrop-blur-sm overflow-hidden group">
                <div className="text-[120px] font-black text-white/[0.02] absolute -bottom-6 -right-6 leading-none group-hover:text-white/[0.04] transition-colors">{step.num}</div>
                <div className="text-[#eab308] font-bold tracking-widest text-sm mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Solar System Components */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Solar System Needs</h2>
              <p className="text-gray-400 text-lg max-w-xl">Explore the critical components that make up a reliable and efficient solar installation.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-3">
              {components.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveComponent(idx)}
                  className={`text-left px-6 py-5 rounded-xl transition-all flex items-center justify-between ${activeComponent === idx ? 'bg-[#eab308] text-black font-bold shadow-lg' : 'bg-black border border-white/5 text-gray-300 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>{comp.title}</span>
                  <ChevronRight size={18} className={activeComponent === idx ? 'text-black' : 'text-gray-500'} />
                </button>
              ))}
            </div>

            <div className="flex-[1.5] bg-black border border-white/10 rounded-2xl p-8 lg:p-12 flex flex-col justify-center min-h-[300px]">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300" key={activeComponent}>
                <h3 className="text-3xl font-bold mb-4 text-white">{components[activeComponent].title}</h3>
                <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[#eab308] font-medium mb-6">
                  {components[activeComponent].purpose}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  A high-quality {components[activeComponent].title.toLowerCase()} is essential for ensuring your solar system operates safely, efficiently, and provides maximum return on your investment over its lifespan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Solar Performance */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#eab308]/10 blur-[120px] rounded-[100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Your Energy. Your Savings.</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-5xl md:text-6xl font-black text-[#eab308] mb-2">80%</div>
              <p className="text-white font-medium mb-1">Potential Reduction</p>
              <p className="text-sm text-gray-500">in conventional electricity consumption*</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-[#eab308] mb-2">25+</div>
              <p className="text-white font-medium mb-1">Years Lifespan</p>
              <p className="text-sm text-gray-500">typical design life of quality panels*</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-[#eab308] mb-2">100%</div>
              <p className="text-white font-medium mb-1">Renewable</p>
              <p className="text-sm text-gray-500">clean energy source</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-[#eab308] mb-2">24/7</div>
              <p className="text-white font-medium mb-1">Monitoring</p>
              <p className="text-sm text-gray-500">energy generation tracking</p>
            </div>
          </div>

          <p className="text-xs text-gray-600 max-w-3xl mx-auto italic">
            *Actual savings and lifespan depend on system size, quality of components, energy usage patterns, geographic location, and other environmental factors.
          </p>
        </div>
      </section>


      {/* 10. CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-32 text-center bg-gradient-to-b from-[#111] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Make The Switch To Smarter Energy.</h2>
          <p className="text-gray-400 text-xl mb-10 font-medium italic">"Generate clean power. Reduce energy costs. Build a brighter tomorrow."</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#eab308] text-black font-semibold rounded-lg px-8 py-4 hover:bg-[#ca8a04] transition-colors flex items-center justify-center gap-2">
              Get Free Solar Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto border border-white/20 text-white font-semibold rounded-lg px-8 py-4 hover:bg-white/5 transition-colors flex items-center justify-center">
              Talk To A Solar Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
