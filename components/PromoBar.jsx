import Link from 'next/link';
import { maxPercentOff } from '@/lib/products';

// Flat sale bar under the header, per Sammy's brief: black, one line, one
// link, no motion. Shipping and pickup live in the hero, not here.
export default function PromoBar() {
  return (
    <aside className="promo-bar" aria-label="Black Friday sale">
      <div className="promo-bar__inner">
        <p className="promo-bar__long">
          <b>Black Friday sale.</b> Up to {maxPercentOff}% off every bike, through Sunday at 9 PM CT.
        </p>
        <p className="promo-bar__short">
          <b>Black Friday:</b> up to {maxPercentOff}% off
        </p>
        <Link className="promo-bar__link" href="/black-friday">
          Shop the sale
        </Link>
      </div>
    </aside>
  );
}
