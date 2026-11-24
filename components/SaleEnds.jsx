'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { SALE } from '@/lib/site';

const END = Date.parse(SALE.endsAt);

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

// "4 days, 20 hours left" (short: "4d 20h left"), then hours and minutes
// on the last day.
function timeLeft(ms) {
  const mins = Math.floor(ms / 60000);
  const days = Math.floor(mins / 1440);
  const hours = Math.floor((mins % 1440) / 60);
  const m = mins % 60;
  if (days >= 1) {
    return {
      long: hours ? `${plural(days, 'day')}, ${plural(hours, 'hour')} left` : `${plural(days, 'day')} left`,
      short: `${days}d ${hours}h left`,
    };
  }
  if (hours >= 1) return { long: `${plural(hours, 'hour')}, ${m} min left`, short: `${hours}h ${m}m left` };
  const left = `${Math.max(1, mins)} min left`;
  return { long: left, short: left };
}

// The sale deadline on one line: when it ends, and how long is left in a chip.
export default function SaleEnds({ className = '' }) {
  const [left, setLeft] = useState(null);

  useEffect(() => {
    const update = () => {
      const ms = END - Date.now();
      setLeft(ms <= 0 ? 'ended' : timeLeft(ms));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  if (left === 'ended') {
    return <span className={`sale-ends ${className}`.trim()}>The Black Friday sale has ended.</span>;
  }

  return (
    <span className={`sale-ends ${className}`.trim()}>
      <Icon name="clock" size={17} />
      <span className="sale-ends__when">
        <span className="sale-ends__long">Sale ends {SALE.endsLabel}</span>
        <span className="sale-ends__short">Ends {SALE.endsShort}</span>
      </span>
      {left ? (
        <span className="sale-ends__left">
          <span className="sale-ends__long">{left.long}</span>
          <span className="sale-ends__short">{left.short}</span>
        </span>
      ) : null}
    </span>
  );
}
