import { SHOW_REVIEWS } from '../content';
import { useLang } from '../lang';
import { StarIcon } from '../icons';
import { Reveal } from './Reveal';

export function Reviews() {
  const { copy } = useLang();

  if (!SHOW_REVIEWS) return null;

  return (
    <section className="reviews" id="reviews">
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.reviews.eyebrow}</p>
            <h2>{copy.reviews.title}</h2>
          </div>
        </Reveal>

        <div className="reviews__grid">
          {copy.reviews.items.map((review, index) => (
            <Reveal as="article" className="review" key={review.name} delay={index * 70}>
              <div
                className="review__stars"
                role="img"
                aria-label={`${review.stars}/5`}
              >
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
      </div>
    </section>
  );
}
