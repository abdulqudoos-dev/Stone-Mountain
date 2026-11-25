'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { maxPercentOff } from '@/lib/products';

const KEY = 'sm-promo-closed';

/*
  The sale bar, in two placements (app/layout.jsx renders both; CSS shows
  one):
  - "below": Sammy's brief, from 961px up. A flat black bar under the
    header: one line, one link, no motion. Shipping and pickup live in the
    hero, not here.
  - "top": phones and small tablets, after AQ's mockup (Nov 25). Above the
    header, with a tag icon, the deal in yellow and white, the link and a
    close button. Closing it lasts for the visit.
*/
export default function PromoBar({ placement = 'below' }) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (placement !== 'top') return;
    try {
      if (sessionStorage.getItem(KEY) === '1') setClosed(true);
    } catch {
      // Storage can be off (private mode); the bar just stays.
    }
  }, [placement]);

  const close = () => {
    setClosed(true);
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Nothing to remember it in; it still closes for this page.
    }
  };

  if (placement === 'top') {
    return (
      <aside className="promo-bar promo-bar--top" aria-label="Black Friday sale" hidden={closed}>
        <div className="promo-bar__inner">
          <Icon name="tag" size={24} className="promo-bar__icon" />
          <p className="promo-bar__deal">
            <b>Black Friday sale.</b> Up to {maxPercentOff}% off every bike!{' '}
            <span className="promo-bar__when">Through Sunday at 9 PM CT.</span>
          </p>
          <Link className="promo-bar__link" href="/black-friday">
            <span>Shop the sale</span>
            <Icon name="arrow-right" size={16} />
          </Link>
          <button type="button" className="promo-bar__close" aria-label="Close the sale bar" onClick={close}>
            <Icon name="close" size={22} />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="promo-bar promo-bar--below" aria-label="Black Friday sale">
      <div className="promo-bar__inner">
        <p>
          <b>Black Friday sale.</b> Up to {maxPercentOff}% off every bike, through Sunday at 9 PM CT.
        </p>
        <Link className="promo-bar__link" href="/black-friday">
          Shop the sale
        </Link>
      </div>
    </aside>
  );
}
