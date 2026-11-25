export const SITE = {
  name: 'Stone Mountain Bike Co.',
  legalName: 'Stone Mountain Bike Company',
  phone: '866-303-2453',
  phoneHref: 'tel:+18663032453',
  email: 'info@stonemountainbikecompany.com',
  emailHref: 'mailto:info@stonemountainbikecompany.com',
  storeUrl: 'https://stonemountainbikecompany.com',
  instagram: 'https://www.instagram.com/stonemtnbikes',
  facebook: 'https://www.facebook.com/stonemtnbikes',
};

export const SALE = {
  // Sunday, Nov 29, 2026, 9:00 PM Central (CST, UTC-6)
  endsAt: '2026-11-29T21:00:00-06:00',
  endsLabel: 'Sunday, Nov 29 at 9 PM CT',
  endsShort: 'Sunday 9 PM CT',
};

// Sammy's SEO order of record: seasonal keyword, then category, then page term.
export const titleFor = (term) => `Black Friday 2026 | e-Bike | ${term}`;

export const NAV = [
  { href: '/e-bikes', label: 'e-Bikes' },
  { href: '/bikes', label: 'Bikes' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/service', label: 'Service' },
];

/*
  SHIPPING AND PICKUP, matched to the live store's Shipping & Returns page
  (checked Nov 24, 2026):
  - E-bikes ship free within the contiguous U.S.
  - Everything else ships at the rate the store's checkout calculates.
    The store doesn't publish that rate, so set `otherRate` (a number, e.g.
    79) once the client confirms it. While it's null, the site says
    "calculated at checkout".
  - U.S. only, by FedEx or UPS, no PO boxes or APO addresses. In-stock
    orders usually ship the next business day.
  - Pickup in Atlanta is free, by appointment. Orders paid with Affirm have
    to ship. Put the client's address in `pickup.address` when it arrives.
*/
export const SHIPPING = {
  freeCategories: ['e-bikes'],
  otherRate: null,
  carriers: 'FedEx or UPS',
};

export const PICKUP = {
  city: 'Atlanta, Georgia',
  address: null, // e.g. '123 Example St, Atlanta, GA 30301'
  hours: null, // e.g. 'Tue to Sat, 10 AM to 6 PM'
};

export const shipsFree = (model) => SHIPPING.freeCategories.includes(model.category);

export const shippingLabel = (model) =>
  shipsFree(model)
    ? 'Free shipping to the contiguous U.S.'
    : SHIPPING.otherRate != null
      ? `Ships for $${SHIPPING.otherRate} in the contiguous U.S.`
      : 'Shipping calculated at checkout';

export const pickupWhere = () => PICKUP.address || `${PICKUP.city}. We send the address when you book.`;

// Real store facts, from the client's Shipping & Returns, Financing,
// Warranty and Service pages (checked Nov 24, 2026).
export const FACTS = [
  { icon: 'truck', title: 'Free shipping on e-bikes', text: 'Anywhere in the contiguous U.S.' },
  { icon: 'store', title: 'Free pickup in Atlanta', text: 'Book a time after you order' },
  { icon: 'card', title: 'Pay over time', text: 'Affirm or PayPal Credit' },
  { icon: 'shield', title: '1-year warranty', text: 'Materials and workmanship' },
  { icon: 'wrench', title: 'Service shop', text: 'Walk-ins welcome' },
];
