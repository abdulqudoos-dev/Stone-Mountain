import Link from 'next/link';
import Icon from './Icon';
import Photo from './Photo';
import SaleEnds from './SaleEnds';
import { HOME } from '@/lib/images';
import { FACTS } from '@/lib/site';
import { maxPercentOff } from '@/lib/products';

// Full-bleed home hero. The photo always renders (it's the video's poster
// and the reduced-motion fallback); a muted loop sits on top when one is set.
export default function Hero() {
  const { hero } = HOME;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo className="hero__img" src={hero.src} alt={hero.alt} position={hero.position} priority />
        {hero.video ? (
          <video className="hero__video" src={hero.video} poster={hero.src} autoPlay muted loop playsInline aria-hidden="true" />
        ) : null}
      </div>

      <div className="hero__content">
        <p className="hero__deal">
          <b>Black Friday</b> Up to {maxPercentOff}% off every bike
        </p>
        <h1 className="hero__title" id="hero-title">
          Black Friday is for riding.
        </h1>
        <p className="hero__sub">
          E-bikes and hybrids from our Atlanta shop. Free shipping on e-bikes, or free pickup in Atlanta.
        </p>
        <p className="hero__ends">
          <SaleEnds />
        </p>
        <div className="hero-actions">
          <Link className="btn btn--red" href="/black-friday">
            Shop the sale
          </Link>
          <Link className="btn btn--outline-light" href="#deals-title">
            See the prices
          </Link>
        </div>
      </div>

      <ul className="hero__facts">
        {FACTS.map((f) => (
          <li key={f.title}>
            <Icon name={f.icon} size={22} />
            <span>
              <b>{f.title}</b>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
