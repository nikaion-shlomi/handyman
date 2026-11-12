import { CONTENT, waLink } from '../content';
import { useLang } from '../lang';

export function Committees() {
  const { lang } = useLang();
  const copy = CONTENT[lang].committees;

  return (
    <section id="committees" style={{ paddingBlock: '60px', background: 'var(--paper)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '12px', maxWidth: '62ch' }}>{copy.lede}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {copy.points.map((point, i) => (
            <div
              key={i}
              style={{ background: 'var(--ground-deep)', border: '1px solid var(--rule-soft)', borderRadius: '12px', padding: '22px' }}
            >
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: 'var(--ink)', fontWeight: 700 }}>{point.title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{point.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px' }}>
          <a
            href={waLink(lang, copy.waText)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25d366', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
