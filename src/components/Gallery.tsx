import { CONTENT, type Lang } from '../content';
import { useState } from 'react';
import { Reveal } from './Reveal';

export function Gallery() {
  const [lang] = useState<Lang>('he');
  const copy = CONTENT[lang];

  // רשימת 9 העבודות החדשות שלך עם שיוך מדויק לתמונות
  const galleryItems = [
    { id: '1', title: 'עבודות ריצוף וחיפוי חוץ', desc: 'תכנון תשתית וריצוף מתקדם לבמות ושטחים פתוחים.', src: '/work/plumbing.jpg' },
    { id: '2', title: 'פריסת אלמנט מדויק', desc: 'עבודה עם מערכות פילוס ופלס ליישור מושלם לפני קיבוע.', src: '/work/electricity.jpg' },
    { id: '3', title: 'יישור גבהים ופימור פרופיל', desc: 'חומרי מילוי ואיטום איכותיים לעמידות מוחלטת בחוץ.', src: '/work/sealing.jpg' },
    { id: '4', title: 'אחזקה ותיקון לוחות חשמל', desc: 'טיפול, חיווט וסידור ארונות פיקוד וחשמל מורכבים במבנים.', src: '/work/welding.jpg' },
    { id: '5', title: 'מערכות משאבות ומים', desc: 'התקנה, טיפול ואחזקה של משאבות לחץ ומערכות מים מרכזיות.', src: '/work/communal.jpg' },
    { id: '6', title: 'תיקון מדרכות וקרמיקה בחוץ', desc: 'עבודות חיפוי קירות פנים וחוץ ברמת הגימור הגבוהה ביותר.', src: '/work/home-repair.jpg' },
    { id: '7', title: 'שטיפת קולט שמש על הגג', desc: 'ניקוי יסודי של קולטים להגברת תפוקת המערכת וחיסכון בחשמל.', src: '/work/plumbing.jpg' },
    { id: '8', title: 'תיקוני צבע וגבס מורכבים', desc: 'שיקום, החלפת קירות והכנה לצבע יסודי לאחר נזקי רטיבות.', src: '/work/electricity.jpg' },
    { id: '9', title: 'איטום גגות וניקוז חם', desc: 'עבודות איטום יסודיות והכנת מרזבים לחורף למניעת חדירת מים.', src: '/work/sealing.jpg' }
  ];

  return (
    <section id="gallery" className="gallery-section" style={{ background: 'var(--paper)', paddingBlock: '80px' }}>
      <div className="shell" style={{ textAlign: 'right' }}>
        
        <div className="section-head" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', justifyContent: 'center' }}>{copy.gallery.eyebrow || 'תיק עבודות'}</span>
          <h2 style={{ color: 'var(--ink)', fontSize: '2.5rem', marginBottom: '14px' }}>{copy.gallery.title || 'עבודות אחרונות מהשטח'}</h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '1.1rem' }}>{copy.gallery.lede || 'הצצה לחלק מהפרויקטים והתיקונים שביצענו לאחרונה'}</p>
        </div>

        {/* גריד עשיר ומפואר שמציג את כל 9 התמונות בצורה ישרה */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', width: '100%' }}>
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 40px}>
              <article style={{ background: 'var(--ground)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--rule-soft)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '100%', height: '24px', backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '20px', textAlign: 'right' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--ink)', margin: '0 0 8px 0' }}>{item.title}</h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
