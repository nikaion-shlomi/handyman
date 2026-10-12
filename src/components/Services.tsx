import { useLang } from '../lang';
import { InfoIcon } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  // 📌 מערך מעודכן המקשר תמונה ייחודית לכל אחד מ-6 השירותים שלך בשטח
  const images = [
    '/plumbing.jpg',    /* 01. אינסטלציה ומערכות מים */
    '/electric.jpg',    /* 02. ארונות ומערכות חשמל */
    '/paint.jpg',       /* 03. תיקוני צבע, טיח ושפכטל */
    '/renovation.jpg',  /* 04. שיפוצים כלליים ועבודות גמר */
    '/welding.jpg',     /* 05. מסגרות, ריתוך ותשתיות שטח */
    '/sealing.jpg'      /* 06. איטום, בידוד ונזילות */
  ];

  return (
    <section className="services" id="services" style={{ background: 'var(--ground)', paddingBlock: '80px' }}>
      <div className="shell">
        <Reveal>
          <div className="sectionhead" style={{ marginBottom: '60px', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)', justifyContent: 'center' }}>{copy.services.eyebrow}</p>
            <h2 style={{ color: 'var(--ink)', fontSize: '2.5rem', marginBottom: '16px' }}>{copy.services.title}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.15rem' }}>{copy.services.lede}</p>
          </div>
        </Reveal>

        {/* מיכל השורות האסימטריות */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', width: '100%' }}>
          {copy.services.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageUrl = images[index] || '/renovation.jpg';

            return (
              <Reveal key={item.title} delay={index * 60}>
                <article 
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 20px 40px -15px rgba(7, 30, 54, 0.05)',
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '48px',
                    width: '100%',
                    position: 'relative'
                  }}
                  className="services-row-card"
                >
                  
                  {/* חצי 1: גוש המלל */}
                  <div style={{ flex: '1', minWidth: '280px', textAlign: 'right' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--ink)', margin: '0 0 12px 0' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--ink-soft)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
                      {item.body}
                    </p>
                  </div>

                  {/* חצי 2: גוש תמונת השטח */}
                  <div 
                    style={{ 
                      flex: 'none', 
                      width: '45%', 
                      height: '320px', 
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      position: 'relative'
                    }}
                  >
                    {/* מספר רץ אמיתי ונקי מ-01 עד 06 אוטומטית */}
                    <span 
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: '3.5rem',
                        color: '#ffffff',
                        opacity: 0.8,
                        position: 'absolute',
                        top: '16px',
                        left: isEven ? '24px' : 'auto',
                        right: isEven ? 'auto' : '24px',
                        lineHeight: '1',
                        zIndex: 10
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
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
