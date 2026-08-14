import { CONTACT, waLink } from '../content';
import { useLang } from '../lang';
import { PhoneIcon, WhatsAppIcon } from '../icons';
import { Reveal } from './Reveal';

export function Contact() {
  const { copy, lang } = useLang();

  return (
    <section className="contact" id="contact">
      <div className="shell contact__inner">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.lede}</p>
          </div>

          <div className="contact__actions">
            <a
              className="btn btn--wa"
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {copy.contact.cta}
            </a>
            <a className="btn btn--ghost" href={`tel:${CONTACT.phone}`}>
              <PhoneIcon />
              {copy.contact.call}
            </a>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div className="contact__who">
            {CONTACT.avatar ? (
              <img src={CONTACT.avatar} alt={copy.hero.name} />
            ) : (
              <span className="contact__mono" aria-hidden="true">
                {copy.hero.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')}
              </span>
            )}
            <div>
              <div className="contact__whoname">{copy.hero.name}</div>
              <div className="contact__whotrade">{copy.hero.trade}</div>
            </div>
          </div>

          <dl className="contact__facts">
            <div className="fact">
              <dt>{copy.contact.phoneLabel}</dt>
              <dd>
                <a href={`tel:${CONTACT.phone}`} dir="ltr">
                  {CONTACT.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="fact">
              <dt>{copy.contact.areaLabel}</dt>
              <dd>{copy.contact.area}</dd>
            </div>
            <div className="fact">
              <dt>{copy.contact.hoursLabel}</dt>
              <dd>{copy.contact.hours}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
