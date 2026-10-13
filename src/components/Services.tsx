import { CONTENT, type Lang } from '../content';
import { useState } from 'react';

export function Services() {
  const [lang] = useState<Lang>('he');
  const copy = CONTENT[lang].services;

  // פנייה ישירה לשמות הקבצים המדויקים שרואים בצילום המסך שלך
  const serviceImages = [
    '/plumbing.jpg',    // אינסטלציה ומערכות מים
    '/electric.jpg',    // חשמל ותאורה (שונה מ-electricity ל-electric)
    '/sealing.jpg',     // איטום ורטיבות
    '/welding.jpg',     // ריתוך ומסגרות
    '/renovation.jpg',  // שטחים משותפים (משתמש ב-renovation הקיים אצלך)
    '/paint.jpg'        // עבודות בבית (משתמש ב-paint הקיים אצלך)
  ];

  return (
    <section id="services" className="premium-services-section">
      <div className="shell">
        <div className="services-main-head">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2>{copy.title}</h2>
          <p className="services-main-lede">{copy.lede}</p>
        </div>

        <div className="premium-services-container">
          {copy.items.map((item, index) => {
            const layoutClass = index % 2 === 0 ? 'layout-normal' : 'layout-reverse';
            const displayNumber = String(index + 1).padStart(2, '0');

            return (
              <article key={index} className={`premium-service-card ${layoutClass}`}>
                <div className="premium-card-text">
                  <span className="premium-card-number">{displayNumber}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div 
                  className="premium-card-image" 
                  style={{ backgroundImage: `url(${serviceImages[index]})` }}
                />
              </article>
            );
          })}
        </div>

        <div className="services-bottom-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>{copy.note}</span>
        </div>
      </div>
    </section>
  );
}
