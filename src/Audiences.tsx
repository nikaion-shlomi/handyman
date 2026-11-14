import { useState } from 'react';
import { CONTENT, waLink } from '../content';
import { useLang } from '../lang';

export function Audiences() {
  const { lang } = useLang();
  const copy = CONTENT[lang].audiences;
  const [active, setActive] = useState(0);
  const tab = copy.tabs[active] ?? copy.tabs[0];

  return (
    <section id="audiences" style={{ paddingBlock: '48px', background: 'var(--paper)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '20px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '12px', maxWidth: '62ch' }}>{copy.lede}</p>
        </div>

        <div role="tablist" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
          {copy.tabs.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                style={{
                  padding: '12px 6px',
                  borderRadius: '10px',
                  border: '1.5px solid var(--accent)',
                  background: on ? 'var(--accent)' : 'transparent',
                  color: on ? 'var(--on-accent)' : 'var(--ink)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  lineHeight: 1.25,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" style={{ background: 'var(--ground-deep)', border: '1px solid var(--rule-soft)', borderRadius: '14px', padding: '22px' }}>
          <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', color: 'var(--ink)', fontWeight: 700 }}>{tab.title}</h3>
          <p style={{ margin: '0 0 16px 0', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{tab.body}</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tab.items.map((item, i) => (
              <li
                key={i}
                style={{ border: '1px solid var(--rule)', background: 'var(--paper)', color: 'var(--ink)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.95rem' }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <a
              href={waLink(lang, tab.waText)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#25d366', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {tab.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
