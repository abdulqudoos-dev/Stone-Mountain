'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Wordmark from './Wordmark';
import ProductShot from './ProductShot';
import { SITE } from '@/lib/site';
import { MODELS, byCategory, cover, formatPrice, maxPercentOff } from '@/lib/products';

// Every item opens a panel on hover, like the Shop menu on maticrobots.com.
// The labels stay real links, so a click (or a tap on a phone) still goes
// to the page.
const MENUS = [
  {
    id: 'shop',
    label: 'Shop',
    models: MODELS,
    intro: {
      title: 'All Black Friday deals',
      text: `Up to ${maxPercentOff}% off every bike, through Sunday at 9 PM CT.`,
      link: { href: '/black-friday', label: 'Shop the sale' },
    },
  },
  {
    id: 'e-bikes',
    label: 'e-Bikes',
    href: '/e-bikes',
    models: byCategory('e-bikes'),
    intro: {
      title: 'e-Bikes',
      text: 'Pedal assist for hills and commutes. Free shipping in the contiguous U.S.',
      link: { href: '/e-bikes', label: 'Shop e-bikes' },
    },
  },
  {
    id: 'bikes',
    label: 'Bikes',
    href: '/bikes',
    models: byCategory('bikes'),
    intro: {
      title: 'Hybrid and mountain bikes',
      text: '21 speeds and disc brakes, for trails, paths and the commute.',
      link: { href: '/bikes', label: 'Shop bikes' },
    },
  },
  {
    id: 'accessories',
    label: 'Accessories',
    href: '/accessories',
    models: byCategory('accessories'),
    intro: {
      title: 'Accessories',
      text: 'Gear for the ride, starting with a cordless pump.',
      link: { href: '/accessories', label: 'Shop accessories' },
    },
  },
  {
    id: 'service',
    label: 'Service',
    href: '/service',
    links: [
      { href: '/service', label: 'Service and repairs', text: 'Tune-ups, flats, brakes, assembly' },
      { href: '/service#shipping', label: 'Shipping and pickup', text: 'Free e-bike shipping, free Atlanta pickup' },
      { href: '/service#financing', label: 'Financing', text: 'Affirm or PayPal Credit' },
      { href: '/service#warranty', label: 'Warranty', text: '1 year on materials and workmanship' },
      { href: '/service#returns', label: 'Returns', text: '14 days on e-bikes' },
      { href: '/about#contact', label: 'Contact us', text: `${SITE.phone} or email` },
    ],
    intro: {
      title: 'Service and help',
      text: 'Our Atlanta shop works on almost any bike. Walk-ins are welcome for quick fixes.',
      link: { href: '/service', label: 'See service and repairs' },
    },
  },
];

function NavText({ children }) {
  return (
    <span className="nav-link__text" data-label={children}>
      {children}
    </span>
  );
}

