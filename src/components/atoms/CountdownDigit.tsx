import { clsx } from 'clsx';

export interface CountdownDigitProps {
  value: number;
  label: string;
  className?: string;
}

export function CountdownDigit({ value, label, className }: CountdownDigitProps) {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div
      className={clsx('flex flex-col items-center', className)}
      aria-label={`${value} ${label} remaining`}
      role="timer"
    >
      <span className="text-4xl md:text-6xl font-heading font-bold text-brand-primary tabular-nums leading-none">
        {formattedValue}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-wide text-neutral-600 mt-1">
        {label}
      </span>
    </div>
  );
}