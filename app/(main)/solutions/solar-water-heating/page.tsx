"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Droplets,
  Flame,
  ThermometerSun,
  Home,
  Building2,
  Factory,
  Hotel,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Banknote,
  Leaf,
  Settings,
  ChevronDown,
  Wrench,
  Thermometer,
  Waves,
  Zap,
  ChevronRight,
  Database
} from "lucide-react";

export default function SolarWaterHeatingPage() {
  const [activeTab, setActiveTab] = useState<"homes" | "hospitality" | "healthcare" | "commercial" | "industrial">("homes");
  const [activeNode, setActiveNode] = useState<string>("collectors");

  const explorerData: Record<string, { title: string, desc: string, icon: JSX.Element }> = {
    collectors: { title: "1. Solar Collectors", desc: "Absorb sunlight and convert it into heat energy.", icon: <Sun size={18} /> },
    tank: { title: "2. Storage Tank", desc: "Stores heated water in an insulated tank for later use.", icon: <Droplets size={18} /> },
    system: { title: "3. Intelligent System", desc: "Controls water flow, temperature and backup heating (if required).", icon: <Settings size={18} /> },
    supply: { title: "4. Hot Water Supply", desc: "Delivers hot water to bathrooms, kitchens and other areas across the building.", icon: <Waves size={18} /> },
    inlet: { title: "5. Cold Water Inlet", desc: "Brings in cold water from the main supply to be heated by the solar system.", icon: <Thermometer size={18} /> },
    backup: { title: "6. Backup Heater (Optional)", desc: "An electric or gas heater can be used when additional heating is required.", icon: <Flame size={18} /> },
  };

  const services = [
    { title: "Domestic Solar Water Heaters", desc: "Efficient hot-water solutions designed for homes, villas and apartments.", icon: <Home size={24} /> },
    { title: "Commercial Water Heating", desc: "Scalable systems for hotels, hospitals, restaurants, hostels and commercial facilities.", icon: <Building2 size={24} /> },
    { title: "Industrial Water Heating", desc: "Large-capacity solar thermal systems for facilities with significant hot-water requirements.", icon: <Factory size={24} /> },
    { title: "Solar Collector Systems", desc: "Capture solar thermal energy and transfer heat to your water system.", icon: <ThermometerSun size={24} /> },
    { title: "Storage Tanks", desc: "Insulated water storage designed to retain heated water for later use.", icon: <Droplets size={24} /> },
    { title: "Installation & Commissioning", desc: "Complete installation, connection and system testing.", icon: <Settings size={24} /> },
    { title: "Maintenance & AMC", desc: "Periodic inspection, servicing and technical support.", icon: <Wrench size={24} /> },
  ];

  const spaces = {
    homes: ["Houses", "Villas", "Apartments", "Farmhouses"],
    hospitality: ["Hotels", "Resorts", "Hostels", "Guest houses"],
    healthcare: ["Hospitals", "Clinics", "Healthcare facilities"],
    commercial: ["Offices", "Restaurants", "Gyms", "Institutions"],
    industrial: ["Manufacturing", "Processing facilities", "Industrial campuses"]
  };

  const flowSteps = [
    { icon: <Sun size={32} />, label: "Sunlight", title: "Solar Collection", desc: "Solar collectors absorb thermal energy from sunlight." },
    { icon: <Flame size={32} />, label: "Heat Transfer", title: "Heat Transfer", desc: "The collected heat is transferred to the water." },
    { icon: <Droplets size={32} />, label: "Storage Tank", title: "Storage", desc: "Heated water is stored inside an insulated tank." },
    { icon: <Waves size={32} />, label: "Hot Water", title: "Delivery", desc: "Hot water is supplied to your home or business when required." },
    { icon: <Activity size={32} />, label: "Backup", title: "Backup", desc: "A backup heating source can be integrated when required." }
  ];

  const benefits = [
    { title: "Solar Powered", desc: "Use renewable solar energy for water heating.", icon: <Sun size={24} /> },
    { title: "Lower Heating Costs", desc: "Reduce the amount of conventional energy required for heating water.", icon: <Banknote size={24} /> },
    { title: "Reliable Hot Water", desc: "Designed to provide hot water throughout the day.", icon: <Droplets size={24} /> },
    { title: "Cleaner Energy", desc: "Use solar thermal energy instead of relying entirely on conventional heating.", icon: <Leaf size={24} /> },
    { title: "Low Maintenance", desc: "Designed for dependable long-term operation with routine maintenance.", icon: <Wrench size={24} /> },
    { title: "Scalable", desc: "Systems can be designed according to household or commercial demand.", icon: <Activity size={24} /> },
  ];

  const processSteps = [
    { num: "01", title: "Requirement Analysis", desc: "Understand your hot-water demand." },
    { num: "02", title: "Site Assessment", desc: "Check roof area, sunlight exposure and installation conditions." },
    { num: "03", title: "System Design", desc: "Determine collector and storage requirements." },
    { num: "04", title: "Installation", desc: "Install collectors, tank, piping and required controls." },
    { num: "05", title: "Testing", desc: "Test water flow, heating performance and system connections." },
    { num: "06", title: "Support", desc: "Maintenance and service whenever required." },
  ];

  const comparisons = [
    { req: "Small home", rec: "Compact domestic system" },
    { req: "Large home", rec: "Higher-capacity system" },
    { req: "Apartment", rec: "Centralized / building system" },
    { req: "Hotel", rec: "Commercial high-capacity system" },
    { req: "Hospital", rec: "Continuous hot-water solution" },
    { req: "Factory", rec: "Industrial solar thermal system" },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#f59e0b] selection:text-black overflow-hidden">

      {/* 1. Hero Section (Updated Reference Style, Amber Theme) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solar_geyser/hero_geyser.webp"
            alt="Solar Water Heating System"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for Text Readability - Dark mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent lg:w-[65%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d97706]"></div>
              <div className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                SOLAR WATER HEATING SOLUTIONS
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-white">
              Hot Water <br />
              <span className="text-[#d97706]">A Brighter</span> <br />
              Tomorrow.
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
              Clean Energy. Lower Bills. A Greener Planet. <br className="hidden sm:block" />
              Make the smart switch to solar water heating.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start mb-16">
              <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#d97706] text-white font-semibold rounded-full px-8 py-4 hover:bg-[#b45309] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#d97706]/20">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#explorer" className="w-full sm:w-auto border border-white/40 text-white font-semibold rounded-full px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Explore Solutions <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Features Row */}
            <div className="flex items-center flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col items-center gap-3">
                <Leaf size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Eco<br/>Friendly</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Database size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Lower<br/>Energy Bills</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <ShieldCheck size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Reliable<br/>Performance</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Sun size={28} className="text-white/90" strokeWidth={1.5} />
                <span className="text-xs text-gray-400 font-medium text-center leading-tight">Sustainable<br/>Future</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What We Provide */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Solar Water Heating Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From compact residential geysers to massive commercial thermal arrays, we have the expertise to design and deploy it.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#f59e0b]/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#f59e0b] mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solar Geyser Explorer (Interactive Layout) */}
      <section className="px-4 md:px-8 lg:px-12 py-16 bg-[#0a0a0a] relative z-20">

        {/* Main Full-Image Container */}
        <div className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden relative shadow-2xl bg-[#111] flex flex-col min-h-[800px] border border-white/5">

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/solar_geyser/geyser_explore.webp"
              alt="Solar Water Heating Ecosystem Explorer"
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
                  <div className="w-12 h-[2px] bg-[#f59e0b]"></div>
                  <span className="text-[#f59e0b] font-bold tracking-widest text-xs uppercase">Solar Water Heating Solutions</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Hot Water. <br />
                  Powered by the Sun.
                </h2>
                <p className="text-gray-400 font-medium text-lg">
                  Sustainable. Reliable. Cost-Effective.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-0">
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#f59e0b]/10 p-2 rounded-xl text-[#f59e0b]">
                    <Banknote size={18} className="fill-[#f59e0b]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Lower<br />Heating Costs</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#f59e0b]/10 p-2 rounded-xl text-[#f59e0b]">
                    <Leaf size={18} className="fill-[#f59e0b]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Clean<br />Energy</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#f59e0b]/10 p-2 rounded-xl text-[#f59e0b]">
                    <ShieldCheck size={18} className="fill-[#f59e0b]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Reliable<br />Hot Water</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111]/80 backdrop-blur-sm border border-white/5 px-4 py-3 rounded-2xl">
                  <div className="bg-[#f59e0b]/10 p-2 rounded-xl text-[#f59e0b]">
                    <Leaf size={18} className="fill-[#f59e0b]/20" />
                  </div>
                  <span className="text-white font-bold text-xs leading-tight">Greener<br />Tomorrow</span>
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
                      ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold border-transparent'
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
                <div className="w-12 h-1 bg-gradient-to-r from-[#f59e0b] to-transparent rounded-full"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Where Solar Water Heating Works */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hot Water For Every Requirement</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From single families to large hospital chains, we provide appropriately sized solutions.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-black/50 p-1.5 rounded-full border border-white/10 flex-wrap overflow-x-auto max-w-full">
              {Object.keys(spaces).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap capitalize ${activeTab === tab ? 'bg-[#f59e0b] text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {spaces[activeTab].map((space, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 hover:border-white/10 transition-colors animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 size={24} className="text-[#f59e0b]" />
                <span className="font-medium text-gray-200">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Solar Water Heating? */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Heat Water. Not Your Electricity Bill.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Switching to solar thermal energy is one of the most cost-effective upgrades for any property.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#f59e0b]/30 transition-colors">
                <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center text-[#f59e0b] mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Installation Process */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">From Roof <br />To Hot Water.</h2>
            <p className="text-gray-400 text-lg mb-8">We take care of the entire lifecycle, ensuring your system is correctly sized, securely installed, and operates flawlessly.</p>
            <Thermometer size={80} className="text-[#f59e0b]/20" />
          </div>

          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {processSteps.map((step, idx) => (
              <div key={idx} className="border-l-2 border-[#f59e0b]/30 pl-6 py-2 hover:border-[#f59e0b] transition-colors group">
                <div className="text-xs font-bold text-[#f59e0b] tracking-widest mb-1 group-hover:text-white transition-colors">STEP {step.num}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Choosing The Right System */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Solution Is Right For You?</h2>
            <p className="text-gray-400 text-lg">Every building has different demands. We help you choose the right capacity.</p>
          </div>

          <div className="bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-6 font-bold text-white text-lg">Your Requirement</th>
                    <th className="p-6 font-bold text-white text-lg">Recommended Direction</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 text-gray-300 font-medium">{row.req}</td>
                      <td className="p-6 text-[#f59e0b] font-medium flex items-center gap-2">
                        <CheckCircle2 size={18} /> {row.rec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-[#111] text-center border-t border-white/10">
              <p className="text-gray-400 mb-4">Not sure what capacity you need? Let our engineers calculate it for you.</p>
              <button className="text-[#f59e0b] font-bold hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto">
                Talk to an Expert <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Solar Geyser vs Conventional */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#f59e0b]/5 blur-[100px] rounded-[100%] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Clear Choice.</h2>
            <p className="text-gray-400 text-lg">Compare solar water heating against conventional electric or gas heaters.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Solar */}
            <div className="flex-1 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 blur-[50px]"></div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Sun className="text-[#f59e0b]" /> Solar Water Heating
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f59e0b] shrink-0 mt-0.5" /> <span className="text-gray-200">Uses free solar thermal energy</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f59e0b] shrink-0 mt-0.5" /> <span className="text-gray-200">Massively reduced conventional energy usage</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f59e0b] shrink-0 mt-0.5" /> <span className="text-gray-200">100% renewable energy source</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f59e0b] shrink-0 mt-0.5" /> <span className="text-gray-200">Designed for long-term continuous operation</span></li>
              </ul>
            </div>

            {/* Conventional */}
            <div className="flex-1 bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                <Zap className="text-gray-500" /> Conventional Heating
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div></div> <span className="text-gray-400">Uses conventional electricity/gas fuel</span></li>
                <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div></div> <span className="text-gray-400">Ongoing and increasing energy consumption</span></li>
                <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div></div> <span className="text-gray-400">Dependent entirely on the electrical grid</span></li>
                <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div></div> <span className="text-gray-400">Requires continuous expensive energy input</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-32 text-center bg-gradient-to-b from-[#111] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Make Hot Water A Little Smarter.</h2>
          <p className="text-gray-400 text-xl mb-10 font-medium italic">"Harness the sun. Heat your water. Save energy."</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/contact#quote-form" className="w-full sm:w-auto bg-[#f59e0b] text-black font-semibold rounded-lg px-8 py-4 hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2">
              Get A Free Consultation <ArrowRight size={18} />
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
