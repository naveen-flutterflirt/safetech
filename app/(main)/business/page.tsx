"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Droplets, Camera, CheckCircle2, ChevronRight, Briefcase } from "lucide-react";

export default function BusinessPage() {
  const [activeIndustry, setActiveIndustry] = useState("Offices");

  const industries = [
    { name: "Offices", solutions: "CCTV, fire alarms, solar power" },
    { name: "Hotels & Resorts", solutions: "Surveillance, fire safety, hot water" },
    { name: "Shops & Showrooms", solutions: "CCTV, security monitoring" },
    { name: "Hospitals", solutions: "Fire safety, surveillance, solar" },
    { name: "Schools & Institutions", solutions: "CCTV, fire protection, solar" },
    { name: "Warehouses", solutions: "Surveillance, fire safety, solar" },
    { name: "Factories", solutions: "Industrial safety, surveillance, solar" }
  ];

  const steps = [
    "Understand Your Requirements",
    "Site Assessment",
    "Customized Proposal",
    "Professional Installation",
    "Testing & Handover",
    "Maintenance & Support"
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Briefcase size={16} className="text-blue-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-200">SMART SOLUTIONS FOR YOUR BUSINESS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              Protect Your Business.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Power Your Future.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              From advanced CCTV surveillance to fire safety systems and solar energy solutions, Safetech helps businesses create safer, smarter and more efficient workplaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Get Business Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#solutions" className="px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-md">
                Explore Business Solutions
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-12 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Security</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Safety</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Energy Efficiency</div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-2 rounded-3xl backdrop-blur-xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] relative">
                {/* Abstract graphic for business building/server room */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Section */}
      <section id="solutions" className="py-24 px-6 lg:px-12 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Solutions For Your Business</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything Your Business Needs, Under One Roof.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* CCTV Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                <Camera size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CCTV & Surveillance</h3>
              <p className="text-gray-400 mb-8 h-24">Protect your office, commercial property and business assets with professionally designed surveillance systems.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> HD & IP CCTV cameras</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 24/7 surveillance & Remote monitoring</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> NVR/DVR systems & Access monitoring</li>
              </ul>
              <Link href="/solutions/cctv" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Explore CCTV Solutions <ArrowRight size={16} />
              </Link>
            </div>

            {/* Fire Safety Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-8 border border-red-500/30">
                <Shield size={32} className="text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fire Safety Systems</h3>
              <p className="text-gray-400 mb-8 h-24">Help protect your employees, customers and property with professionally planned fire safety solutions.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Fire alarm systems & Detectors</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Fire extinguishers & Equipment</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Installation and maintenance</li>
              </ul>
              <Link href="/solutions/fire-safety" className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors">
                Explore Fire Safety <ArrowRight size={16} />
              </Link>
            </div>

            {/* Solar Power Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-8 border border-yellow-500/30">
                <Zap size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Solar Power Solutions</h3>
              <p className="text-gray-400 mb-8 h-24">Reduce conventional electricity dependence with solar solutions designed around your business's energy requirements.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Commercial solar panels</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> On-grid & Hybrid systems</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Inverters & Battery storage</li>
              </ul>
              <Link href="/solutions/solar-power" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Explore Solar Power <ArrowRight size={16} />
              </Link>
            </div>

            {/* Solar Geyser Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30">
                <Droplets size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Solar Water Heating</h3>
              <p className="text-gray-400 mb-8 h-24">Efficient hot-water solutions for businesses that need reliable water heating.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Commercial solar geysers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Solar water heating systems & Tanks</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Maintenance and support</li>
              </ul>
              <Link href="/solutions/solar-water-heating" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Explore Solar Geysers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Selector */}
      <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed For Your Industry</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Select your business type to see our recommended solutions.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {industries.map((ind) => (
                <button
                  key={ind.name}
                  onClick={() => setActiveIndustry(ind.name)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 font-medium text-lg flex items-center justify-between ${
                    activeIndustry === ind.name 
                      ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]' 
                      : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {ind.name}
                  {activeIndustry === ind.name && <ChevronRight size={20} />}
                </button>
              ))}
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-black/50 border border-white/5 rounded-3xl p-8 lg:p-12 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
                
                <h3 className="text-3xl font-bold mb-6 text-white">{activeIndustry} Solutions</h3>
                
                <div className="space-y-6">
                  {industries.find(i => i.name === activeIndustry)?.solutions.split(', ').map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                        <CheckCircle2 size={20} className="text-blue-400" />
                      </div>
                      <span className="text-lg font-medium text-gray-200 capitalize">{sol}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1">
                    Discuss Your Requirements <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Businesses Choose Safetech</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">More Than Products. Complete Solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Customized Consultation", desc: "Solutions designed according to your business requirements." },
              { title: "Professional Installation", desc: "Expert installation of selected systems and equipment." },
              { title: "Integrated Services", desc: "Security, safety and energy solutions from one service provider." },
              { title: "Maintenance Support", desc: "Ongoing technical support and maintenance options." },
              { title: "Scalable Solutions", desc: "Systems can be planned for current and future requirements." },
              { title: "Business-Focused Approach", desc: "We consider your property, usage and operational needs." }
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:bg-[#111] transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-xl font-bold text-gray-500 border border-white/10">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">From Consultation To Installation</h2>
            <p className="text-gray-400 text-lg">Our streamlined process for businesses.</p>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12 pb-12">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-10 md:pl-16 group">
                <div className="absolute top-0 left-[-20px] w-10 h-10 rounded-full bg-[#111] border-2 border-white/20 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors z-10">
                  0{i + 1}
                </div>
                {/* Glowing line effect on hover */}
                <div className="absolute top-10 left-[-1px] w-[2px] h-full bg-blue-500/0 group-hover:bg-blue-500/50 transition-colors -z-0"></div>
                
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 px-6 lg:px-12 bg-black relative border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center relative z-10 backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Let's Build A Safer,<br />Smarter Business.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're setting up a new commercial property or upgrading an existing facility, our team can help you explore suitable solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact#quote-form" className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Request Business Consultation
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-black/50 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
              Contact Safetech
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
