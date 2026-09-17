import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "End-to-End Solutions", desc: "We handle everything from initial consultation to final installation." },
    { title: "Professional Installation", desc: "Certified and experienced technicians ensure perfect execution." },
    { title: "Quality Equipment", desc: "We only partner with top-tier, trusted manufacturing brands." },
    { title: "Customized Solutions", desc: "Systems designed specifically for your building's architecture." },
    { title: "After-Sales Support", desc: "Dedicated support team available when you need them most." },
    { title: "AMC & Maintenance", desc: "Comprehensive maintenance contracts for peace of mind." }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Businesses Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-[#111] border border-white/5 p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                <span className="text-xs font-bold tracking-widest text-gray-400">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
