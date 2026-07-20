import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'font-body font-medium text-white hover:text-brand-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full',
        className
      )}
    >
      {label}
    </Link>
  );
}