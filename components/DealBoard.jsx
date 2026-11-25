import Link from 'next/link';
import ProductCard from './ProductCard';
import { BIKES, MODELS, formatPrice, maxPercentOff } from '@/lib/products';
import { SITE, SALE } from '@/lib/site';

// Every bike at its sale price, straight under the hero. The hero is the
// page's one loud moment (and holds the sale clock), so this stays calm.
export default function DealBoard({ headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;
  const pump = MODELS.find((m) => m.category === 'accessories');
  return (
    <section className="section deals" aria-labelledby="deals-title">
      <div className="container">
        <div className="deals__head">
          <div>
            <p className="deals__kicker">Featured bikes</p>
            <Heading className="section-title" id="deals-title">
              Ride the future.
            </Heading>
          </div>
          <p className="deals__lede">
            Up to {maxPercentOff}% off through {SALE.endsLabel}. Questions? Call{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>.
          </p>
        </div>
        <div className="product-grid product-grid--bikes">
          {BIKES.map((m, i) => (
            <ProductCard key={m.slug} model={m} priority={i < 2} />
          ))}
        </div>
        <div className="deals__foot">
          <Link className="btn btn--red" href="/black-friday">
            Shop the sale
          </Link>
          {pump ? (
            <p className="deals__addon">
              Add the {pump.name} cordless pump for <b>{formatPrice(pump.bfPrice ?? pump.price)}</b>
              {pump.bfPrice != null ? <s>{formatPrice(pump.price)}</s> : null}.{' '}
              <Link href={`/products/${pump.slug}`}>See the pump</Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
