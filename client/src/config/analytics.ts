// Google Analytics Configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track user interactions
export const trackUserInteraction = {
  // Password generation
  passwordGenerated: (length: number, includeSymbols: boolean, includeNumbers: boolean) => {
    trackEvent('password_generated', 'password_tools', 'generator', length);
    trackEvent('password_settings', 'password_tools', `symbols_${includeSymbols}_numbers_${includeNumbers}`);
  },

  // Password strength check
  passwordChecked: (strength: string, length: number) => {
    trackEvent('password_checked', 'password_tools', strength, length);
  },

  // Navigation
  navigation: (page: string, source: string) => {
    trackEvent('navigation', 'user_behavior', `${source}_to_${page}`);
  },

  // Button clicks
  buttonClick: (buttonName: string, page: string) => {
    trackEvent('button_click', 'user_behavior', `${buttonName}_on_${page}`);
  },

  // External link clicks
  externalLinkClick: (linkName: string, destination: string) => {
    trackEvent('external_link_click', 'user_behavior', `${linkName}_to_${destination}`);
  },

  // Form interactions
  formInteraction: (formName: string, action: string) => {
    trackEvent('form_interaction', 'user_behavior', `${formName}_${action}`);
  },

  // Theme toggle
  themeToggle: (theme: string) => {
    trackEvent('theme_toggle', 'user_preferences', theme);
  },

  // Copy to clipboard
  copyToClipboard: (content: string, page: string) => {
    trackEvent('copy_clipboard', 'user_behavior', `${content}_on_${page}`);
  },

  // Scroll depth
  scrollDepth: (depth: number, page: string) => {
    trackEvent('scroll_depth', 'user_behavior', `${depth}%_on_${page}`);
  },

  // Time on page
  timeOnPage: (timeInSeconds: number, page: string) => {
    trackEvent('time_on_page', 'user_behavior', `${timeInSeconds}s_on_${page}`);
  },

  // Error tracking
  error: (errorType: string, errorMessage: string, page: string) => {
    trackEvent('error', 'system', `${errorType}_on_${page}`, 1);
  },

  // Feature usage
  featureUsage: (feature: string, action: string) => {
    trackEvent('feature_usage', 'user_behavior', `${feature}_${action}`);
  }
};

// Track user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      custom_map: properties
    });
  }
};

// Track user engagement
export const trackEngagement = {
  // Session start
  sessionStart: () => {
    trackEvent('session_start', 'engagement', 'new_session');
  },

  // Session end
  sessionEnd: (duration: number) => {
    trackEvent('session_end', 'engagement', `${duration}s_session`);
  },

  // Page engagement
  pageEngagement: (page: string, engagementScore: number) => {
    trackEvent('page_engagement', 'engagement', page, engagementScore);
  }
};

// Enhanced ecommerce tracking (if needed)
export const trackEcommerce = {
  // Purchase
  purchase: (transactionId: string, value: number, currency: string = 'USD') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency
      });
    }
  },

  // Add to cart
  addToCart: (itemId: string, value: number) => {
    trackEvent('add_to_cart', 'ecommerce', itemId, value);
  }
};

// Performance tracking
export const trackPerformance = {
  // Page load time
  pageLoadTime: (loadTime: number, page: string) => {
    trackEvent('page_load_time', 'performance', page, loadTime);
  },

  // Resource load time
  resourceLoadTime: (resource: string, loadTime: number) => {
    trackEvent('resource_load_time', 'performance', resource, loadTime);
  }
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
