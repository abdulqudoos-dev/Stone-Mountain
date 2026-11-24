import CollectionHero from '@/components/CollectionHero';
import ProductCard from '@/components/ProductCard';
import Faq from '@/components/Faq';
import { byCategory } from '@/lib/products';
import { titleFor } from '@/lib/site';

export const metadata = {
  title: titleFor('Accessories'),
  description: 'Accessories from Stone Mountain Bike Co., including the Air Master 150 cordless pump.',
};

export default function AccessoriesPage() {
  const models = byCategory('accessories');
  return (
    <>
      <CollectionHero
        title="Accessories"
        lede="The Air Master 150 cordless pump, with an LED light and a USB power bank."
      />
      <section className="section section--tight" aria-label="Accessories">
        <div className="container">
          <div className="product-grid product-grid--lg">
            {models.map((m) => (
              <ProductCard key={m.slug} model={m} priority />
            ))}
            <div className="coming-card">
              <h3>Need something else?</h3>
              <p>Call the shop and we’ll help you find the right part for your bike.</p>
              <a className="text-link" href="tel:+18663032453">
                Call 866-303-2453
              </a>
            </div>
          </div>
        </div>
      </section>
      <Faq keys={['accessoryReturns', 'financing']} title="Good to know" />
    </>
  );
}
