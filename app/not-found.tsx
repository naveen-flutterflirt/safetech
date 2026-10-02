import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Camera, ShieldCheck, Sun, Droplet, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg color.png"
          alt="404 Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Full-page darkening gradient to ensure perfect readability everywhere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-0"></div>
      </div>

      <div className="relative z-10 w-full h-full px-6 md:px-12 lg:pl-20 lg:pr-8 flex justify-end items-center py-4">
        <div className="w-full md:w-[60%] lg:w-[42%] flex flex-col justify-center">

          <div className="mb-4 inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
            <AlertTriangle size={16} className="text-[#F97316]" />
            <span className="text-gray-200 font-medium tracking-wide text-xs uppercase">PAGE NOT FOUND</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 leading-[1.1] mb-4 tracking-tight drop-shadow-xl">
            Looks like you've <br /> taken a <span className="text-[#F97316]">wrong turn.</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-md leading-relaxed drop-shadow-md font-medium">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on the right path to a safer tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
            <Link href="/" className="w-full sm:w-auto bg-[#F97316] text-white font-semibold rounded-full px-8 py-3 hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20">
              Go to Homepage <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10 w-[70%]">
            <div className="flex flex-col items-center gap-2 text-center">
              <Camera size={24} className="text-gray-300 stroke-[1.5]" />
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Security</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck size={24} className="text-gray-300 stroke-[1.5]" />
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Safety</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Sun size={24} className="text-gray-300 stroke-[1.5]" />
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Clean Energy</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Droplet size={24} className="text-gray-300 stroke-[1.5]" />
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Smart Living</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
