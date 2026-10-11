import { useState } from 'react';
import { VIDEOS } from '../content';
import { useLang } from '../lang';
import { PlayIcon } from '../icons';
import { Reveal } from './Reveal';

function Video({ name, index }: { name: string; index: number }) {
  const { copy } = useLang();
  const [playing, setPlaying] = useState(false);
  const label = copy.videos.items[index] ?? '';

  return (
    <Reveal className="vid" delay={index * 70}>
      {playing ? (
        <video
          className="vid__player"
          src={`/videos/${name}.mp4`}
          poster={`/videos/${name}.jpg`}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          type="button"
          className="vid__btn"
          onClick={() => setPlaying(true)}
          aria-label={`${copy.videos.playLabel}: ${label}`}
        >
          <img className="vid__thumb" src={`/videos/${name}.jpg`} alt="" loading="lazy" />
          <span className="vid__play">
            <PlayIcon />
            {copy.videos.playLabel}
          </span>
          <span className="vid__label">{label}</span>
        </button>
      )}
    </Reveal>
  );
}

export function Videos() {
  const { copy } = useLang();

  return (
    /* שונה ל-videos-alt כדי להסיר את הרקע הכחול ולהחיל גוון קרם חלק */
    <section className="videos-alt" id="videos" style={{ background: 'var(--ground)', color: 'var(--ink)' }}>
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>{copy.videos.eyebrow}</p>
            <h2 style={{ color: 'var(--ink)' }}>{copy.videos.title}</h2>
            <p style={{ color: 'var(--ink-soft)' }}>{copy.videos.lede}</p>
          </div>
        </Reveal>

        <div className="videos__grid">
          {VIDEOS.map((name, index) => (
            <Video key={name} name={name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
