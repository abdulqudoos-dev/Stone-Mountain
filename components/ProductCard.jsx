import Link from 'next/link';
import ProductShot from './ProductShot';
import { cover, formatPrice, percentOff, savings } from '@/lib/products';
import { shipsFree } from '@/lib/site';

// Product card. The black "Black Friday" tab is Sammy's rule; its red half
// carries the saving, so the tab tells the shopper something.
export default function ProductCard({ model, priority = false, compact = false }) {
  const off = percentOff(model);
  return (
    <Link href={`/products/${model.slug}`} className={`product-card ${compact ? 'product-card--compact' : ''}`}>
      <span className="product-card__media">
        <span className="bf-tab">
          Black Friday
          {off ? <b>{off}% off</b> : null}
        </span>
        <ProductShot
          src={cover(model)}
          box={model.shot}
          aspect={compact ? 1 : 1.45}
          pad={compact ? [0.1, 0.1, 0.06, 0.1] : [0.2, 0.05, 0.05, 0.05]}
          alt={`${model.name}, ${model.variants[0].name.toLowerCase()}`}
          eager={priority}
        />
      </span>
      <span className="product-card__body">
        <span className="product-card__type">{model.type}</span>
        <span className="product-card__name">{model.name}</span>
        <span className="product-card__spec">{model.cardSpec}</span>
        <span className="product-card__price">
          <b>{formatPrice(model.bfPrice ?? model.price)}</b>
          {model.bfPrice != null ? <s>{formatPrice(model.price)}</s> : null}
        </span>
        <span className="product-card__foot">
          <span className="product-card__save">
            {savings(model) ? `Save ${formatPrice(savings(model))}` : 'Call for sale price'}
          </span>
          {model.variants.length > 1 ? (
            <span className="swatches" aria-label={`${model.variants.length} colors`}>
              {model.variants.map((v) => (
                <span
                  key={v.handle}
                  className="swatch"
                  style={{ background: v.swatch }}
                  title={v.inStock ? v.name : `${v.name}, sold out`}
                />
              ))}
            </span>
          ) : null}
        </span>
        {compact ? null : (
          <span className="product-card__ship">{shipsFree(model) ? 'Free shipping' : 'Free Atlanta pickup'}</span>
        )}
      </span>
    </Link>
  );
}
