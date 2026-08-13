import { useLang } from '../lang';
import { InfoIcon, ToolGlyph } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  return (
    <section className="services" id="services">
      <div className="shell services__inner">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2>{copy.services.title}</h2>
            <p>{copy.services.lede}</p>
          </div>
        </Reveal>

        <div className="services__grid">
          {copy.services.items.map((item, index) => (
            <Reveal as="article" className="jobcard" key={item.title} delay={index * 60}>
              <div className="jobcard__top">
                <ToolGlyph name={item.icon} />
                <span className="jobcard__num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="services__note">
            <InfoIcon />
            <span>{copy.services.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
