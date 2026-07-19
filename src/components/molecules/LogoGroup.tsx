import { logos } from '@/config/logos.config';
import { Logo } from '@/components/atoms/Logo';
import { clsx } from 'clsx';

export interface LogoGroupProps {
  className?: string;
  logoSize?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<string, string> = {
  sm: 'w-12',
  md: 'w-16 md:w-20',
  lg: 'w-20 md:w-28',
};

export function LogoGroup({ className, logoSize = 'md' }: LogoGroupProps) {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center justify-center gap-6 md:gap-10',
        className
      )}
    >
      {logos.map((logo) => {
        const logoElement = (
          <Logo
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={sizeClasses[logoSize]}
          />
        );

        if (logo.href) {
          return (
            <a
              key={logo.id}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi ${logo.name}`}
            >
              {logoElement}
            </a>
          );
        }

        return logoElement;
      })}
    </div>
  );
}