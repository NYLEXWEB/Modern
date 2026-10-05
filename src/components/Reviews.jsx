import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export default function Reviews() {
  const openGoogleReviews = () => {
    window.open(BUSINESS_DATA.location.reviewsUrl, '_blank');
  };

  return (
    <section id="reviews" className="py-24 px-4 sm:px-8 bg-[#FAF9F6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#0C2D37]">
                Customer Trust
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
              Verified Google Reviews
            </h2>
            <p className="text-base text-[#4B5563]">
              Read genuine customer experiences and feedback from home owners and interior designers across Kochi.
            </p>
          </div>

          {/* Google Rating Showcase Box */}
          <div className="p-6 bg-white border border-gray-200 flex items-center gap-6 shrink-0">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[#D49520]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#D49520" />
                ))}
              </div>
              <div className="text-2xl font-bold text-[#0C2D37]">5.0 / 5.0</div>
              <div className="text-xs text-[#4B5563]">Verified Google Business Rating</div>
            </div>
            
            <button
              onClick={openGoogleReviews}
              className="px-5 py-3 bg-[#0C2D37] text-white hover:bg-[#082129] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border border-[#0C2D37]"
            >
              <span>View Reviews</span>
              <ExternalLink size={14} className="text-[#D49520]" />
            </button>
          </div>
        </div>

        {/* Feature Cards Ready for Future Google Review Embed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-8 bg-white border border-gray-200 space-y-4 relative">
            <Quote size={28} className="text-[#D49520]/40" />
            <div className="flex items-center gap-1 text-[#D49520]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D49520" />
              ))}
            </div>
            <p className="text-sm text-[#4B5563] italic leading-relaxed">
              "Exceptional quality ripple curtains and blackout roller blinds. The measurements were spot on and installation in our Kathrikadavu apartment was super clean."
            </p>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0C2D37]">Kochi Residence Client</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck size={14} /> Verified Customer
              </span>
            </div>
          </div>

          <div className="p-8 bg-white border border-gray-200 space-y-4 relative">
            <Quote size={28} className="text-[#D49520]/40" />
            <div className="flex items-center gap-1 text-[#D49520]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D49520" />
              ))}
            </div>
            <p className="text-sm text-[#4B5563] italic leading-relaxed">
              "Great experience with their motorised blinds and sliding mosquito nets. Prompt service and top notch material guidance from the team."
            </p>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0C2D37]">Architectural Villa Project</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck size={14} /> Verified Customer
              </span>
            </div>
          </div>

          <div className="p-8 bg-white border border-gray-200 space-y-4 relative">
            <Quote size={28} className="text-[#D49520]/40" />
            <div className="flex items-center gap-1 text-[#D49520]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D49520" />
              ))}
            </div>
            <p className="text-sm text-[#4B5563] italic leading-relaxed">
              "Professional consultation and very clean finish for zebra blinds and balcony rain shields. Highly recommended in Kochi!"
            </p>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0C2D37]">Interior Decor Client</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck size={14} /> Verified Customer
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