function Panel({ menu }) {
  return (
    <div className="mega__inner">
      <div className="mega__intro">
        <b>{menu.intro.title}</b>
        <p>{menu.intro.text}</p>
        <Link className="text-link" href={menu.intro.link.href}>
          {menu.intro.link.label}
        </Link>
      </div>
      {menu.models ? (
        <div className="mega__products">
          {menu.models.map((m, i) => (
            <Link key={m.slug} href={`/products/${m.slug}`} className="mega-card" style={{ '--i': i }}>
              <ProductShot src={cover(m)} box={m.shot} aspect={1.45} pad={[0.08, 0.05, 0.06, 0.05]} sizes="220px" />
              <b>{m.name}</b>
              <span className="mega-card__meta">
                {formatPrice(m.bfPrice ?? m.price)}
                {m.bfPrice != null ? <s>{formatPrice(m.price)}</s> : null}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <ul className="mega__links">
          {menu.links.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <Link href={l.href}>
                <b>{l.label}</b>
                <span>{l.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() || '/';
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(null);
  // The last menu shown stays in the panel while it closes.
  const [shown, setShown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const lastY = useRef(0);
  const canHover = useRef(false);
  const closeTimer = useRef(null);

  // Like maticrobots.com: the bar slides away while you scroll down and
  // comes back as soon as you scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) < 6) return;
      setHidden(delta > 0 && y > 240);
      lastY.current = y;
    };
    lastY.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    canHover.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    return () => clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) setShown(open);
  }, [open]);

  useEffect(() => {
    if (!open && !menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMenuOpen(false);
      }
    };
    const onClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open, menuOpen]);

  // A short delay lets the pointer travel from a label down into its panel.
  const hoverOpen = (id) => {
    if (!canHover.current) return;
    clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const hoverClose = () => {
    if (!canHover.current) return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };

  const isActive = (href) => href && (pathname === href || pathname.startsWith(`${href}/`));
  const tucked = hidden && !open && !menuOpen;
  const panelMenu = MENUS.find((m) => m.id === (open || shown));

  return (
    <header
      ref={headerRef}
      className={`site-header ${tucked ? 'is-tucked' : ''}`}
      onFocusCapture={() => setHidden(false)}
    >
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label={`${SITE.name} home`}>
          <Wordmark />
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {MENUS.map((menu) => (
              <li key={menu.id} onMouseEnter={() => hoverOpen(menu.id)} onMouseLeave={hoverClose}>
                {menu.href ? (
                  <Link
                    className="nav-link"
                    href={menu.href}
                    aria-current={isActive(menu.href) ? 'page' : undefined}
                    data-open={open === menu.id || undefined}
                  >
                    <NavText>{menu.label}</NavText>
                    <Icon name="chevron-down" size={14} className={open === menu.id ? 'is-flipped' : ''} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="nav-link"
                    aria-expanded={open === menu.id}
                    aria-controls="nav-panel"
                    // A mouse click after hovering keeps it open; keyboard and touch toggle.
                    onClick={(e) =>
                      setOpen((v) => (e.detail > 0 && canHover.current ? menu.id : v === menu.id ? null : menu.id))
                    }
                  >
                    <NavText>{menu.label}</NavText>
                    <Icon name="chevron-down" size={14} className={open === menu.id ? 'is-flipped' : ''} />
                  </button>
                )}
              </li>
            ))}
            <li onMouseEnter={hoverClose}>
              <Link
                className="nav-link nav-link--sale"
                href="/black-friday"
                aria-current={isActive('/black-friday') ? 'page' : undefined}
              >
                <NavText>Black Friday</NavText>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href={SITE.phoneHref}>
            <span className="header-phone__icon" aria-hidden="true">
              <Icon name="phone" size={16} />
            </span>
            <span className="header-phone__text">
              <span className="header-phone__label">Questions? Call</span>
              <span className="header-phone__num">{SITE.phone}</span>
            </span>
          </a>
          <Link className="btn btn--dark btn--sm header-cta" href="/black-friday">
            Shop the sale
          </Link>
          {/* Phones and small tablets, after AQ's mockup: search and cart
              open the live store, where checkout happens. */}
          <a
            className="header-icon"
            href={`${SITE.storeUrl}/search`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Search the store (opens in a new tab)"
          >
            <Icon name="search" size={26} />
          </a>
          <a
            className="header-icon"
            href={`${SITE.storeUrl}/cart`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cart on our store (opens in a new tab)"
          >
            <Icon name="cart" size={26} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <div
        id="nav-panel"
        className={`mega ${open ? 'is-open' : ''}`}
        onMouseEnter={() => open && hoverOpen(open)}
        onMouseLeave={hoverClose}
        inert={!open}
      >
        {panelMenu ? <Panel key={panelMenu.id} menu={panelMenu} /> : null}
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobile">
            <ul>
              <li>
                <Link className="mobile-menu__link mobile-menu__link--sale" href="/black-friday">
                  Black Friday: up to {maxPercentOff}% off
                </Link>
              </li>
              {MODELS.filter((m) => m.category !== 'accessories').map((m) => (
                <li key={m.slug}>
                  <Link className="mobile-menu__link" href={`/products/${m.slug}`}>
                    {m.name}
                    <span className="mobile-menu__meta">
                      {formatPrice(m.bfPrice ?? m.price)}
                      {m.bfPrice != null ? <s>{formatPrice(m.price)}</s> : null}
                    </span>
                  </Link>
                </li>
              ))}
              {MENUS.filter((m) => m.href).map((m) => (
                <li key={m.id}>
                  <Link className="mobile-menu__link" href={m.href}>
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--dark btn--block" href={SITE.phoneHref}>
            <Icon name="phone" size={18} />
            Call {SITE.phone}
          </a>
        </div>
      ) : null}
    </header>
  );
}
