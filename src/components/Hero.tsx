import { CONTACT, waLink } from '../content';
import { useLang } from '../lang';
import { PhoneIcon, WhatsAppIcon } from '../icons';
import { Reveal } from './Reveal';

export function Hero() {
  const { copy, lang } = useLang();

  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__grid">
          <div className="hero__copy">
        <Reveal>
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="hero__name">{copy.hero.name}</h1>
          <p className="hero__trade">{copy.hero.trade}</p>
        </Reveal>

        <Reveal delay={90}>
          <p className="hero__claim">{copy.hero.claim}</p>
          <p className="hero__lede">{copy.hero.lede}</p>

          <div className="hero__actions">
            <a
              className="btn btn--wa"
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {copy.hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href={`tel:${CONTACT.phone}`}>
              <PhoneIcon />
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
          </div>

          {CONTACT.photo ? (
            <Reveal className="portrait" delay={140}>
              <figure>
                <img src={CONTACT.photo} alt={copy.hero.name} />
                <figcaption>
                  {copy.hero.name} · {copy.hero.trade}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={180}>
          <div className="hero__stats">
            {copy.hero.stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <div className="hero__statvalue">{stat.value}</div>
                <div className="hero__statlabel">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
