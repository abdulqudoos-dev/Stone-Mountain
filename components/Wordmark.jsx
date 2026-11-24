// The client's logo, redrawn as a crisp vector from the mark on
// stonemountainbikecompany.com: a red rider pulling a wheelie on an e-bike
// with a lightning bolt, "STONE MOUNTAIN" in a heavy slab serif, "Bike" in a
// red brush script and "CO." in the slab again. Swap in their master file
// if they send one.
export function LogoMark({ className = '' }) {
  return (
    <svg className={`logo__mark ${className}`.trim()} viewBox="-4 -1 167 158" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* rider */}
        <path d="M24 25 9.5 60" strokeWidth="12.5" />
        <path d="M24 25l23.5 4.4L68.5 18.5" strokeWidth="10.5" />
        <path d="M9.5 60l35.7-10.2L72.5 66.5" strokeWidth="11.5" />
        {/* wheels */}
        <circle cx="96.9" cy="36.9" r="24" strokeWidth="7.6" />
        <circle cx="44" cy="95.2" r="24" strokeWidth="7.6" />
      </g>
      <circle cx="27.4" cy="10.4" r="10.3" fill="currentColor" />
      {/* bolt */}
      <path d="M158.8 20.2 111.9 82.1l25.7.8-78.1 71.9 45.3-61.5-24.3-.9Z" fill="currentColor" />
    </svg>
  );
}

export default function Wordmark({ className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <LogoMark />
      <span className="logo__word">
        <span className="logo__slab">Stone Mountain</span>
        <span className="logo__script">Bike</span>
        <span className="logo__slab">Co.</span>
      </span>
    </span>
  );
}
