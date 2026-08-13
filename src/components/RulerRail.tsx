import { useEffect, useState } from 'react';
import { useLang } from '../lang';

type Mark = { id: string; label: string; pct: number };

export function RulerRail() {
  const { copy } = useLang();
  const [progress, setProgress] = useState(0);
  const [marks, setMarks] = useState<Mark[]>([]);
  const [active, setActive] = useState('');

  const sections = [
    { id: 'services', label: copy.nav.services },
    { id: 'reviews', label: copy.nav.reviews },
    { id: 'videos', label: copy.nav.videos },
    { id: 'contact', label: copy.nav.contact },
  ];
  const labelKey = sections.map((section) => section.label).join('|');

  useEffect(() => {
    const measure = () => {
      const height = document.documentElement.scrollHeight;
      setMarks(
        sections
          .map(({ id, label }) => {
            const el = document.getElementById(id);
            return el ? { id, label, pct: (el.offsetTop / height) * 100 } : null;
          })
          .filter((mark): mark is Mark => mark !== null),
      );
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);

      const line = window.scrollY + window.innerHeight * 0.34;
      const current = sections.reduce((found, { id }) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= line ? id : found;
      }, '');
      setActive(current);
    };

    measure();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      observer.disconnect();
    };
  }, [labelKey]);

  const percent = Math.round(progress * 100);

  return (
    <>
      <div className="railbar" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <aside className="rail" aria-hidden="true">
        <div className="rail__ticks" />
        <div className="rail__fill" style={{ height: `${percent}%` }} />
        <div className="rail__marks">
          {marks.map((mark) => (
            <div
              key={mark.id}
              className="rail__mark"
              style={{ top: `${mark.pct}%` }}
              data-active={active === mark.id}
            >
              <span>{mark.label}</span>
            </div>
          ))}
        </div>
        <div className="rail__readout">{percent}%</div>
      </aside>
    </>
  );
}
