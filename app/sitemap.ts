import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://delicacyproperty.com'; // Replace with actual domain if known, otherwise use a placeholder

  const routes = [
    '',
    '/28-acre-jv-land-hiranandani-powai-mumbai',
    '/land-for-joint-venture-in-mumbai',
    '/outright-building-sale-in-dadar',
    '/new-properties-mumbai'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
