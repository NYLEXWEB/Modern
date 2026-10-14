import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ExternalLink, 
  ChevronRight, 
  Home, 
  Ruler, 
  Clock, 
  Layers 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { BUSINESS_DATA, CATALOG_ITEMS } from '../data/business';
import { navigateTo } from '../utils/navigation';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function ProductPageLayout({ productId }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Find product by id (or fallback to first item if not found)
  const product = CATALOG_ITEMS.find((item) => item.id === productId) || CATALOG_ITEMS[0];

  // Related products from same or complementary categories
  const relatedProducts = CATALOG_ITEMS
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  const openWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Modern Blinds & Curtains, I am viewing "${product.name}" on your website and would like to get a quote, fabric consultation, and measurement details.`
    );
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const openShowroomMaps = () => {
    window.open(BUSINESS_DATA.location.mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111827] flex flex-col font-sans selection:bg-[#0C2D37] selection:text-[#D49520]">
      
      {/* Top Product Page Header */}
      <header className="sticky top-0 z-40 bg-[#0C2D37]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateTo('/')}
              className="p-2 sm:px-3 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center gap-2 text-xs font-semibold tracking-wider transition-all duration-300"
              aria-label="Back to Home"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Home</span>
            </button>

            <button
              onClick={() => navigateTo('/')}
              className="text-left"
            >
              <img
                src="/logo.png"
                alt={BUSINESS_DATA.name}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsAppInquiry}
              className="px-4 sm:px-5 py-2.5 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 border border-[#D49520]"
            >
              <WhatsAppIcon size={16} className="text-[#0C2D37]" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Product Showcase Content */}
      <main className="flex-grow py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#6B7280] overflow-x-auto no-scrollbar py-1">
            <button 
              onClick={() => navigateTo('/')} 
              className="hover:text-[#0C2D37] flex items-center gap-1 transition-colors"
            >
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <button 
              onClick={() => {
                navigateTo('/');
                setTimeout(() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="hover:text-[#0C2D37] transition-colors"
            >
              Custom Solutions
            </button>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <span className="capitalize text-[#6B7280]">
              {product.category.replace('_', ' ')}
            </span>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <span className="font-semibold text-[#0C2D37] truncate">
              {product.name}
            </span>
          </nav>

          {/* Product Hero: Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Interactive Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm group">
                <div 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`w-full h-[360px] sm:h-[480px] overflow-hidden flex items-center justify-center ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out filter brightness-105 ${
                      isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'
                    }`}
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && (
                    <span className="bg-[#0C2D37] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <span className="bg-white/95 text-[#0C2D37] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                    {product.category.replace('_', ' ')}
                  </span>
                </div>

                {/* Zoom Toggle Pill */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-4 right-4 bg-[#0C2D37]/90 hover:bg-[#0C2D37] text-white text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/20 shadow-md transition-all"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut size={13} className="text-[#D49520]" />
                      <span>Zoom Out</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn size={13} className="text-[#D49520]" />
                      <span>Click to Zoom</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quality Highlights Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 text-center space-y-1">
                  <Ruler size={18} className="text-[#D49520] mx-auto" />
                  <div className="text-[11px] font-bold text-[#0C2D37] uppercase">Custom Drop</div>
                  <div className="text-[10px] text-[#6B7280]">Laser Accurate</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 text-center space-y-1">
                  <Layers size={18} className="text-[#D49520] mx-auto" />
                  <div className="text-[11px] font-bold text-[#0C2D37] uppercase">Fabrics</div>
                  <div className="text-[10px] text-[#6B7280]">100+ Weave Books</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 text-center space-y-1">
                  <Clock size={18} className="text-[#D49520] mx-auto" />
                  <div className="text-[11px] font-bold text-[#0C2D37] uppercase">Fitting</div>
                  <div className="text-[10px] text-[#6B7280]">Master Kerala Team</div>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Architectural Consultation */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#D49520]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                    Architectural Window Solution
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-light text-[#111827] leading-tight">
                  {product.name}
                </h1>

                <p className="text-base text-[#4B5563] leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Key Features & Specifications */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C2D37] flex items-center gap-2">
                  <Sparkles size={14} className="text-[#D49520]" />
                  <span>Engineered Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#374151]">
                      <div className="p-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[#D49520] shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2.5 text-xs text-[#374151]">
                    <div className="p-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[#D49520] shrink-0 mt-0.5">
                      <Check size={13} />
                    </div>
                    <span className="font-medium">On-Site Measurement in Kochi</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#374151]">
                    <div className="p-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[#D49520] shrink-0 mt-0.5">
                      <Check size={13} />
                    </div>
                    <span className="font-medium">Motorized / Manual Track Options</span>
                  </div>
                </div>
              </div>

              {/* Action Callout Box */}
              <div className="bg-[#0C2D37] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-[#0C2D37]">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#D49520]">
                    Direct Factory & Atelier Pricing
                  </div>
                  <h4 className="text-xl sm:text-2xl font-light text-white">
                    Request a Customized Quote for {product.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Share your approximate window dimensions on WhatsApp, or book a free on-site measurement session anywhere in Kochi and Ernakulam.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <button
                    onClick={openWhatsAppInquiry}
                    className="flex-1 py-4 px-6 bg-[#D49520] hover:bg-[#DF9F1D] text-[#0C2D37] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#D49520]"
                  >
                    <WhatsAppIcon size={18} className="text-[#0C2D37]" />
                    <span>Enquiry via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_DATA.contact.phone.replace(/\s+/g, '')}`}
                    className="py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Phone size={16} className="text-[#D49520]" />
                    <span>Call Now</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/75">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#D49520]" />
                    <span>Kathrikadavu Showroom, Kochi</span>
                  </div>
                  <button
                    onClick={openShowroomMaps}
                    className="text-[#D49520] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* 3-Step Process Section */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D49520]">
                How It Works
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#111827]">
                Seamless From Measurement To Mounting
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-light text-[#D49520]">01</div>
                <h4 className="text-base font-semibold text-[#111827]">In-Home Consultation</h4>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Our specialists visit your home or villa in Kochi with fabric sample books and laser measurement tools.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-light text-[#D49520]">02</div>
                <h4 className="text-base font-semibold text-[#111827]">Precision Tailoring</h4>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Each fold and slat is custom crafted to your exact window drop, ensuring perfect alignment and smooth motion.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-light text-[#D49520]">03</div>
                <h4 className="text-base font-semibold text-[#111827]">Professional Fitting</h4>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Mounted cleanly on ceiling tracks or wall brackets with zero mess, motor synchronization, and operational demo.
                </p>
              </div>
            </div>
          </div>

          {/* Related / Other Products Section */}
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#D49520]" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#0C2D37]">
                    Explore More
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#111827]">
                  Complementary Window Solutions
                </h3>
              </div>

              <button
                onClick={() => {
                  navigateTo('/');
                  setTimeout(() => {
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#0C2D37] hover:text-[#D49520] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <span>View Full Catalog</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relItem) => (
                <div
                  key={relItem.id}
                  onClick={() => navigateTo(`/${relItem.id}`)}
                  className="group bg-white border border-gray-200 hover:border-[#0C2D37] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={relItem.image}
                        alt={relItem.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                      />
                      {relItem.badge && (
                        <span className="absolute top-3 left-3 bg-[#0C2D37] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                          {relItem.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D49520]">
                        {relItem.category.replace('_', ' ')}
                      </span>
                      <h4 className="text-base font-semibold text-[#111827] group-hover:text-[#0C2D37] transition-colors line-clamp-1">
                        {relItem.name}
                      </h4>
                      <p className="text-xs text-[#6B7280] line-clamp-2">
                        {relItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <span className="text-xs font-bold text-[#0C2D37] group-hover:text-[#D49520] flex items-center gap-1 transition-colors">
                      <span>Explore Details</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
