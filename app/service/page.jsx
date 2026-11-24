import Icon from '@/components/Icon';
import CollectionHero from '@/components/CollectionHero';
import Faq from '@/components/Faq';
import DeliveryOptions from '@/components/DeliveryOptions';
import { shop } from '@/lib/images';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Service and Repairs | Stone Mountain Bike Co.',
  description:
    'Tune-ups, flat fixes, brake bleeds and assembly for nearly any bike or e-bike in Atlanta. Walk-ins welcome, free estimates.',
};

// Service menu as published on the client's Service & Repairs page.
const SERVICES = [
  { icon: 'wrench', title: 'Tune-ups', items: ['Safety inspection', 'Basic tune: brakes, gears, tire pressure', 'Full tune: adds hydraulic brake bleed, cable and chain lube', 'Basic and full electric tunes'] },
  { icon: 'disc', title: 'Wheels and tires', items: ['Flat fixes on tubed tires', 'Minor wheel truing'] },
  { icon: 'bike', title: 'Assembly', items: ['Kids and single-speed bikes', 'Multi-speed bikes', 'E-bikes and e-trikes', 'Trikes'] },
  { icon: 'gear', title: 'Shifting and brakes', items: ['Derailleur adjustment and installs', 'Brake adjustment', 'Hydraulic brake bleeding'] },
  { icon: 'gauge', title: 'Custom repairs', items: ['Anything not on this list', 'Free inspection and estimate'] },
];

export default function ServicePage() {
  return (
    <>
      <CollectionHero
        title="Service and repairs"
        lede="Our Atlanta shop works on nearly every bike: mountain, road, hybrid and electric. Walk-ins are welcome for quick fixes, and every estimate is free."
        image={{
          src: shop('files/05.jpg', 1600),
          alt: 'Close-up of a rear disc brake caliper on a white frame',
          position: '50% 50%',
        }}
      >
        <div className="hero-actions">
          <a className="btn btn--dark" href={SITE.phoneHref}>
            <Icon name="phone" size={18} />
            Book: {SITE.phone}
          </a>
          <a className="btn btn--line" href={SITE.emailHref}>
            <Icon name="mail" size={18} />
            Email the shop
          </a>
        </div>
      </CollectionHero>

      <section className="section section--tight" aria-labelledby="menu-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="menu-title">
              What we fix
            </h2>
            <p className="lede">Prices depend on the bike and don’t include parts or tax. Call for a quote.</p>
          </div>
          <ul className="service-grid">
            {SERVICES.map((s) => (
              <li key={s.title} className="service-card">
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="service-card service-card--note">
              <h3>Good to know</h3>
              <ul>
                <li>Bigger repairs average 10 to 15 business days.</li>
                <li>Storage is $5 a day for repairs left a month past the due date.</li>
                <li>Bikes left over 90 days may be donated.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--flush-top" id="financing" aria-labelledby="financing-title">
        <div className="container duo">
          <article className="info-card info-card--plain">
            <div className="info-card__body">
              <h2 className="info-card__title" id="financing-title">
                Pay over time
              </h2>
              <p>
                <b>Affirm.</b> Pick Affirm at checkout to split your bike into payments.
              </p>
              <p>
                <b>PayPal Credit.</b> No payments and no interest if paid in full within 6 months, on
                purchases of $99 or more.
              </p>
              <p className="muted">
                For rates and terms, call {SITE.phone}. Orders paid with Affirm have to ship and can’t be
                picked up.
              </p>
            </div>
          </article>
          <article className="info-card info-card--plain" id="warranty">
            <div className="info-card__body">
              <h2 className="info-card__title">1-year warranty</h2>
              <p>
                Covers defects in materials and workmanship for one year from the original purchase date.
                We repair or replace the part, at our option.
              </p>
              <p className="muted">
                Not covered: normal wear, battery depletion, throttles, kickstands and lights, accidents,
                modifications and cosmetic damage. To file a claim, email {SITE.email} with your receipt,
                serial number and photos.
              </p>
            </div>
          </article>
        </div>
      </section>

      <DeliveryOptions id="shipping" />

      <Faq id="returns" keys={['returns', 'accessoryReturns', 'service']} title="Returns and repairs" />
    </>
  );
}
