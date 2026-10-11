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
    <div className="reviewcta" style={{ background: 'var(--ground-deep)', borderRadius: '16px', padding: '32px', border: '1px solid var(--rule-soft)' }}>
      <h3 style={{ color: 'var(--ink)', marginBottom: '8px' }}>{copy.reviews.formTitle}</h3>
      <p className="reviewcta__lede" style={{ color: 'var(--ink-soft)', marginBottom: '24px' }}>{copy.reviews.formLede}</p>

      <a
        href={CONTACT.google}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          backgroundColor: 'var(--accent)',
          color: 'var(--ground)',
          padding: '14px 28px',
          borderRadius: '999px',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(150, 120, 68, 0.25)',
          transition: 'all 0.2s ease',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        <StarIcon />
        להוספת חוות דעת והתרשמות מהשירות בגוגל
      </a>

      <p className="reviewcta__note" style={{ color: 'var(--ink-faint)', marginTop: '16px', fontSize: '0.85rem' }}>{copy.reviews.googleNote}</p>
    </div>
  );
}

export function Reviews() {
  const { copy } = useLang();
  const google = useGoogleReviews();
  const reviews: GoogleReview[] = google?.reviews || [];

  return (
    <section className="reviews" id="reviews" style={{ background: 'var(--ground)' }}>
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>{copy.reviews.eyebrow}</p>
            <h2 style={{ color: 'var(--ink)' }}>{copy.reviews.title}</h2>
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
                style={{ border: '1px solid var(--rule-soft)', background: 'var(--paper)', borderRadius: '12px', padding: '16px' }}
              >
                <span className="reviews__score" style={{ color: 'var(--ink)' }}>{google.rating.toFixed(1)}</span>
                <Stars count={Math.round(google.rating)} />
                <span className="reviews__count" style={{ color: 'var(--ink-soft)' }}>
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
                  style={{ background: 'var(--paper)', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.02)', border: '1px solid var(--rule-soft)' }}
                >
                  <Stars count={review.rating} />
                  <blockquote className="review__quote" style={{ color: 'var(--ink-soft)' }}>{review.text}</blockquote>
                  <footer className="review__by">
                    {review.authorUri ? (
                      <a
                        className="review__name"
                        href={review.authorUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--ink)' }}
                      >
                        {review.author}
                      </a>
                    ) : (
                      <span className="review__name" style={{ color: 'var(--ink)' }}>{review.author}</span>
                    )}
                    <span className="review__meta" style={{ color: 'var(--ink-faint)' }}>{review.when}</span>
                  </footer>
                </Reveal>
              ))}
            </div>

            <p className="reviews__source" style={{ color: 'var(--ink-faint)' }}>{copy.reviews.googleSource}</p>
          </>
        ) : (
          <Reveal>
            <p className="reviews__empty" style={{ color: 'var(--ink-soft)' }}>{copy.reviews.empty}</p>
          </Reveal>
        )}

        <Reveal delay={90}>
          <GoogleCta />
        </Reveal>
      </div>
    </section>
  );
}
