import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import { GALLERY_IMAGES, BUSINESS_DATA } from '../data/business';

export default function Gallery() {
  const [activeModalImage, setActiveModalImage] = useState(null);

  const openInstagram = () => {
    window.open(BUSINESS_DATA.contact.instagramUrl, '_blank');
  };

  // Duplicate arrays to create a seamless 100% infinite marquee loop
  const marqueeSet1 = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const marqueeSet2 = [...GALLERY_IMAGES.slice().reverse(), ...GALLERY_IMAGES.slice().reverse()];

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                Real Installation Gallery
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
              Craftsmanship In Real Spaces
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              Automatic interactive showcase of real project installations across luxury homes in Kochi and Kerala.
            </p>
          </div>
        </div>

      </div>

      {/* Infinite Auto-Scrolling Marquee Slider Strips */}
      <div className="space-y-6 pt-8">
        
        {/* Row 1 - Auto Scrolls Left Continuously */}
        <div className="flex overflow-hidden relative w-full select-none py-2">
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {marqueeSet1.map((img, idx) => (
              <div
                key={`r1-${img.src}-${idx}`}
                onClick={() => setActiveModalImage(img)}
                className="w-72 sm:w-80 h-80 sm:h-96 shrink-0 rounded-3xl overflow-hidden border border-gray-200 bg-white relative group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37]/90 via-[#0C2D37]/20 to-transparent flex flex-col justify-end p-5 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D49520]">
                    {img.category}
                  </span>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <h4 className="text-base font-medium text-white line-clamp-1">{img.title}</h4>
                    <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md shrink-0">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Auto Scrolls Right Continuously */}
        <div className="flex overflow-hidden relative w-full select-none py-2">
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {marqueeSet2.map((img, idx) => (
              <div
                key={`r2-${img.src}-${idx}`}
                onClick={() => setActiveModalImage(img)}
                className="w-72 sm:w-80 h-80 sm:h-96 shrink-0 rounded-3xl overflow-hidden border border-gray-200 bg-white relative group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37]/90 via-[#0C2D37]/20 to-transparent flex flex-col justify-end p-5 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D49520]">
                    {img.category}
                  </span>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <h4 className="text-base font-medium text-white line-clamp-1">{img.title}</h4>
                    <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md shrink-0">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>



      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C2D37]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModalImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden p-2 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#0C2D37] text-white hover:text-[#D49520] rounded-full border border-white/20"
                aria-label="Close image preview"
              >
                <X size={22} />
              </button>
              <img
                src={activeModalImage.src}
                alt={activeModalImage.alt}
                className="max-h-[75vh] w-auto mx-auto object-contain rounded-2xl"
              />
              <div className="p-5 bg-[#0C2D37] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-base text-white">{activeModalImage.title}</h4>
                  <span className="text-xs text-[#D49520] uppercase font-semibold">{activeModalImage.alt}</span>
                </div>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I am inquiring about this project style: ${activeModalImage.title}`);
                    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
                  }}
                  className="px-6 py-3 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 border border-[#D49520]"
                >
                  <WhatsAppIcon size={16} className="text-[#0C2D37]" />
                  <span>Inquire This Style</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
