import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import DigitalCatalog from './components/DigitalCatalog';
import Reviews from './components/Reviews';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
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
        <DigitalCatalog />
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
