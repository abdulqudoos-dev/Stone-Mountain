import Link from 'next/link';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <Icon name="bike" size={48} />
        <h1 className="section-title">Page not found</h1>
        <p className="lede">This page moved or doesn’t exist. Check the address, or go back to the home page.</p>
        <div className="hero-actions">
          <Link className="btn btn--dark" href="/">
            Back to home
          </Link>
          <Link className="btn btn--line" href="/black-friday">
            Shop deals
          </Link>
        </div>
      </div>
    </section>
  );
}
