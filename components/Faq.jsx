import Icon from './Icon';
import { SITE, SALE, SHIPPING, pickupWhere } from '@/lib/site';

// Answers come from the client's own policy pages (Nov 24, 2026).
export const FAQS = {
  price: {
    q: 'Is the sale price the price I pay?',
    a: `Yes. The Black Friday price on each bike is what you pay at checkout, through ${SALE.endsLabel}. Sales tax applies in some states. Questions? Call ${SITE.phone}.`,
  },
  shipping: {
    q: 'How much is shipping?',
    a: `E-bikes ship free within the contiguous U.S. Hybrid bikes and accessories ship for ${
      SHIPPING.otherRate != null ? `$${SHIPPING.otherRate}` : 'the rate shown at checkout'
    }, or you can pick them up free in Atlanta. We ship within the U.S. by FedEx or UPS, and in-stock orders usually go out the next business day. We can’t deliver to PO boxes or APO addresses.`,
  },
  pickup: {
    q: 'Can I pick up my bike in Atlanta?',
    a: `Yes, and pickup is free for every bike and accessory. Choose pickup at checkout, then call ${SITE.phone} to book a time. ${pickupWhere()} Orders paid with Affirm have to ship.`,
  },
  returns: {
    q: 'What’s the return policy?',
    a: 'E-bikes can be returned within 14 days of delivery if they have under 5 miles on them, are clean and like new, and come back in the original packaging. You pay return shipping, and every return needs our written approval first.',
  },
  accessoryReturns: {
    q: 'Can I return an accessory?',
    a: 'Yes, within 14 days if it’s unused, uninstalled, clean and in the original packaging. You pay return shipping, and a 25% restocking fee applies.',
  },
  warranty: {
    q: 'What does the warranty cover?',
    a: 'Defects in materials and workmanship, for one year from the original purchase date. Normal wear, battery depletion, accidents, modifications and cosmetic damage aren’t covered.',
  },
  financing: {
    q: 'Can I pay over time?',
    a: 'Yes. Choose Affirm or PayPal Credit at checkout. With PayPal Credit, purchases of $99 or more have no interest if paid in full within 6 months.',
  },
  service: {
    q: 'Do you service bikes you didn’t sell?',
    a: 'Yes. Our shop works on nearly every make, including mountain, road, hybrid and e-bikes. Walk-ins are welcome for quick fixes, estimates are free, and bigger repairs average 10 to 15 business days.',
  },
};

export default function Faq({ keys, title = 'Common questions', id }) {
  return (
    <section className="section faq-section" id={id} aria-labelledby={`${id || 'faq'}-title`}>
      <div className="container faq-layout">
        <h2 className="section-title" id={`${id || 'faq'}-title`}>
          {title}
        </h2>
        <div className="faq">
          {keys.map((k) => (
            <details key={k}>
              <summary>
                <span>{FAQS[k].q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Icon name="plus" size={18} />
                </span>
              </summary>
              <p className="faq__answer">{FAQS[k].a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
