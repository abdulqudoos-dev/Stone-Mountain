import { srcSetFor } from './Photo';

/*
  Frames a studio photo so the bike fills the box the same way on every
  card, whatever the white space in the original file. `box` is where the
  bike sits in the photo ([left, top, right, bottom], 0 to 1, from
  lib/products.js), `aspect` is the frame's width / height, and `pad` is
  the breathing room ([top, right, bottom, left], as fractions of the frame).
  The photos are square, which the maths relies on.
*/
export default function ProductShot({
  src,
  box = [0, 0, 1, 1],
  aspect = 1.6,
  pad = [0.08, 0.06, 0.06, 0.06],
  alt = '',
  sizes = '(max-width: 640px) 50vw, 25vw',
  eager = false,
  className = '',
}) {
  const [x0, y0, x1, y1] = box;
  const [t, r, b, l] = pad;
  const s = Math.min((1 - l - r) / (x1 - x0), (1 - t - b) / (aspect * (y1 - y0)));
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const left = (l + (1 - l - r) / 2 - cx * s) * 100;
  const top = (t + (1 - t - b) / 2 - cy * s * aspect) * 100;
  return (
    <span className={`shot ${className}`.trim()} style={{ aspectRatio: String(aspect) }}>
      <img
        className="shot__img"
        src={src}
        srcSet={srcSetFor(src)}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{ width: `${(s * 100).toFixed(2)}%`, left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` }}
      />
    </span>
  );
}
