import { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
  children?: ReactNode;
  size?: 'banner' | 'sidebar' | 'square' | 'mobile';
  adClient?: string;
  adSlot?: string;
  showPlaceholder?: boolean;
}

const adSizes = {
  banner: 'h-24 w-full',
  sidebar: 'h-96 w-full',
  square: 'h-64 w-full',
  mobile: 'h-16 w-full',
};

const adDimensions = {
  banner: { width: 728, height: 90 },
  sidebar: { width: 160, height: 600 },
  square: { width: 300, height: 250 },
  mobile: { width: 320, height: 50 },
};

const adLabels = {
  banner: 'Banner Ad Space (728x90)',
  sidebar: 'Sidebar Ad Space (160x600)',
  square: 'Square Ad (300x250)',
  mobile: 'Mobile Banner Ad (320x50)',
};

export function AdSpace({ 
  className, 
  children, 
  size = 'banner', 
  adClient,
  adSlot,
  showPlaceholder = false 
}: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adClient && adSlot && !showPlaceholder) {
      // Load AdSense script if not already loaded
      if (!window.adsbygoogle) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }

      // Push ad after script loads
      const timer = setTimeout(() => {
        try {
          if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [adClient, adSlot, showPlaceholder]);

  // Show placeholder if no ad configuration or explicitly requested
  if (!adClient || !adSlot || showPlaceholder) {
    return (
      <div className={cn(
        'ad-space flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm rounded-lg',
        adSizes[size],
        className
      )}>
        {children || (
          <div className="text-center">
            <div className="text-2xl mb-2">📢</div>
            <div>{adLabels[size]}</div>
          </div>
        )}
      </div>
    );
  }

  // Render actual AdSense ad
  const dimensions = adDimensions[size];
  
  return (
    <div className={cn('ad-container', className)} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'inline-block',
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
