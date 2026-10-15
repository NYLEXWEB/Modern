import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { CATALOG_ITEMS } from './data/business';

// Individual dedicated page imports from src/pages
import RippleFoldCurtains from './pages/RippleFoldCurtains';
import ZebraBlinds from './pages/ZebraBlinds';
import MotorizedCurtains from './pages/MotorizedCurtains';
import FloorMatsCarpets from './pages/FloorMatsCarpets';
import RollerBlinds from './pages/RollerBlinds';
import PleatedCurtains from './pages/PleatedCurtains';
import BalconyBlinds from './pages/BalconyBlinds';
import RomanBlinds from './pages/RomanBlinds';
import WoodenBlinds from './pages/WoodenBlinds';
import VenetianBlinds from './pages/VenetianBlinds';
import HoneycombBlinds from './pages/HoneycombBlinds';
import DoubleHeightCurtains from './pages/DoubleHeightCurtains';
import DoubleLayerCurtains from './pages/DoubleLayerCurtains';
import PleatedMosquitoNets from './pages/PleatedMosquitoNets';
import Wallpapers from './pages/Wallpapers';
import DecorItems from './pages/DecorItems';
import ProductPageLayout from './pages/ProductPageLayout';

// Direct route table mapping URLs to page components
const PRODUCT_ROUTES = {
  '/ripple-fold-curtains': RippleFoldCurtains,
  '/ripple-curtains': RippleFoldCurtains,
  '/zebra-blinds': ZebraBlinds,
  '/zebra': ZebraBlinds,
  '/motorized-curtains': MotorizedCurtains,
  '/motorized': MotorizedCurtains,
  '/floor-mats-carpets': FloorMatsCarpets,
  '/carpets': FloorMatsCarpets,
  '/roller-blinds': RollerBlinds,
  '/pleated-curtains': PleatedCurtains,
  '/balcony-blinds': BalconyBlinds,
  '/roman-blinds': RomanBlinds,
  '/wooden-blinds': WoodenBlinds,
  '/venetian-blinds': VenetianBlinds,
  '/honeycomb-blinds': HoneycombBlinds,
  '/double-height-curtains': DoubleHeightCurtains,
  '/double-layer-curtains': DoubleLayerCurtains,
  '/pleated-mosquito-nets': PleatedMosquitoNets,
  '/wallpapers': Wallpapers,
  '/decor-items': DecorItems,
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Normalize path by removing trailing slash if not root
  const cleanPath = currentPath.length > 1 && currentPath.endsWith('/') 
    ? currentPath.slice(0, -1) 
    : currentPath;

  // Check if current URL matches an explicit product route
  const MatchedPageComponent = PRODUCT_ROUTES[cleanPath.toLowerCase()];

  // Check if current URL is /product/:id or directly matches an item id
  let dynamicProductId = null;
  if (!MatchedPageComponent) {
    if (cleanPath.startsWith('/product/')) {
      dynamicProductId = cleanPath.replace('/product/', '');
    } else {
      const matchedItem = CATALOG_ITEMS.find((item) => `/${item.id}` === cleanPath.toLowerCase());
      if (matchedItem) {
        dynamicProductId = matchedItem.id;
      }
    }
  }

  // If on a dedicated product page, render the product page view
  if (MatchedPageComponent) {
    return <MatchedPageComponent />;
  }

  if (dynamicProductId) {
    return <ProductPageLayout productId={dynamicProductId} />;
  }

  // Default: Main Digital Showroom Home Page
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111827] flex flex-col font-sans selection:bg-[#0C2D37] selection:text-[#D49520]">
      {/* Navigation */}
      <Navbar />

      {/* Main Digital Showroom Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Collection />
        <Gallery />
        <WhyChoose />
        <Reviews />
        <Instagram />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
