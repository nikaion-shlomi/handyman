import { useLang } from '../lang';
import { InfoIcon, ToolGlyph } from '../icons';
import { Reveal } from './Reveal';

export function Services() {
  const { copy } = useLang();

  return (
    <section className="services" id="services" style={{ background: 'var(--ground)', paddingBlock: '100px 60px' }}>
      <div className="shell services__inner">
        <Reveal>
          <div className="sectionhead" style={{ marginBottom: '60px', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)', justifyContent: 'center' }}>{copy.services.eyebrow}</p>
            <h2 style={{ color: 'var(--ink)', fontSize: '2.5rem', marginBottom: '16px' }}>{copy.services.title}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.15rem' }}>{copy.services.lede}</p>
          </div>
        </Reveal>

        {/* שינוי המבנה מרשת קוביות לשורות רחבות אסימטריות זורמות */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
          {copy.services.items.map((item, index) => {
            // חישוב אוטומטי האם השורה זוגית או אי-זוגית כדי להפוך צדדים (זיגזג)
            const isEven = index % 2 === 0;

            return (
              <Reveal 
                key={item.title} 
                delay={index * 60}
                style={{ width: '100%' }}
              >
                <article 
                  style={{
                    background: 'var(--paper)',
                    borderRadius: '24px',
                    padding: '48px',
                    border: '1px solid var(--rule-soft)',
                    boxShadow: '0 20px 40px -15px rgba(7, 30, 54, 0.05)',
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse', // כאן קורה קסם ההיפוך לסירוגין!
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '40px',
                    position: 'relative',
                    width: '100%',
                    flexWrap: 'wrap' // דואג שזה ייראה מושלם ויירד שורה אוטומטית בטלפונים ניידים
                  }}
                >
                  {/* גוש המלל והמספר */}
                  <div style={{ flex: '1', minWidth: '280px', textAlign: 'right' }}>
                    {/* מספר ענק בזהב-מוקה בראש השורה */}
                    <span 
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: '3.5rem',
                        color: 'var(--accent)',
                        opacity: 0.18,
                        display: 'block',
                        lineHeight: '1',
                        marginBottom: '8px'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--ink-soft)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
                      {item.body}
                    </p>
                  </div>

                  {/* גוש הגרפיקה והאייקון המעוצב בצד השני */}
                  <div 
                    style={{ 
                      flex: 'none', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: 'var(--ground-deep)',
                      width: '100px',
                      height: '100px',
                      borderRadius: '20px',
                      border: '1px solid var(--rule-soft)',
                      color: 'var(--accent)'
                    }}
                  >
                    <div style={{ transform: 'scale(1.8)' }}> {/* מגדיל מעט את האייקון המקורי שלך לנוכחות חזקה */}
                      <ToolGlyph name={item.icon} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="services__note" style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink-faint)', justifyContent: 'center' }}>
            <InfoIcon />
            <span>{copy.services.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
