import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductPurchase from '@/components/ProductPurchase';
import ProductCard from '@/components/ProductCard';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import { MODELS, getModel } from '@/lib/products';
import { SITE, titleFor } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return {};
  return {
    title: titleFor(model.name),
    description: model.summary,
  };
}

const CATEGORY = {
  'e-bikes': { href: '/e-bikes', label: 'e-Bikes' },
  bikes: { href: '/bikes', label: 'Bikes' },
  accessories: { href: '/accessories', label: 'Accessories' },
};

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const cat = CATEGORY[model.category];
  const related = MODELS.filter((m) => m.slug !== model.slug && m.category !== 'accessories').slice(0, 3);
  const faqKeys =
    model.category === 'accessories'
      ? ['price', 'accessoryReturns', 'financing']
      : ['price', 'shipping', 'pickup', 'returns', 'warranty'];

  return (
    <>
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumb breadcrumb--pdp">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={cat.href}>{cat.label}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{model.name}</span>
        </nav>
        <ProductPurchase model={model} />
      </div>

      <section className="section" aria-labelledby="highlights-title">
        <div className="container">
          <h2 className="section-title" id="highlights-title">
            {model.tagline.replace(/\.$/, '')}
          </h2>
          <ul className="highlights">
            {model.highlights.map((h) => (
              <li key={h.label}>
                <span className="highlights__value">{h.value}</span>
                <span className="highlights__label">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="specs-title">
        <div className="container specs-layout">
          <h2 className="section-title" id="specs-title">
            Specs
          </h2>
          <dl className="spec-list">
            {model.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Reviews slug={model.slug} />

      <Faq keys={faqKeys} />

      <section className="section section--flush-top" aria-labelledby="related-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="related-title">
              Also in the sale
            </h2>
          </div>
          <div className="product-grid product-grid--lg">
            {related.map((m) => (
              <ProductCard key={m.slug} model={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
