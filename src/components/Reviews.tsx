import { CONTENT } from '../content';
import { useLang } from '../lang';

// קישור ישיר לחלון כתיבת ביקורת בפרופיל העסק בגוגל
const GOOGLE_REVIEW_URL = 'https://g.page/r/CRkf97jyolcrEBM/review';

// כאן מדביקים המלצות אמיתיות של לקוחות (העתק מגוגל, עם אישור הלקוח).
// כל עוד הרשימה ריקה, הסקציה נראית כמו קודם.
// דוגמה לפורמט: { name: 'דנה כהן', city: 'ראשון לציון', text: 'הגיע בזמן, עבד נקי ופתר את הנזילה.' }
const TESTIMONIALS: { name: string; city: string; text: string }[] = [];

export function Reviews() {
  const { lang } = useLang();
  const copy = CONTENT[lang].reviews;

  return (
    <section id="reviews" style={{ paddingBlock: '60px', background: 'var(--paper)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
        </div>

        {TESTIMONIALS.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} style={{ margin: 0, background: 'var(--ground-deep)', padding: '20px', borderRadius: '12px', border: '1px solid var(--rule-soft)' }}>
                <blockquote style={{ margin: '0 0 12px 0', color: 'var(--ink)', lineHeight: 1.6 }}>{t.text}</blockquote>
                <figcaption style={{ color: 'var(--ink-faint)', fontSize: '0.9rem' }}>
                  {t.name}, {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div style={{ background: 'var(--ground-deep)', padding: '32px', borderRadius: '12px', border: '1px solid var(--rule-soft)' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', marginBottom: '20px', fontWeight: '500' }}>{copy.empty}</p>
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'var(--ink)' }}>{copy.formTitle}</h4>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: 'var(--ink-faint)' }}>{copy.formLede}</p>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'var(--accent)', color: 'var(--on-accent)', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 700 }}>
              {copy.googleCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
