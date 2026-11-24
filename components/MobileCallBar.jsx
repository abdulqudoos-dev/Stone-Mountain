'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { SITE } from '@/lib/site';

// Phones only (CSS hides it above 640px). Slides in once the hero is
// scrolled past, so it never covers the first screen.
export default function MobileCallBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`call-bar ${shown ? 'is-shown' : ''}`} aria-hidden={!shown}>
      <a className="btn btn--dark btn--block" href={SITE.phoneHref} tabIndex={shown ? 0 : -1}>
        <Icon name="phone" size={18} />
        Questions? Call {SITE.phone}
      </a>
    </div>
  );
}
