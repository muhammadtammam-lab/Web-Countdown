import { siteConfig } from '@/config/site.config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white py-8 px-4 text-center font-body text-sm">
      <p>
        &copy; {currentYear} {siteConfig.siteName}. All rights reserved.
      </p>
      <p className="mt-2 text-white/80">{siteConfig.eventLocation}</p>
    </footer>
  );
}