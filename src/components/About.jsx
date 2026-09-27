import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Award } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function About() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to consult with your team for custom window treatments.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 bg-[#FAF9F6] border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Architectural Showroom Image Frame (Compact & Properly Proportioned) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Arched Architectural Photo Frame - Compact Size */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Gold Border Architectural Ring (Aligned & Crisp) */}
              <div className="absolute -inset-2.5 rounded-t-full rounded-b-[2rem] border-2 border-[#D49520] pointer-events-none" />

              <div className="relative z-10 overflow-hidden rounded-t-full rounded-b-[1.75rem] border-4 border-white bg-[#0C2D37] h-[400px] w-full">
                <img
                  src="/About section.jpg"
                  alt="Modern Blinds & Curtains Kathrikadavu Showroom Interior"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37]/70 via-transparent to-transparent" />
                
                {/* Embedded Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0C2D37] uppercase tracking-wider">Kathrikadavu Showroom</div>
                    <div className="text-[11px] text-[#4B5563]">Kochi, Kerala</div>
                  </div>
                  <div className="p-1.5 rounded-full bg-[#D49520]/20 text-[#D49520]">
                    <MapPin size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#D49520]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                  About Our Digital Showroom
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
                Architectural Elegance for <br />
                <span className="font-semibold text-[#0C2D37]">Every Window.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
              Located at Kathrikadavu, Kochi, <strong className="text-[#0C2D37] font-semibold">{BUSINESS_DATA.name}</strong> specializes in luxury window treatments. From motorized blackout roller blinds to sheer ripple curtains and balcony rain protection, we bring exact measurement and premium fabrics directly to your home.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-gray-200">
                <div className="p-2.5 bg-[#0C2D37] text-[#D49520] rounded-xl shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider">Bespoke Fitting</h4>
                  <p className="text-xs text-[#4B5563]">On-site exact window measurement & consultation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-gray-200">
                <div className="p-2.5 bg-[#0C2D37] text-[#D49520] rounded-xl shrink-0">
                  <Award size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider">Curated Fabrics</h4>
                  <p className="text-xs text-[#4B5563]">Blackout, sheer, motorized & eco-friendly materials.</p>
                </div>
              </div>
            </div>

            {/* CTA Button (No shadow) */}
            <div className="pt-2">
              <button
                onClick={openWhatsApp}
                className="px-8 py-3.5 bg-[#0C2D37] hover:bg-[#082129] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 inline-flex items-center gap-3 border border-[#0C2D37]"
              >
                <WhatsAppIcon size={18} className="text-[#D49520]" />
                <span>Consult Our Showroom</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
