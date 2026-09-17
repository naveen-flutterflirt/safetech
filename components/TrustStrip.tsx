export default function TrustStrip() {
  return (
    <section className="bg-[#111111] border-b border-white/5 py-8 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-white">10+</span>
            <span className="text-xs tracking-widest text-gray-400 uppercase font-medium">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-white">500+</span>
            <span className="text-xs tracking-widest text-gray-400 uppercase font-medium">Installations</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-white">100+</span>
            <span className="text-xs tracking-widest text-gray-400 uppercase font-medium">Businesses Served</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-white">100%</span>
            <span className="text-xs tracking-widest text-gray-400 uppercase font-medium">Certified Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
