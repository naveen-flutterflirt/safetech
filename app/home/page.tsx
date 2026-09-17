"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Droplets, Camera, CheckCircle2, Home } from "lucide-react";

export default function HomePage() {
  const requirements = [
    {
      title: "New Home",
      icon: "🏡",
      features: [
        "CCTV planning",
        "Fire safety planning",
        "Solar installation",
        "Solar geyser installation"
      ]
    },
    {
      title: "Existing Home",
      icon: "🏠",
      features: [
        "Security upgrades",
        "Camera expansion",
        "Solar retrofitting",
        "Water heating solutions"
      ]
    },
    {
      title: "Villa / Large Home",
      icon: "🏘️",
      features: [
        "Multi-camera surveillance",
        "Property perimeter monitoring",
        "Solar power solutions",
        "Larger hot-water systems"
      ]
    },
    {
      title: "Apartment",
      icon: "🏢",
      features: [
        "Individual home CCTV",
        "Fire safety equipment",
        "Suitable solar solutions",
        "Water heating consultation"
      ]
    }
  ];

  const steps = [
    "Tell Us Your Requirements",
    "Discuss Your Property",
    "Get A Customized Quotation",
    "Schedule Installation",
    "Testing & Handover",
    "Ongoing Support"
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Home size={16} className="text-orange-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-orange-200">SMART SOLUTIONS FOR YOUR HOME</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              A Safer Home.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">A Smarter Tomorrow.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Protect your family, improve home security and explore solar energy solutions with Safetech's residential services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Get Home Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#solutions" className="px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-md">
                Explore Home Solutions
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-12 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Home Security</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Fire Protection</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Solar Energy</div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-2 rounded-3xl backdrop-blur-xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] relative">
                {/* Abstract graphic for modern residential home */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Section */}
      <section id="solutions" className="py-24 px-6 lg:px-12 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything Your Home Needs</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comfort, Safety & Security — All In One Place.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* CCTV Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-8 border border-orange-500/30">
                <Camera size={32} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Home CCTV & Surveillance</h3>
              <p className="text-gray-400 mb-8 h-24">Keep an eye on your home, family and surroundings with reliable surveillance solutions.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Indoor & Outdoor cameras</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Wi-Fi cameras & Night vision</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Remote mobile monitoring</li>
              </ul>
              <Link href="/solutions/cctv" className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                Explore Home CCTV <ArrowRight size={16} />
              </Link>
            </div>

            {/* Fire Safety Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-8 border border-red-500/30">
                <Shield size={32} className="text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Home Fire Safety</h3>
              <p className="text-gray-400 mb-8 h-24">Help protect your family and property with essential fire safety equipment and systems.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Smoke detectors & Fire alarms</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Kitchen fire safety & Extinguishers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Emergency alerts</li>
              </ul>
              <Link href="/solutions/fire-safety" className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors">
                Explore Home Fire Safety <ArrowRight size={16} />
              </Link>
            </div>

            {/* Solar Power Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/30">
                <Zap size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Residential Solar Power</h3>
              <p className="text-gray-400 mb-8 h-24">Generate clean electricity for your home with a solar power system designed around your energy needs.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Rooftop solar panels</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> On-grid & Hybrid systems</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Battery storage solutions</li>
              </ul>
              <Link href="/solutions/solar-power" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                Explore Home Solar <ArrowRight size={16} />
              </Link>
            </div>

            {/* Solar Geyser Card */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors"></div>
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30">
                <Droplets size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Solar Geysers</h3>
              <p className="text-gray-400 mb-8 h-24">Enjoy solar-powered hot water for your home while reducing conventional water heating requirements.</p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Residential solar geysers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Rooftop installation & Storage</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Maintenance and support</li>
              </ul>
              <Link href="/solutions/solar-water-heating" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Explore Solar Geysers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Requirement Selector */}
      <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions For Every Corner Of Your Home</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore solutions tailored to your specific residential property.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:bg-[#111] hover:border-orange-500/30 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{req.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{req.title}</h3>
                <ul className="space-y-4">
                  {req.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Safetech For Your Home?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Your Family Deserves Peace Of Mind.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Security You Can Monitor", desc: "Stay informed about your home's surroundings with suitable surveillance systems." },
              { title: "Safety First", desc: "Explore fire safety solutions designed for residential environments." },
              { title: "Smarter Energy", desc: "Use solar energy to support your household electricity requirements." },
              { title: "Professional Guidance", desc: "Get assistance selecting products and systems for your needs." },
              { title: "Installation Support", desc: "Professional installation and maintenance options." },
              { title: "One Trusted Service Partner", desc: "Explore multiple safety and energy solutions in one place." }
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Steps To A Safer Home</h2>
            <p className="text-gray-400 text-lg">Our streamlined process for residential customers.</p>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12 pb-12">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-10 md:pl-16 group">
                <div className="absolute top-0 left-[-20px] w-10 h-10 rounded-full bg-[#111] border-2 border-white/20 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:border-orange-500 group-hover:text-orange-400 transition-colors z-10">
                  0{i + 1}
                </div>
                {/* Glowing line effect on hover */}
                <div className="absolute top-10 left-[-1px] w-[2px] h-full bg-orange-500/0 group-hover:bg-orange-500/50 transition-colors -z-0"></div>
                
                <h4 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 px-6 lg:px-12 bg-black relative border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-orange-600/30 to-amber-500/30 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center relative z-10 backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Make Your Home Safer.<br />Make It Smarter.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            From home surveillance to solar power and water heating, Safetech helps you explore solutions tailored to your property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact#quote-form" className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Request Home Consultation
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
