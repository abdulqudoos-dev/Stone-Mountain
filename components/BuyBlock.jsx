'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from './Icon';
import ProductShot from './ProductShot';
import Contours from './Contours';
import { BIKES, cover, formatPrice, lowestBikePrice, savings } from '@/lib/products';
import { SALE, shipsFree } from '@/lib/site';

/*
  Closing "Buy" section, laid out like maticrobots.com's: the product on the
  left on a soft floor shadow, the price, three plain promises and one
  button on the right, plus a picker because the store sells four bikes.
  Shipping and pickup are covered up top, so the promises here are new ones.
*/
const POINTS = [
  {
    icon: 'card',
    title: 'Pay over time',
    text: 'Split it with Affirm, or use PayPal Credit: no interest on $99 or more if paid in full within 6 months.',
  },
  {
    icon: 'check',
    title: '14 days to decide on e-bikes',
    text: 'Return it within 14 days with under 5 miles on it, like new and in its box. You pay return shipping.',
  },
  {
    icon: 'shield',
    title: '1-year warranty',
    text: 'Covers defects in materials and workmanship, backed by our Atlanta service shop.',
  },
];

export default function BuyBlock() {
  const [slug, setSlug] = useState(BIKES[0].slug);
  const [picked, setPicked] = useState(false);
  const bike = BIKES.find((b) => b.slug === slug) || BIKES[0];
  const price = bike.bfPrice ?? bike.price;

  return (
    <section className="section buy" aria-labelledby="buy-title">
      <div className="container buy__grid">
        <div className="buy__visual">
          <Contours wave={picked ? slug : 0} />
          <ProductShot
            key={bike.slug}
            className={picked ? 'is-swapped' : ''}
            src={cover(bike)}
            box={bike.shot}
            aspect={1.3}
            pad={[0.12, 0.04, 0.14, 0.04]}
            alt={`${bike.name}, ${bike.variants[0].name.toLowerCase()}`}
            sizes="(max-width: 960px) 100vw, 55vw"
          />
        </div>

        <div className="buy__panel">
          <h2 className="section-title buy__title" id="buy-title">
            Buy a Stone Mountain bike
          </h2>
          <p className="buy__from">
            From <b>{formatPrice(lowestBikePrice)}</b>. Every bike is in the sale through {SALE.endsLabel}.
          </p>

          <div className="bike-picker" role="group" aria-label="Choose a bike">
            {BIKES.map((b) => (
              <button
                key={b.slug}
                type="button"
                className="bike-pick"
                aria-pressed={b.slug === slug}
                onClick={() => {
                  setSlug(b.slug);
                  setPicked(true);
                }}
              >
                <ProductShot src={cover(b)} box={b.shot} aspect={1.45} pad={[0.06, 0.04, 0.06, 0.04]} sizes="120px" />
                <b>{b.name}</b>
                <span>
                  {formatPrice(b.bfPrice ?? b.price)}
                  {b.bfPrice != null ? <s>{formatPrice(b.price)}</s> : null}
                </span>
              </button>
            ))}
          </div>

          <ul className="buy__points">
            {POINTS.map((p) => (
              <li key={p.title}>
                <Icon name={p.icon} size={22} />
                <p>
                  <b>{p.title}</b>
                  {p.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="buy__actions">
            <Link href={`/products/${bike.slug}`} className="btn btn--dark">
              Shop the {bike.name}
            </Link>
            <span className="buy__price">
              <span>
                {formatPrice(price)}
                {bike.bfPrice != null ? <s>{formatPrice(bike.price)}</s> : null}
              </span>
              <small>
                {savings(bike) ? `Save ${formatPrice(savings(bike))}. ` : ''}
                {shipsFree(bike) ? 'Free shipping.' : 'Free Atlanta pickup.'}
              </small>
            </span>
          </div>
          <Link className="text-link buy__all" href="/black-friday">
            See every Black Friday deal
          </Link>
        </div>
      </div>
    </section>
  );
}
