export default function HowWeWork() {
  const steps = [
    { num: "01", title: "CONSULTATION", desc: "Understanding your requirements and site constraints." },
    { num: "02", title: "SITE SURVEY", desc: "Detailed inspection to determine optimal equipment placement." },
    { num: "03", title: "SOLUTION DESIGN", desc: "Creating a custom architecture that fits your budget and needs." },
    { num: "04", title: "INSTALLATION", desc: "Professional execution by certified technicians." },
    { num: "05", title: "SUPPORT & AMC", desc: "Ongoing maintenance to ensure 100% uptime." }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            From Consultation to Complete Installation
          </h2>
          <p className="text-gray-400 text-lg">
            Our end-to-end process ensures you get the right system, installed correctly, and maintained for years.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#111] via-white/20 to-[#111]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-xl relative">
                  {step.num}
                  {/* Arrow for mobile/tablet */}
                  {idx !== steps.length - 1 && (
                    <div className="lg:hidden w-0.5 h-8 bg-white/20 absolute -bottom-8"></div>
                  )}
                </div>
                <h3 className="text-sm font-bold tracking-widest text-white mb-3">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
