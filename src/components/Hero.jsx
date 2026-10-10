import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Hero() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to request a consultation and quote for my home in Kochi.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const scrollToCollection = () => {
    document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#0C2D37] flex items-center overflow-hidden pt-28 pb-16">
      {/* Background Architectural Images (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img
          src="/images/hero-desktop-bg.png"
          alt="Modern Blinds and Curtains Interior Showroom Kochi"
          className="hidden sm:block w-full h-full object-cover object-right sm:object-center filter brightness-105 contrast-105"
        />
        {/* Mobile Image */}
        <img
          src="/images/hero-mobile-bg.png"
          alt="Modern Blinds and Curtains Interior Showroom Kochi Mobile"
          className="block sm:hidden w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />

        {/* Left-to-Right Gradient Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] via-[#0C2D37]/90 md:via-[#0C2D37]/80 to-transparent max-w-full md:max-w-[65%]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0C2D37] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center min-h-[calc(100vh-7rem)]">
        
        {/* Clean Left-Aligned Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl space-y-6 sm:space-y-8 my-auto text-left"
        >


          {/* Headline with High-Contrast White & Gold Colors */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
              Luxury in <br />
              <span className="font-bold text-[#D49520]">Every Fold.</span>
            </h1>
            <p className="text-sm sm:text-lg text-white/80 font-normal leading-relaxed max-w-lg">
              Bespoke window treatments, motorized automation, elegant curtains, and architectural blinds tailored for Kochi's finest homes.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-3 border border-[#D49520] hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} className="text-[#0C2D37]" />
              <span>Get Free Quote</span>
            </button>

            <button
              onClick={scrollToCollection}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 backdrop-blur-sm"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} className="text-[#D49520]" />
            </button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15 max-w-2xl">
            <div>
              <div className="text-xl sm:text-2xl font-light text-white font-heading">Custom</div>
              <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider mt-0.5 font-medium">Measurement</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-light text-white font-heading">Premium</div>
              <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider mt-0.5 font-medium">Fabrics</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-light text-white font-heading">Motorised</div>
              <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider mt-0.5 font-medium">Automation</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-light text-white font-heading">Readymade</div>
              <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider mt-0.5 font-medium">Curtains & Blinds</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
