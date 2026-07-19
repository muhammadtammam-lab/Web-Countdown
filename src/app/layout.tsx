import type { Metadata } from 'next';
import { poppins, inter } from '@/lib/fonts';
import { siteConfig } from '@/config/site.config';
import { JsonLd } from '@/components/atoms/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonicalUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.canonicalUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.eventName,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  alternates: {
    canonical: siteConfig.seo.canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="id" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col font-body">
          <JsonLd />
          {children}
        </body>
      </html>
    </>
  );
}