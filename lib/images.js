// Client photos live on the Stone Mountain Bike Co. Shopify CDN.
// `?width=` asks Shopify for a resized copy.
const SHOPIFY = 'https://cdn.shopify.com/s/files/1/0475/4305/8598/';

export const shop = (path, width = 1200) => `${SHOPIFY}${path}?width=${width}`;

// Free photos from Unsplash (Unsplash License). Credits are in README.md.
export const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;

export const PHOTOS = {
  hero: 'photo-1596039793618-eefbea88105a', // rider on a hilltop at sunset
  hills: 'photo-1635816048695-51dc43a7b24c', // e-bike rider on a dusty trail
  ridge: 'photo-1604748954134-457791b2ce9b', // e-MTB silhouette on a ridge
  valley: 'photo-1593266432354-97abdd4e4172', // sunset over a wooded valley
  summit: 'photo-1722371183804-80f62e270406', // granite summit at sunset
  granite: 'photo-1657140571936-368e26c4e408', // hikers on a granite dome
  beltline: 'photo-1561319844-03190cc57f1a', // rider on a red-clay trail
};

/*
  Home page media, generated with noydflow (Midjourney v8) for this mockup
  and saved in public/home/. They're mood images: none of them shows a
  Stone Mountain model, so no caption names one.
*/
export const HOME = {
  // Hero: the real Yonah 600 store photo composited onto a granite outcrop
  // above misty Georgia ridges (noydflow, Nano Banana Pro). The bike fills
  // the left half; the right half stays open for the red layer and text.
  scene: {
    src: '/home/hero-banner.jpg',
    alt: 'The Yonah 600 e-bike standing on a granite outcrop above misty, forested mountains',
    width: 2400,
    height: 1018,
    position: '0% 58%',
    // The same bike, cut out (from AQ's PNG outline, sharpened against the
    // full-size photo) and laid exactly over itself, so it can sit in front
    // of the red layer. Box in % of the photo.
    bike: {
      src: '/home/hero-bike.webp',
      left: 6.7083,
      top: 16.9941,
      width: 53.0417,
    },
    // Phones and tablets: the left 1600px of the banner, its sky faded to
    // flat #e4e9f0 at the top and more of the same rock added under it,
    // falling to #15120f. The bike spans x 166 to 1427, y 179 to 883; the
    // mobile hero CSS in globals.css is built on those numbers.
    mobile: {
      src: '/home/hero-mobile.webp',
      width: 1600,
      height: 1718,
    },
  },
  rides: [
    {
      title: 'Commutes',
      text: 'Pedal assist for the ride to work.',
      href: '/e-bikes',
      img: '/home/ride-commute.jpg',
      alt: 'A commuter in a wool coat riding an e-bike down a city street at golden hour',
      position: '50% 50%',
    },
    {
      title: 'Trails',
      text: 'Front suspension and 21 speeds.',
      href: '/bikes',
      img: '/home/ride-trails.jpg',
      alt: 'A mountain biker on a red clay trail through autumn pines',
      position: '50% 50%',
    },
    {
      title: 'Hills and errands',
      text: 'Help with the climbs and the heavy bags.',
      href: '/e-bikes',
      img: '/home/ride-hills.jpg',
      alt: 'A rider on an e-bike climbing a leafy street with groceries on the rear rack',
      position: '50% 50%',
    },
    {
      title: 'Weekend paths',
      text: 'Easy hybrids for parks and greenways.',
      href: '/bikes',
      img: '/home/ride-paths.jpg',
      alt: 'Two friends riding bikes side by side on a park path at sunset',
      position: '50% 50%',
    },
  ],
  band: {
    src: '/home/road.jpg',
    alt: 'A rider on a country road through misty autumn woods at dusk, with a lone mountain far ahead',
    position: '50% 55%',
  },
};
