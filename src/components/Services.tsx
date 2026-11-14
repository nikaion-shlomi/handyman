import { CONTENT } from '../content';
import { useLang } from '../lang';
import { Carousel } from './Carousel';

export function Services() {
  const { lang } = useLang();
  const copy = CONTENT[lang].services;

  // שמות הקבצים של התמונות שבתיקיית public
  const serviceImages = [
    '/plumbing.jpg',    // אינסטלציה ומערכות מים
    '/electric.jpg',    // חשמל ותאורה
    '/sealing.jpg',     // איטום ורטיבות
    '/welding.jpg',     // ריתוך ומסגרות
    '/renovation.jpg',  // שטחים משותפים
    '/paint.jpg'        // עבודות בבית
  ];

  return (
    <section id="services" style={{ paddingBlock: '48px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '20px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>{copy.lede}</p>
        </div>

        <Carousel variant="card" autoPlayMs={8000}>
          {copy.items.map((item, index) => (
            <article
              key={index}
              style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div
                role="img"
                aria-label={item.title}
                style={{ height: '150px', backgroundImage: `url(${serviceImages[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 6px 0', color: 'var(--ink)', fontWeight: 700, lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '1rem', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            </article>
          ))}
        </Carousel>

        {copy.moreGroups && copy.moreGroups.length > 0 && (
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '1.15rem', margin: '0 0 12px 0', color: 'var(--ink)' }}>{copy.moreTitle}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {copy.moreGroups.map((group, g) => (
                <details
                  key={g}
                  style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '12px 16px' }}
                >
                  <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--ink)', fontSize: '1.05rem', lineHeight: 1.4 }}>
                    {group.title}
                  </summary>
                  <ul style={{ listStyle: 'none', margin: '12px 0 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {group.items.map((service, i) => (
                      <li
                        key={i}
                        style={{ border: '1px solid var(--rule)', background: 'var(--ground-deep)', color: 'var(--ink)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.95rem' }}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        )}

        <p style={{ margin: '20px 0 0 0', color: 'var(--ink-faint)', fontSize: '0.95rem' }}>{copy.note}</p>
      </div>
    </section>
  );
}
