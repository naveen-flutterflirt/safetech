import { Metadata } from "next";
import { ShieldCheck, Target, Users, BookOpen, Camera, Flame, Sun, Droplets, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Safetech's mission to provide comprehensive security, safety, and energy solutions for homes and businesses.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24">
      
      {/* Background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-sm font-bold tracking-widest text-gray-300 uppercase">
            About Safetech
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Securing Today.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Powering Tomorrow.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a premier provider of integrated security, life-safety, and renewable energy solutions. Our mission is to build robust ecosystems that protect your assets and generate clean energy for a sustainable future.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={160} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              To deliver uncompromising quality in security and solar infrastructure. We engineer custom blueprints tailored to each client's unique requirements, ensuring maximum efficiency, compliance, and peace of mind.
            </p>
          </div>
          
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={160} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
              <Users size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              To become the most trusted name in facility infrastructure by bridging the gap between advanced technology and seamless human experience. We envision a world where every space is safe, smart, and self-sustaining.
            </p>
          </div>
        </div>

        {/* Our Services Summary */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Expertise</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We specialize in four primary verticals, bringing enterprise-grade solutions to homes, businesses, and industrial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Camera size={28} className="text-[#3b82f6]" />, title: "CCTV Systems", desc: "High-resolution, smart surveillance networks.", color: "border-[#3b82f6]/20 bg-[#3b82f6]/5" },
              { icon: <Flame size={28} className="text-[#ef4444]" />, title: "Fire Safety", desc: "Addressable alarms and suppression systems.", color: "border-[#ef4444]/20 bg-[#ef4444]/5" },
              { icon: <Sun size={28} className="text-[#eab308]" />, title: "Solar Power", desc: "On-grid, off-grid, and hybrid solar plants.", color: "border-[#eab308]/20 bg-[#eab308]/5" },
              { icon: <Droplets size={28} className="text-[#d97706]" />, title: "Solar Heating", desc: "Efficient thermal water heating solutions.", color: "border-[#d97706]/20 bg-[#d97706]/5" }
            ].map((service, idx) => (
              <div key={idx} className={`border rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${service.color}`}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policies & Standards */}
        <div className="bg-black/50 border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wide uppercase mb-6">
                <BookOpen size={14} /> Our Policies
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Built on Trust <br/> & Transparency.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We believe that long-term relationships are built on clear expectations and uncompromising standards. Our policies are designed to protect you, your data, and your investment.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
              {[
                { title: "Quality Assurance Policy", desc: "Every component we install undergoes rigorous testing. We only partner with global OEMs that meet international ISO and CE certifications." },
                { title: "Data Privacy & Security", desc: "For our CCTV and network clients, we implement strict encryption protocols. Your footage and data are accessible only by you—never us." },
                { title: "Service Level Agreement (SLA)", desc: "Our Annual Maintenance Contracts (AMC) come with guaranteed response times. If a system goes down, our priority dispatch ensures minimal downtime." },
                { title: "Environmental Policy", desc: "We are committed to reducing the global carbon footprint—not just through our solar products, but by recycling electronic waste and minimizing packaging." }
              ].map((policy, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 size={24} className="text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{policy.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{policy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
