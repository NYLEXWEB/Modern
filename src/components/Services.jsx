import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Eye, X, ZoomIn, ZoomOut, Check, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CATALOG_ITEMS, BUSINESS_DATA } from '../data/business';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset image zoom state when opening a new detail item
  const openDetailModal = (item) => {
    setSelectedDetailItem(item);
    setIsImageZoomed(false);
  };

  const closeDetailModal = () => {
    setSelectedDetailItem(null);
    setIsImageZoomed(false);
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'curtains', label: 'Curtains' },
    { id: 'blinds', label: 'Blinds' },
    { id: 'mosquito_nets', label: 'Mosquito Nets' },
    { id: 'flooring', label: 'Floor Mats' },
    { id: 'wall_interior', label: 'Interior Decor' },
  ];

  const filteredItems = activeCategory === 'all'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  // Mobile displays top 4 cards by default, Laptop/Desktop displays 6 cards
  const initialLimit = isMobile ? 4 : 6;
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

          {/* Filter Tabs (All Services is First & Default) */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF9F6] border border-gray-200 rounded-full w-max sm:w-auto">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeCategory === tab.id
                      ? 'bg-[#0C2D37] text-white shadow-sm'
                      : 'text-[#4B5563] hover:text-[#0C2D37] hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
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
                className="group border border-gray-200 bg-[#FAF9F6] rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-[#0C2D37] overflow-hidden hover:shadow-lg"
              >
                <div>
                  {/* Image Container with click-to-preview */}
                  <div
                    onClick={() => openDetailModal(item)}
                    className="relative h-60 overflow-hidden bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-105"
                    />
                    
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-[#0C2D37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 text-[#0C2D37] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        <Eye size={13} className="text-[#D49520]" />
                        <span>Quick View</span>
                      </span>
                    </div>

                    {item.badge && (
                      <span className="absolute top-4 left-4 bg-[#0C2D37] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3
                      onClick={() => openDetailModal(item)}
                      className="text-xl font-semibold text-[#111827] group-hover:text-[#0C2D37] transition-colors cursor-pointer"
                    >
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

                {/* Dual Action Buttons (WhatsApp on Left, View Details on Right) */}
                <div className="p-6 pt-0 mt-2 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => openWhatsApp(item.name)}
                    className="w-full py-3 bg-[#0C2D37] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#0C2D37] hover:border-[#25D366]"
                    title="Inquire via WhatsApp"
                  >
                    <WhatsAppIcon size={15} className="text-[#25D366] group-hover:text-white transition-colors shrink-0" />
                    <span className="truncate">Inquire</span>
                  </button>

                  <button
                    onClick={() => openDetailModal(item)}
                    className="w-full py-3 bg-white hover:bg-[#0C2D37] text-[#0C2D37] hover:text-white border border-gray-300 hover:border-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                    title="View Product Details"
                  >
                    <Eye size={15} className="shrink-0 text-[#D49520]" />
                    <span className="truncate">View Details</span>
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

      {/* Product Detail Modal / Pop-up Window */}
      <AnimatePresence>
        {selectedDetailItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C2D37]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={closeDetailModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeDetailModal}
                className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 hover:bg-[#0C2D37] text-[#0C2D37] hover:text-white rounded-full transition-colors border border-gray-200 shadow-md"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left Image View with Zoom / Expand Capability */}
                <div className="md:col-span-6 bg-gray-100 relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[460px] max-h-[500px]">
                  <div
                    onClick={() => setIsImageZoomed(!isImageZoomed)}
                    className={`w-full h-full flex items-center justify-center cursor-pointer overflow-hidden ${
                      isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                    }`}
                  >
                    <img
                      src={selectedDetailItem.image}
                      alt={selectedDetailItem.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out filter brightness-105 ${
                        isImageZoomed ? 'scale-150' : 'scale-100 hover:scale-105'
                      }`}
                    />
                  </div>

                  {/* Zoom Action Pill Badge */}
                  <button
                    onClick={() => setIsImageZoomed(!isImageZoomed)}
                    className="absolute bottom-4 left-4 bg-[#0C2D37]/90 hover:bg-[#0C2D37] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/20 transition-all shadow-md"
                  >
                    {isImageZoomed ? (
                      <>
                        <ZoomOut size={13} className="text-[#D49520]" />
                        <span>Zoom Out</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn size={13} className="text-[#D49520]" />
                        <span>Click to Zoom</span>
                      </>
                    )}
                  </button>

                  {selectedDetailItem.badge && (
                    <span className="absolute top-4 left-4 bg-[#0C2D37] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                      {selectedDetailItem.badge}
                    </span>
                  )}
                </div>

                {/* Right Product Details Column */}
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-[2px] bg-[#D49520]" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#0C2D37]">
                        {selectedDetailItem.category.replace('_', ' ')}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-light text-[#111827] leading-tight">
                      {selectedDetailItem.name}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {selectedDetailItem.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                        Key Specifications:
                      </h4>
                      <div className="space-y-2">
                        {selectedDetailItem.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs text-[#374151]">
                            <div className="p-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[#D49520]">
                              <Check size={12} />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-[#6B7280] flex items-center gap-2 bg-[#FAF9F6] p-3 rounded-xl border border-gray-200">
                      <ShieldCheck size={16} className="text-[#0C2D37] shrink-0" />
                      <span>Custom precision measurement and on-site fitting across Kochi included.</span>
                    </div>
                  </div>

                  {/* Modal Action CTA Buttons */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => openWhatsApp(selectedDetailItem.name)}
                      className="w-full py-3.5 bg-[#0C2D37] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      <WhatsAppIcon size={16} className="text-[#25D366] hover:text-white" />
                      <span>Inquire via WhatsApp</span>
                    </button>

                    <button
                      onClick={closeDetailModal}
                      className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-[#4B5563] font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
