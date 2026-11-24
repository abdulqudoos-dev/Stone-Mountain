import Link from 'next/link';
import ProductShot from './ProductShot';
import { cover, formatPrice, percentOff } from '@/lib/products';
import { shipsFree } from '@/lib/site';

// Only rows the client publishes data for on every bike, so no cell says
// "call for details". Bryce 800 motor and battery specs are still to come.
const ROWS = {
  'yonah-600': {
    Type: 'E-bike',
    Power: '500W rear hub, 48V LG battery',
    Brakes: '180 mm Tektro discs',
    Extras: 'LCD display, single speed',
  },
  'bryce-800': {
    Type: 'E-bike',
    Power: 'Electric pedal assist',
    Brakes: 'Disc, front and rear',
    Extras: 'Rack, full fenders, lights, backlit LCD',
  },
  'foraker-300': {
    Type: 'Hybrid mountain bike',
    Power: 'Pedal powered, 21 speeds',
    Brakes: 'Tektro M280 discs',
    Extras: 'SR Suntour XCT fork, 27.5 in Kenda tires',
  },
  'paramount-100': {
    Type: 'Hybrid bike',
    Power: 'Pedal powered, 21 speeds',
    Brakes: 'Mechanical discs',
    Extras: '700C wheels, adjustable seat and bar',
  },
};

const LABELS = ['Type', 'Power', 'Brakes', 'Extras'];

export default function CompareTable({ models }) {
  const list = models.filter((m) => ROWS[m.slug]);
  return (
    <div className="compare-wrap" role="region" aria-label="Bike comparison" tabIndex={0}>
      <table className="compare">
        <caption className="visually-hidden">Compare Stone Mountain bikes</caption>
        <thead>
          <tr>
            <td />
            {list.map((m) => (
              <th key={m.slug} scope="col">
                <Link href={`/products/${m.slug}`} className="compare__head">
                  <ProductShot src={cover(m)} box={m.shot} aspect={1.6} pad={[0.04, 0.04, 0.04, 0.04]} sizes="200px" />
                  <span className="compare__name">{m.name}</span>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Black Friday price</th>
            {list.map((m) => (
              <td key={m.slug} className="compare__price">
                <b>{formatPrice(m.bfPrice ?? m.price)}</b>
                {m.bfPrice != null ? (
                  <>
                    {' '}
                    <s>{formatPrice(m.price)}</s>
                    <span className="compare__off">{percentOff(m)}% off</span>
                  </>
                ) : null}
              </td>
            ))}
          </tr>
          {LABELS.map((label) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {list.map((m) => (
                <td key={m.slug}>{ROWS[m.slug][label]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row">Delivery</th>
            {list.map((m) => (
              <td key={m.slug}>{shipsFree(m) ? 'Free shipping or free Atlanta pickup' : 'Shipping at checkout or free Atlanta pickup'}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
