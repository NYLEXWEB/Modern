import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CATALOG_ITEMS, BUSINESS_DATA } from '../data/business';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredItems = activeCategory === 'all'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  const initialLimit = isMobile ? 3 : 6;
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, initialLimit);
  const hasMoreItems = filteredItems.length > initialLimit;

  const openWhatsApp = (serviceName) => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to inquire about ${serviceName}.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                Custom Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
              Window Treatments & Decor Solutions
            </h2>
            <p className="text-base text-[#4B5563]">
              Explore our range of bespoke drapery, motorized blinds, balcony weather protection, and interior finishing.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FAF9F6] border border-gray-200 rounded-full self-start lg:self-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'curtains', label: 'Curtains' },
              { id: 'blinds', label: 'Blinds' },
              { id: 'specialty', label: 'Specialty' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setShowAll(false);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#0C2D37] text-white'
                    : 'text-[#4B5563] hover:text-[#0C2D37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className="group border border-gray-200 bg-[#FAF9F6] rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-[#0C2D37] overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-105"
                    />
                    {item.badge && (
                      <span className="absolute top-4 left-4 bg-[#0C2D37] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#0C2D37] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3 font-normal">
                      {item.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-[11px] font-medium text-[#0C2D37] bg-white border border-gray-200 px-3 py-1 rounded-full"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Inquire Button with Official WhatsApp Icon */}
                <div className="p-6 pt-0 mt-2">
                  <button
                    onClick={() => openWhatsApp(item.name)}
                    className="w-full py-3 bg-[#0C2D37] hover:bg-[#25D366] text-white hover:text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#0C2D37]"
                  >
                    <WhatsAppIcon size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Toggle Button */}
        {hasMoreItems && (
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-[#FAF9F6] hover:bg-[#0C2D37] text-[#0C2D37] hover:text-white border-2 border-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 group"
            >
              <span>{showAll ? 'Show Less Services' : `View All Services (${filteredItems.length})`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
