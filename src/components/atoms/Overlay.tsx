import { clsx } from 'clsx';

export interface OverlayProps {
  variant?: 'gradient' | 'solid';
  className?: string;
}

const variantClasses: Record<string, string> = {
  gradient:
    'absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none',
  solid: 'absolute inset-0 bg-white/60 pointer-events-none',
};

export function Overlay({ variant = 'gradient', className }: OverlayProps) {
  return (
    <div
      className={clsx(variantClasses[variant], className)}
      aria-hidden="true"
    />
  );
}