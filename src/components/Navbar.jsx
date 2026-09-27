import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Collection', href: '#collection' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to request a quote and consultation for window solutions.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto bg-[#0C2D37] border border-white/20 px-6 py-3 flex items-center justify-between ${
            scrolled ? 'bg-[#0C2D37]/95 backdrop-blur-md border-white/30' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt={BUSINESS_DATA.name}
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase font-semibold tracking-wider text-white/90 hover:text-[#D49520] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D49520] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (No shadow) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={openWhatsApp}
              className="px-5 py-2.5 rounded-full bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border border-[#D49520]"
            >
              <WhatsAppIcon size={16} className="text-[#0C2D37]" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-[#D49520] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C2D37] text-white flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300 md:hidden">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#D49520] font-semibold mb-4">
              Navigation
            </div>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-light tracking-wide text-white hover:text-[#D49520] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="text-xs text-white/60">Modern Blinds & Curtains • Kathrikadavu, Kochi</div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={openWhatsApp}
                className="w-full bg-[#D49520] text-[#0C2D37] py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} className="text-[#0C2D37]" />
                WhatsApp
              </button>
              <a
                href={`tel:${BUSINESS_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="w-full bg-white/10 border border-white/20 text-white py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
