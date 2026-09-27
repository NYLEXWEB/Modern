import { Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import GoogleMaps from './GoogleMaps';
import { BUSINESS_DATA } from '../data/business';

export default function Contact() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to know more about your curtains and blinds.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Contact CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0C2D37] text-white p-8 sm:p-14 rounded-3xl border border-[#0C2D37]">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D49520]">
                Consultation & Orders
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
              Let's transform your windows.
            </h2>

            <p className="text-base text-white/80 max-w-xl font-normal">
              Talk to us about curtains, blinds and window solutions for your space. We provide on-site measurement, fabric catalog consultations, and custom fitting across Kochi.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={openWhatsApp}
                className="px-8 py-4 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 border border-[#D49520]"
              >
                <WhatsAppIcon size={18} className="text-[#0C2D37]" />
                <span>WhatsApp Us Direct</span>
              </button>

              <a
                href={`tel:${BUSINESS_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 border border-white/20"
              >
                <Phone size={16} className="text-[#D49520]" />
                <span>Call {BUSINESS_DATA.contact.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Direct Business Information</h3>
              <div className="w-12 h-[2px] bg-[#D49520]" />
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D49520] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Location</span>
                  <span>{BUSINESS_DATA.location.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#D49520] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Phone & WhatsApp</span>
                  <span>{BUSINESS_DATA.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon size={18} className="text-[#D49520] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Instagram</span>
                  <span>@{BUSINESS_DATA.contact.instagram}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps Embed Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-light text-[#111827]">Locate Our Showroom</h3>
            <span className="text-xs text-[#4B5563]">Kathrikadavu, Kochi, Kerala</span>
          </div>
          <GoogleMaps />
        </div>

      </div>
    </section>
  );
}
