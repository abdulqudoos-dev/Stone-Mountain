import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import SaleEnds from '@/components/SaleEnds';
import Faq from '@/components/Faq';
import DeliveryOptions from '@/components/DeliveryOptions';
import { BIKES, MODELS, maxPercentOff } from '@/lib/products';
import { SALE, titleFor } from '@/lib/site';

export const metadata = {
  title: titleFor('All Deals'),
  description: `Black Friday: up to ${maxPercentOff}% off every Stone Mountain Bike Co. e-bike and hybrid bike, through ${SALE.endsLabel}.`,
};

export default function BlackFridayPage() {
  const addons = MODELS.filter((m) => m.category === 'accessories');
  return (
    <>
      <section className="container page-head" aria-labelledby="bf-title">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Black Friday</span>
        </nav>
        <h1 className="page-head__title" id="bf-title">
          Black Friday deals
        </h1>
        <p className="page-head__sub">Up to {maxPercentOff}% off every bike and accessory.</p>
        <p className="page-head__ends">
          <SaleEnds />
        </p>
      </section>

      <section className="section section--tight" aria-label="Bikes on sale">
        <div className="container">
          <div className="product-grid product-grid--bikes">
            {BIKES.map((m, i) => (
              <ProductCard key={m.slug} model={m} priority={i < 2} />
            ))}
          </div>

          {addons.length ? (
            <div className="addons">
              <h2 className="addons__title">Add-ons</h2>
              <div className="addons__grid">
                {addons.map((m) => (
                  <ProductCard key={m.slug} model={m} compact />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <DeliveryOptions />

      <Faq keys={['price', 'returns', 'financing']} title="Before you buy" />
    </>
  );
}
