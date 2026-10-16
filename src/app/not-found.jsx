import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C2D37] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D49520]">
          Page Not Found
        </span>
        <h1 className="text-6xl sm:text-7xl font-light text-white">404</h1>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          The window treatment or page you are looking for does not exist or has been relocated in our digital showroom.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/#services"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 border border-white/20"
          >
            <ArrowLeft size={16} />
            <span>View All Collections</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
