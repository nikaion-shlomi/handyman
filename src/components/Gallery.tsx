import { GALLERY } from '../content';
import { useLang } from '../lang';
import { Reveal } from './Reveal';

export function Gallery() {
  const { copy } = useLang();

  if (GALLERY.length === 0) return null;

  return (
    <section className="gallery" id="gallery">
      <div className="shell">
        <Reveal className="sectionhead">
          <p className="eyebrow">{copy.gallery.eyebrow}</p>
          <h2>{copy.gallery.title}</h2>
          <p>{copy.gallery.lede}</p>
        </Reveal>

        <div className="gallery__grid">
          {GALLERY.map((shot, i) => {
            const caption = copy.gallery.captions[i];
            return (
              <Reveal
                key={shot.src}
                className={`shot shot--${shot.shape}`}
                delay={80 * i}
              >
                <figure>
                  <img src={shot.src} alt={caption?.title ?? ''} loading="lazy" />
                  <figcaption>
                    <span className="shot__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="shot__title">{caption?.title}</span>
                    <span className="shot__body">{caption?.body}</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
