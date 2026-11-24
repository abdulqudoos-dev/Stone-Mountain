// Sends an event to Google Analytics 4 and Google Ads once the tags are
// loaded (components/Analytics.jsx). Without IDs set, it does nothing.
export function track(event, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}
