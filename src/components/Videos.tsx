import { useState } from 'react';
import { CONTENT, VIDEOS } from '../content';
import { useLang } from '../lang';

const INITIAL_COUNT = 4;

export function Videos() {
  const { lang } = useLang();
  const copy = CONTENT[lang].videos;
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? VIDEOS : VIDEOS.slice(0, INITIAL_COUNT);
  const hiddenCount = VIDEOS.length - INITIAL_COUNT;

  const moreLabel =
    lang === 'en' ? `Show ${hiddenCount} more videos` : `הצגת עוד ${hiddenCount} סרטונים`;
  const lessLabel = lang === 'en' ? 'Show fewer videos' : 'הצגת פחות סרטונים';

  return (
    <section id="videos" style={{ paddingBlock: '60px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '40px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>{copy.lede}</p>
        </div>

        <div className="videos-grid">
          {visible.map((id) => {
            // האינדקס נלקח מהרשימה המלאה כדי שהכותרת תמיד תתאים לסרטון
            const index = VIDEOS.indexOf(id);
            const videoPath = `/videos/${id}.mp4`;
            const posterPath = `/videos/${id}.jpg`;

            return (
              <div key={id} style={{ background: 'var(--paper)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule-soft)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '14px', borderBottom: '1px solid var(--rule-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', direction: lang === 'en' ? 'ltr' : 'rtl' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>0{index + 1}</span>
                  <h3 style={{ fontSize: '1rem', margin: 0, color: 'var(--ink)', fontWeight: '600', lineHeight: 1.3 }}>{copy.items[index]}</h3>
                </div>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                  <video
                    src={videoPath}
                    poster={posterPath}
                    controls
                    preload="none"
                    playsInline
                    aria-label={copy.items[index]}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {hiddenCount > 0 && (
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              style={{ background: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)', padding: '12px 28px', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {showAll ? lessLabel : moreLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
