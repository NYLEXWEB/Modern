import { notFound, redirect } from 'next/navigation';
import { CATALOG_ITEMS } from '../../../data/business';

export async function generateStaticParams() {
  return CATALOG_ITEMS.map((item) => ({ id: item.id }));
}

export default async function LegacyProductRoute({ params }) {
  const { id } = await params;
  const product = CATALOG_ITEMS.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  // Redirect to canonical /[slug] route
  redirect(`/${id}`);
}
