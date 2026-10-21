import { notFound } from 'next/navigation';
import { CATALOG_ITEMS } from '../../data/business';
import ProductPageLayout from '../../components/ProductPageLayout';

const ALIAS_MAP = {
  'ripple-curtains': 'ripple-fold-curtains',
  'zebra': 'zebra-blinds',
  'motorized': 'motorized-curtains',
  'carpets': 'floor-mats-carpets',
};

function resolveProductId(slug) {
  const normalized = (slug || '').toLowerCase();
  return ALIAS_MAP[normalized] || normalized;
}

export async function generateStaticParams() {
  const params = CATALOG_ITEMS.map((item) => ({ slug: item.id }));
  // Add common aliases
  params.push(
    { slug: 'ripple-curtains' },
    { slug: 'zebra' },
    { slug: 'motorized' },
    { slug: 'carpets' }
  );
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const productId = resolveProductId(slug);
  const product = CATALOG_ITEMS.find((item) => item.id === productId);

  if (!product) {
    return {
      title: 'Product Not Found | Modern Blinds & Curtains',
    };
  }

  const canonicalUrl = `https://modernblinds.com/${product.id}`;
  const metaDescription = `${product.description} Custom-crafted with laser accuracy, 100+ luxury fabrics, and master installation across Kochi, Kerala. Call +91 79073 36565.`;

  return {
    title: `${product.name} in Kochi | Custom Window Treatments`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${product.name} Kochi`,
      `${product.name} price Kerala`,
      `${product.name} installation Kochi`,
      `custom ${product.name} Ernakulam`,
      `${product.name} showroom Kathrikadavu`,
      'Modern Blinds Kochi',
      'modernblinds.com',
      'Modern Blinds & Curtains',
      ...product.features,
    ],
    openGraph: {
      title: `${product.name} | Modern Blinds & Curtains Kochi`,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Modern Blinds & Curtains',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} - Modern Blinds & Curtains Kochi`,
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Modern Blinds & Curtains Kochi`,
      description: metaDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const productId = resolveProductId(slug);
  const product = CATALOG_ITEMS.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://modernblinds.com/${product.id}#product`,
        name: `${product.name} - Modern Blinds & Curtains Kochi`,
        image: `https://modernblinds.com${product.image}`,
        description: product.description,
        brand: {
          '@type': 'Brand',
          name: 'Modern Blinds & Curtains',
        },
        category: product.category,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '999',
          highPrice: '25000',
          offerCount: '10',
          availability: 'https://schema.org/InStock',
          url: `https://modernblinds.com/${product.id}`,
          seller: {
            '@type': 'HomeGoodsStore',
            name: 'Modern Blinds & Curtains Kochi',
            url: 'https://modernblinds.com',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '54',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://modernblinds.com/${product.id}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://modernblinds.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Window Treatments Collection',
            item: 'https://modernblinds.com/#collection',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `https://modernblinds.com/${product.id}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductPageLayout productId={productId} />
    </>
  );
}
