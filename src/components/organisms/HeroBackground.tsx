// TODO: Mode 'slideshow' dapat ditambahkan di masa depan untuk rotasi background
// Saat ini hanya mendukung mode 'static' (ambil gambar priority pertama)
import Image from 'next/image';
import { backgroundImages } from '@/config/background.config';

export interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  // Ambil gambar dengan priority:true, fallback ke index 0
  const primaryImage =
    backgroundImages.find((img) => img.priority) ?? backgroundImages[0];

  if (!primaryImage) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ''}`}
      aria-hidden="true"
    >
      <Image
        src={primaryImage.src}
        alt={primaryImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}