// Five stars, filled to the rating (4.5 fills four and a half).
const STAR =
  'M10 1.5l2.47 5.3 5.78.62-4.3 3.93 1.2 5.7L10 14.17l-5.15 2.88 1.2-5.7-4.3-3.93 5.78-.62z';

function Row() {
  return [0, 1, 2, 3, 4].map((i) => (
    <svg key={i} viewBox="0 0 20 20" width="1em" height="1em" aria-hidden="true" focusable="false">
      <path d={STAR} fill="currentColor" />
    </svg>
  ));
}

export default function Stars({ rating, size = 16, label }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="stars" style={{ fontSize: size }} role="img" aria-label={label ?? `${rating} out of 5 stars`}>
      <span className="stars__row stars__row--base">
        <Row />
      </span>
      <span className="stars__row stars__row--fill" style={{ width: `${pct}%` }}>
        <Row />
      </span>
    </span>
  );
}
