import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'wouter';
import { 
  trackPageView, 
  trackUserInteraction, 
  trackEngagement, 
  trackPerformance,
  trackEvent 
} from '@/config/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const pageStartTime = useRef<number>(Date.now());
  const scrollDepth = useRef<number>(0);
  const maxScrollDepth = useRef<number>(0);

  // Track page views
  useEffect(() => {
    const pageTitle = document.title;
    trackPageView(location, pageTitle);
    trackUserInteraction.navigation(location, 'page_view');
    
    // Reset page metrics
    pageStartTime.current = Date.now();
    scrollDepth.current = 0;
    maxScrollDepth.current = 0;
  }, [location]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;
        
        // Track scroll milestones
        if (scrollPercent >= 25 && scrollDepth.current < 25) {
          trackUserInteraction.scrollDepth(25, location);
        } else if (scrollPercent >= 50 && scrollDepth.current < 50) {
          trackUserInteraction.scrollDepth(50, location);
        } else if (scrollPercent >= 75 && scrollDepth.current < 75) {
          trackUserInteraction.scrollDepth(75, location);
        } else if (scrollPercent >= 90 && scrollDepth.current < 90) {
          trackUserInteraction.scrollDepth(90, location);
        }
        
        scrollDepth.current = scrollPercent;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Track time on page when leaving
  useEffect(() => {
    return () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        trackUserInteraction.timeOnPage(timeOnPage, location);
      }
    };
  }, [location]);

  // Track page load performance
  useEffect(() => {
    const trackLoadTime = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = Math.round(navigation.loadEventEnd - navigation.loadEventStart);
          trackPerformance.pageLoadTime(loadTime, location);
        }
      }
    };

    if (document.readyState === 'complete') {
      trackLoadTime();
    } else {
      window.addEventListener('load', trackLoadTime);
      return () => window.removeEventListener('load', trackLoadTime);
    }
  }, [location]);

  // Track session start
  useEffect(() => {
    trackEngagement.sessionStart();
  }, []);

  // Track session end on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - pageStartTime.current) / 1000);
      trackEngagement.sessionEnd(sessionDuration);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Utility functions for tracking
  const trackButtonClick = useCallback((buttonName: string) => {
    trackUserInteraction.buttonClick(buttonName, location);
  }, [location]);

  const trackExternalLink = useCallback((linkName: string, destination: string) => {
    trackUserInteraction.externalLinkClick(linkName, destination);
  }, []);

  const trackCopyToClipboard = useCallback((content: string) => {
    trackUserInteraction.copyToClipboard(content, location);
  }, [location]);

  const trackThemeToggle = useCallback((theme: string) => {
    trackUserInteraction.themeToggle(theme);
  }, []);

  const trackPasswordGenerated = useCallback((length: number, includeSymbols: boolean, includeNumbers: boolean) => {
    trackUserInteraction.passwordGenerated(length, includeSymbols, includeNumbers);
  }, []);

  const trackPasswordChecked = useCallback((strength: string, length: number) => {
    trackUserInteraction.passwordChecked(strength, length);
  }, []);

  const trackError = useCallback((errorType: string, errorMessage: string) => {
    trackUserInteraction.error(errorType, errorMessage, location);
  }, [location]);

  const trackFeatureUsage = useCallback((feature: string, action: string) => {
    trackUserInteraction.featureUsage(feature, action);
  }, []);

  const trackCustomEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    trackEvent(action, category, label, value);
  }, []);

  return {
    trackButtonClick,
    trackExternalLink,
    trackCopyToClipboard,
    trackThemeToggle,
    trackPasswordGenerated,
    trackPasswordChecked,
    trackError,
    trackFeatureUsage,
    trackCustomEvent,
    currentPage: location
  };
};
