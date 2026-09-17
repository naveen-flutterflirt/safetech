import { ArrowRight, Cctv, Flame, Sun, Droplets } from "lucide-react";
import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      title: "CCTV & Security",
      description: "Complete surveillance systems for homes, offices, shops, warehouses and industries.",
      icon: <Cctv size={32} className="text-[#3b82f6]" strokeWidth={1.5} />,
      link: "/solutions/cctv",
      accent: "hover:border-[#3b82f6]/50"
    },
    {
      title: "Fire & Safety",
      description: "Fire detection, protection and safety systems designed to protect people and property.",
      icon: <Flame size={32} className="text-[#ef4444]" strokeWidth={1.5} />,
      link: "/solutions/fire-safety",
      accent: "hover:border-[#ef4444]/50"
    },
    {
      title: "Solar Solutions",
      description: "Reliable solar power systems that reduce electricity costs and increase energy independence.",
      icon: <Sun size={32} className="text-[#eab308]" strokeWidth={1.5} />,
      link: "/solutions/solar-power",
      accent: "hover:border-[#eab308]/50"
    },
    {
      title: "Solar Geysers",
      description: "Efficient solar water-heating solutions for homes, hotels, institutions and businesses.",
      icon: <Droplets size={32} className="text-[#f97316]" strokeWidth={1.5} />,
      link: "/solutions/solar-water-heating",
      accent: "hover:border-[#f97316]/50"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Solutions Built Around Your Needs
          </h2>
          <p className="text-gray-400 text-lg">
            From securing your premises to powering your future, we provide complete installation and support solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1 ${service.accent}`}
            >
              <div className="mb-6 bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                {service.description}
              </p>
              
              <Link 
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mt-auto group"
              >
                Explore {service.title.split(' ')[0]} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
