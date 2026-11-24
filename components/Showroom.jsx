import Link from 'next/link';
import Icon from './Icon';
import ProductShot from './ProductShot';
import SaleEnds from './SaleEnds';
import { BIKES, MODELS, cover, formatPrice, maxPercentOff, percentOff } from '@/lib/products';
import { FACTS } from '@/lib/site';

/*
  Home hero: the sale is the hero. The four bikes stand on one floor line
  like a shop window, each with its sale price, and the pump sits under
  them as an add-on. Studio shots on white melt into the granite page
  (multiply), so the bikes read as cut-outs without editing the files.
*/
export default function Showroom() {
  const pump = MODELS.find((m) => m.category === 'accessories');
  return (
    <section className="showroom" aria-labelledby="showroom-title">
      <div className="container">
        <div className="showroom__head">
          <h1 className="showroom__title" id="showroom-title">
            Up to {maxPercentOff}% off every bike
          </h1>
          <div className="showroom__aside">
            <p className="showroom__sub">
              Black Friday prices on our e-bikes and hybrid bikes. <SaleEnds />
            </p>
            <div className="showroom__ctas">
              <Link className="btn btn--dark" href="/black-friday">
                Shop the sale
              </Link>
              <Link className="btn btn--line" href="#compare">
                Compare bikes
              </Link>
            </div>
          </div>
        </div>

        <ul className="lineup">
          {BIKES.map((m, i) => (
            <li key={m.slug}>
              <Link className="lineup__item" href={`/products/${m.slug}`}>
                <span className="lineup__stage">
                  <ProductShot
                    src={cover(m)}
                    box={m.shot}
                    aspect={1.35}
                    pad={[0.16, 0.03, 0.02, 0.03]}
                    alt={`${m.name}, ${m.variants[0].name.toLowerCase()}`}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    eager={i < 2}
                  />
                  <span className="lineup__off">{percentOff(m)}% off</span>
                </span>
                <span className="lineup__name">{m.name}</span>
                <span className="lineup__type">{m.type}</span>
                <span className="lineup__price">
                  <b>{formatPrice(m.bfPrice ?? m.price)}</b>
                  {m.bfPrice != null ? <s>{formatPrice(m.price)}</s> : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {pump ? (
          <p className="lineup__addon">
            Add-on: the {pump.name} cordless pump, <b>{formatPrice(pump.bfPrice ?? pump.price)}</b>
            {pump.bfPrice != null ? <s>{formatPrice(pump.price)}</s> : null}.{' '}
            <Link href={`/products/${pump.slug}`}>See the pump</Link>
          </p>
        ) : null}

        <ul className="facts">
          {FACTS.slice(0, 4).map((f) => (
            <li key={f.title}>
              <Icon name={f.icon} size={22} />
              <span>
                <b>{f.title}</b>
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
