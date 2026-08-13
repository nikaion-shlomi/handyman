import { useState } from 'react';
import { VIDEOS } from '../content';
import { useLang } from '../lang';
import { PlayIcon } from '../icons';
import { Reveal } from './Reveal';

function Video({ id, index }: { id: string; index: number }) {
  const { copy } = useLang();
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal className="vid" delay={index * 70}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`${copy.videos.title} ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="vid__btn"
          onClick={() => setPlaying(true)}
          aria-label={`${copy.videos.playLabel} ${index + 1}`}
        >
          <img
            className="vid__thumb"
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          <span className="vid__play">
            <PlayIcon />
            {copy.videos.playLabel}
          </span>
        </button>
      )}
    </Reveal>
  );
}

export function Videos() {
  const { copy } = useLang();

  return (
    <section className="videos" id="videos">
      <div className="shell">
        <Reveal>
          <div className="sectionhead">
            <p className="eyebrow">{copy.videos.eyebrow}</p>
            <h2>{copy.videos.title}</h2>
            <p>{copy.videos.lede}</p>
          </div>
        </Reveal>

        <div className="videos__grid">
          {VIDEOS.map((id, index) => (
            <Video key={id} id={id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
