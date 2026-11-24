import Link from 'next/link';
import Icon from './Icon';
import Wordmark from './Wordmark';
import NewsletterForm from './NewsletterForm';
import { SITE } from '@/lib/site';
import { MODELS } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label={`${SITE.name} home`} className="footer-brand__logo">
              <Wordmark />
            </Link>
            <p>
              Electric and hybrid bikes from Atlanta, shipped across the U.S. or ready for pickup by
              appointment.
            </p>
            <div className="footer-social">
              <a href={SITE.instagram} aria-label="Instagram" className="round-btn">
                <Icon name="instagram" size={18} />
              </a>
              <a href={SITE.facebook} aria-label="Facebook" className="round-btn">
                <Icon name="facebook" size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h2>Shop</h2>
            <ul>
              {MODELS.map((m) => (
                <li key={m.slug}>
                  <Link href={`/products/${m.slug}`}>{m.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/black-friday">Black Friday deals</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Help</h2>
            <ul>
              <li>
                <Link href="/service">Service and repairs</Link>
              </li>
              <li>
                <Link href="/service#financing">Financing</Link>
              </li>
              <li>
                <Link href="/service#shipping">Shipping and pickup</Link>
              </li>
              <li>
                <Link href="/service#returns">Returns</Link>
              </li>
              <li>
                <Link href="/service#warranty">Warranty</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Company</h2>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/about#contact">Contact</Link>
              </li>
              <li>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                <a href={SITE.emailHref}>Email us</a>
              </li>
            </ul>
          </div>

          <div className="footer-news">
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {SITE.legalName}</p>
          <p>Design preview by Thanos Labs. Sale prices are placeholders. Not indexed by search engines.</p>
        </div>
      </div>
    </footer>
  );
}
