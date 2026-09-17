import { useEffect, useState } from 'react';
import { CONTACT } from '../content';
import { useLang } from '../lang';
import { StarIcon } from '../icons';
import { Reveal } from './Reveal';

type GoogleReview = {
  rating: number;
  text: string;
  author: string;
  authorUri: string;
  when: string;
};

type GoogleReviews = {
  rating: number | null;
  count: number;
  uri: string;
  reviews: GoogleReview[];
};

function useGoogleReviews() {
  const { lang } = useLang();
  const [data, setData] = useState<GoogleReviews | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/reviews?lang=${lang}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((body: GoogleReviews | null) => setData(body?.reviews ? body : null))
      .catch(() => setData(null));
    return () => controller.abort();
  }, [lang]);

  return data;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="review__stars" role="img" aria-label={`${count}/5`}>
      {Array.from({ length: count }, (_, star) => (
        <StarIcon key={star} />
      ))}
    </div>
  );
}

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
  const google = useGoogleReviews();
  const reviews = google?.reviews ?? [];

  return (
    <section className="reviews" id="reviews">
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.reviews.eyebrow}</p>
            <h2>{copy.reviews.title}</h2>
          </div>
        </Reveal>

        {google && reviews.length > 0 ? (
          <>
            {google.rating !== null ? (
              <a
                className="reviews__summary"
                href={google.uri || CONTACT.google}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="reviews__score">{google.rating.toFixed(1)}</span>
                <Stars count={Math.round(google.rating)} />
                <span className="reviews__count">
                  {google.count} {copy.reviews.googleCountLabel}
                </span>
              </a>
            ) : null}

            <div className="reviews__grid">
              {reviews.map((review, index) => (
                <Reveal
                  as="article"
                  className="review"
                  key={`${review.author}-${index}`}
                  delay={index * 70}
                >
                  <Stars count={review.rating} />
                  <blockquote className="review__quote">{review.text}</blockquote>
                  <footer className="review__by">
                    {review.authorUri ? (
                      <a
                        className="review__name"
                        href={review.authorUri}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {review.author}
                      </a>
                    ) : (
                      <span className="review__name">{review.author}</span>
                    )}
                    <span className="review__meta">{review.when}</span>
                  </footer>
                </Reveal>
              ))}
            </div>

            <p className="reviews__source">{copy.reviews.googleSource}</p>
          </>
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
