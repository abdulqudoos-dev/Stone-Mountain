import Icon from './Icon';
import { PICKUP, SHIPPING, SITE, pickupWhere } from '@/lib/site';

// Shipping and Atlanta pickup, side by side. Rules live in lib/site.js.
export default function DeliveryOptions({ id = 'delivery' }) {
  const otherRate = SHIPPING.otherRate != null ? `$${SHIPPING.otherRate}` : 'Calculated at checkout';
  return (
    <section className="section section--flush-top" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id={`${id}-title`}>
            Shipping and pickup
          </h2>
          <p className="lede">We ship across the U.S. Near Atlanta? Skip shipping and pick your bike up for free.</p>
        </div>
        <div className="delivery-grid">
          <div className="delivery-col">
            <h3>
              <Icon name="truck" size={24} />
              Shipping
            </h3>
            <dl className="rate-list">
              <div>
                <dt>E-bikes</dt>
                <dd>Free in the contiguous U.S.</dd>
              </div>
              <div>
                <dt>Hybrid bikes and accessories</dt>
                <dd>{otherRate}</dd>
              </div>
            </dl>
            <ul className="delivery-notes">
              <li>We ship within the U.S. by {SHIPPING.carriers}.</li>
              <li>In-stock orders usually ship the next business day.</li>
              <li>We can’t ship to PO boxes or APO addresses.</li>
            </ul>
          </div>
          <div className="delivery-col">
            <h3>
              <Icon name="pin" size={24} />
              Pickup in Atlanta
            </h3>
            <dl className="rate-list">
              <div>
                <dt>Every bike and accessory</dt>
                <dd>Free</dd>
              </div>
            </dl>
            <ul className="delivery-notes">
              <li>{pickupWhere()}</li>
              {PICKUP.hours ? <li>Pickup hours: {PICKUP.hours}.</li> : null}
              <li>
                Choose pickup at checkout, then call <a href={SITE.phoneHref}>{SITE.phone}</a> to book a time.
              </li>
              <li>Orders paid with Affirm have to ship.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
