import './globals.css';
import PromoBar from '@/components/PromoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import Analytics from '@/components/Analytics';
import { titleFor } from '@/lib/site';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Instrument+Sans:wdth,wght@75..100,400..700&family=Kaushan+Script&family=Rokkitt:wght@800;900&display=swap';

export const metadata = {
  title: titleFor('Stone Mountain Bike Company'),
  description:
    'Black Friday on electric and hybrid bikes from Stone Mountain Bike Co. in Atlanta. Free e-bike shipping in the contiguous U.S., financing with Affirm or PayPal Credit, and a 1-year warranty.',
  // Preview build: keep it out of search until it moves to the client domain.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#ECEBE7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <PromoBar placement="top" />
        <Header />
        <PromoBar placement="below" />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
