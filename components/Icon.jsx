// One consistent line-icon set: 24px grid, 1.6 stroke, round joins.
const PATHS = {
  bolt: <path d="M13.2 2.5 4.8 13.6h6.4l-1 7.9 8.4-11.1h-6.4l1-7.9Z" />,
  mountain: (
    <>
      <path d="M2.5 19.5 9.2 8.3l3.9 6.4" />
      <path d="M10.8 19.5 15.4 11l6.1 8.5H2.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M8.2 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.8" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2.2 5-5 2.2 2.2-5 5-2.2Z" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20Z" />,
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 9.5h4.3l3.7 3.8v3.2h-8" />
      <circle cx="6.5" cy="17.5" r="1.9" />
      <circle cx="17" cy="17.5" r="1.9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.3 2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 9.8h19M6.5 14.8h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.8 5.8v6c0 4.4 3 7.6 7.2 9.4 4.2-1.8 7.2-5 7.2-9.4v-6L12 2.8Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  wrench: <path d="M14.8 4.2a4.6 4.6 0 0 0-5.6 5.9l-6 6a1.9 1.9 0 0 0 2.7 2.7l6-6a4.6 4.6 0 0 0 5.9-5.6l-2.9 2.9-2.6-.4-.4-2.6 2.9-2.9Z" />,
  phone: <path d="M5.2 3.5h3.3l1.8 4.6-2.4 1.5a11.5 11.5 0 0 0 6.5 6.5l1.5-2.4 4.6 1.8v3.3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3.2 5.6a2 2 0 0 1 2-2.1Z" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3 7 9 6.2L21 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s-6.8-6-6.8-11.6a6.8 6.8 0 0 1 13.6 0c0 5.6-6.8 11.6-6.8 11.6Z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12.5 4.4 4.4L19 7.3" />,
  'arrow-left': <path d="M19 12H5m6-6.5L4.5 12l6.5 6.5" />,
  'arrow-right': <path d="M5 12h14m-6-6.5 6.5 6.5-6.5 6.5" />,
  'arrow-up-right': <path d="M7 17 17 7M8.5 7H17v8.5" />,
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  battery: (
    <>
      <rect x="2.5" y="7" width="16.5" height="10" rx="2.2" />
      <path d="M21.5 10.5v3M6 10.2v3.6M9.3 10.2v3.6M12.6 10.2v3.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.8 16.5a8.2 8.2 0 1 1 16.4 0" />
      <path d="m12 16.5 4-5.3" />
      <circle cx="12" cy="16.5" r="1.2" />
    </>
  ),
  disc: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 3.5v2.6M12 17.9v2.6M3.5 12h2.6M17.9 12h2.6" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M5.5 18.5l2.1-2.1M16.4 7.6l2.1-2.1" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  cart: (
    <>
      <path d="M2.8 4h2.4l2.3 10.6a1.6 1.6 0 0 0 1.6 1.3h8.3a1.6 1.6 0 0 0 1.6-1.2L20.8 8H6.1" />
      <circle cx="9.6" cy="19.6" r="1.3" />
      <circle cx="17" cy="19.6" r="1.3" />
    </>
  ),
  store: (
    <>
      <path d="M4.5 10.2V20h15v-9.8" />
      <path d="M3.2 9.6 5 4h14l1.8 5.6a2.9 2.9 0 0 1-5.9.4 2.9 2.9 0 0 1-5.8 0 2.9 2.9 0 0 1-5.9-.4Z" />
      <path d="M10 20v-5.2h4V20" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12.2V3.5h8.7l9.3 9.3-8.7 8.7L3 12.2Z" />
      <circle cx="7.6" cy="8" r="1.5" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.8" cy="16.5" r="3.6" />
      <circle cx="18.2" cy="16.5" r="3.6" />
      <path d="M5.8 16.5 9.4 9h6.2l2.6 7.5M9.4 9l3.1 7.5h5.7M12.2 6.2h3.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
    </>
  ),
  facebook: <path d="M14.2 8.2h2.9V4.4h-2.9a4.1 4.1 0 0 0-4.1 4.1v2.6H7.4v3.8h2.7v6.7h3.9v-6.7h2.9l.6-3.8H14v-2c0-.5.4-.9.9-.9Z" />,
};

export default function Icon({ name, size = 20, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name] || null}
    </svg>
  );
}
