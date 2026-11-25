import Link from 'next/link';
import Photo from '@/components/Photo';
import Hero from '@/components/Hero';
import RideCarousel from '@/components/RideCarousel';
import DealBoard from '@/components/DealBoard';
import CompareTable from '@/components/CompareTable';
import BuyBlock from '@/components/BuyBlock';
import Faq from '@/components/Faq';
import { SITE, titleFor } from '@/lib/site';
import { HOME, shop } from '@/lib/images';
import { BIKES } from '@/lib/products';

export const metadata = {
  title: titleFor('Stone Mountain Bike Company'),
};

// Studio close-ups on white, so the four tiles read as one set.
const DETAILS = [
  {
    img: shop('products/Image6_a5de43c3-1ce0-4a45-bba5-740c8eb0b024.jpg', 900),
    alt: 'Close-up of the rear hub motor on a beige Yonah 600',
    cropBottom: 0.2,
    lead: 'Motor',
    text: 'A 500W rear hub on the Yonah 600. It’s single speed, so there’s nothing to shift.',
  },
  {
    img: shop('products/Untitled-6_1024x1024_2x_8525dc9f-9779-4492-a290-c42d27ce5c4a.jpg', 900),
    alt: 'Close-up of the backlit display on the Bryce 800 handlebar',
    position: '30% 50%',
    lead: 'Display',
    text: 'A backlit LCD on the Bryce 800, readable after dark.',
  },
  {
    img: shop('files/05.jpg', 900),
    alt: 'Close-up of a rear disc brake and rotor on a white Paramount 100',
    position: '62% 50%',
    lead: 'Brakes',
    text: 'Disc brakes, front and rear, on all four bikes.',
  },
  {
    img: shop('files/04.jpg', 900),
    alt: 'Close-up of a Shimano trigger shifter, brake lever and bell',
    position: '40% 50%',
    lead: 'Gears',
    text: '21 speeds on the Foraker 300 and the Paramount 100.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <DealBoard />

      <section className="section rides-section" aria-labelledby="rides-title">
        <div className="container section-head">
          <h2 className="section-title" id="rides-title">
            Shop by how you ride
          </h2>
          <Link className="text-link" href="/black-friday">
            See every bike
          </Link>
        </div>
        <RideCarousel cards={HOME.rides} label="Ways to ride" />
      </section>

      <section className="section section--flush-top" aria-labelledby="details-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="details-title">
              Motor, display, brakes and gears
            </h2>
          </div>
          <ul className="detail-grid">
            {DETAILS.map((d) => (
              <li key={d.lead} className="detail-card">
                <div className="detail-card__media">
                  <Photo src={d.img} alt={d.alt} position={d.position} cropBottom={d.cropBottom} sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
                <p>
                  <b>{d.lead}.</b> {d.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="pickup-title">
        <Photo src={HOME.band.src} alt={HOME.band.alt} position={HOME.band.position} sizes="100vw" />
        <div className="band__content">
          <h2 className="section-title" id="pickup-title">
            Ride it home from Atlanta.
          </h2>
          <p>
            Choose free pickup at checkout and collect your bike from our Atlanta shop, built and tuned. Not near
            Atlanta? E-bikes ship free in the contiguous U.S.
          </p>
          <div className="band__actions">
            <Link className="btn btn--red" href="/service#shipping">
              How pickup works
            </Link>
            <a className="btn btn--outline-light" href={SITE.phoneHref}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="compare" aria-labelledby="compare-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="compare-title">
              Compare the bikes
            </h2>
            <p className="lede">Black Friday prices and the main specs, side by side.</p>
          </div>
          <CompareTable models={BIKES} />
        </div>
      </section>

      <BuyBlock />

      <Faq keys={['price', 'shipping', 'pickup', 'returns', 'warranty', 'service']} title="Questions before you buy" />
    </>
  );
}
