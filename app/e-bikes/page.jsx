import CollectionHero from '@/components/CollectionHero';
import ProductCard from '@/components/ProductCard';
import CompareTable from '@/components/CompareTable';
import Faq from '@/components/Faq';
import { byCategory } from '@/lib/products';
import { titleFor } from '@/lib/site';

export const metadata = {
  title: titleFor('Yonah 600 and Bryce 800'),
  description: 'Stone Mountain Bike Co. e-bikes: the Yonah 600 and the Bryce 800. Free shipping to the contiguous U.S.',
};

export default function EBikesPage() {
  const models = byCategory('e-bikes');
  return (
    <>
      <CollectionHero
        title="e-Bikes"
        lede="Pedal assist for hills and commutes, at Black Friday prices. Both e-bikes ship free to the contiguous U.S."
      />
      <section className="section section--tight" aria-label="e-Bikes">
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
      <Faq keys={['price', 'shipping', 'returns', 'warranty']} />
    </>
  );
}
