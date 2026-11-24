/*
  SAMPLE REVIEWS, FOR LAYOUT ONLY.

  The live store has no reviews (no Judge.me, Yotpo or Shopify reviews app,
  checked Nov 24, 2026), and Sammy's rule is no fake ratings or reviews. So
  every review here is marked as a sample on the page, and the averages are
  worked out from these samples only.

  Before launch, replace this file with real reviews: install a reviews app
  on the Shopify store (Judge.me or Shopify Product Reviews) or pull Google
  Business Profile reviews, then map each one to { rating, title, body,
  product }. Then remove the sample labels in components/Reviews.jsx.
*/

export const SAMPLE_REVIEWS = {
  'yonah-600': [
    {
      rating: 5,
      title: 'The hills on my commute are gone',
      body: 'Two long climbs on the way to work used to wipe me out. With the assist on, I get there without sweating through my shirt.',
    },
    {
      rating: 5,
      title: 'Nothing to fiddle with',
      body: 'It’s single speed, so there’s nothing to adjust. I charge it, ride it, and the display shows battery and speed at a glance.',
    },
    {
      rating: 4,
      title: 'Great ride, heavy on the stairs',
      body: 'Rides great around town. It’s an e-bike, so carrying it up to a second-floor apartment takes some effort.',
    },
  ],
  'bryce-800': [
    {
      rating: 5,
      title: 'Came with everything I needed',
      body: 'The rack, fenders and lights were already on it, so I didn’t have to buy anything extra for errands.',
    },
    {
      rating: 5,
      title: 'Gets comments every time',
      body: 'The polished frame looks sharp locked up outside a coffee shop, and the backlit display is easy to read after dark.',
    },
    {
      rating: 4,
      title: 'Good commuter',
      body: 'I use it for work and the grocery run. I called the shop with a setup question and got a straight answer.',
    },
  ],
  'foraker-300': [
    {
      rating: 5,
      title: 'Happy on gravel',
      body: 'The Suntour fork and the wide Kenda tires take the edge off the gravel paths near me.',
    },
    {
      rating: 4,
      title: 'Solid first trail bike',
      body: 'Good value for dirt roads and easy trails. I had the shop adjust the brakes after the first few weeks.',
    },
  ],
  'paramount-100': [
    {
      rating: 5,
      title: 'My new commuter',
      body: 'Light enough to carry up the stairs, and 21 speeds covers every hill on my route.',
    },
    {
      rating: 5,
      title: 'Easy to get the fit right',
      body: 'The adjustable seat and handlebar made it easy to set up for longer weekend rides.',
    },
  ],
  'air-master-150': [
    {
      rating: 5,
      title: 'Lives in my bag now',
      body: 'Topped up both tires before a ride in a couple of minutes. The light comes in handy too.',
    },
    {
      rating: 4,
      title: 'Loud, but quick',
      body: 'It’s noisy, like any compressor, but it’s fast. The USB port has charged my phone on long rides.',
    },
  ],
};

const NAMES = {
  'yonah-600': 'Yonah 600',
  'bryce-800': 'Bryce 800',
  'foraker-300': 'Foraker 300',
  'paramount-100': 'Paramount 100',
  'air-master-150': 'Air Master 150',
};

const withProduct = (slug) => (SAMPLE_REVIEWS[slug] || []).map((r) => ({ ...r, product: NAMES[slug], slug }));

// Product page: that product's reviews. Home page: one from each bike.
export function getReviews(slug) {
  if (slug) return withProduct(slug);
  return ['yonah-600', 'bryce-800', 'paramount-100'].map((s) => withProduct(s)[0]);
}

export function summary(reviews) {
  const count = reviews.length;
  const average = count ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;
  return { count, average: Math.round(average * 10) / 10 };
}

export const ALL_SAMPLE_REVIEWS = Object.keys(SAMPLE_REVIEWS).flatMap(withProduct);
