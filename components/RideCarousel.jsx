'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Photo from './Photo';

export default function RideCarousel({ cards, label = 'Rides' }) {
  const track = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return undefined;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const step = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('.ride-card');
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * amount, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="ride-carousel">
      <ul className="ride-track" ref={track} aria-label={label}>
        {cards.map((c) => (
          <li key={c.title}>
            <Link href={c.href} className="ride-card">
              <Photo src={c.img} alt={c.alt} position={c.position} cropTop={c.cropTop} sizes="(max-width: 640px) 80vw, 410px" />
              <span className="ride-card__caption">
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="container carousel-controls">
        <button type="button" className="round-btn" onClick={() => step(-1)} disabled={atStart} aria-label="Previous rides">
          <Icon name="arrow-left" size={18} />
        </button>
        <button type="button" className="round-btn" onClick={() => step(1)} disabled={atEnd} aria-label="Next rides">
          <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  );
}
