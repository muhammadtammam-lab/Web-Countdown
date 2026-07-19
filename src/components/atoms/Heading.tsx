import { clsx } from 'clsx';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

export function Heading({ as: Tag = 'h2', children, className }: HeadingProps) {
  return (
    <Tag className={clsx('font-heading font-bold text-brand-primary', className)}>
      {children}
    </Tag>
  );
}