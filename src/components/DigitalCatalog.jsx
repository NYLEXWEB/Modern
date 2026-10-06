import { motion } from 'framer-motion';
import { BookOpen, MapPin, ArrowRight, CheckCircle2, Sparkles, Layers, Cpu } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function DigitalCatalog() {
  const openWhatsAppCatalog = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, please share your complete digital product catalog and fabric swatch lookbook.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const openShowroomMaps = () => {
    window.open(BUSINESS_DATA.location.mapsUrl, '_blank');
  };

  const showroomPillars = [
    {
      id: 'swatches',
      icon: Layers,
      tag: 'Fabric & Weave Library',
      title: 'Digital Swatch Lookbook',
      description: 'Explore over 100+ sheer linens, 100% blackout textiles, and woven textures with daylight drape video samples sent straight to your phone.',
      image: '/images/showcase/showcase-curtains.webp',
      specs: ['Linen & Sheer Weaves', '100% Thermal Blackout', 'Belgian Architectural Palette']
    },
    {
      id: 'motorization',
      icon: Cpu,
      tag: 'Smart Automation',
      title: 'Motorized Track Engineering',
      description: 'Review silent motor integrations for Tuya, Alexa, and Somfy systems with concealed ceiling recess tracks designed for modern Kochi villas.',
      image: '/images/showcase/showcase-motorised.webp',
      specs: ['Ultra-Quiet Actuation', 'Smartphone & Voice Control', 'Dual Track Day/Night Sync']
    },
    {
      id: 'consultation',
      icon: Sparkles,
      tag: 'Atelier Service',
      title: 'In-Home Material Consultation',
      description: 'Our Kathrikadavu master team brings physical fabric swatch decks directly to your site for laser-accurate window surveys and pelmet planning.',
      image: '/images/showcase/showcase-detail.webp',
      specs: ['Laser Measurement Precision', 'Physical Swatch Decks', 'Expert Kerala Installation']
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#082129] text-white relative overflow-hidden border-t border-[#0C2D37]">
      {/* Subtle Architectural Fine Line Accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D49520]/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#0C2D37]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D49520] bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <BookOpen size={14} className="text-[#D49520]" />
              <span>Digital Showroom Experience</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
              Explore Collections & Swatches <br />
              <span className="font-semibold text-[#D49520]">Before You Visit.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal">
              Experience the bespoke craftsmanship of our Kathrikadavu showroom directly from your home. Receive curated high-res fabric lookbooks, motorization diagrams, and professional window guidance.
            </p>
          </div>

          {/* Quick Stats / Trust Note */}
          <div className="flex items-center gap-6 self-start lg:self-auto bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
            <div>
              <div className="text-2xl font-light text-[#D49520]">100+</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider">Curated Fabrics</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-light text-[#D49520]">Kochi</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider">On-Site Fitting</div>
            </div>
          </div>
        </div>

        {/* 3 Architectural Pillars Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showroomPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#0C2D37]/70 border border-white/10 hover:border-[#D49520]/70 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Real Photo Header */}
                  <div className="relative h-52 overflow-hidden bg-black/40">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-4 left-4 bg-[#082129]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                      <Icon size={13} className="text-[#D49520]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#D49520] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    {/* Specification Badges */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {pillar.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs text-white/85">
                          <CheckCircle2 size={13} className="text-[#D49520]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="w-full h-[1px] bg-white/5 mb-4" />
                  <span className="text-[11px] font-semibold text-[#D49520] group-hover:text-white transition-colors flex items-center gap-1.5">
                    Included with consultation <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout Bar */}
        <div className="bg-[#0C2D37] border border-white/15 p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-light text-white">
              Ready to explore fabrics & exact pricing for your windows?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Connect directly with our Kathrikadavu team on WhatsApp for catalog downloads, fabric photos, or visit our showroom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={openWhatsAppCatalog}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#D49520]"
            >
              <WhatsAppIcon size={16} className="text-[#0C2D37]" />
              <span>Request Full Catalog</span>
            </button>

            <button
              onClick={openShowroomMaps}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <MapPin size={15} className="text-[#D49520]" />
              <span>Kathrikadavu Showroom</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
