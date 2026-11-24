import { shop } from './images';

/*
  The real Stone Mountain Bike Co. catalog (products.json, Nov 24, 2026):
  4 bike models in 8 color listings, plus one accessory.

  BLACK FRIDAY PRICES (MOCKUP PLACEHOLDERS)
  The live store lists no discounts ("Sale: call store for details").
  For the mockup, `bfPrice` holds placeholder sale prices of 25 to 30% off.
  `price` is the store's real current price, and it's the one shown struck
  through, so no "was" price is made up. Replace every `bfPrice` with the
  client's confirmed prices before the site takes real traffic. Set one to
  null and that product goes back to "call for your price".

  `shot` is where the bike sits in its cover photo ([left, top, right,
  bottom] as fractions), measured from the files. ProductShot uses it to
  frame every bike at the same size.
*/

export const MODELS = [
  {
    slug: 'yonah-600',
    name: 'Yonah 600',
    type: 'E-bike',
    category: 'e-bikes',
    price: 1165,
    bfPrice: 849,
    shot: [0.052, 0.242, 0.953, 0.78],
    tagline: 'The everyday e-bike.',
    summary:
      'A 500W rear-hub e-bike with a 48V LG battery and disc brakes, for commutes, errands and hills.',
    cardSpec: '500W motor, 48V LG battery',
    highlights: [
      { value: '500W', label: 'Rear hub motor' },
      { value: '48V', label: '9.6Ah LG battery' },
      { value: '180 mm', label: 'Tektro disc rotors' },
    ],
    specs: [
      ['Motor', '500W rear hub'],
      ['Battery', '48V, 9.6Ah LG cells'],
      ['Frame', 'Aluminum'],
      ['Brakes', 'Mechanical disc, front and rear, 180 mm Tektro rotors'],
      ['Drivetrain', 'Single speed'],
      ['Display', 'LCD with speed, battery level, distance and assist level'],
    ],
    variants: [
      {
        name: 'Charcoal',
        swatch: '#55585d',
        handle: 'yonah-600-charcoal',
        inStock: true,
        images: [
          shop('products/Image1op2.jpg', 1600),
          shop('files/21.png', 1200),
          shop('files/22.png', 1200),
          shop('files/28.png', 1200),
          shop('products/Image5.jpg', 1200),
        ],
      },
      {
        name: 'Metallic Beige',
        swatch: '#d8cab0',
        handle: 'yonah-600-metallic-beige',
        inStock: true,
        images: [
          shop('products/yonah600.jpg', 1600),
          shop('products/Image6_a5de43c3-1ce0-4a45-bba5-740c8eb0b024.jpg', 1200),
          shop('products/Image5_e274eaf0-23c9-4b14-9a80-7b4f6bec662a.jpg', 1200),
        ],
      },
    ],
    lifestyle: [],
  },
  {
    slug: 'bryce-800',
    name: 'Bryce 800',
    type: 'E-bike',
    category: 'e-bikes',
    price: 1399,
    bfPrice: 979,
    shot: [0.045, 0.215, 0.955, 0.813],
    tagline: 'Our best‑equipped e-bike.',
    summary:
      'A polished frame with invisible welds, a backlit display, a rear rack and full fenders.',
    cardSpec: 'Rack, fenders and lights',
    highlights: [
      { value: 'LCD', label: 'Backlit display' },
      { value: 'Rack', label: 'And full fenders' },
      { value: 'Lights', label: 'Front and rear' },
    ],
    specs: [
      ['Frame', 'Polished finish with invisible welds'],
      ['Display', 'Backlit LCD'],
      ['Brakes', 'Disc, front and rear'],
      ['Extras', 'Rear rack, full fenders, front and rear lights'],
      ['Motor and battery', 'Call 866-303-2453 for full specs'],
    ],
    variants: [
      {
        name: 'Metallic Beige',
        swatch: '#d8cab0',
        handle: 'bryce-800-beige',
        inStock: true,
        images: [
          shop('products/Bryce-800-beige.jpg', 1600),
          shop('products/Untitled-6_1024x1024_2x_8525dc9f-9779-4492-a290-c42d27ce5c4a.jpg', 1200),
          shop('products/Untitled-3_1024x1024_2x_5d53fc3b-2398-46f8-989b-43bb817f0e3d.jpg', 1200),
          shop('products/Untitled-2_1024x1024_2x_fb63df4d-f414-4f70-b488-bd85d0648777.jpg', 1200),
          shop('products/Untitled-7_1024x1024_2x_2870cb18-1342-4a16-9cc0-61011a0210e8.jpg', 1200),
        ],
      },
    ],
    lifestyleTitle: 'Comes ready to commute',
    lifestyleText:
      'The Bryce 800 ships with a rear rack, full fenders, and front and rear lights, so there’s nothing extra to buy for errands and the ride to work.',
    lifestyle: [
      {
        src: shop('files/2a.jpg', 1800),
        alt: 'A rider on a Stone Mountain e-bike climbing a hillside trail at dusk',
        position: '96% 50%',
      },
    ],
  },
  {
    slug: 'foraker-300',
    name: 'Foraker 300',
    type: 'Hybrid mountain bike',
    category: 'bikes',
    price: 625,
    bfPrice: 469,
    shot: [0.018, 0.137, 0.977, 0.873],
    tagline: 'A hardtail for dirt and pavement.',
    summary:
      'A 21-speed aluminum hardtail with an SR Suntour fork and 27.5-inch Kenda tires, for trails, gravel and city streets.',
    cardSpec: '27.5 in wheels, Suntour fork',
    highlights: [
      { value: '27.5"', label: 'Kenda 2.1 in tires' },
      { value: '21', label: 'Speeds' },
      { value: 'XCT', label: 'SR Suntour fork' },
    ],
    specs: [
      ['Frame', '6061 aluminum alloy, sizes SM/MD and MD/LG'],
      ['Fork', 'SR Suntour XCT 27.5'],
      ['Drivetrain', '21 speeds'],
      ['Brakes', 'Tektro M280 mechanical disc, 180 mm rotors'],
      ['Wheels', '27.5 in, Kenda 27.5 x 2.1 tires'],
    ],
    variants: [
      {
        name: 'Black',
        swatch: '#1f2023',
        handle: 'foraker-300-black',
        inStock: true,
        images: [
          shop('files/17.jpg', 1600),
          shop('files/45.png', 1200),
          shop('files/46.png', 1200),
        ],
      },
      {
        name: 'Charcoal',
        swatch: '#7a7e84',
        handle: 'foraker-300-charcoal',
        inStock: true,
        images: [
          shop('files/23.jpg', 1600),
          shop('files/19.png', 1200),
          shop('files/17.png', 1200),
        ],
      },
    ],
    lifestyleTitle: 'Off the pavement',
    lifestyleText:
      '27.5-inch Kenda tires and an SR Suntour fork take the Foraker 300 from city streets onto gravel and dirt.',
    lifestyle: [
      {
        src: shop('files/3a.jpg', 1800),
        alt: 'A Foraker 300 standing on a red desert trail',
        position: '96% 50%',
      },
    ],
  },
  {
    slug: 'paramount-100',
    name: 'Paramount 100',
    type: 'Hybrid bike',
    category: 'bikes',
    price: 599,
    bfPrice: 449,
    shot: [0.028, 0.142, 0.977, 0.872],
    tagline: 'Fitness rides and the daily commute.',
    summary:
      'A light aluminum hybrid with 21 speeds, disc brakes and 700C wheels, for paths, fitness rides and the commute.',
    cardSpec: '21 speeds, disc brakes',
    highlights: [
      { value: '700C', label: 'Wheels, 38c tires' },
      { value: '21', label: 'Speeds, 3 x 7' },
      { value: 'Disc', label: 'Brakes, front and rear' },
    ],
    specs: [
      ['Frame', 'Lightweight aluminum alloy'],
      ['Fork', 'Rigid'],
      ['Drivetrain', '21 speeds (3 front, 7 rear)'],
      ['Brakes', 'Mechanical disc, front and rear'],
      ['Wheels', '700C double-wall alloy rims, 700 x 38c tires'],
      ['Fit', 'Adjustable seat and handlebar'],
    ],
    variants: [
      {
        name: 'Black',
        swatch: '#1f2023',
        handle: 'paramount-100-black',
        inStock: true,
        images: [
          shop('files/1_b82557ef-d231-4f9e-b9a0-659d6f1fd678.jpg', 1600),
          shop('files/04.jpg', 1200),
          shop('files/01.jpg', 1200),
          shop('files/05.jpg', 1200),
        ],
      },
      {
        name: 'Beige',
        swatch: '#dcc4b2',
        handle: 'paramount-100-metallic-beige',
        inStock: true,
        images: [
          shop('files/11.jpg', 1600),
          shop('files/04.jpg', 1200),
          shop('files/01.jpg', 1200),
        ],
      },
      {
        name: 'White',
        swatch: '#f6f6f4',
        handle: 'paramount-100-white',
        inStock: false,
        images: [
          shop('products/01op2.jpg', 1600),
          shop('files/02.jpg', 1200),
          shop('files/06.jpg', 1200),
          shop('files/05.jpg', 1200),
        ],
      },
    ],
    lifestyle: [
      {
        src: shop('products/04_9de4db58-1927-4285-a19f-ee2513dfbf6e.jpg', 1400),
        alt: 'A rider walking a white Paramount 100 through a spring forest',
        position: '50% 50%',
      },
      {
        src: shop('products/05_aba64d1e-e5c8-4b1c-b4aa-04b29a604b84.jpg', 1400),
        alt: 'A commuter in a shirt and tie standing with a white Paramount 100',
        position: '50% 100%',
        cropTop: 0.15,
      },
    ],
  },
  {
    slug: 'air-master-150',
    name: 'Air Master 150',
    type: 'Accessory',
    category: 'accessories',
    price: 49,
    bfPrice: 35,
    shot: [0.372, 0.038, 0.575, 0.96],
    tagline: 'Cordless tire pump.',
    fit: 'contain',
    summary:
      'A cordless pump that fills most bike tires in about 2 minutes, with an LED light and a USB power bank.',
    cardSpec: '150 PSI cordless pump',
    highlights: [
      { value: '150', label: 'PSI maximum' },
      { value: '2 min', label: 'To fill most bike tires' },
      { value: '2,000', label: 'mAh battery' },
    ],
    specs: [
      ['Max pressure', '150 PSI'],
      ['Battery', '2,000 mAh lithium-ion'],
      ['Recharge', 'About 4 hours'],
      ['Standby', 'Up to 5 days'],
      ['Extras', 'LED flashlight, 5V USB power bank'],
    ],
    variants: [
      {
        name: 'Black',
        swatch: '#1f2023',
        handle: 'air-master-150-multipurpose-portable-air-compressor',
        inStock: true,
        images: [
          shop('products/1.png', 1200),
          shop('products/12.jpg', 1200),
          shop('products/13.jpg', 1200),
          shop('products/2.jpg', 1200),
          shop('products/10.jpg', 1200),
        ],
      },
    ],
    lifestyle: [],
  },
];

export const BIKES = MODELS.filter((m) => m.category !== 'accessories');

export const getModel = (slug) => MODELS.find((m) => m.slug === slug);

export const byCategory = (category) => MODELS.filter((m) => m.category === category);

export const formatPrice = (n) =>
  `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

export const storeLink = (handle) => `https://stonemountainbikecompany.com/products/${handle}`;

export const cover = (model) => model.variants[0].images[0];

export const lowestBikePrice = Math.min(...BIKES.map((m) => m.bfPrice ?? m.price));

export const salePrice = (m) => m.bfPrice ?? m.price;
export const savings = (m) => (m.bfPrice != null ? m.price - m.bfPrice : 0);
export const percentOff = (m) => (m.bfPrice != null ? Math.round((1 - m.bfPrice / m.price) * 100) : 0);
export const maxPercentOff = Math.max(...MODELS.map(percentOff));
