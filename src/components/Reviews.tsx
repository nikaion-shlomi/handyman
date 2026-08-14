import { useState } from 'react';
import { CONTACT } from '../content';
import { useLang } from '../lang';
import { StarIcon, WhatsAppIcon } from '../icons';
import { Reveal } from './Reveal';

function ReviewForm() {
  const { copy } = useLang();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const ready = name.trim() !== '' && text.trim() !== '';

  const send = (event: React.FormEvent) => {
    event.preventDefault();
    if (!ready) return;
    const message = `${copy.reviews.formTitle}\n${copy.reviews.nameLabel}: ${name.trim()}\n\n${text.trim()}`;
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <form className="reviewform" onSubmit={send}>
      <h3>{copy.reviews.formTitle}</h3>
      <p className="reviewform__lede">{copy.reviews.formLede}</p>

      <label className="reviewform__field">
        <span>{copy.reviews.nameLabel}</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={copy.reviews.namePlaceholder}
          maxLength={60}
        />
      </label>

      <label className="reviewform__field">
        <span>{copy.reviews.textLabel}</span>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={copy.reviews.textPlaceholder}
          rows={4}
          maxLength={600}
        />
      </label>

      <button className="btn btn--wa" type="submit" disabled={!ready}>
        <WhatsAppIcon />
        {copy.reviews.submit}
      </button>

      <p className="reviewform__note">{copy.reviews.formNote}</p>
    </form>
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
          <ReviewForm />
        </Reveal>
      </div>
    </section>
  );
}
