import { CONTENT } from '../content';
import { useLang } from '../lang';

export function FAQ() {
  const { lang } = useLang();
  const copy = CONTENT[lang].faq;

  return (
    <section id="faq" style={{ paddingBlock: '60px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '820px' }}>
          {copy.items.map((item, i) => (
            <details
              key={i}
              style={{ background: 'var(--paper)', border: '1px solid var(--rule-soft)', borderRadius: '12px', padding: '16px 20px' }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                {item.q}
              </summary>
              <p style={{ margin: '12px 0 0 0', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
