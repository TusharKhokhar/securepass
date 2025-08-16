# Google Analytics Setup Guide

## Overview
This application includes comprehensive Google Analytics tracking to capture detailed user interactions and behavior patterns.

## Setup Instructions

### 1. Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Copy your Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables
Create a `.env` file in the `client` directory:

```env
# Google Analytics Configuration
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### 3. Features Tracked

#### Page Views
- Automatic page view tracking on route changes
- Page titles and URLs captured
- Navigation patterns tracked

#### User Interactions
- **Password Generation**: Length, character types, generation frequency
- **Password Strength Checks**: Strength levels, password lengths
- **Button Clicks**: All interactive elements tracked
- **Copy to Clipboard**: Password copying actions
- **Theme Toggle**: Dark/light mode preferences
- **External Links**: Outbound link clicks

#### Engagement Metrics
- **Scroll Depth**: 25%, 50%, 75%, 90% milestones
- **Time on Page**: Session duration tracking
- **Session Analytics**: Start/end times
- **Page Engagement**: User interaction scores

#### Performance Tracking
- **Page Load Times**: Performance monitoring
- **Resource Loading**: Asset load times
- **Error Tracking**: System errors and user errors

#### Custom Events
- **Feature Usage**: Tool utilization patterns
- **Form Interactions**: User input tracking
- **Navigation Patterns**: User journey analysis

### 4. Privacy Compliance
- IP anonymization enabled
- GDPR-compliant cookie settings
- User consent tracking available
- No personally identifiable information collected

### 5. Analytics Dashboard
Access your data in Google Analytics:
- **Realtime**: Live user activity
- **Reports**: Detailed analytics
- **Explorer**: Custom analysis
- **Engagement**: User behavior insights

### 6. Custom Dimensions (Optional)
You can add custom dimensions in Google Analytics for:
- User preferences
- Feature usage patterns
- Error tracking
- Performance metrics

### 7. Testing
1. Open browser developer tools
2. Check Network tab for GA requests
3. Verify events in Google Analytics Realtime
4. Test all tracking functions

### 8. Troubleshooting
- Ensure VITE_GA_TRACKING_ID is set correctly
- Check browser console for errors
- Verify ad blockers aren't blocking GA
- Test in incognito mode

## Data Collected
- Page views and navigation
- User interactions and clicks
- Password generation patterns
- Feature usage statistics
- Performance metrics
- Error occurrences
- User preferences (theme, etc.)

## Privacy Notice
This implementation respects user privacy by:
- Anonymizing IP addresses
- Not collecting personal data
- Using secure transmission
- Complying with GDPR requirements
