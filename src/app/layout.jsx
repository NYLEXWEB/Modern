import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CATALOG_ITEMS } from '../data/business';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://modernblinds.com'),
  title: {
    default: 'Modern Blinds & Curtains | Best Blinds & Custom Curtains in Kochi',
    template: '%s | Modern Blinds & Curtains Kochi',
  },
  description:
    'Modern Blinds & Curtains is the premier showroom for luxury custom curtains, motorized blinds, ripple fold drapes, zebra blinds & exterior balcony shades in Kathrikadavu, Kochi. Authorized Somfy & Dooya motors with 5-year guarantee. Free laser measurement across Ernakulam. Call +91 79073 36565.',
  keywords: [
    // Brand & Domain
    'Modern Blinds',
    'modernblinds.com',
    'Modern Blinds Kochi',
    'Modern Blinds and Curtains',
    'Modern Blinds & Curtains Kochi',
    'Modern Curtains Kochi',
    // Core High-Intent Local Searches
    'curtains and blinds Kochi',
    'window blinds Kochi',
    'curtain shop in Kochi',
    'curtain showroom Ernakulam',
    'best curtain shop in Kochi',
    'curtains Kathrikadavu',
    'blinds manufacturers Kochi',
    'custom curtains Kerala',
    'curtains and blinds near me',
    'window treatments Kochi',
    // High-Demand Products
    'motorized curtains Kochi',
    'Somfy motorized blinds Kerala',
    'Dooya smart curtain motor Kochi',
    'automatic curtains Kerala',
    'smart blinds Kochi',
    'ripple fold curtains Kochi',
    'S fold curtains Ernakulam',
    'zebra blinds Kochi',
    'roller blinds Kochi',
    'blackout roller blinds Kochi',
    'roman blinds Kochi',
    'wooden blinds Kochi',
    'venetian blinds Ernakulam',
    'balcony blinds Kochi',
    'exterior rain blinds Kerala',
    'PVC balcony blinds Kochi',
    'pleated mosquito nets Kochi',
    'double height curtains Kochi',
    'sheer curtains Kochi',
    // Localities & Sub-regions
    'Kathrikadavu',
    'Kaloor',
    'Marine Drive Kochi',
    'Panampilly Nagar',
    'Kakkanad',
    'Edappally',
    'Aluva',
    'Kadavanthra',
    'Tripunithura',
    'Vyttila',
    'Ernakulam',
    'Kochi',
    'Kerala',
    // Intent Modifiers
    'free curtain measurement Kochi',
    'luxury window treatments Kerala',
    '5 year warranty motorized blinds',
    'architectural drapery Kochi',
    'direct factory blinds pricing Kochi',
  ],
  authors: [{ name: 'Modern Blinds & Curtains', url: 'https://modernblinds.com' }],
  creator: 'Modern Blinds & Curtains',
  publisher: 'Modern Blinds & Curtains',
  category: 'Home Improvement & Interior Design',
  classification: 'Window Treatments, Custom Curtains & Blinds Manufacturing',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://modernblinds.com',
  },
  openGraph: {
    title: 'Modern Blinds & Curtains | Best Blinds & Custom Curtains in Kochi',
    description:
      'Premier destination for luxury curtains, motorized blinds, ripple fold drapery & architectural window treatments in Kochi, Kerala. 5-Year Guarantee. Free on-site laser measurement across Ernakulam.',
    url: 'https://modernblinds.com',
    siteName: 'Modern Blinds & Curtains',
    images: [
      {
        url: '/About section.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Blinds & Curtains Kathrikadavu Showroom Kochi',
      },
      {
        url: '/service/8.png',
        width: 1200,
        height: 630,
        alt: 'Ripple Fold Curtains in Kochi - Modern Blinds & Curtains',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Blinds & Curtains | Premium Curtains & Blinds in Kochi',
    description:
      'Custom curtains, motorized blinds, ripple fold drapes & window solutions in Kochi. Free laser measurement across Ernakulam.',
    images: ['/About section.jpg'],
    creator: '@modern_blinds',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HomeGoodsStore', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://modernblinds.com/#localbusiness',
      name: 'Modern Blinds & Curtains',
      alternateName: [
        'Modern Blinds',
        'modernblinds.com',
        'Modern Blinds Kochi',
        'Modern Blinds and Curtains',
      ],
      url: 'https://modernblinds.com',
      logo: 'https://modernblinds.com/logo.png',
      image: [
        'https://modernblinds.com/About section.jpg',
        'https://modernblinds.com/service/8.png',
        'https://modernblinds.com/service/11.png',
      ],
      description:
        'Premier atelier for bespoke curtains, motorized blinds, ripple fold drapes, zebra blinds, and architectural window treatments in Kathrikadavu, Kochi, Kerala.',
      telephone: '+91 79073 36565',
      email: 'info@modernblinds.com',
      priceRange: '₹₹ - ₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kathrikadavu, Kaloor - Kadavanthra Road',
        addressLocality: 'Kochi',
        addressRegion: 'Kerala',
        postalCode: '682017',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.988019,
        longitude: 76.297424,
      },
      hasMap: 'https://share.google/svpUR405CaKMg0J02',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '20:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '54',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Anna Maria Joseph' },
          datePublished: '2025-11-15',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Had an excellent experience with Modern Blinds! They did a great job installing blinds at my home — the process was quick, neat, and professional. The blinds look amazing and really upgraded the look of each room.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Adithya Manoj' },
          datePublished: '2026-07-20',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Excellent curtain stitching and installation service for our office. The work was neat, fitting was perfect, and it was completed on time without disturbing office work.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Rameez Moosa' },
          datePublished: '2025-12-10',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Excellent service, Punctual and quality product. Extremely satisfied with the work and would recommend to all. Great work guys!',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Anu Priya' },
          datePublished: '2026-07-10',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Thank you for the outstanding work delivered within a limited timeframe. Your dedication, professionalism, and commitment to excellent service were truly impressive.',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Kochi' },
        { '@type': 'AdministrativeArea', name: 'Ernakulam' },
        { '@type': 'Place', name: 'Kathrikadavu' },
        { '@type': 'Place', name: 'Kaloor' },
        { '@type': 'Place', name: 'Marine Drive' },
        { '@type': 'Place', name: 'Panampilly Nagar' },
        { '@type': 'Place', name: 'Kakkanad' },
        { '@type': 'Place', name: 'Edappally' },
        { '@type': 'Place', name: 'Aluva' },
        { '@type': 'Place', name: 'Kadavanthra' },
        { '@type': 'Place', name: 'Tripunithura' },
        { '@type': 'State', name: 'Kerala' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Window Treatments & Interior Decor',
        itemListElement: CATALOG_ITEMS.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: item.name,
            description: item.description,
            image: `https://modernblinds.com${item.image}`,
            url: `https://modernblinds.com/${item.id}`,
          },
        })),
      },
      sameAs: [
        'https://www.instagram.com/modern_blinds_curtains?stkn=MXNmbmc5b3ZoM2hhOQ==',
        'https://www.facebook.com/share/1DZDoWnC8c/?mibextid=wwXIfr',
        'https://share.google/svpUR405CaKMg0J02',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://modernblinds.com/#website',
      url: 'https://modernblinds.com',
      name: 'Modern Blinds & Curtains',
      alternateName: 'Modern Blinds',
      description: 'Luxury Curtains & Motorized Window Blinds in Kochi, Kerala',
      publisher: {
        '@id': 'https://modernblinds.com/#localbusiness',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://modernblinds.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where is Modern Blinds & Curtains located in Kochi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modern Blinds & Curtains showroom is located at Kathrikadavu, Kaloor - Kadavanthra Road, Kochi, Kerala 682017. We provide showroom consultations and free on-site laser measurement visits across all areas of Kochi and Ernakulam.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide motorized curtains and smart blinds in Kochi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We specialize in smart motorized curtains and blinds using internationally certified tubular drives from Somfy (France), Dooya, and Deco Window. They support smartphone app scheduling, wall remotes, and voice commands via Alexa and Google Home.',
          },
        },
        {
          '@type': 'Question',
          name: 'What warranty is offered on motorized curtains and blinds?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide an authorized 5-Year Warranty on Dooya motors, and a 5-Year Replacement Guarantee on Somfy and Deco Window motor systems, backed by prompt local on-site technician service in Kochi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is on-site measurement and fabric consultation free in Kochi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our master technicians visit your apartment, villa, or commercial site anywhere in Kochi and Ernakulam with digital laser calipers and bring over 100+ physical fabric weave books directly to you free of cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of blinds and curtains are available at Modern Blinds Kochi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our comprehensive collection includes Ripple Fold Curtains, Zebra Blinds, Blackout Roller Blinds, Roman Shades, Wooden Blinds, Venetian Blinds, Honeycomb Blinds, Balcony Weather Rain Blinds, Double-Height Drapery, Pleated Mosquito Nets, and Designer Floor Mats & Carpets.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${manrope.variable}`}>
      <head>
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi, Kerala, India" />
        <meta name="geo.position" content="9.988019;76.297424" />
        <meta name="ICBM" content="9.988019, 76.297424" />

        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#111827] antialiased selection:bg-[#0C2D37] selection:text-[#D49520]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
