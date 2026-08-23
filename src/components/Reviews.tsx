import { CONTACT } from '../content';
import { useLang } from '../lang';
import { StarIcon } from '../icons';
import { Reveal } from './Reveal';

function GoogleCta() {
  const { copy } = useLang();
  if (!CONTACT.google) return null;

  return (
    <div className="reviewcta">
      <h3>{copy.reviews.formTitle}</h3>
      <p className="reviewcta__lede">{copy.reviews.formLede}</p>

      <a
        className="btn btn--primary"
        href={CONTACT.google}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StarIcon />
        {copy.reviews.googleCta}
      </a>

      <p className="reviewcta__note">{copy.reviews.googleNote}</p>
    </div>
  );
}

export function Reviews() {
  const { copy } = useLang();
  const items = copy.reviews.items;

  return (
    <section className="reviews" id="reviews">
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.reviews.eyebrow}</p>
            <h2>{copy.reviews.title}</h2>
          </div>
        </Reveal>

        {items.length > 0 ? (
          <div className="reviews__grid">
            {items.map((review, index) => (
              <Reveal as="article" className="review" key={review.name} delay={index * 70}>
                <div className="review__stars" role="img" aria-label={`${review.stars}/5`}>
                  {Array.from({ length: review.stars }, (_, star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
                <blockquote className="review__quote">{review.quote}</blockquote>
                <footer className="review__by">
                  <span className="review__name">{review.name}</span>
                  <span className="review__meta">
                    {review.job} · {review.area}
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="reviews__empty">{copy.reviews.empty}</p>
          </Reveal>
        )}

        <Reveal delay={90}>
          <GoogleCta />
        </Reveal>
      </div>
    </section>
  );
}
