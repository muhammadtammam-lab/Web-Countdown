/**
 * Konfigurasi utama website event.
 */
export interface SiteConfig {
  /** Nama situs/institusi penyelenggara */
  siteName: string;
  /** Nama event (contoh: "XXVI INCOSAI") */
  eventName: string;
  /** Tagline singkat event */
  eventTagline: string;
  /** Tanggal event dalam format ISO 8601 (contoh: "2028-10-01T09:00:00+08:00") */
  eventDate: string;
  /** Lokasi event */
  eventLocation: string;
  /** Konfigurasi SEO */
  seo: {
    /** Title tag untuk halaman */
    title: string;
    /** Meta description */
    description: string;
    /** Array keyword untuk SEO */
    keywords: string[];
    /** Path ke OG image (relatif terhadap /public) */
    ogImage: string;
    /** Canonical URL website */
    canonicalUrl: string;
  };
}

/**
 * Background image untuk hero section.
 */
export interface BackgroundImage {
  /** ID unik untuk key React */
  id: string;
  /** Path gambar (relatif terhadap /public) */
  src: string;
  /** Alt text untuk accessibility */
  alt: string;
  /** Jika true, gambar akan di-priority load (LCP) */
  priority?: boolean;
}

/**
 * Item logo institusi.
 */
export interface LogoItem {
  /** ID unik untuk key React */
  id: string;
  /** Nama institusi/logo */
  name: string;
  /** Path file logo (relatif terhadap /public) */
  src: string;
  /** Alt text deskriptif */
  alt: string;
  /** Link URL opsional saat logo diklik */
  href?: string;
  /** Lebar gambar dalam pixel */
  width: number;
  /** Tinggi gambar dalam pixel */
  height: number;
}

/**
 * Item navigasi menu.
 */
export interface NavItem {
  /** ID unik untuk key React */
  id: string;
  /** Teks yang ditampilkan */
  label: string;
  /** Anchor href (contoh: "#about", "/contact") */
  href: string;
}