"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "solar", label: "Solar Power" },
    { id: "geyser", label: "Solar Water Heating" },
    { id: "cctv", label: "CCTV & Security" },
    { id: "fire", label: "Fire Safety" },
  ];

  const allFaqs = [
    { category: "solar", q: "How much solar capacity do I need?", a: "It depends on your electricity consumption, available installation area and desired energy output." },
    { category: "solar", q: "Can solar work during cloudy weather?", a: "Yes. Solar panels can still generate electricity under diffuse sunlight, although output is lower." },
    { category: "solar", q: "Can I use solar with the grid?", a: "Yes. On-grid and hybrid systems can be designed to work alongside the electrical grid." },
    { category: "solar", q: "Can I add batteries later?", a: "Depending on the system architecture, battery storage can be incorporated or expanded." },
    { category: "solar", q: "How much maintenance does solar require?", a: "Solar systems generally require periodic inspection and cleaning, along with checks of electrical and mounting components." },
    
    { category: "geyser", q: "How does solar water heating work?", a: "Solar collectors on your roof absorb thermal energy from the sun, which is transferred to the water stored in an insulated tank." },
    { category: "geyser", q: "Will I have hot water on rainy days?", a: "Yes. Most solar water heaters come with an electrical backup element that kicks in when sunlight is insufficient." },
    { category: "geyser", q: "How much can I save on water heating?", a: "Solar water heating can reduce your water heating costs by 60% to 80% depending on usage." },
    
    { category: "cctv", q: "Can I view my cameras on my phone?", a: "Yes, all our CCTV installations include secure remote access via a mobile application for iOS and Android." },
    { category: "cctv", q: "How long is the footage stored?", a: "Storage duration depends on the hard drive capacity and number of cameras. Typically, systems are designed for 15 to 30 days of continuous recording." },
    
    { category: "fire", q: "How often should fire extinguishers be serviced?", a: "Fire extinguishers should be visually inspected monthly and professionally serviced at least once a year." },
    { category: "fire", q: "What type of fire alarm system do I need?", a: "It depends on your building layout and use. Commercial properties usually require addressable systems, while smaller spaces can use conventional systems." },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? allFaqs 
    : allFaqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24">
      
      {/* Background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <MessageCircleQuestion size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Frequently Asked <span className="text-gray-400">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services, installations, and support.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenFaq(null);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat.id 
                ? 'bg-white text-black border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                : 'bg-black/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-[#111]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-semibold text-lg md:text-xl text-gray-200">{faq.q}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaq === idx ? 'bg-white text-black' : 'bg-white/5 text-gray-400'}`}>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-60 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="w-12 h-px bg-white/20 mb-4"></div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No questions found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
