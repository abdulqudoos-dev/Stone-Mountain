import Link from 'next/link';
import Photo from './Photo';

// Page header for collections. Without an image it's a plain text header,
// so the product cards below are the first pictures you see.
export default function CollectionHero({ title, lede, image, children }) {
  return (
    <section className={`container collection-hero ${image ? '' : 'collection-hero--text'}`.trim()}>
      <div className="collection-hero__copy">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title.replace(/\.$/, '')}</span>
        </nav>
        <div>
          <h1>{title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {children}
        </div>
      </div>
      {image ? (
        <div className={`collection-hero__media ${image.contain ? 'is-contain' : ''}`}>
          <Photo src={image.src} alt={image.alt} position={image.position} eager />
        </div>
      ) : null}
    </section>
  );
}
