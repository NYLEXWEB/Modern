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
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Custom Window Treatments Kochi`,
    description: `${product.description} Available with custom sizing, measurement, and expert installation across Kochi, Kerala. Call +91 79073 36565.`,
    openGraph: {
      title: `${product.name} | Modern Blinds & Curtains Kochi`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
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

  return <ProductPageLayout productId={productId} />;
}
