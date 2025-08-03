// AdSense Configuration
// Replace these values with your actual AdSense details

export const ADSENSE_CONFIG = {
  // Your AdSense publisher ID (starts with ca-pub-)
  CLIENT_ID: "ca-pub-6898243926782618", // Example: "ca-pub-1234567890123456"
  
  // Ad unit slots for different ad placements
  // You'll get these from your AdSense dashboard when creating ad units
  AD_SLOTS: {
    TOP_BANNER: "TOP_BANNER",       // Example: "1234567890"
    SIDEBAR_1: "SIDEBAR_1",         // Example: "2345678901" 
    SIDEBAR_2: "SIDEBAR_2",         // Example: "3456789012"
    IN_CONTENT: "IN_CONTENT",       // Example: "4567890123"
    MOBILE_STICKY: "MOBILE_STICKY", // Example: "5678901234"
  },
  
  // Set to true to show real ads, false to show placeholders
  ENABLED: true, // Change to true when you're ready to show real ads
};

// Helper function to check if ads should be displayed
export const shouldShowAds = () => {
  return true;
};