import { siteConfig } from '@/config/site.config';

export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.eventName,
    startDate: siteConfig.eventDate,
    location: {
      '@type': 'Place',
      name: siteConfig.eventLocation,
    },
    description: siteConfig.seo.description,
    image: [siteConfig.seo.ogImage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}