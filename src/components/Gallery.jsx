'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Play, Star } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { SERVICE_GALLERY_ITEMS, CLIENT_REVIEW_VIDEOS, BUSINESS_DATA } from '../data/business';

export default function Gallery() {
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // Row 1: All 16 Service images duplicated for seamless infinite loop
  const serviceMarquee = [...SERVICE_GALLERY_ITEMS, ...SERVICE_GALLERY_ITEMS];

  // Row 2: 5 Client Video Reviews duplicated for seamless infinite loop
  const videoMarquee = [
    ...CLIENT_REVIEW_VIDEOS,
    ...CLIENT_REVIEW_VIDEOS,
    ...CLIENT_REVIEW_VIDEOS,
    ...CLIENT_REVIEW_VIDEOS,
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                Visual Showcase & Reviews
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
              Real Installations & Client Videos
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              Explore our complete architectural collection in real interior spaces, followed by authentic client video reviews from Kochi homes and villas.
            </p>
          </div>
        </div>

      </div>

      {/* Two Row Showcase */}
      <div className="space-y-10 pt-8">
        
        {/* ========================================================= */}
        {/* ROW 1: Signature Services Gallery (16 Service Images)    */}
        {/* ========================================================= */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D49520]" />
              <span className="text-xs uppercase tracking-wider font-bold text-[#0C2D37]">
                Row 1 • Collection & Window Treatments
              </span>
            </div>
            <span className="text-xs text-[#6B7280] font-medium hidden sm:inline">
              16 Signature Styles
            </span>
          </div>

          {/* Row 1 - Auto Scrolls Left Continuously */}
          <div className="flex overflow-hidden relative w-full select-none py-2">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {serviceMarquee.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  onClick={() => setActiveModalImage(item)}
                  className="w-72 sm:w-80 h-80 sm:h-96 shrink-0 rounded-3xl overflow-hidden border border-gray-200 bg-white relative group cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0C2D37]/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Gradient Overlay with Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37]/95 via-[#0C2D37]/30 to-transparent flex flex-col justify-end p-5 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-semibold text-white line-clamp-1">
                          {item.title}
                        </h4>
                        <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md shrink-0 group-hover:bg-[#D49520] group-hover:text-[#0C2D37] transition-colors">
                          <Maximize2 size={13} />
                        </div>
                      </div>
                      <p className="text-xs text-white/75 line-clamp-2 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 2: Client Review Videos (5 Video Reviews)            */}
        {/* ========================================================= */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-bold text-[#0C2D37]">
                Row 2 • Verified Client Video Reviews
              </span>
            </div>
            <span className="text-xs text-[#6B7280] font-medium hidden sm:inline">
              Click any video to play with audio
            </span>
          </div>

          {/* Row 2 - Auto Scrolls Right Continuously */}
          <div className="flex overflow-hidden relative w-full select-none py-2">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {videoMarquee.map((vid, idx) => (
                <div
                  key={`r2-${vid.id}-${idx}`}
                  onClick={() => setActiveModalVideo(vid)}
                  className="w-72 sm:w-80 h-80 sm:h-96 shrink-0 rounded-3xl overflow-hidden border border-gray-200 bg-[#0C2D37] relative group cursor-pointer shadow-xs hover:shadow-xl transition-all"
                >
                  {/* Background Video Preview */}
                  <video
                    src={vid.videoSrc}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="bg-[#D49520] text-[#0C2D37] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white/20">
                      <Play size={10} className="fill-[#0C2D37]" />
                      <span>Client Review</span>
                    </span>

                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[#FBBC04] border border-white/10">
                      {[...Array(vid.rating)].map((_, i) => (
                        <Star key={i} size={11} fill="#FBBC04" stroke="#FBBC04" />
                      ))}
                    </div>
                  </div>

                  {/* Center Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#0C2D37] flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#D49520] transition-all duration-300 backdrop-blur-xs">
                      <Play size={22} className="ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay with Client Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D37] via-[#0C2D37]/40 to-transparent flex flex-col justify-end p-5 text-white z-10">
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-white flex items-center justify-between">
                        <span>{vid.clientName}</span>
                        <span className="text-[10px] font-normal text-white/60">{vid.date}</span>
                      </h4>
                      <p className="text-xs text-[#D49520] font-medium line-clamp-1">
                        {vid.location} • {vid.service}
                      </p>
                      <p className="text-[11px] text-white/80 line-clamp-2 italic pt-0.5">
                        "{vid.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Row 1 Service Images */}
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
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden p-3 border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-5 right-5 z-20 p-2.5 bg-[#0C2D37] text-white hover:text-[#D49520] rounded-full border border-white/20 shadow-md transition-colors"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              <div className="rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center max-h-[65vh]">
                <img
                  src={activeModalImage.image}
                  alt={activeModalImage.title}
                  className="max-h-[65vh] w-auto mx-auto object-contain"
                />
              </div>

              <div className="p-5 bg-[#0C2D37] text-white rounded-2xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#D49520] text-[#0C2D37]">
                      {activeModalImage.category}
                    </span>
                    <h4 className="font-semibold text-lg text-white">{activeModalImage.title}</h4>
                  </div>
                  <p className="text-xs text-white/75 max-w-xl">
                    {activeModalImage.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I am viewing "${activeModalImage.title}" in your gallery and would like to get a quote and measurement.`);
                      window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 border border-[#D49520] transition-colors shrink-0"
                  >
                    <WhatsAppIcon size={16} className="text-[#0C2D37]" />
                    <span>Enquire This Style</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Row 2 Client Review Videos */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C2D37]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModalVideo(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[92vh] bg-black rounded-3xl overflow-hidden p-3 border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalVideo(null)}
                className="absolute top-5 right-5 z-20 p-2.5 bg-black/70 text-white hover:text-[#D49520] rounded-full border border-white/20 backdrop-blur-md shadow-md transition-colors"
                aria-label="Close video player"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[62vh]">
                <video
                  src={activeModalVideo.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[62vh] w-full object-contain rounded-2xl"
                />
              </div>

              {/* Video Review Info Banner */}
              <div className="p-5 bg-[#0C2D37] text-white rounded-2xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#D49520] text-[#0C2D37]">
                      Client Video Review
                    </span>
                    <h4 className="font-semibold text-base sm:text-lg text-white">
                      {activeModalVideo.clientName}
                    </h4>
                    <div className="flex items-center gap-0.5 text-[#FBBC04]">
                      {[...Array(activeModalVideo.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="#FBBC04" stroke="#FBBC04" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#D49520]">
                    {activeModalVideo.location} • {activeModalVideo.service}
                  </p>
                  <p className="text-xs text-white/80 italic max-w-xl">
                    "{activeModalVideo.quote}"
                  </p>
                </div>

                <div className="w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I watched ${activeModalVideo.clientName}'s review video for "${activeModalVideo.service}" and would like to get a similar consultation.`);
                      window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 border border-[#D49520] transition-colors"
                  >
                    <WhatsAppIcon size={16} className="text-[#0C2D37]" />
                    <span>Inquire This Setup</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

