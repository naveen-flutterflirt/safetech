import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Excellent installation and very professional team. They handled our complete CCTV setup for the new warehouse without any issues.",
      author: "Rajesh Kumar",
      company: "Logistics Pro"
    },
    {
      text: "We switched to solar with Secura and the process was seamless. Their after-sales support is what truly sets them apart.",
      author: "Amit Sharma",
      company: "Sunrise Apartments"
    },
    {
      text: "Top-notch fire safety audit and equipment installation. We feel much more secure knowing our facility is up to code.",
      author: "Priya Singh",
      company: "TechPark Solutions"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-[#111] border border-white/5 p-8 rounded-2xl flex flex-col gap-6">
              <div className="flex gap-1 text-[#eab308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic flex-grow">"{testimonial.text}"</p>
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
