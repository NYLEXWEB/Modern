'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, ShieldCheck, Cpu, Store, ArrowRight, Check, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function WhyChoose() {
  // Mobile & Desktop interactive accordion state (first item open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleStandard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Modern Blinds & Curtains, I would like to schedule a free on-site measurement and consultation in Kochi.'
    );
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const standards = [
    {
      number: '01',
      title: 'Laser-Calibrated On-Site Audit',
      subtitle: 'Zero margin for error in floor and ceiling reveals',
      description:
        'Ready-made curtains drag on tiles or leave uneven light gaps. Our Kochi specialists measure ceiling pelmet depths, window reveals, and floor clearances with digital laser calipers before a single cut is made.',
      tags: ['Digital Laser Audit', 'Zero Floor Drag', 'Kochi On-Site Visit'],
      icon: Ruler,
    },
    {
      number: '02',
      title: 'Silent Motorization & Smart Home Sync',
      subtitle: 'Authorized Somfy, Dooya & Deco Window systems',
      description:
        'We integrate whisper-quiet (<30dB) tubular drives that glide effortlessly with smartphone app scheduling, wall switches, or Alexa and Google Home voice commands. Backed by full 5-year replacement guarantees.',
      tags: ['Somfy & Dooya Certified', '5-Year Guarantee', '<30dB Silent Actuation'],
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Architectural Ripple Folds & Weighted Hems',
      subtitle: 'Engineered drape memory with uniform waves',
      description:
        'Every ripple curtain is stitched with architectural carrier tape and concealed bottom corner weights. This guarantees clean, sculptural S-folds that stay crisp and symmetrical regardless of fabric weight.',
      tags: ['S-Fold Drapery Memory', 'Concealed Corner Weights', 'Slim Recessed Tracks'],
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Kathrikadavu Atelier & Direct Pricing',
      subtitle: 'Transparent atelier rates with zero middlemen markups',
      description:
        'Visit our physical showroom in Kathrikadavu, Kochi to touch over 100+ fabric books and test live motorized tracks. Enjoy direct manufacturing pricing and guaranteed after-sales support within 24 hours.',
      tags: ['Physical Showroom', 'Direct Atelier Pricing', '24h Kochi Support'],
      icon: Store,
    },
  ];

  return (
    <section id="why-choose" className="py-20 sm:py-24 px-4 sm:px-8 bg-[#FAF9F6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                The Atelier Standard
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
              Engineered for Clean Lines. <br />
              <span className="font-semibold text-[#0C2D37]">Tailored for Kerala Living.</span>
            </h2>
          </div>

        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Craft Standards Accordion (Shown first on mobile for immediate interaction) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {standards.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.number}
                  className={`bg-white border rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                    isOpen
                      ? 'border-[#D49520] shadow-md ring-1 ring-[#D49520]/20'
                      : 'border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  {/* Subtle top gold shimmer line when open */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D49520] to-transparent transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Clickable Header Row */}
                  <button
                    onClick={() => toggleStandard(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      {/* Index Number Badge */}
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#0C2D37] text-[#D49520]'
                            : 'bg-[#FAF9F6] text-[#D49520] border border-gray-200/80 group-hover:bg-[#0C2D37] group-hover:text-[#D49520]'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Heading & Subtitle */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-[#111827] group-hover:text-[#0C2D37] transition-colors truncate sm:whitespace-normal">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#6B7280] hidden sm:block truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Animated Chevron Pill */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#0C2D37] text-[#D49520] rotate-180 shadow-xs'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-[#0C2D37] group-hover:text-[#D49520]'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {/* Expandable Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-gray-100">
                          {/* Subtitle visible on mobile when open */}
                          <p className="text-xs font-semibold text-[#D49520] sm:hidden">
                            {item.subtitle}
                          </p>

                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {item.description}
                          </p>

                          {/* Craft Tag Badges */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#374151] bg-[#FAF9F6] border border-gray-200/80 px-2.5 py-1 rounded-full shadow-2xs"
                              >
                                <Check size={11} className="text-[#D49520]" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Left: Deep Architectural Atelier Card (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5 bg-[#0C2D37] text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-7 border border-[#0C2D37] shadow-lg relative overflow-hidden"
          >
            {/* Ambient luxury glow in corner */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#D49520]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D49520] bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49520]" />
                <span>Kathrikadavu Showroom • Kochi</span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug">
                  Precision in Every Fold. <br />
                  <span className="font-semibold text-[#D49520]">Zero Generic Sizes.</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed">
                  Unlike retail stores selling mass-produced sizes, we craft every window treatment to the millimeter for your specific architectural reveals.
                </p>
              </div>

              {/* 4 Tangible Guarantees */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-bold text-[#D49520] uppercase tracking-wider">
                    Laser Accuracy
                  </div>
                  <div className="text-[10px] text-white/70">
                    Millimeter drop checks
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-bold text-[#D49520] uppercase tracking-wider">
                    5-Year Guarantee
                  </div>
                  <div className="text-[10px] text-white/70">
                    Somfy &amp; Deco motors
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-bold text-[#D49520] uppercase tracking-wider">
                    100+ Fabrics
                  </div>
                  <div className="text-[10px] text-white/70">
                    European &amp; Asian mills
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-bold text-[#D49520] uppercase tracking-wider">
                    Master Kerala Team
                  </div>
                  <div className="text-[10px] text-white/70">
                    Dustless installation
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-4 border-t border-white/10 space-y-2.5 relative z-10">
              <button
                onClick={openWhatsApp}
                className="w-full py-4 px-6 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer group"
              >
                <WhatsAppIcon size={18} className="text-[#0C2D37]" />
                <span>Book Free Measurement</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] sm:text-[11px] text-center text-white/60">
                Technician brings physical fabric books to your location in Kochi.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
