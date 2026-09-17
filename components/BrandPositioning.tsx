import { Cctv, Flame, Sun, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BrandPositioning() {
  return (
    <section className="bg-[#050505] py-24 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            One Company. <span className="text-[#f49c71]">Complete Solutions.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            From installation to maintenance, we've got you covered. You don't need multiple vendors for your security, safety and energy infrastructure. Our team provides end-to-end solutions — consultation, design, installation, configuration and after-sales support.
          </p>
        </div>

        {/* Visual Map */}
        <div className="relative mt-20 mb-10 max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl border border-white/10 bg-[#111] overflow-hidden flex items-center justify-center">
          
          {/* Central Building Element (Placeholder for actual image) */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 flex items-center justify-center bg-black shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <div className="text-center">
              <div className="text-2xl font-light mb-1">
                <span className="text-white/50">[</span>
                <span className="font-bold text-white mx-1">M</span>
                <span className="text-white/50">]</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] text-gray-400 font-bold">YOUR PROPERTY</div>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 z-0">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Service Nodes */}
          <div className="absolute top-8 left-8 md:top-16 md:left-16 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <Cctv size={28} className="text-[#3b82f6]" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-300">SECURITY</span>
          </div>

          <div className="absolute top-8 right-8 md:top-16 md:right-16 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#eab308]/30 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              <Sun size={28} className="text-[#eab308]" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-300">SOLAR</span>
          </div>

          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#ef4444]/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <Flame size={28} className="text-[#ef4444]" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-300">FIRE SAFETY</span>
          </div>

          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#f97316]/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Droplets size={28} className="text-[#f97316]" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-300">GEYSERS</span>
          </div>

        </div>

      </div>
    </section>
  );
}
