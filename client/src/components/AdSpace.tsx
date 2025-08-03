import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
  children?: ReactNode;
  size?: 'banner' | 'sidebar' | 'square' | 'mobile';
}

const adSizes = {
  banner: 'h-24 w-full',
  sidebar: 'h-96 w-full',
  square: 'h-64 w-full',
  mobile: 'h-16 w-full',
};

const adLabels = {
  banner: 'Banner Ad Space (728x90)',
  sidebar: 'Sidebar Ad Space (160x600)',
  square: 'Square Ad (300x250)',
  mobile: 'Mobile Banner Ad (320x50)',
};

export function AdSpace({ className, children, size = 'banner' }: AdSpaceProps) {
  return (
    <div className={cn(
      'ad-space flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm rounded-lg',
      adSizes[size],
      className
    )}>
      {children || (
        <div className="text-center">
          <i className="fas fa-ad text-2xl mb-2 block" />
          <div>{adLabels[size]}</div>
        </div>
      )}
    </div>
  );
}
