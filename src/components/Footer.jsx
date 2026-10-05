import { MapPin, Phone, ArrowUp, Navigation } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to inquire about your window solutions.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#082129] text-white pt-12 pb-8 px-4 sm:px-8 border-t border-[#0C2D37]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/logo.png"
                alt={BUSINESS_DATA.name}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-white/70 leading-relaxed font-normal max-w-sm">
              Premier window treatments, bespoke curtains, architectural blinds, and outdoor weather solutions in Kathrikadavu, Kochi.
            </p>
            <div className="text-xs text-[#D49520] uppercase font-bold tracking-widest">
              Kathrikadavu • Kochi • Kerala
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D49520]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#hero" className="hover:text-[#D49520] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D49520] transition-colors">About Showroom</a></li>
              <li><a href="#services" className="hover:text-[#D49520] transition-colors">Services & Solutions</a></li>
              <li><a href="#collection" className="hover:text-[#D49520] transition-colors">Digital Showroom</a></li>
              <li><a href="#gallery" className="hover:text-[#D49520] transition-colors">Real Installations</a></li>
              <li><a href="#reviews" className="hover:text-[#D49520] transition-colors">Verified Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#D49520] transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D49520]">
              Products Offered
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>Pleated & Ripple Curtains</li>
              <li>Roller & Zebra Blinds</li>
              <li>Roman & Honeycomb Shades</li>
              <li>Vertical & Balcony Blinds</li>
              <li>Sliding Mosquito Nets</li>
              <li>Motorised Automation</li>
              <li>Floor Mats & Designer Wallpapers</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D49520]">
              Reach Us
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <a href={`tel:${BUSINESS_DATA.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-[#D49520]" />
                <span>{BUSINESS_DATA.contact.phone}</span>
              </a>
              <button onClick={openWhatsApp} className="flex items-center gap-2 hover:text-white transition-colors text-left">
                <WhatsAppIcon size={14} className="text-[#25D366]" />
                <span>WhatsApp Direct</span>
              </button>
              <a href={BUSINESS_DATA.contact.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <InstagramIcon size={14} className="text-[#D49520]" />
                <span>@{BUSINESS_DATA.contact.instagram}</span>
              </a>
              <a href={BUSINESS_DATA.contact.facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <FacebookIcon size={14} />
                <span>Facebook Page</span>
              </a>
              <a href={BUSINESS_DATA.location.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Navigation size={14} className="text-[#D49520]" />
                <span>Google Maps Location</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copy & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 pt-2">
          <div>
            © {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved. Kathrikadavu, Kochi, Kerala.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-[#D49520] transition-colors"
          >
            <span className="uppercase tracking-widest text-[10px]">Back To Top</span>
            <div className="p-1.5 rounded-full bg-white/10 text-white">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
