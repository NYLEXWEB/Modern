'use client';

import Link from 'next/link';
import { Phone, ArrowUp, Navigation } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to Enquiry about your window solutions.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#082129] text-white pt-12 pb-8 px-4 sm:px-8 border-t border-[#0C2D37]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Modern Blinds & Curtains Home">
              <img
                src="/logo.png"
                alt="Modern Blinds & Curtains Kochi Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
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
              <li><Link href="/#hero" className="hover:text-[#D49520] transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#D49520] transition-colors">About Showroom</Link></li>
              <li><Link href="/#services" className="hover:text-[#D49520] transition-colors">Services & Solutions</Link></li>
              <li><Link href="/#collection" className="hover:text-[#D49520] transition-colors">Digital Showroom</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#D49520] transition-colors">Real Installations</Link></li>
              <li><Link href="/#reviews" className="hover:text-[#D49520] transition-colors">Verified Reviews</Link></li>
              <li><Link href="/#faq" className="hover:text-[#D49520] transition-colors">FAQ &amp; Help</Link></li>
              <li><Link href="/#contact" className="hover:text-[#D49520] transition-colors">Contact & Directions</Link></li>
            </ul>
          </div>

          {/* Custom Window Treatments with Direct SEO Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D49520]">
              Custom Window Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>
                <Link href="/ripple-fold-curtains" className="hover:text-[#D49520] transition-colors">
                  Ripple Fold Curtains Kochi
                </Link>
              </li>
              <li>
                <Link href="/motorized-curtains" className="hover:text-[#D49520] transition-colors">
                  Motorized Curtains &amp; Blinds
                </Link>
              </li>
              <li>
                <Link href="/zebra-blinds" className="hover:text-[#D49520] transition-colors">
                  Zebra Blinds &amp; Shades
                </Link>
              </li>
              <li>
                <Link href="/roller-blinds" className="hover:text-[#D49520] transition-colors">
                  Blackout Roller Blinds
                </Link>
              </li>
              <li>
                <Link href="/balcony-blinds" className="hover:text-[#D49520] transition-colors">
                  Exterior Balcony Rain Blinds
                </Link>
              </li>
              <li>
                <Link href="/wooden-blinds" className="hover:text-[#D49520] transition-colors">
                  Natural Wooden Blinds
                </Link>
              </li>
              <li>
                <Link href="/pleated-mosquito-nets" className="hover:text-[#D49520] transition-colors">
                  Pleated Mosquito Nets
                </Link>
              </li>
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
