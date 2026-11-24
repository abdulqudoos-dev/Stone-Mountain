'use client';

import { useEffect, useRef, useState } from 'react';

/*
  Rings on the floor under the bike in the Buy section, like the contour
  lines of a granite dome seen at an angle. They ripple outward once when
  the section comes into view and again each time a different bike is
  picked (`wave` changes).
*/
const RINGS = 9;

export default function Contours({ wave = 0 }) {
  const ref = useRef(null);
  // static: no JS yet, rings simply show. armed: hidden, waiting to be seen.
  // rippling: the rings have played in, and replay whenever `wave` changes.
  const [phase, setPhase] = useState('static');

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    setPhase((p) => (p === 'static' ? 'armed' : p));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('rippling');
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      key={wave}
      className={`contours is-${phase}`}
      viewBox="0 0 1300 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: RINGS }, (_, i) => {
        const rx = 190 + i * 70;
        return (
          <ellipse
            key={i}
            cx="650"
            cy="846"
            rx={rx}
            ry={rx * 0.21}
            style={{ '--i': i, '--o': (1 - i / (RINGS + 1)).toFixed(2) }}
          />
        );
      })}
    </svg>
  );
}
