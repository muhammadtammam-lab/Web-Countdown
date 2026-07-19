import Image from 'next/image';
import { clsx } from 'clsx';

export interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function Logo({ src, alt, width, height, priority, className }: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={clsx('object-contain', className)}
    />
  );
}