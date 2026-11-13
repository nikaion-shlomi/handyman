import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useLang } from '../lang';

type Props = {
  children: ReactNode;
  variant: 'video' | 'text';
  autoPlayMs?: number;
};

// קרוסלה אופקית: החלקה באצבע, חיצים, ואופציה לסיבוב אוטומטי (נעצר כשנוגעים/מרחפים)
export function Carousel({ children, variant, autoPlayMs = 0 }: Props) {
  const { lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const holdRef = useRef(false);
  const holdTimer = useRef<number | undefined>(undefined);

  const move = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === 'rtl';
    const sign = rtl ? -1 : 1; // ב-RTL הגלילה קדימה היא ערך שלילי
    const first = el.firstElementChild as HTMLElement | null;
    const amount = first ? first.offsetWidth + 16 : el.clientWidth * 0.8;
    const atEnd = Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 4;
    const atStart = Math.abs(el.scrollLeft) <= 4;

    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir === -1 && atStart) {
      el.scrollTo({ left: sign * el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: sign * dir * amount, behavior: 'smooth' });
    }
  };

  const pauseFor = (ms: number) => {
    holdRef.current = true;
    window.clearTimeout(holdTimer.current ?? undefined);
    holdTimer.current = window.setTimeout(() => {
      holdRef.current = false;
    }, ms);
  };

  useEffect(() => {
    if (!autoPlayMs) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!holdRef.current && !document.hidden) move(1);
    }, autoPlayMs);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(holdTimer.current ?? undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayMs]);

  const rtlUi = lang !== 'en';
  const prevLabel = lang === 'en' ? 'Previous' : 'הקודם';
  const nextLabel = lang === 'en' ? 'Next' : 'הבא';

  return (
    <div>
      <div className="carousel-nav">
        <button type="button" className="carousel-btn" aria-label={prevLabel} onClick={() => { pauseFor(10000); move(-1); }}>
          {rtlUi ? '→' : '←'}
        </button>
        <button type="button" className="carousel-btn" aria-label={nextLabel} onClick={() => { pauseFor(10000); move(1); }}>
          {rtlUi ? '←' : '→'}
        </button>
      </div>
      <div
        ref={trackRef}
        className={`carousel carousel--${variant}`}
        onMouseEnter={() => { holdRef.current = true; }}
        onMouseLeave={() => { holdRef.current = false; }}
        onTouchStart={() => pauseFor(10000)}
        onFocus={() => { holdRef.current = true; }}
        onBlur={() => { holdRef.current = false; }}
      >
        {children}
      </div>
    </div>
  );
}
