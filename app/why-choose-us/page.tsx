import { ShieldCheck, Award, Clock, Users, CheckCircle2, ChevronRight, PenTool } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: <Award size={32} className="text-[#eab308]" />,
      title: "Industry Expertise",
      desc: "With years of proven experience, our technicians possess deep technical knowledge across security, fire safety, and solar sectors. We don't just install; we engineer the right solution for your specific needs.",
      color: "from-[#eab308] to-[#ca8a04]"
    },
    {
      icon: <ShieldCheck size={32} className="text-[#3b82f6]" />,
      title: "Uncompromising Quality",
      desc: "We partner with leading global manufacturers to provide equipment that is tested, certified, and built to last. Your safety and infrastructure are never compromised.",
      color: "from-[#3b82f6] to-[#2563eb]"
    },
    {
      icon: <PenTool size={32} className="text-[#ef4444]" />,
      title: "Seamless Installation",
      desc: "Our installation teams work with precision and care, ensuring minimal disruption to your property or business operations while maintaining the highest aesthetic and technical standards.",
      color: "from-[#ef4444] to-[#dc2626]"
    },
    {
      icon: <Clock size={32} className="text-[#10b981]" />,
      title: "24/7 Priority Support",
      desc: "Issues don't wait for business hours, and neither do we. Our Annual Maintenance Contracts (AMC) guarantee round-the-clock support and rapid deployment when emergencies happen.",
      color: "from-[#10b981] to-[#059669]"
    },
    {
      icon: <Users size={32} className="text-[#8b5cf6]" />,
      title: "Client-Centric Approach",
      desc: "Every property is unique. We conduct thorough site surveys and build custom blueprints rather than offering one-size-fits-all packages. Your requirements dictate our design.",
      color: "from-[#8b5cf6] to-[#7c3aed]"
    }
  ];

  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Active Support" }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24">
      
      {/* Background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-sm font-bold tracking-widest text-gray-300 uppercase">
            The Safetech Advantage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Why Thousands Trust Us With Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Safety & Power</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            We don't just sell equipment. We build robust ecosystems that protect your assets, ensure compliance, and generate clean energy for decades.
          </p>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-black/50 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-gray-400 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className={`bg-[#111] border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/20 transition-all duration-300 group ${idx === reasons.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
            
            {/* CTA Card inside grid */}
            <div className="bg-gradient-to-br from-[#eab308] to-[#ca8a04] rounded-3xl p-8 lg:p-10 flex flex-col justify-center text-black relative overflow-hidden group hover:shadow-2xl hover:shadow-[#eab308]/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to secure your future?</h3>
              <p className="font-medium text-black/80 mb-8 relative z-10">
                Let's discuss how we can tailor our solutions to your exact requirements.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors relative z-10 w-fit">
                Get Free Consultation <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* The Safetech Process Outline */}
        <div className="bg-[#111] border border-white/10 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Proven Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>
            
            {[
              { step: "01", title: "Consultation", desc: "Understanding your unique challenges and requirements." },
              { step: "02", title: "Design", desc: "Engineering a custom blueprint for maximum efficiency." },
              { step: "03", title: "Deployment", desc: "Professional installation by certified technicians." },
              { step: "04", title: "Support", desc: "Ongoing maintenance and 24/7 technical assistance." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black border-4 border-[#111] flex items-center justify-center text-xl font-black text-gray-500 mb-6 shadow-[0_0_0_2px_rgba(255,255,255,0.1)]">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
