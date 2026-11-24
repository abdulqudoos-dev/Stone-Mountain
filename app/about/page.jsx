import Link from 'next/link';
import Icon from '@/components/Icon';
import Photo from '@/components/Photo';
import { PHOTOS, unsplash } from '@/lib/images';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'About Us | Stone Mountain Bike Co.',
  description:
    'Stone Mountain Bike Co. is an Atlanta-based shop selling hybrid and electric bikes across the U.S., with local pickup by appointment.',
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <Photo className="about-hero__img" src={unsplash(PHOTOS.summit, 1800)} alt="Granite summit rocks under a pink sunset sky" position="50% 24%" priority />
        <div className="container about-hero__content">
          <nav aria-label="Breadcrumb" className="breadcrumb breadcrumb--light">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>
          <h1 id="about-title">An Atlanta bike shop that ships across the U.S.</h1>
        </div>
      </section>

      <section className="section" aria-label="Our story">
        <div className="container about-story">
          <p className="about-story__lead">
            Stone Mountain Bike Co. sells hybrid and electric bikes for commuting, cruising and exploring, from
            our home base in Atlanta to riders across the U.S.
          </p>
          <div className="about-story__body">
            <p>
              The lineup is the Yonah 600 and Bryce 800 e-bikes, the Foraker 300 hybrid mountain bike and the
              Paramount 100 hybrid. Every model is hand-selected and tested by riders, and we only stock bikes
              our own team trusts.
            </p>
            <p>
              We ship direct to your door, and local riders can book a pickup appointment to skip the delivery
              cost. After the sale, our service shop keeps your bike rolling.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--flush-top" aria-label="Riding around Atlanta">
        <div className="container lifestyle lifestyle--2">
          <figure className="lifestyle__item">
            <Photo src={unsplash(PHOTOS.valley, 1400)} alt="Sunset over a wooded valley with a lone mountain on the horizon" position="50% 60%" />
          </figure>
          <figure className="lifestyle__item">
            <Photo src={unsplash(PHOTOS.beltline, 1400)} alt="A rider with a bike on a red-clay trail under green trees" position="50% 65%" />
          </figure>
        </div>
      </section>

      <section className="section section--flush-top" id="contact" aria-labelledby="contact-title">
        <div className="container duo">
          <article className="info-card info-card--plain">
            <div className="info-card__body">
              <h2 className="info-card__title" id="contact-title">
                Talk to us
              </h2>
              <ul className="contact-list">
                <li>
                  <Icon name="phone" size={22} />
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                </li>
                <li>
                  <Icon name="mail" size={22} />
                  <a href={SITE.emailHref}>{SITE.email}</a>
                </li>
                <li>
                  <Icon name="pin" size={22} />
                  <span>Atlanta, Georgia. Pickup by appointment.</span>
                </li>
                <li>
                  <Icon name="instagram" size={22} />
                  <a href={SITE.instagram}>@stonemtnbikes</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="info-card info-card--plain info-card--dark">
            <div className="info-card__body">
              <h2 className="info-card__title">Black Friday is on</h2>
              <p>Every bike and accessory is in the sale through Sunday, Nov 29 at 9 PM CT.</p>
              <Link className="btn btn--outline-light" href="/black-friday">
                Shop deals
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
