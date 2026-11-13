import type { SyntheticEvent } from 'react';
import { CONTENT, VIDEOS } from '../content';
import { useLang } from '../lang';
import { Carousel } from './Carousel';

export function Videos() {
  const { lang } = useLang();
  const copy = CONTENT[lang].videos;

  // כשמתחילים לנגן סרטון, שאר הסרטונים נעצרים
  const onPlay = (e: SyntheticEvent<HTMLVideoElement>) => {
    document.querySelectorAll<HTMLVideoElement>('#videos video').forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  return (
    <section id="videos" style={{ paddingBlock: '48px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '20px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>{copy.lede}</p>
        </div>

        <Carousel variant="video">
          {VIDEOS.map((id, index) => (
            <div
              key={id}
              style={{ background: 'var(--paper)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule-soft)' }}
            >
              <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--rule-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', direction: lang === 'en' ? 'ltr' : 'rtl' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>0{index + 1}</span>
                <h3 style={{ fontSize: '1rem', margin: 0, color: 'var(--ink)', fontWeight: 600, lineHeight: 1.3 }}>{copy.items[index]}</h3>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                <video
                  src={`/videos/${id}.mp4`}
                  poster={`/videos/${id}.jpg`}
                  controls
                  preload="none"
                  playsInline
                  aria-label={copy.items[index]}
                  onPlay={onPlay}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
