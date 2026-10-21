'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Modern Blinds & Curtains, I have a specific question about window treatments and custom quotes.'
    );
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const faqs = [
    {
      number: '01',
      question: 'Where is Modern Blinds & Curtains located in Kochi?',
      answer:
        'Our physical showroom is conveniently located at Kathrikadavu, on the Kaloor - Kadavanthra Road, Kochi, Kerala 682017. You are welcome to visit us to inspect live motorized curtain tracks and touch over 100+ fabric weave books. In addition, our master technicians provide free on-site laser measurement and consultation visits directly to your apartment, villa, or office across all areas of Kochi and Ernakulam.',
    },
    {
      number: '02',
      question: 'Do you provide motorized curtains and smart blinds in Kochi?',
      answer:
        'Yes! We specialize in smart window automation using internationally certified tubular drives from Somfy (France), Dooya, and Deco Window. Our motorized systems offer whisper-quiet actuation (<30dB), smooth soft-start and soft-stop, multi-channel RF remotes, smartphone app scheduling, and seamless voice control with Apple HomeKit, Amazon Alexa, and Google Assistant.',
    },
    {
      number: '03',
      question: 'What warranty is offered on motorized curtains and blinds?',
      answer:
        'We provide complete peace of mind: an authorized 5-Year Warranty on Dooya motors, and a 5-Year Replacement Guarantee on Somfy and Deco Window motor systems. All installations are backed by our dedicated Kerala technician team with prompt on-site service support in Kochi within 24 to 48 hours.',
    },
    {
      number: '04',
      question: 'Is on-site measurement and fabric consultation free in Kochi?',
      answer:
        'Yes, 100% free with zero obligation. Our master technician will visit your site anywhere in Kochi and Ernakulam with digital laser distance meters to audit ceiling pelmet depths, window reveals, and floor clearances. We bring physical fabric sample books, sheer swatches, and blackout materials directly to your living space.',
    },
    {
      number: '05',
      question: 'What types of blinds and curtains are available at Modern Blinds Kochi?',
      answer:
        'Our comprehensive collection covers all interior architectural window treatments: Ripple Fold Curtains (S-Fold), Tailored Pleated Drapes, Double-Height Curtains, Zebra Blinds, Blackout Roller Blinds, Roman Shades, Wooden Blinds, Venetian Blinds, Honeycomb Cellular Blinds, Exterior PVC Balcony Rain Blinds, Pleated Mosquito Insect Nets, and Designer Floor Mats & Carpets.',
    },
    {
      number: '06',
      question: 'How long does custom curtain stitching and installation take in Kochi?',
      answer:
        'Standard bespoke blinds and custom-stitched curtains are typically fabricated and neatly installed within 3 to 5 business days following on-site laser measurement and fabric approval. For urgent apartment handovers or housewarming ceremonies in Kochi, express delivery options are also available.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200">
            <HelpCircle size={14} className="text-[#D49520]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
            Everything You Need to Know About <br />
            <span className="font-semibold text-[#0C2D37]">Window Treatments in Kochi.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Clear answers to common questions about our custom stitching, laser measurement visits, motor warranties, and showroom consultations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 pt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.number}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF9F6] border-[#D49520] shadow-md ring-1 ring-[#D49520]/20'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Header Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#0C2D37] text-[#D49520]'
                          : 'bg-[#FAF9F6] text-[#D49520] border border-gray-200'
                      }`}
                    >
                      {faq.number}
                    </span>

                    <h3 className="text-base sm:text-lg font-semibold text-[#111827] hover:text-[#0C2D37] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0C2D37] text-[#D49520] rotate-180'
                        : 'bg-gray-100 text-gray-500 hover:bg-[#0C2D37] hover:text-[#D49520]'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Answer Content with Smooth Collapse Animation */}
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-gray-200/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question CTA Card */}
        <div className="bg-[#0C2D37] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#0C2D37]">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#D49520]">
              <MessageCircleQuestion size={16} />
              <span>Have a specific window dimension or enquiry?</span>
            </div>
            <p className="text-xs sm:text-sm text-white/75">
              Speak directly with our Kathrikadavu atelier specialists on WhatsApp for instant guidance and quotes.
            </p>
          </div>

          <button
            onClick={openWhatsApp}
            className="py-3.5 px-6 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <WhatsAppIcon size={16} className="text-[#0C2D37]" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
