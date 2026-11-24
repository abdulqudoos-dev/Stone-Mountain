# Stone Mountain Bike Co. — Black Friday 2026 redesign (mockup)

Next.js (App Router, JavaScript) rebuild of stonemountainbikecompany.com in the look and feel of maticrobots.com, using the client's real catalog. Built by Thanos Labs, Nov 24, 2026.

## Run it

Needs Node 18.18 or newer (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

**Quick look without installing:** open `_preview/index.html` in Chrome. It's a static render of every page, with working links between them. The countdown, menus, carousel arrows and color swatches only work in `npm run dev`.

**Tip:** this folder is inside OneDrive. If installs are slow, pause OneDrive sync for this folder, or copy the project to `C:\dev\stone-mountain` before running `npm install`.

## Build and deploy

```bash
npm run build      # static site in /out
npm run preview    # serve /out locally
```

**Vercel:** import the GitHub repo in Vercel and keep the defaults (framework Next.js, build `next build`). `output: 'export'` in `next.config.mjs` makes it a static site, so there are no server functions to configure.

**Cloudflare:** `/out` is plain HTML, CSS and JS. Deploy it to Cloudflare as a new Worker with static assets (`npx wrangler deploy` with `assets.directory = "./out"`). Then Thanos moves the stonemountain.thanoslab.com route to it, keeping Worker `stone-mountain` as the rollback.

## Pages

| Page | URL | Title |
| --- | --- | --- |
| Home | / | Black Friday 2026 \| e-Bike \| Stone Mountain Bike Company |
| Black Friday deals | /black-friday | Black Friday 2026 \| e-Bike \| All Deals |
| e-Bikes | /e-bikes | Black Friday 2026 \| e-Bike \| Yonah 600 and Bryce 800 |
| Hybrid and mountain bikes | /bikes | Black Friday 2026 \| e-Bike \| Hybrid and Mountain Bikes |
| Accessories | /accessories | Black Friday 2026 \| e-Bike \| Accessories |
| Product pages | /products/[slug] | Black Friday 2026 \| e-Bike \| model name |
| Service, financing, warranty | /service | Service and Repairs \| Stone Mountain Bike Co. |
| About and contact | /about | About Us \| Stone Mountain Bike Co. |

All pages are `noindex` until the site moves to the client domain.

## Where things live

- `lib/products.js`: the catalog (4 bikes in 8 colors, plus the Air Master 150 pump), specs, photos and prices.
- `lib/site.js`: phone, email, sale end time, page-title pattern, store facts.
- `lib/images.js`: Shopify and Unsplash image URLs.
- `app/globals.css`: the whole design system (tokens at the top).
- `components/`: header, promo bar, countdown, deal board, product card, carousel, purchase panel, FAQ and the rest.

## Black Friday prices (placeholders in this mockup)

The live store shows no discounts ("Sale: call store for details"). So the design can show a real sale, `bfPrice` in `lib/products.js` holds placeholder prices of 25 to 30% off. The struck-through price is the store's real current price, so no "was" price is made up. The footer says the sale prices are placeholders.

| Bike | Store price | Placeholder sale | Off |
| --- | --- | --- | --- |
| Yonah 600 | $1,165 | $849 | 27% |
| Bryce 800 | $1,399 | $979 | 30% |
| Foraker 300 | $625 | $469 | 25% |
| Paramount 100 | $599 | $449 | 25% |
| Air Master 150 | $49 | $35 | 29% |

**Before any real traffic (including Google Ads), replace every `bfPrice` with the client's confirmed price**, and take the placeholder line out of the footer. The headline ("Up to 30% off"), tabs, savings and comparison table all update from these numbers. Set one to `null` and that product goes back to "call for your price".

## Getting a price without calling

The live store's only way to get a sale price is a phone call. The mockup adds a second path: a **Text me my price** form (first name, mobile number, bike) on the Black Friday page and behind "get your price by text" on every product page. It also adds a tap-to-call bar that slides up on phones once the hero is scrolled past.

The form is a mockup. It confirms on screen and sends a `generate_lead` event, but nothing reaches the store yet. Before launch, connect it in `components/PriceRequest.jsx` to whatever the client answers texts with (a HubSpot form, Shopify Inbox, Podium or similar), and make sure someone replies during store hours.

## Shipping and pickup

Matched to the live store's Shipping & Returns page (checked Nov 24, 2026):

- E-bikes (Yonah 600, Bryce 800) ship free within the contiguous U.S.
- Hybrid bikes (Foraker 300, Paramount 100) and the Air Master 150 ship at the rate the store's checkout calculates. The store doesn't publish that rate. When the client confirms it, set `SHIPPING.otherRate` in `lib/site.js` (for example `79`) and every page shows it.
- Pickup in Atlanta is free for every bike and accessory, booked by phone. Put the address and hours in `PICKUP` in `lib/site.js`. Until then the site says the address is sent when you book.
- Orders paid with Affirm have to ship (store policy).

Where it shows: a Ship / Pick up choice on every product page, a "Shipping and pickup" section on the Black Friday and Service pages, the hero facts strip, and the FAQ.

**To make pickup real at checkout:** in Shopify admin, go to Settings, then Shipping and delivery, then Local pickup, and turn it on for the Atlanta location. Shoppers then see "Pick up" next to shipping at checkout.

## Reviews (samples for now)

The live store has no reviews, so `lib/reviews.js` holds sample reviews written to show the layout. Every one is labeled "Sample review" on the page, and the star averages are worked out from those samples only. Before launch, install a reviews app on the Shopify store (Judge.me or Shopify Product Reviews) or pull Google Business Profile reviews, put the real ones in `lib/reviews.js`, and remove the sample labels in `components/Reviews.jsx` and `components/ProductPurchase.jsx`.

## Header and logo

- Logo: the client's mark from stonemountainbikecompany.com, redrawn as a vector in `components/Wordmark.jsx` (red rider and bolt, "STONE MOUNTAIN" in Rokkitt, "Bike" in Kaushan Script). Swap in their master file if they send one.
- Like maticrobots.com: plain text links that turn bold on hover, and every item opens a panel on hover (products with sale prices, or help links for Service). Labels stay real links. The bar slides away while you scroll down and comes back when you scroll up.
- The menu stays visible down to 960px wide; below that it moves into the menu button.
- Under the header sits a flat black sale bar (Sammy's brief): one line, one link, no motion.

## Analytics and call tracking

Off until IDs are set at build time (for example in `.env.local`, or in the Cloudflare build settings):

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # GA4 measurement ID
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX        # Google Ads tag, optional
NEXT_PUBLIC_GADS_CALL_LABEL=AbCdEf123   # Google Ads conversion label for phone clicks, optional
```

| Event | When |
| --- | --- |
| `click_to_call` | Any phone link is tapped: promo bar, header, product page, call bar, footer. Also fires the Google Ads call conversion when the label is set. |
| `begin_checkout` | "Buy on our store" on a product page (with model, color and price). |
| `generate_lead` | The "Text me my price" form is sent. |

The code is in `components/Analytics.jsx` and `lib/track.js`.

## Sammy's rules applied

- "Black Friday" nav element, and a black "Black Friday" pill tab top left of every product box.
- Titles follow Black Friday 2026 | e-Bike | page term.
- Black promo bar under the header (red, matching the client brand), with a live countdown to Sun Nov 29, 9 PM CT.
- Every nav item shares the same solid background: the white header bar. No per-item pills and nothing see-through.
- No fake star ratings, reviews or awards. The reviews on the home page and product pages are clearly labeled samples (see below).

## Images

- Product, detail and lifestyle photos: the client's own Shopify store (cdn.shopify.com).
- Home hero and the four "Shop by how you ride" cards: generated for this mockup with noydflow (Midjourney v8), saved in `public/home/` as JPGs (hero 1456 px wide, cards 840 px). They're mood images, not the client's bikes, so no caption names a model.
- The Atlanta pickup band uses a free Unsplash photo (Unsplash License): summit `photo-1722371183804-80f62e270406`. Other Unsplash IDs kept in `lib/images.js` as spares.
- Fonts: Instrument Sans for everything, plus Rokkitt and Kaushan Script for the logo only (Google Fonts).
- The logo is a type-set lockup with a Stone Mountain dome mark. Swap in the client's vector logo when it arrives.

## Still needed from the client

- Confirmed Black Friday prices.
- Bryce 800 motor, battery and range specs.
- A vector logo.
- Store address and pickup hours (for `PICKUP` in `lib/site.js`).
- The shipping rate for hybrid bikes and accessories (for `SHIPPING.otherRate`), and local pickup turned on in Shopify checkout.
- Lifestyle photos for the Yonah 600, and more riding photos in general. The store's other banner images have sale text baked in, so the mockup has no "riders on Instagram" section yet.
- Real customer reviews to replace the labeled samples (or a decision on which reviews app to install).
- Who answers "Text me my price" requests, and with which tool.
- GA4 and Google Ads IDs, plus a call conversion label.
- Whether checkout stays on the current Shopify store. For now "Buy on our store" opens the live product page in a new tab.
