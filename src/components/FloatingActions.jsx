import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_DATA } from '../data/business';

export default function FloatingActions() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to get more information about your products and pricing.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open(BUSINESS_DATA.contact.instagramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Instagram Floating Action (No shadow) */}
      <button
        onClick={openInstagram}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative border border-white/20"
        aria-label="Visit Instagram Profile"
      >
        <InstagramIcon size={22} />
        <span className="absolute right-14 bg-[#0C2D37] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-medium border border-white/10">
          Instagram @modern_blinds_curtains
        </span>
      </button>

      {/* WhatsApp Primary Floating Action (No shadow) */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} className="text-white" />
        <span className="absolute right-16 bg-[#0C2D37] text-white text-xs px-3.5 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-medium border border-[#D49520]">
          Chat on WhatsApp Direct
        </span>
      </button>

    </div>
  );
}
