import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/images/footer.webp"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-2xl font-light mb-4">
              <span className="text-white/70">[</span>
              <span className="font-bold text-white mx-0.5">S</span>
              <span className="text-white/70">]</span>
              <span className="text-lg font-bold tracking-[0.15em] ml-2 text-white">SAFETECH</span>
            </div>
            <p className="text-sm text-gray-500">Complete Security, Safety & Energy Solutions.</p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">SERVICES</h5>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="/solutions/cctv" className="hover:text-white transition-colors">CCTV & Security</a></li>
              <li><a href="/solutions/fire-safety" className="hover:text-white transition-colors">Fire & Safety</a></li>
              <li><a href="/solutions/solar-power" className="hover:text-white transition-colors">Solar Solutions</a></li>
              <li><a href="/solutions/solar-water-heating" className="hover:text-white transition-colors">Solar Geysers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">COMPANY</h5>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="/business" className="hover:text-white transition-colors">For Business</a></li>
              <li><a href="/home" className="hover:text-white transition-colors">For Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">SUPPORT</h5>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="/amc" className="hover:text-white transition-colors">AMC Service Request</a></li>
              <li><a href="/faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Safetech. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
