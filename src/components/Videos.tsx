import { CONTENT, VIDEOS } from '../content';
import { useLang } from '../lang';

export function Videos() {
  const { lang } = useLang();
  const copy = CONTENT[lang].videos;

  return (
    <section id="videos" style={{ paddingBlock: '60px', background: 'var(--ground)' }}>
      <div className="shell" style={{ textAlign: lang === 'en' ? 'left' : 'right' }}>
        <div style={{ marginBottom: '40px' }}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--ink)' }}>{copy.title}</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>{copy.lede}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {VIDEOS.map((id, index) => {
            // הגדרת נתיב וידאו ותמונת פתיחה מתיקיית ה-videos באותיות קטנות לפי הצילום שלך
            const videoPath = `/videos/${id}.mp4`;
            const posterPath = `/videos/${id}.jpg`;

            return (
              <div key={id} style={{ background: 'var(--paper)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule-soft)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '16px', borderBottom: '1px solid var(--rule-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: lang === 'en' ? 'ltr' : 'rtl' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>0{index + 1}</span>
                  <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--ink)', fontWeight: '600' }}>{copy.items[index]}</h3>
                </div>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                  <video 
                    src={videoPath} 
                    poster={posterPath}
                    controls 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
