'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { CountdownDigit } from '@/components/atoms/CountdownDigit';
import { clsx } from 'clsx';

export interface CountdownUnitProps {
  targetDate: string;
  className?: string;
}

export function CountdownUnit({ targetDate, className }: CountdownUnitProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <p className="text-2xl font-heading text-white text-center">
        The event has begun!
      </p>
    );
  }

  return (
    <div
      className={clsx('flex gap-4 md:gap-8 justify-center items-center', className)}
      aria-label="Countdown timer"
    >
      <CountdownDigit value={days} label="Days" />
      <span className="text-3xl md:text-5xl font-heading font-bold text-brand-primary/70 drop-shadow-sm" aria-hidden="true">
        :
      </span>
      <CountdownDigit value={hours} label="Hours" />
      <span className="text-3xl md:text-5xl font-heading font-bold text-brand-primary/70 drop-shadow-sm" aria-hidden="true">
        :
      </span>
      <CountdownDigit value={minutes} label="Minutes" />
      <span className="text-3xl md:text-5xl font-heading font-bold text-brand-primary/70 drop-shadow-sm" aria-hidden="true">
        :
      </span>
      <CountdownDigit value={seconds} label="Seconds" />
    </div>
  );
}
