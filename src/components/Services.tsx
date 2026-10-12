import { useLang } from '../lang';
import { InfoIcon } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  // מערך התמונות של שלומי בהתאמה לשירותים
  const images = [
    '/plumbing.jpg',
    '/electric.jpg',
    '/paint.jpg',
    '/renovation.jpg'
  ];

  return (
    <section className="premium-services-section" id="services">
      <div className="shell">
        <Reveal>
          <div className="sectionhead" style={{ marginBottom: '60px', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)', justifyContent: 'center' }}>{copy.services.eyebrow}</p>
            <h2 style={{ color: 'var(--ink)', fontSize: '2.5rem', marginBottom: '16px' }}>{copy.services.title}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.15rem' }}>{copy.services.lede}</p>
          </div>
        </Reveal>

        {/* מיכל השורות האסימטריות המנוהל על ידי CSS גמיש בלבד */}
        <div className="premium-services-container">
          {copy.services.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageUrl = images[index] || '/plumbing.jpg';

            return (
              <Reveal key={item.title} delay={index * 60}>
                <article className={`premium-service-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}>
                  
                  {/* חצי 1: גוש המלל */}
                  <div className="premium-card-text">
                    <span className="premium-card-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>

                  {/* חצי 2: גוש התמונה */}
                  <div 
                    className="premium-card-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  >
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink-faint)', justifyContent: 'center' }}>
            <InfoIcon />
            <span>{copy.services.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
