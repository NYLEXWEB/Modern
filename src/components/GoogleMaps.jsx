import { MapPin, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export default function GoogleMaps() {
  const openDirections = () => {
    window.open(BUSINESS_DATA.location.mapsUrl, '_blank');
  };

  return (
    <div className="w-full bg-[#FAF9F6] border border-gray-200 p-2 relative space-y-4">
      <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-gray-200">
        <iframe
          title="Modern Blinds & Curtains Location Map Kathrikadavu Kochi"
          src={BUSINESS_DATA.location.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Floating Location Card Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0C2D37] text-white p-5 border-l-4 border-[#D49520] space-y-2 shadow-lg max-w-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D49520]">
            <MapPin size={14} />
            <span>Showroom Location</span>
          </div>
          <h4 className="font-semibold text-base text-white">{BUSINESS_DATA.name}</h4>
          <p className="text-xs text-white/80 leading-normal">
            {BUSINESS_DATA.location.fullAddress}
          </p>
          <button
            onClick={openDirections}
            className="pt-2 text-xs font-bold uppercase tracking-wider text-[#D49520] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Get Directions on Google Maps</span>
            <Navigation size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
