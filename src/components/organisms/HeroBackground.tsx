// Single background: Full screen SVG background
import Image from 'next/image';
import { backgroundImages } from '@/config/background.config';

export interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  const primaryImage = backgroundImages.find((img) => img.priority) ?? backgroundImages[0];

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
      {/* White overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/30" />
    </div>
  );
}