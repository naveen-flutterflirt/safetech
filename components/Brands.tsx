export default function Brands() {
  const brands = ["Hikvision", "Dahua", "CP Plus", "Bosch", "Honeywell", "Luminous", "Tata Solar"];

  return (
    <section className="bg-[#111] py-16 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
            Trusted Technology Partners
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-black tracking-tighter text-white">
              {brand.toUpperCase()}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
