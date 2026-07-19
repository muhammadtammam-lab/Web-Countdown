# XXVI INCOSAI Indonesia 2028 - Website Countdown Event

Website resmi countdown untuk XXVI INCOSAI 2028 yang akan diselenggarakan di Bali Nusa Dua Convention Center (BNDCC), Indonesia.

## Menjalankan Project Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Cara Mengganti Background

1. **Taruh file gambar baru** di `public/assets/backgrounds/`
   - Format yang didukung: JPG, WebP, PNG
   - Ukuran rekomendasi: minimal 1920x1080 piksel
   - Ukuran file idealnya di bawah 500KB untuk performa optimal

2. **Edit file** `src/config/background.config.ts`
   - Tambahkan atau ubah entri array `backgroundImages`
   - Format:
     ```typescript
     {
       id: 'bg-1',           // ID unik (ganti jika menambah gambar baru)
       src: '/assets/backgrounds/bg-baru.jpg',  // Path gambar
       alt: 'Deskripsi gambar', // Alt text untuk accessibility
       priority: true        // Set true untuk gambar utama (tampil pertama)
     }
     ```

## Cara Mengganti Logo

1. **Taruh file logo** di `public/assets/logos/`
   - Format yang didukung: PNG dengan background transparan (disarankan)

2. **Edit file** `src/config/logos.config.ts`
   - Sesuaikan field `src`, `alt`, `width`, `height` untuk masing-masing logo
   - Untuk menambah logo baru, tambahkan objek baru ke array `logos`

## Cara Mengganti Tanggal Event, Judul, dan Deskripsi

1. **Edit file** `src/config/site.config.ts`
   - `eventDate`: Gunakan format ISO 8601, contoh: `"2028-10-01T09:00:00+08:00"` (WITA)
   - `eventName`: Nama event utama
   - `eventTagline`: Tagline singkat event
   - `eventLocation`: Lokasi event
   - `seo.title`, `seo.description`, `seo.keywords`: Untuk SEO
   - `seo.ogImage`: Path ke gambar Open Graph (1200x630px direkomendasikan)
   - `seo.canonicalUrl`: URL website utama

## Cara Mengganti Menu Navigasi

1. **Edit file** `src/config/nav.config.ts`
   - Format:
     ```typescript
     {
       id: 'about',        // ID unik
       label: 'About',     // Teks yang ditampilkan
       href: '#about'      // Link anchor (gunakan # untuk internal)
     }
     ```

## Struktur Folder

```
incosai-countdown/
├── src/
│   ├── app/               # Halaman Next.js App Router
│   ├── components/
│   │   ├── atoms/         # Komponen dasar (Logo, Heading, Button, dll)
│   │   ├── molecules/     # Komponen gabungan (LogoGroup, CountdownUnit, dll)
│   │   ├── organisms/     # Komponen kompleks (Navbar, HeroSection, Footer)
│   │   └── templates/     # Template halaman (HomeTemplate)
│   ├── config/            # Konfigurasi website (site, background, logos, nav)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions (fonts, dll)
│   ├── styles/            # Animasi dan styling
│   └── types/             # TypeScript type definitions
└── public/
    └── assets/
        ├── backgrounds/   # Gambar background hero
        ├── logos/         # Logo institusi
        └── favicon/       # Favicon website
```

## Build untuk Production

```bash
npm run build
npm run start
```

## Deployment

1. Push kode ke GitHub
2. Connect repository di [Vercel Dashboard](https://vercel.com)
3. Vercel akan otomatis build dan deploy

---

> **Catatan**: Semua konten dapat diubah melalui file di folder `src/config/` tanpa mengubah kode komponen.