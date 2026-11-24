import Stars from './Stars';
import { ALL_SAMPLE_REVIEWS, getReviews, summary } from '@/lib/reviews';

// Every review shown is a labeled sample until real reviews arrive
// (see lib/reviews.js).
export default function Reviews({ slug, id = 'reviews' }) {
  const items = getReviews(slug);
  const { average, count } = summary(slug ? items : ALL_SAMPLE_REVIEWS);

  return (
    <section className="section reviews-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="reviews-head">
          <div className="reviews-head__main">
            <h2 className="section-title" id={`${id}-title`}>
              Reviews
            </h2>
            <p className="reviews-summary">
              <Stars rating={average} size={22} />
              <span>
                <b>{average.toFixed(1)}</b> out of 5, from {count} sample reviews
              </span>
            </p>
          </div>
          <p className="reviews-note">
            <span className="sample-tag">Sample</span>
            Placeholder reviews that show the layout. Real customer reviews replace them before launch.
          </p>
        </div>

        <ul className="review-grid">
          {items.map((r) => (
            <li key={`${r.slug}-${r.title}`} className="review">
              <Stars rating={r.rating} size={17} />
              <h3 className="review__title">{r.title}</h3>
              <p className="review__body">{r.body}</p>
              <p className="review__meta">
                <span>{r.product}</span>
                <span className="sample-tag">Sample review</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
