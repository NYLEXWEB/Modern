import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, CheckCircle2, Heart, Share2, MoreVertical, X, Sparkles } from 'lucide-react';
import GoogleIcon from './GoogleIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Reviews() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openGoogleReviews = () => {
    window.open(BUSINESS_DATA.location.reviewsUrl, '_blank');
  };

  const reviews = [
    {
      id: 1,
      author: 'Anna Maria Joseph',
      initial: 'A',
      avatarBg: 'bg-[#2E3B4E] text-white',
      subtitle: '5 reviews',
      isLocalGuide: false,
      time: '11 months ago',
      rating: 5,
      content:
        'Had an excellent experience with Modern Blinds! They did a great job installing blinds at my home — the process was quick, neat, and professional. The blinds look amazing and really upgraded the look of each room. Great quality, perfect fit, and smooth installation. Highly recommend Modern Blinds for anyone looking to add style and privacy to their home!',
      service: 'Home Blinds Installation',
      likes: 1,
      photos: [],
    },
    {
      id: 2,
      author: 'Adithya Manoj',
      initial: 'A',
      avatarBg: 'bg-[#5A738E] text-white',
      subtitle: '3 reviews • 2 photos',
      isLocalGuide: false,
      time: '3 months ago',
      rating: 5,
      content:
        'Excellent curtain stitching and installation service for our office. The work was neat, fitting was perfect, and it was completed on time without disturbing office work. The team was professional and suggested suitable fabrics. Very happy with the final look. Highly recommended.',
      service: 'Office Curtains & Blinds Fitting',
      likes: null, // "Hover to react"
      photos: [
        {
          url: '/gallery/Screenshot_2026-09-27-20-34-42-708_com.whatsapp.w4b.jpg',
          alt: 'Office zebra blinds installation'
        },
        {
          url: '/gallery/Screenshot_2026-09-27-20-34-21-411_com.whatsapp.w4b.jpg',
          alt: 'Modern window blinds fitting'
        }
      ],
    },
    {
      id: 3,
      author: 'Rameez Moosa',
      initial: 'R',
      avatarBg: 'bg-[#6A1B9A] text-white',
      subtitle: '3 reviews • 1 photo',
      isLocalGuide: false,
      time: '10 months ago',
      rating: 5,
      content:
        'Excellent service , Punctual amd quality product. Extremely satisfied with the work and would recommend to all. Great work guys...Kept it up 👍',
      service: 'Custom Window Blinds Service',
      likes: 1,
      photos: [
        {
          url: '/gallery/Screenshot_2026-09-27-20-34-15-616_com.whatsapp.w4b.jpg',
          alt: 'Zebra blinds installation under AC'
        }
      ],
    },
    {
      id: 4,
      author: 'Anu Priya',
      initial: 'AP',
      avatarBg: 'bg-[#00796B] text-white',
      subtitle: 'Local Guide • 5 reviews • 3 photos',
      isLocalGuide: true,
      time: '3 months ago',
      rating: 5,
      content:
        'Thank you for the outstanding work delivered within a limited timeframe. Your dedication, professionalism, and commitment to excellent service were truly impressive. Despite the time constraints, you ensured everything was completed efficiently and to a high standard. Your support and prompt response are greatly appreciated. Keep up the excellent work!',
      service: 'Express Curtain Stitching & Fitting',
      likes: 1,
      photos: [
        {
          url: '/gallery/Screenshot_2026-09-27-20-34-10-241_com.whatsapp.w4b.jpg',
          alt: 'Silver eyelet sheen curtains'
        },
        {
          url: '/gallery/Screenshot_2026-09-27-20-34-12-302_com.whatsapp.w4b.jpg',
          alt: 'Premium curtain fitting'
        }
      ],
    },
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Google Themed Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            {/* Google Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
              <GoogleIcon size={16} />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                Google Verified Reviews
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
              Real Reviews from <br />
              <span className="font-semibold text-[#1a73e8]">Google Maps.</span>
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed font-normal">
              Direct, unfiltered feedback and client photos posted on our official Google Business profile in Kochi.
            </p>
          </div>

          {/* Google Official Rating Showcase Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-gray-100 flex items-center justify-center p-3 shadow-inner">
                <GoogleIcon size={32} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#111827]">5.0</span>
                  <div className="flex items-center gap-0.5 text-[#FBBC04]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#FBBC04" stroke="#FBBC04" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#5F6368] font-medium flex items-center gap-1.5">
                  <span>Modern Blinds & Curtains Kochi</span>
                  <CheckCircle2 size={13} className="text-[#1a73e8]" />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto pt-2 sm:pt-0 sm:border-l sm:border-gray-200 sm:pl-6">
              <button
                onClick={openGoogleReviews}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:shadow"
              >
                <span>Write a Review</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Google Reviews Cards Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white border border-gray-200 hover:border-[#1a73e8]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Author Info Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar with optional Local Guide badge indicator */}
                    <div className="relative">
                      <div className={`w-11 h-11 rounded-full ${rev.avatarBg} font-bold text-sm flex items-center justify-center shadow-xs shrink-0 select-none`}>
                        {rev.initial}
                      </div>
                      {rev.isLocalGuide && (
                        <div
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#FBBC04] text-[#202124] flex items-center justify-center border-2 border-white shadow-xs"
                          title="Google Local Guide"
                        >
                          <Star size={10} fill="#202124" stroke="#202124" />
                        </div>
                      )}
                    </div>

                    <div>
                      <h4
                        onClick={openGoogleReviews}
                        className="text-sm font-semibold text-[#111827] group-hover:text-[#1a73e8] transition-colors cursor-pointer hover:underline"
                      >
                        {rev.author}
                      </h4>
                      <p className="text-[12px] text-[#5F6368] flex items-center gap-1">
                        {rev.isLocalGuide && (
                          <span className="font-medium text-[#D97706] inline-flex items-center gap-1">
                            <Sparkles size={11} />
                          </span>
                        )}
                        <span>{rev.subtitle}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={openGoogleReviews}
                      title="View on Google Maps"
                      className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Rating Stars & Timestamp */}
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="flex items-center gap-0.5 text-[#FBBC04]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FBBC04" stroke="#FBBC04" />
                    ))}
                  </div>
                  <span className="text-[12px] text-[#5F6368]">
                    {rev.time}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block">
                  <span className="text-[11px] font-medium text-[#1a73e8] bg-[#E8F0FE] px-2.5 py-1 rounded-md">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] text-[#3C4043] leading-relaxed font-normal">
                  {rev.content}
                </p>

              </div>

              {/* Bottom Google Action & Reaction Row */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#5F6368]">
                <div className="flex items-center gap-3">
                  {/* Google Reaction Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#5F6368]">
                    {rev.likes ? (
                      <span className="inline-flex items-center gap-1 text-[#EA4335] font-medium bg-red-50/70 border border-red-100 px-2 py-0.5 rounded-full">
                        <Heart size={12} className="fill-[#EA4335] text-[#EA4335]" />
                        <span>{rev.likes}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart size={13} />
                        <span>Hover to react</span>
                      </span>
                    )}
                  </div>

                  {/* Share button */}
                  <button
                    onClick={openGoogleReviews}
                    title="Share this review"
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#1a73e8] transition-colors"
                  >
                    <Share2 size={13} />
                  </button>
                </div>

                <button
                  onClick={openGoogleReviews}
                  className="text-[11px] font-semibold text-[#1a73e8] hover:underline flex items-center gap-1"
                >
                  <GoogleIcon size={13} />
                  <span>Google Maps Review</span>
                  <ExternalLink size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Google Maps Atelier Card */}
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center p-2.5 shadow-xs shrink-0 mx-auto sm:mx-0">
              <GoogleIcon size={26} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#202124]">
                Modern Blinds & Curtains on Google Maps
              </h4>
              <p className="text-xs text-[#5F6368]">
                Kathrikadavu, Kochi, Kerala • 5.0 Star Rated Custom Window Treatments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={openGoogleReviews}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 text-[#1a73e8] border border-gray-300 font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
            >
              <span>View All Reviews on Google</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close photo"
              >
                <X size={20} />
              </button>
              <img
                src={selectedPhoto}
                alt="Enlarged review photo"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

