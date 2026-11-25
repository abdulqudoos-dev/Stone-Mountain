import Link from 'next/link';
import Icon from './Icon';
import Countdown from './Countdown';
import { HOME } from '@/lib/images';
import { FACTS } from '@/lib/site';
import { MODELS, formatPrice, maxPercentOff } from '@/lib/products';

// A 1x1 transparent GIF: a <picture> source that stops a browser from
// downloading the photo it will not show at that screen size.
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/*
  Home hero, after AQ's mockups (Nov 25) on Sammy's Bike24 brief
  (#proj-stone-mountain, Nov 24).
  Desktop: one full-width photo, the silver Yonah 600 on a granite outcrop.
  A see-through red layer sits over the right of the same photo (the ridges
  show through), slanted on its left edge with a streak of light along the
  slant. The bike is repeated as a cut-out above the red, so its front
  wheel passes in front of the panel. On the red: BLACK in white, FRIDAY in
  yellow, the deal, the sale clock and two buttons.
  Phones and tablets (1100px and under): the photo runs top to bottom. Dark
  words on the pale sky, the bike on its rock in the middle, the sale clock
  and buttons on the rock as it falls into shadow, then the store's three
  promises on the dark.
*/
export default function Hero() {
  const bike = MODELS.find((m) => m.slug === 'yonah-600');
  const { scene } = HOME;
  return (
    <>
      <section className="bf-hero" aria-labelledby="hero-title">
        {/* The photo sits in a frame with its own proportions, so the cut-out
            bike in the front layer lines up with the bike in the photo at
            every size. */}
        <div className="bf-hero__scene">
          <div className="bf-hero__frame">
            <picture>
              <source media="(max-width: 1100px)" srcSet={BLANK} />
              <img src={scene.src} alt={scene.alt} width={scene.width} height={scene.height} fetchPriority="high" />
            </picture>
          </div>
        </div>
        <div className="bf-hero__front" aria-hidden="true">
          <div className="bf-hero__frame">
            <picture>
              <source media="(max-width: 1100px)" srcSet={BLANK} />
              <img
                className="bf-hero__bike"
                src={scene.bike.src}
                alt=""
                style={{ left: `${scene.bike.left}%`, top: `${scene.bike.top}%`, width: `${scene.bike.width}%` }}
              />
            </picture>
          </div>
        </div>

        <Link className="bf-hero__caption" href={`/products/${bike.slug}`}>
          <b>{bike.name}</b>
          <span>
            {formatPrice(bike.bfPrice ?? bike.price)}
            {bike.bfPrice != null ? <s>{formatPrice(bike.price)}</s> : null}
          </span>
        </Link>

        <div className="bf-hero__panel">
          <span className="bf-hero__streak" aria-hidden="true" />
          <div className="bf-hero__copy">
            <p className="bf-hero__kicker">The biggest sale of the year</p>
            <h1 className="bf-hero__title" id="hero-title">
              <span>Black</span> <span>Friday</span>
            </h1>
            <p className="bf-hero__deal">
              Up to <em>{maxPercentOff}%</em> off every bike.
            </p>
            <p className="bf-hero__sub">
              E-bikes and hybrids from our Atlanta shop.
              <br />
              Free shipping on e-bikes, or free pickup in Atlanta.
            </p>
            {/* Phones and tablets only: the same scene, built for a tall
                screen (public/home/hero-mobile.webp). */}
            <div className="bf-hero__stage">
              <picture>
                <source media="(min-width: 1101px)" srcSet={BLANK} />
                <img
                  src={scene.mobile.src}
                  alt={scene.alt}
                  width={scene.mobile.width}
                  height={scene.mobile.height}
                  fetchPriority="high"
                />
              </picture>
            </div>
            <Countdown variant="hero" />
            <div className="bf-hero__actions">
              <Link className="btn btn--white bf-hero__shop" href="/black-friday">
                Shop the sale <Icon name="arrow-right" size={18} />
              </Link>
              <Link className="btn btn--outline-light" href="#deals-title">
                See the prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ul className="proof-strip" aria-label="Why buy here">
        {FACTS.map((f) => (
          <li key={f.title}>
            <Icon name={f.icon} size={22} />
            <span>
              <b>{f.title}</b>
              <span className="proof-strip__text">{f.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
