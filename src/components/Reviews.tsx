import { CONTENT, type Lang } from '../content';
import { useState } from 'react';

export function Reviews() {
  const [lang] = useState<Lang>('he');
  const copy = CONTENT[lang].reviews;

  return (
    <section id="reviews" style={{ paddingBlock: '60px', background: 'var(--paper)' }}>
      <div className="shell" style={{ textAlign: 'right' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
        </div>
        
        <div style={{ background: 'var(--ground-deep)', padding: '32px', borderRadius: '12px', border: '1px solid var(--rule-soft)' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', marginBottom: '20px', fontWeight: '500' }}>{copy.empty}</p>
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'var(--ink)' }}>{copy.formTitle}</h4>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: 'var(--ink-faint)' }}>{copy.formLede}</p>
            <a href={CONTENT[lang].meta.title.includes('שלומי') ? 'https://goo.gl' : '#'} target="_blank" rel="noreferrer" className="btn btn--primary">
              {copy.googleCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
