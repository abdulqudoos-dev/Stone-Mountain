'use client';

import { useEffect, useState } from 'react';
import { SALE } from '@/lib/site';

const END = Date.parse(SALE.endsAt);

function split(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n) => String(n).padStart(2, '0');

export default function Countdown({ variant = 'compact' }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ended = now >= END;
  const t = split(END - now);

  // The ticking digits are hidden from screen readers; the label says it once.
  const label = ended ? 'The Black Friday sale has ended.' : `Sale ends ${SALE.endsLabel}.`;

  if (variant === 'large') {
    const units = [
      ['Days', t.days],
      ['Hours', t.hours],
      ['Minutes', t.minutes],
      ['Seconds', t.seconds],
    ];
    return (
      <div className="countdown countdown--large">
        <p className="visually-hidden">{label}</p>
        <div className="countdown__units" aria-hidden="true">
          {units.map(([name, value]) => (
            <div className="countdown__unit" key={name}>
              <span className="countdown__num" suppressHydrationWarning>
                {pad(value)}
              </span>
              <span className="countdown__label">{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <span className="countdown countdown--compact">
      <span className="visually-hidden">{label}</span>
      <span aria-hidden="true" suppressHydrationWarning>
        {ended ? 'Ended' : `${t.days}d ${pad(t.hours)}h ${pad(t.minutes)}m ${pad(t.seconds)}s`}
      </span>
    </span>
  );
}
