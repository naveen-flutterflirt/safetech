import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Commercial CCTV Installation",
      location: "Commercial Complex, Indore",
      tag: "Security",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Fire Safety Installation",
      location: "Industrial Facility, MP",
      tag: "Fire & Safety",
      image: "https://images.unsplash.com/photo-1580982333036-7495579893d5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "50kW Solar Installation",
      location: "Commercial Building",
      tag: "Solar",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Solar Geyser Implementation",
      location: "Luxury Hotel Chain",
      tag: "Geyser",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#111] py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Take a look at some of our recently completed installations across various sectors.
            </p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-white hover:text-[#f49c71] transition-colors font-medium">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-black border border-white/10 cursor-pointer h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest text-white mb-4 border border-white/20">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
