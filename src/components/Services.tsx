import { useLang } from '../lang';
import { InfoIcon } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  // מערך נתיבי התמונות שכבר העלית לאתר, לפי סדר השירותים שלך
  const serviceImages = [
    '/plumbing.jpg',    // תמונה עבור אינסטלציה
    '/electric.jpg',    // תמונה עבור חשמל
    '/paint.jpg',       // תמונה עבור איטום ורטיבות
    '/steel.jpg',       // תמונה עבור ריתוך ומסגרות (תוכל לשנות את השם אם הוא אחר)
    '/parking.jpg',     // תמונה עבור שטחים משותפים
    '/home.jpg'         // תמונה עבור עבודות בבית
  ];

  return (
    <section className="services" id="services">
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2>{copy.services.title}</h2>
            <p>{copy.services.lede}</p>
          </div>
        </Reveal>

        <div className="services__grid">
          {copy.services.items.map((item, index) => {
            // שליפת התמונה המתאימה לפי המיקום של השירות במערך
            const imageUrl = serviceImages[index] || '/plumbing.jpg';

            return (
              <Reveal key={item.title} delay={index * 50}>
                <article>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  
                  {/* מיכל התמונה החדש במקום האייקון הישן */}
                  <div 
                    className="service-image-holder" 
                    style={{ 
                      width: '100%', 
                      height: '140px', 
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '12px',
                      marginBottom: '20px',
                      border: '1px solid var(--rule-soft)'
                    }}
                  />

                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            );
          })}
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
