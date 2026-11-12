import { CONTENT } from '../content';
import { useLang } from '../lang';

// קישור ישיר לחלון כתיבת ביקורת בפרופיל העסק בגוגל
const GOOGLE_REVIEW_URL = 'https://g.page/r/CRkf97jyolcrEBM/review';

// המלצות לקוחות (מתוך הודעות וואטסאפ, ללא שמות). לעדכון: להוסיף או לערוך אובייקט ברשימה.
const TESTIMONIALS: { text: string; by: string }[] = [
  {
    text: 'תודה לשלומי שהגיע מהר, בדק וגם סידר.',
    by: 'חבר ועד בית, חולון',
  },
  {
    text: 'תודה לשלומי על המצלמות האיכותיות ומערכות ה-DVR הטובות ביותר שיש, עם מערכות הפעלה פשוטות, ברורות וקלות להפעלה, שעוזרות לנו לשלוט כאן בכל הגזירה.',
    by: 'חבר ועד בית, חולון',
  },
  {
    text: 'שלומי תיקן היום את הפיקוד של המשאבות בלוח חדר המשאבות. אני רואה חובה לציין את המקצועיות שלו וההבנה לפתרון התקלה. לאחר שיחה איתו התרשמתי עד כמה הבחור הזה, ברצינות, יקר ובעל יכולת לכל דבר ועניין.',
    by: 'ועד בית, חולון',
  },
  {
    text: 'הטיפול המהיר לא מובן מאליו. אין עליך. כל מילה שאוסיף על המקצועיות ועל האכפתיות שלך, שעוברת כל רף ממוצע, מיותרת. שאפו בענק, יש בך נשמה ענקית.',
    by: 'לקוח',
  },
];

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

        {lang === 'he' && TESTIMONIALS.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} style={{ margin: 0, background: 'var(--ground-deep)', padding: '22px', borderRadius: '12px', border: '1px solid var(--rule-soft)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px' }}>
                <blockquote style={{ margin: 0, color: 'var(--ink)', lineHeight: 1.7, fontSize: '1.05rem' }}>״{t.text}״</blockquote>
                <figcaption style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700 }}>{t.by}</figcaption>
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
