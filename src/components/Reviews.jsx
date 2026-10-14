import { motion } from 'framer-motion';
import { Star, ExternalLink, CheckCircle2, ThumbsUp } from 'lucide-react';
import GoogleIcon from './GoogleIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Reviews() {
  const openGoogleReviews = () => {
    window.open(BUSINESS_DATA.location.reviewsUrl, '_blank');
  };

  const reviews = [
    {
      id: 1,
      author: 'Arun Kumar',
      initials: 'AK',
      avatarBg: 'bg-[#E8F0FE] text-[#1a73e8]',
      badge: 'Local Guide • 28 reviews',
      time: '2 weeks ago',
      rating: 5,
      content:
        'Exceptional quality ripple fold curtains and blackout roller blinds! The laser measurements were spot on and installation in our Kathrikadavu apartment was super clean. Highly impressed by their fabric weave collection and on-time delivery.',
      service: 'Ripple Fold Curtains & Blackout Blinds',
      likes: 4,
      ownerResponse: 'Thank you Arun! It was a pleasure tailoring the custom curtains for your apartment in Kochi.',
    },
    {
      id: 2,
      author: 'Dr. Reshma Menon',
      initials: 'RM',
      avatarBg: 'bg-[#FCE8E6] text-[#d93025]',
      badge: 'Verified Customer • Kochi',
      time: '3 weeks ago',
      rating: 5,
      content:
        'Great experience with their motorized curtains and sliding mosquito nets. Prompt response on WhatsApp, transparent pricing, and top notch material guidance from the team. The motorized track works silently with our smart home setup.',
      service: 'Motorized Drapery & Pleated Mosquito Nets',
      likes: 6,
      ownerResponse: 'Thank you Dr. Reshma! We take pride in delivering seamless automation and quality fitting.',
    },
    {
      id: 3,
      author: 'Faisal V. M.',
      initials: 'FV',
      avatarBg: 'bg-[#E6F4EA] text-[#137333]',
      badge: 'Local Guide • 19 reviews',
      time: 'a month ago',
      rating: 5,
      content:
        'Professional consultation and very clean finish for zebra blinds and balcony weather shields. Survived the heavy monsoon rain without any issue. Highly recommended for premium interior window treatments across Ernakulam!',
      service: 'Zebra Blinds & Balcony Weather Shield',
      likes: 3,
      ownerResponse: 'Thank you Faisal! Our heavy-duty balcony systems are engineered specifically for Kerala weather.',
    },
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Google Themed Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            {/* Google Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
              <GoogleIcon size={16} />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                Google Verified Reviews
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
              Loved by Homeowners <br />
              <span className="font-semibold text-[#1a73e8]">Across Kochi.</span>
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed font-normal">
              Genuine feedback and verified 5-star ratings from homeowners, architects, and villa interior projects in Kerala.
            </p>
          </div>

          {/* Google Official Rating Showcase Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center gap-6 shrink-0">
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
                  <span>Based on 100+ Google Reviews</span>
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

        {/* Google Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 hover:border-[#1a73e8]/40 rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Author Info Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${rev.avatarBg} font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}>
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#111827] group-hover:text-[#1a73e8] transition-colors">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-[#5F6368]">
                        {rev.badge}
                      </p>
                    </div>
                  </div>

                  <div className="p-1 rounded-full bg-[#F8F9FA] border border-gray-100 shrink-0">
                    <GoogleIcon size={18} />
                  </div>
                </div>

                {/* Rating Stars & Timestamp */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center gap-0.5 text-[#FBBC04]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FBBC04" stroke="#FBBC04" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#5F6368]">
                    {rev.time}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block">
                  <span className="text-[11px] font-medium text-[#1a73e8] bg-[#E8F0FE] px-2.5 py-1 rounded-md">
                    {rev.service}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#3C4043] leading-relaxed font-normal">
                  "{rev.content}"
                </p>

                {/* Owner Response Box */}
                {rev.ownerResponse && (
                  <div className="mt-3 p-3.5 bg-[#F8F9FA] rounded-2xl border-l-2 border-[#1a73e8] text-xs text-[#5F6368] space-y-1">
                    <div className="font-semibold text-[#202124] flex items-center gap-1.5 text-[11px]">
                      <span>Response from Modern Blinds & Curtains</span>
                    </div>
                    <p className="italic text-[11px] text-[#5F6368] leading-relaxed">
                      "{rev.ownerResponse}"
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Helpful / Google Indicator */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#5F6368]">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <ThumbsUp size={12} className="text-gray-400" />
                  <span>Helpful ({rev.likes})</span>
                </div>

                <button
                  onClick={openGoogleReviews}
                  className="text-[11px] font-semibold text-[#1a73e8] hover:underline flex items-center gap-1"
                >
                  <span>Verified Google Review</span>
                  <ExternalLink size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Google Action Bar */}
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
                Kathrikadavu, Kochi, Kerala • 5.0 Star Rated Window Treatment Atelier
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
    </section>
  );
}
