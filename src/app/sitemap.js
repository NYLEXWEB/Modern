import { CATALOG_ITEMS } from '../data/business';

export default function sitemap() {
  const baseUrl = 'https://modernblinds.com';
  const lastModified = new Date();

  // Static Core Route
  const coreRoutes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Dynamic Product and Service Routes
  const productRoutes = CATALOG_ITEMS.map((item) => ({
    url: `${baseUrl}/${item.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...coreRoutes, ...productRoutes];
}
