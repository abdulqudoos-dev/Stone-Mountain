// Cover-fit photo. `cropTop` and `cropBottom` trim text baked into some
// client images (0.2 = hide 20%) without editing the file.
// Shopify and Unsplash URLs get a srcSet so phones download smaller files.
const WIDTHS = [640, 960, 1280, 1600, 2000];

export function srcSetFor(src) {
  const key = src.includes('images.unsplash.com') ? 'w' : src.includes('cdn.shopify.com') ? 'width' : null;
  const m = key && src.match(new RegExp(`[?&]${key}=(\\d+)`));
  if (!m) return undefined;
  const max = Number(m[1]);
  return WIDTHS.filter((w) => w < max)
    .concat(max)
    .map((w) => `${src.replace(new RegExp(`([?&]${key}=)\\d+`), `$1${w}`)} ${w}w`)
    .join(', ');
}

export default function Photo({
  src,
  alt,
  position = '50% 50%',
  cropTop = 0,
  cropBottom = 0,
  eager = false,
  priority = false,
  sizes = '100vw',
  className = '',
}) {
  const style = { objectPosition: position };
  const crop = cropTop || cropBottom;
  if (crop) style['--photo-h'] = `${(100 / (1 - crop)).toFixed(2)}%`;
  const cropClass = cropTop ? 'photo--crop' : cropBottom ? 'photo--crop-bottom' : '';
  return (
    <img
      className={`photo ${cropClass} ${className}`.replace(/\s+/g, ' ').trim()}
      src={src}
      srcSet={srcSetFor(src)}
      sizes={sizes}
      alt={alt}
      style={style}
      loading={eager || priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
