import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CATALOG_ITEMS, BUSINESS_DATA } from '../data/business';

export default function Collection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
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

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'curtains', label: 'Drapery & Curtains' },
    { id: 'blinds', label: 'Window Blinds' },
    { id: 'specialty', label: 'Balcony & Net Solutions' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter((item) => item.category === selectedFilter);

  const initialLimit = isMobile ? 3 : 6;
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, initialLimit);
  const hasMoreItems = filteredItems.length > initialLimit;

  const requestQuote = (productName) => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I am interested in viewing fabric samples and getting a quote for ${productName}.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="collection" className="py-24 px-4 sm:px-8 bg-[#0C2D37] text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D49520]">
                Digital Showroom
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
              Explore The Architectural Collection
            </h2>
            <p className="text-base text-white/70">
              Immerse yourself in our curated window treatments, engineered for light control, insulation, and interior aesthetics.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedFilter(cat.id);
                  setShowAll(false);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                  selectedFilter === cat.id
                    ? 'bg-[#D49520] text-[#0C2D37] font-bold'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collection Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className="group bg-white/5 border border-white/15 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#D49520] transition-all duration-500"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-105 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37] via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-4 right-4 bg-[#D49520] text-[#0C2D37] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#D49520]">
                        {item.badge}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D49520] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-light text-white group-hover:text-[#D49520] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-white/90">
                          <Check size={14} className="text-[#D49520] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => requestQuote(item.name)}
                    className="w-full py-3.5 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#D49520]"
                  >
                    <WhatsAppIcon size={16} className="text-[#0C2D37]" />
                    <span>Request Sample & Quote</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Toggle */}
        {hasMoreItems && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-white/10 hover:bg-[#D49520] hover:text-[#0C2D37] text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 group"
            >
              <span>{showAll ? 'Show Less Collections' : `View All Collections (${filteredItems.length})`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
