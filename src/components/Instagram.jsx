import { ExternalLink, Heart } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { GALLERY_IMAGES, BUSINESS_DATA } from '../data/business';

export default function Instagram() {
  const instagramPosts = GALLERY_IMAGES.slice(0, 6);

  const openInstagram = () => {
    window.open(BUSINESS_DATA.contact.instagramUrl, '_blank');
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#0C2D37]">
                Instagram Feed
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111827]">
              See Our Latest Work
            </h2>
            <p className="text-sm text-[#4B5563]">
              Follow <strong className="text-[#0C2D37]">@{BUSINESS_DATA.contact.instagram}</strong> for daily interior inspiration and behind-the-scenes installation stories.
            </p>
          </div>

          <button
            onClick={openInstagram}
            className="px-6 py-3.5 bg-[#0C2D37] text-white hover:bg-[#082129] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 border border-[#0C2D37]"
          >
            <InstagramIcon size={18} className="text-[#D49520]" />
            <span>Follow on Instagram</span>
            <ExternalLink size={14} />
          </button>
        </div>

        {/* Grid of Social Proof Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.src}
              onClick={openInstagram}
              className="group relative h-56 bg-gray-100 overflow-hidden cursor-pointer border border-gray-200"
            >
              <img
                src={post.src}
                alt={post.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0C2D37]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1 text-xs">
                  <Heart size={16} fill="white" />
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <InstagramIcon size={16} />
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
