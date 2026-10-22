import { useLang } from '../lang';
import { waLink } from '../content';

export function Hero() {
  // שימוש בטייפ גמיש כדי למנוע קריסת קומפילציה בגלל שדות חסרים
  const { lang, copy } = useLang();
  const hero = copy.hero;

  if (!hero) return null;

  return (
    <section className="hero" style={{ paddingBlock: '40px', background: 'var(--paper)' }}>
      <div className="shell">
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 className="hero__name">{copy.topbar?.name || 'שלומי הגמי'}</h1>
            <div className="hero__claim">{hero.claim}</div>
            <p className="hero__lede">{hero.lede}</p>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <a href={waLink(lang)} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                {hero.cta}
              </a>
              <a href={`tel:${hero.phone}`} style={{ background: 'var(--accent)', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                {hero.call}
              </a>
            </div>

            {hero.stats && (
              <div className="hero__stats">
                {hero.stats.map((stat: any, index: number) => (
                  <div key={index} className="hero__stat">
                    <div className="hero__statvalue">{stat.value}</div>
                    <div className="hero__statlabel">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="portrait">
            <img src={hero.avatar || '/shlomi.jpg'} alt="שלומי הגמי" />
          </div>
        </div>
      </div>
    </section>
  );
}
