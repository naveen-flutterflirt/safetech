import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://safetech.com';

  const routes = [
    '',
    '/home',
    '/business',
    '/about',
    '/contact',
    '/amc',
    '/faqs',
    '/solutions/cctv',
    '/solutions/fire-safety',
    '/solutions/solar-power',
    '/solutions/solar-water-heating',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
