'use client';

import { useState } from 'react';
import Icon from './Icon';
import PriceRequest from './PriceRequest';
import Stars from './Stars';
import { getReviews, summary } from '@/lib/reviews';
import { formatPrice, percentOff, savings, storeLink } from '@/lib/products';
import { SITE, SALE, SHIPPING, pickupWhere, shipsFree } from '@/lib/site';
import { track } from '@/lib/track';

// Ask the CDN for small copies for the thumbnail strip.
const thumb = (src) => src.replace(/width=\d+/, 'width=240');

export default function ProductPurchase({ model }) {
  const firstInStock = Math.max(0, model.variants.findIndex((v) => v.inStock));
  const [vIndex, setVIndex] = useState(firstInStock);
  const [iIndex, setIIndex] = useState(0);
  const [textOpen, setTextOpen] = useState(false);
  const [delivery, setDelivery] = useState('ship');
  const variant = model.variants[vIndex];
  const images = variant.images;
  const onSale = model.bfPrice != null;
  const rating = summary(getReviews(model.slug));
  const shipPrice = shipsFree(model) ? 'Free' : SHIPPING.otherRate != null ? `$${SHIPPING.otherRate}` : 'At checkout';

  const pickVariant = (i) => {
    setVIndex(i);
    setIIndex(0);
  };

  return (
    <div className="pdp">
      <div className="gallery">
        <div className="gallery__main">
          <span className="bf-tab">
            Black Friday
            {onSale ? <b>{percentOff(model)}% off</b> : null}
          </span>
          <img
            key={images[iIndex]}
            src={images[iIndex]}
            alt={`${model.name} in ${variant.name.toLowerCase()}${iIndex ? `, detail ${iIndex}` : ''}`}
            width="1200"
            height="1200"
          />
        </div>
        {images.length > 1 ? (
          <ul className="gallery__thumbs" aria-label="More photos">
            {images.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  className="gallery__thumb"
                  aria-pressed={i === iIndex}
                  aria-label={`Show photo ${i + 1} of ${images.length}`}
                  onClick={() => setIIndex(i)}
                >
                  <img src={thumb(src)} alt="" width="120" height="120" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="buy-panel">
        <span className="buy-panel__type">{model.type}</span>
        <h1>{model.name}</h1>
        {rating.count ? (
          <a className="buy-panel__rating" href="#reviews">
            <Stars rating={rating.average} size={16} />
            <span>
              {rating.average.toFixed(1)} ({rating.count} sample reviews)
            </span>
          </a>
        ) : null}
        <p className="buy-panel__tagline">{model.tagline}</p>
        <p className="buy-panel__summary">{model.summary}</p>

        <div className="buy-panel__price">
          {onSale ? (
            <>
              {formatPrice(model.bfPrice)} <s>{formatPrice(model.price)}</s>
              <span className="buy-panel__save">
                Save {formatPrice(savings(model))} ({percentOff(model)}% off)
              </span>
            </>
          ) : (
            formatPrice(model.price)
          )}
        </div>

        <div className="bf-note">
          <Icon name="tag" size={20} />
          <p>
            {onSale ? (
              <>
                <b>Black Friday price</b> through {SALE.endsLabel}. Questions? Call{' '}
                <a href={SITE.phoneHref}>{SITE.phone}</a>.
              </>
            ) : (
              <>
                <b>Black Friday deal.</b> Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{' '}
                <button
                  type="button"
                  className="link-btn"
                  aria-expanded={textOpen}
                  aria-controls={textOpen ? 'price-request' : undefined}
                  onClick={() => setTextOpen((o) => !o)}
                >
                  get your price by text
                </button>
                , through {SALE.endsLabel}.
              </>
            )}
          </p>
        </div>

        {!onSale && textOpen ? <PriceRequest id="price-request" model={model} variantName={model.variants.length > 1 ? variant.name : null} /> : null}

        {model.variants.length > 1 ? (
          <fieldset className="swatch-picker">
            <legend>
              Color: <b>{variant.name}</b>
              {!variant.inStock ? <span className="sold-out"> (sold out)</span> : null}
            </legend>
            <div className="swatch-picker__row">
              {model.variants.map((v, i) => (
                <button
                  key={v.handle}
                  type="button"
                  className="swatch-btn"
                  aria-pressed={i === vIndex}
                  aria-label={`${v.name}${v.inStock ? '' : ', sold out'}`}
                  onClick={() => pickVariant(i)}
                >
                  <span style={{ background: v.swatch }} className={v.inStock ? '' : 'is-out'} />
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        <fieldset className="delivery">
          <legend>Delivery</legend>
          <label className="delivery__option">
            <input
              type="radio"
              name="delivery"
              value="ship"
              checked={delivery === 'ship'}
              onChange={() => setDelivery('ship')}
            />
            <span className="delivery__body">
              <span className="delivery__head">
                <Icon name="truck" size={18} />
                Ship to me
                <b className="delivery__price">{shipPrice}</b>
              </span>
              <span className="delivery__text">
                {shipsFree(model) ? 'Free in the contiguous U.S.' : 'Rate shown at checkout.'} In-stock orders
                usually ship the next business day by {SHIPPING.carriers}.
              </span>
            </span>
          </label>
          <label className="delivery__option">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={delivery === 'pickup'}
              onChange={() => setDelivery('pickup')}
            />
            <span className="delivery__body">
              <span className="delivery__head">
                <Icon name="pin" size={18} />
                Pick up in Atlanta
                <b className="delivery__price">Free</b>
              </span>
              <span className="delivery__text">
                {pickupWhere()} Call {SITE.phone} after you order to book a time.
              </span>
            </span>
          </label>
        </fieldset>

        <div className="buy-panel__actions">
          {variant.inStock ? (
            <a
              className="btn btn--dark btn--block"
              href={storeLink(variant.handle)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track('begin_checkout', {
                  currency: 'USD',
                  value: model.bfPrice ?? model.price,
                  shipping_tier: delivery,
                  items: [{ item_id: variant.handle, item_name: model.name, item_variant: variant.name }],
                })
              }
            >
              Buy on our store
              <Icon name="arrow-up-right" size={18} />
            </a>
          ) : (
            <button type="button" className="btn btn--dark btn--block" disabled>
              Sold out in {variant.name}
            </button>
          )}
          <a className="btn btn--line btn--block" href={SITE.phoneHref}>
            <Icon name="phone" size={18} />
            Call {SITE.phone}
          </a>
          <p className="buy-panel__fine">
            {delivery === 'pickup'
              ? 'Choose Atlanta pickup at checkout. Orders paid with Affirm have to ship.'
              : 'Opens stonemountainbikecompany.com in a new tab, where you check out.'}
          </p>
        </div>

        <ul className="trust-list">
          <li>
            <Icon name="card" size={20} />
            Pay over time with Affirm or PayPal Credit
          </li>
          <li>
            <Icon name="shield" size={20} />
            1-year warranty on materials and workmanship
          </li>
          <li>
            <Icon name="wrench" size={20} />
            Tune-ups and repairs at our Atlanta service shop
          </li>
        </ul>
      </div>
    </div>
  );
}
