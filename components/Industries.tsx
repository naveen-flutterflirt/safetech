import { Home, Building, Factory, ShoppingCart, Hotel, Hospital, GraduationCap, Building2, HardHat } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Homes", icon: <Home size={24} /> },
    { name: "Offices", icon: <Building size={24} /> },
    { name: "Industries", icon: <Factory size={24} /> },
    { name: "Retail Stores", icon: <ShoppingCart size={24} /> },
    { name: "Hotels", icon: <Hotel size={24} /> },
    { name: "Hospitals", icon: <Hospital size={24} /> },
    { name: "Schools", icon: <GraduationCap size={24} /> },
    { name: "Commercial", icon: <Building2 size={24} /> },
    { name: "Construction Sites", icon: <HardHat size={24} /> }
  ];

  return (
    <section className="bg-[#111] py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Solutions For Every Environment
          </h2>
          <p className="text-gray-400 text-lg">
            We provide tailored security, safety, and energy systems for residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={`bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 transition-all hover:bg-white/5 hover:border-white/10 hover:-translate-y-1`}
            >
              <div className="text-gray-400 group-hover:text-white transition-colors">
                {industry.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">{industry.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
