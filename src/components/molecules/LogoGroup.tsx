import { logos } from '@/config/logos.config';
import { Logo } from '@/components/atoms/Logo';
import { clsx } from 'clsx';

export interface LogoGroupProps {
  className?: string;
  logoSize?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<string, string> = {
  sm: 'w-14',
  md: 'w-20 md:w-28',
  lg: 'w-28 md:w-36',
};

export function LogoGroup({ className, logoSize = 'md' }: LogoGroupProps) {
  const incosaiLogo = logos.find((l) => l.id === 'incosai');
  const hut80Logo = logos.find((l) => l.id === 'hut-80-bpk');

  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-6 md:gap-10',
        className
      )}
    >
      {/* INCOSAI Full Logo - Center */}
      {incosaiLogo && (
        <div className="flex flex-col items-center gap-2">
          {incosaiLogo.href ? (
            <a
              href={incosaiLogo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi ${incosaiLogo.name}`}
            >
              <Logo
                src={incosaiLogo.src}
                alt={incosaiLogo.alt}
                width={incosaiLogo.width}
                height={incosaiLogo.height}
                className={sizeClasses[logoSize]}
              />
            </a>
          ) : (
            <Logo
              src={incosaiLogo.src}
              alt={incosaiLogo.alt}
              width={incosaiLogo.width}
              height={incosaiLogo.height}
              className={sizeClasses[logoSize]}
            />
          )}
          <div className="text-center">
            <p className="text-sm md:text-base font-bold text-brand-primary tracking-wide">
              INCOSAI
            </p>
            <p className="text-[10px] md:text-xs font-medium text-brand-primary/70 tracking-wider">
              XXVI &bull; Bali 2028
            </p>
          </div>
        </div>
      )}

      {/* HUT ke-80 BPK Logo - Right side */}
      {hut80Logo && (
        <div className="flex flex-col items-center gap-2">
          {hut80Logo.href ? (
            <a
              href={hut80Logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi ${hut80Logo.name}`}
            >
              <Logo
                src={hut80Logo.src}
                alt={hut80Logo.alt}
                width={hut80Logo.width}
                height={hut80Logo.height}
                className={sizeClasses[logoSize]}
              />
            </a>
          ) : (
            <Logo
              src={hut80Logo.src}
              alt={hut80Logo.alt}
              width={hut80Logo.width}
              height={hut80Logo.height}
              className={sizeClasses[logoSize]}
            />
          )}
          <div className="text-center">
            <p className="text-xs md:text-sm font-bold text-brand-primary tracking-wide">
              HUT ke-80
            </p>
            <p className="text-[10px] md:text-xs font-medium text-brand-primary/70">
              BPK RI
            </p>
          </div>
        </div>
      )}
    </div>
  );
}