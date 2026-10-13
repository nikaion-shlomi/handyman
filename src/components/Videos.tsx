import { CONTENT, type Lang, VIDEOS } from '../content';
import { useState } from 'react';

export function Videos() {
  const [lang] = useState<Lang>('he');
  const copy = CONTENT[lang].videos;

  return (
    <section id="videos" style={{ paddingBlock: '60px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: 'right' }}>
        <div style={{ marginBottom: '40px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>{copy.lede}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {VIDEOS.map((id, index) => (
            <div key={id} style={{ background: 'var(--paper)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule-soft)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: '16px', borderBottom: '1px solid var(--rule-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>0{index + 1}</span>
                <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--ink)', fontWeight: '600' }}>{copy.items[index]}</h3>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: 'var(--paper)', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--mono)' }}>{copy.playLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
