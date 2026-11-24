import CollectionHero from '@/components/CollectionHero';
import ProductCard from '@/components/ProductCard';
import CompareTable from '@/components/CompareTable';
import Faq from '@/components/Faq';
import { byCategory } from '@/lib/products';
import { titleFor } from '@/lib/site';

export const metadata = {
  title: titleFor('Hybrid and Mountain Bikes'),
  description: 'The Foraker 300 hybrid mountain bike and the Paramount 100 hybrid: 21 speeds, disc brakes, aluminum frames.',
};

export default function BikesPage() {
  const models = byCategory('bikes');
  return (
    <>
      <CollectionHero
        title="Hybrid and mountain bikes"
        lede="21 speeds, disc brakes front and rear, and light aluminum frames, at Black Friday prices."
      />
      <section className="section section--tight" aria-label="Hybrid and mountain bikes">
        <div className="container">
          <div className="product-grid product-grid--two">
            {models.map((m, i) => (
              <ProductCard key={m.slug} model={m} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--flush-top" aria-labelledby="compare-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="compare-title">
              Side by side
            </h2>
          </div>
          <CompareTable models={models} />
        </div>
      </section>
      <Faq keys={['price', 'pickup', 'returns', 'service']} />
    </>
  );
}
