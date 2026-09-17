import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DetailedServices() {
  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-32">
        
        {/* CCTV Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <span className="text-[#3b82f6] text-xs font-bold tracking-widest uppercase mb-4">CCTV & Surveillance</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              See More. Know More. Stay Secure.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 text-gray-400">
              {['HD / 4K Cameras', 'Night Vision', 'AI / Smart Detection', 'Remote Mobile Monitoring', 'DVR / NVR Systems', 'Commercial & Residential', 'Installation & Configuration', 'AMC & Maintenance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#3b82f6]" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/solutions/cctv" className="inline-flex items-center gap-2 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 px-6 py-3 rounded-lg font-medium hover:bg-[#3b82f6] hover:text-white transition-all">
              Get CCTV Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 h-[400px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative">
            {/* Placeholder for CCTV image */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557766131-d88bb4a2b251?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
            <span className="text-gray-500 font-mono tracking-widest relative z-10">[ CCTV IMAGE PLACEHOLDER ]</span>
          </div>
        </div>

        {/* Fire & Safety Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="h-[400px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1628186987000-f9f6c5f78b7b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
            <span className="text-gray-500 font-mono tracking-widest relative z-10">[ FIRE SAFETY IMAGE PLACEHOLDER ]</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#ef4444] text-xs font-bold tracking-widest uppercase mb-4">Fire & Safety</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Protection Before It's Too Late.
            </h2>
            <ul className="flex flex-col gap-4 mb-10 text-gray-400">
              {['Fire Alarm Systems', 'Smoke & Heat Detection', 'Fire Extinguishers', 'Emergency Systems', 'Fire Safety Equipment', 'Fire Safety Audits', 'Installation & Maintenance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#ef4444]" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/solutions/fire-safety" className="inline-flex items-center gap-2 bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20 px-6 py-3 rounded-lg font-medium hover:bg-[#ef4444] hover:text-white transition-all">
              Talk to a Fire Safety Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Solar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <span className="text-[#eab308] text-xs font-bold tracking-widest uppercase mb-4">Solar Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Power Your Future With Solar
            </h2>
            
            <div className="flex flex-col gap-3 mb-8 w-full">
              <div className="bg-[#111] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold text-white">ON-GRID</span>
                <span className="text-gray-400 text-sm">Reduce electricity bills</span>
              </div>
              <div className="bg-[#111] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold text-white">OFF-GRID</span>
                <span className="text-gray-400 text-sm">Energy independence</span>
              </div>
              <div className="bg-[#111] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold text-white">HYBRID</span>
                <span className="text-gray-400 text-sm">Solar + Battery + Grid</span>
              </div>
            </div>

            <p className="text-gray-400 mb-4 font-semibold">Why Solar?</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 text-gray-400">
              {['Lower Electricity Bills', 'Long-Term Savings', 'Clean Energy', 'Low Maintenance', 'Professional Installation'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#eab308]" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/solutions/solar-power" className="inline-flex items-center gap-2 bg-[#eab308]/10 text-[#eab308] border border-[#eab308]/20 px-6 py-3 rounded-lg font-medium hover:bg-[#eab308] hover:text-black transition-all">
              Calculate Your Solar Requirement <ArrowRight size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
            <span className="text-gray-500 font-mono tracking-widest relative z-10">[ SOLAR PANELS IMAGE PLACEHOLDER ]</span>
          </div>
        </div>

        {/* Solar Geyser Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="h-[400px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#f97316]/20 to-transparent"></div>
            <span className="text-gray-500 font-mono tracking-widest relative z-10">[ SOLAR GEYSER IMAGE PLACEHOLDER ]</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-4">Solar Geysers</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hot Water. Powered by the Sun.
            </h2>
            <p className="text-gray-400 mb-6">Efficient solar water-heating solutions for:</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Residential', 'Hotels', 'Hospitals', 'Hostels', 'Restaurants', 'Commercial Buildings'].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-[#111] border border-white/10 text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/solutions/solar-water-heating" className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 px-6 py-3 rounded-lg font-medium hover:bg-[#f97316] hover:text-white transition-all">
              Get Solar Geyser Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
