import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export default function DigitalCatalog() {
  const openWhatsAppCatalog = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, please share your complete product catalog and fabric options.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-[#0C2D37] text-white relative overflow-hidden">
      {/* Background Decorative Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D49520] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="bg-[#082129] border border-white/10 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D49520] bg-white/5 px-3 py-1.5 border border-white/10">
              <BookOpen size={14} />
              <span>Digital Showroom Experience</span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-light text-white leading-tight">
              Explore Before You Visit
            </h3>

            <p className="text-sm sm:text-base text-white/70 max-w-xl">
              Browse our complete collection of blackout sheer curtains, motorized roller shades, zebra blinds, and outdoor balcony covers directly on your device.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={openWhatsAppCatalog}
              className="w-full sm:w-auto px-8 py-4 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 border border-[#D49520]"
            >
              <span>Request Full Catalog</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
