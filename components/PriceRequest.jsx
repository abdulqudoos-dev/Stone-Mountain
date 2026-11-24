'use client';

import { useId, useState } from 'react';
import Icon from './Icon';
import { MODELS } from '@/lib/products';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';

/*
  "Text me my price" request. Mockup only: it confirms on screen and sends
  a generate_lead event, but nothing reaches the store yet. Before launch,
  point onSubmit at the client's SMS or CRM tool (HubSpot form, Shopify
  Inbox, Podium or similar) and have someone answer during store hours.

  With a `model`, the bike is fixed (product pages). Without one, the
  shopper picks it (Black Friday page).
*/
export default function PriceRequest({ model, variantName, id }) {
  const uid = useId();
  const [done, setDone] = useState(null);

  const fixedName = model ? `${model.name}${variantName ? ` in ${variantName.toLowerCase()}` : ''}` : null;

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const picked = model || MODELS.find((m) => m.slug === data.get('product'));
    const product = fixedName || picked?.name || 'bike';
    track('generate_lead', { form_name: 'price_request', item_name: product });
    setDone({ name: String(data.get('name')).trim(), phone: String(data.get('phone')).trim(), product });
  };

  if (done) {
    return (
      <div className="price-form__done" role="status" id={id}>
        <Icon name="check" size={20} />
        <p>
          <b>Got it, {done.name}.</b> We’ll text your Black Friday price for the {done.product} to{' '}
          {done.phone}. Need it sooner? Call <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={`price-form ${model ? 'price-form--inline' : ''}`} onSubmit={onSubmit} id={id}>
      <div className="field">
        <label htmlFor={`${uid}-name`}>First name</label>
        <input id={`${uid}-name`} name="name" autoComplete="given-name" required />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-phone`}>Mobile number</label>
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="(404) 555-0123"
          pattern="[0-9\(\)\+\.\- ]{10,}"
          title="Enter a 10-digit mobile number"
          required
        />
      </div>
      {model ? null : (
        <div className="field field--wide">
          <label htmlFor={`${uid}-product`}>Bike or accessory</label>
          <select id={`${uid}-product`} name="product" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {MODELS.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name} ({m.type.toLowerCase()})
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="price-form__submit">
        <button type="submit" className="btn btn--dark">
          Text me my price
        </button>
        <p className="price-form__fine">
          One text from {SITE.name} with your price. Message and data rates may apply.
        </p>
      </div>
    </form>
  );
}
