import type { POI } from '../types';

export const getAffiliateUrl = (poi: POI, lang: string): string | null => {
  if (!poi.url) return null;

  let finalUrl = poi.url;
  const bookingAffiliate = import.meta.env.VITE_BOOKING_AFFILIATE;
  const tripadvisorAffiliate = import.meta.env.VITE_TRIPADVISOR_AFFILIATE;

  // Handle Booking.com
  if (finalUrl.includes('booking.com')) {
    if (bookingAffiliate) {
      const separator = finalUrl.includes('?') ? '&' : '?';
      finalUrl = `${finalUrl}${separator}${bookingAffiliate}`;
    }
  }
  // Handle TripAdvisor
  else if (finalUrl.includes('tripadvisor.')) {
    const domainMap: Record<string, string> = { pt: 'tripadvisor.pt', es: 'tripadvisor.es', en: 'tripadvisor.com' };
    const newDomain = domainMap[lang] || 'tripadvisor.com';

    // Replace the existing tripadvisor domain (handle .pt, .com, .es etc)
    finalUrl = finalUrl.replace(/tripadvisor\.[a-z.]{2,6}/, newDomain);

    if (tripadvisorAffiliate) {
      const separator = finalUrl.includes('?') ? '&' : '?';
      finalUrl = `${finalUrl}${separator}${tripadvisorAffiliate}`;
    }
  }
  // For other URLs, they are used as-is (already the default behavior of not matching above)

  return finalUrl;
};
