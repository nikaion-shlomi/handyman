import { useLang } from '../lang';
import { InfoIcon } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  // נתיבי התמונות המדויקים מתוך תיקיית public שלך
  const serviceImages = [
    '/plumbing.jpg',    // 01. אינסטלציה ומערכות מים
    '/electric.jpg',    // 02. חשמל ותאורה
    '/sealing.jpg',     // 03. איטום ורטיבות
    '/welding.jpg',     // 04. ריתוך ומסגרות
    '/renovation.jpg',  // 05. שטחים משותפים
    '/paint.jpg'        // 06. עבודות בבית
  ];

  return (
    <section className="premium-services-section" id="services">
      <div className="shell">
        <Reveal>
          <div className="services-main-head">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2>{copy.services.title}</h2>
            <p className="services-main-lede">{copy.services.lede}</p>
          </div>
        </Reveal>

        {/* מיכל הבלוקים ברוחב מלא */}
        <div className="premium-blocks-container">
          {copy.services.items.map((item, index) => {
            const imageUrl = serviceImages[index] || '/plumbing.jpg';

            return (
              <Reveal key={item.title} delay={index * 50}>
                <article className="premium-block-card">
                  
                  {/* חלק 1: התמונה האנכית הגדולה */}
                  <div 
                    className="premium-block-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />

                  {/* חלק 2: המלל והמספר מתחתיה */}
                  <div className="premium-block-content">
                    <div className="premium-block-meta">
                      <span className="premium-block-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.body}</p>
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="services-bottom-note">
            <InfoIcon />
            <span>{copy.services.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
