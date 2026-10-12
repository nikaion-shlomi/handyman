import { useLang } from '../lang';
import { InfoIcon } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  // מערך נתיבי התמונות של השירותים שלך
  const images = [
    '/plumbing.jpg',
    '/electric.jpg',
    '/paint.jpg',
    '/renovation.jpg'
  ];

  return (
    <section className="services-section" id="services">
      <div className="shell">
        <Reveal>
          <div className="services-head">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2>{copy.services.title}</h2>
            <p className="services-lede">{copy.services.lede}</p>
          </div>
        </Reveal>

        {/* מיכל השורות האסימטריות */}
        <div className="services-rows-container">
          {copy.services.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageUrl = images[index] || '/plumbing.jpg';

            return (
              <Reveal key={item.title} delay={index * 60}>
                <article className={`services-row-card ${isEven ? 'row-normal' : 'row-reverse'}`}>
                  
                  {/* חצי 1: גוש המלל */}
                  <div className="services-card-content">
                    <span className="services-card-number-mobile">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>

                  {/* חצי 2: גוש תמונת השטח */}
                  <div 
                    className="services-card-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  >
                    {/* מספר ענק צף מעל התמונה במחשב */}
                    <span className="services-card-number-desktop">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="services-note">
            <InfoIcon />
            <span>{copy.services.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
