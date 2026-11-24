'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { track } from '@/lib/track';

/*
  Google Analytics 4 + Google Ads, off until the IDs are set at build time:

    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           GA4 measurement ID
    NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX         Google Ads account tag
    NEXT_PUBLIC_GADS_CALL_LABEL=AbCdEf123    conversion label for phone clicks

  Events sent:
    click_to_call     any tel: link (header, promo bar, product page, call bar)
    begin_checkout    "Buy on our store" on a product page
    generate_lead     the "Text me my price" form
*/
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;
const CALL_LABEL = process.env.NEXT_PUBLIC_GADS_CALL_LABEL;

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID && !ADS_ID) return undefined;
    // One listener covers every phone link on the site.
    const onClick = (e) => {
      const link = e.target instanceof Element ? e.target.closest('a[href^="tel:"]') : null;
      if (!link) return;
      track('click_to_call', { link_text: link.textContent.trim(), page_path: window.location.pathname });
      if (ADS_ID && CALL_LABEL) track('conversion', { send_to: `${ADS_ID}/${CALL_LABEL}` });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const tagId = GA_ID || ADS_ID;
  if (!tagId) return null;

  const config = [GA_ID, ADS_ID]
    .filter(Boolean)
    .map((id) => `gtag('config','${id}');`)
    .join('');

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${config}`}
      </Script>
    </>
  );
}
