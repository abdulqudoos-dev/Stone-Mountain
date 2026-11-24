import Link from 'next/link';
import Countdown from './Countdown';
import ProductCard from './ProductCard';
import { BIKES, MODELS, formatPrice, maxPercentOff } from '@/lib/products';
import { SITE, SALE } from '@/lib/site';

// The page's one loud moment: black field, oversized type, the sale clock,
// then every bike at its sale price.
export default function DealBoard({ headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;
  const pump = MODELS.find((m) => m.category === 'accessories');
  return (
    <section className="deals" aria-labelledby="deals-title">
      <div className="container">
        <Heading className="deals__title" id="deals-title">
          Black Friday
        </Heading>
        <div className="deals__row">
          <p className="deals__lede">
            Up to {maxPercentOff}% off every bike in the lineup, through {SALE.endsLabel}. Questions? Call{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>.
          </p>
          <Countdown variant="large" />
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
              Add the {pump.name} cordless pump for{' '}
              <b>{formatPrice(pump.bfPrice ?? pump.price)}</b>
              {pump.bfPrice != null ? <s>{formatPrice(pump.price)}</s> : null}.{' '}
              <Link href={`/products/${pump.slug}`}>See the pump</Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
