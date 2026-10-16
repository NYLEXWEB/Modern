import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://modernblindscurtains.com'),
  title: {
    default: 'Modern Blinds & Curtains | Premium Curtains & Blinds in Kochi',
    template: '%s | Modern Blinds & Curtains Kochi',
  },
  description:
    'Premier digital showroom for custom curtains, blinds, motorized window solutions, balcony weather shades & interior decor in Kathrikadavu, Kochi, Kerala. Call +91 79073 36565.',
  keywords: [
    'Modern Blinds & Curtains',
    'Curtains Kochi',
    'Blinds Kochi',
    'Kathrikadavu',
    'Motorised Blinds',
    'Zebra Blinds',
    'Roller Blinds',
    'Kerala interior decor',
    'Ripple fold curtains Kochi',
  ],
  openGraph: {
    title: 'Modern Blinds & Curtains | Premium Curtains & Blinds in Kochi',
    description:
      'Luxury curtains, motorized blinds, and bespoke window solutions engineered for refined architectural spaces in Kochi, Kerala.',
    url: 'https://modernblindscurtains.com',
    siteName: 'Modern Blinds & Curtains',
    images: [
      {
        url: '/images/hero-desktop-bg.png',
        width: 1200,
        height: 630,
        alt: 'Modern Blinds & Curtains Kochi Showroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Modern Blinds & Curtains',
  image: '/logo.png',
  telephone: '+917907336565',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kathrikadavu',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  url: 'https://modernblindscurtains.com',
  priceRange: '₹₹',
  sameAs: ['https://www.instagram.com/modern_blinds_curtains/'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#111827] antialiased selection:bg-[#0C2D37] selection:text-[#D49520]">
        {children}
      </body>
    </html>
  );
}
