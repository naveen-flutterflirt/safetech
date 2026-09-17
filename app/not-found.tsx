import Link from 'next/link';
import Image from 'next/image';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden pt-24 pb-12 bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
           alt="Safetech Building"
           fill
           sizes="100vw"
           className="object-cover object-right opacity-30"
           priority
         />
         {/* Gradient to mask the left side for the text */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent w-full md:w-[70%]"></div>
         {/* Bottom gradient so it blends nicely into the footer */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent h-48 bottom-0 mt-auto"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center flex-grow pt-10">
         
         <div className="max-w-xl">
           <div className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
             <span className="w-4 h-px bg-[#059669]"></span> PAGE NOT FOUND
           </div>
           
           <h1 className="text-[120px] lg:text-[180px] font-black leading-none text-white tracking-tighter mb-2 flex items-center drop-shadow-2xl">
             4<span className="text-[#059669]">0</span>4
           </h1>
           
           <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
             Looks like you've taken <br /> a wrong turn.
           </h2>
           
           <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
             The page you're looking for doesn't exist or may have been moved. Let's get you back on the right path to a safer tomorrow.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center gap-4">
             <Link href="/" className="w-full sm:w-auto bg-[#059669] text-white font-semibold rounded-full px-8 py-3.5 hover:bg-[#047857] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
               <Home size={18} /> Go to Homepage
             </Link>
             <button className="w-full sm:w-auto border border-white/20 bg-black/40 backdrop-blur-sm text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               <Search size={18} /> Search Website
             </button>
           </div>
         </div>
      </div>
      
      {/* Decorative text at the bottom left */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 mt-auto">
         <div className="flex items-center gap-3 opacity-50">
           <div className="w-6 h-6 bg-white/10 rounded-sm border border-white/20 flex items-center justify-center">
             <div className="w-2 h-2 bg-white/40 rounded-full"></div>
           </div>
           <div className="text-[10px] font-bold text-white tracking-widest leading-tight">
             SAFER SPACES<br/>BRIGHTER TOMORROW
           </div>
         </div>
      </div>
      
    </div>
  );
}
