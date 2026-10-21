import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Collection from '../components/Collection';
import Gallery from '../components/Gallery';
import WhyChoose from '../components/WhyChoose';
import Reviews from '../components/Reviews';
import Instagram from '../components/Instagram';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  title: 'Modern Blinds & Curtains | Best Blinds & Custom Curtains in Kochi',
  description:
    'Premier showroom for bespoke curtains, motorized blinds, ripple fold drapes, zebra shades & exterior balcony blinds in Kathrikadavu, Kochi, Kerala. Somfy & Dooya authorized with 5-year guarantee. Free laser measurement across Ernakulam. Call +91 79073 36565.',
  alternates: {
    canonical: 'https://modernblinds.com',
  },
};

export default function HomePage() {
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
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
