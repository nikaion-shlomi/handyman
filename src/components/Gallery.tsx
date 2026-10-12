import { useLang } from '../lang';
import { Reveal } from './Reveal';

export function Gallery() {
  const { copy } = useLang();

  // רשימת 9 העבודות החדשות שלך עם שיוך מדויק של התמונה לטקסט
  const myWorkGallery = [
    { src: '/work/work1.jpg', title: 'עבודות ריצוף ופיתוח חוץ', desc: 'הכנת תשתית וריצוף מתקדם בגינות ושטחים פתוחים.' },
    { src: '/work/work2.jpg', title: 'פריסת אריחים מדויקת', desc: 'עבודה עם מערכות פילוס ופלס לאריחים גדולים דמויי פרקט.' },
    { src: '/work/work3.jpg', title: 'יישום רובה וגימור פרימיום', desc: 'חומרי מילוי ואטימה איכותיים לעמידות מוחלטת בחוץ.' },
    { src: '/work/work4.jpg', title: 'אחזקה ותיקון לוחות חשמל', desc: 'טיפול, חיווט וסידור ארונות פיקוד וחשמל מורכבים במבנים.' },
    { src: '/work/work5.jpg', title: 'מערכות משאבות ומים', desc: 'התקנה, טיפול ואחזקה של משאבות לחץ ומערכות מים מרכזיות.' },
    { src: '/work/work6.jpg', title: 'תיקון וחיפוי קרמיקה בקיר', desc: 'עבודות חיפוי קירות פנים וחוץ ברמת הגימור הגבוהה ביותר.' },
    { src: '/work/work7.jpg', title: 'שטיפת קולטי שמש על הגג', desc: 'ניקוי יסודי של קולטים להגברת תפוקת המערכת וחיסכון בחשמל.' },
    { src: '/work/work8.jpg', title: 'תיקוני צבע וגבס מורכבים', desc: 'שיקום, החלקת קירות והכנה לצבע יסודי לאחר נזקי רטיבות.' },
    { src: '/work/work9.jpg', title: 'איטום גגות בזפת חמה', desc: 'עבודות איטום יסודיות והכנת מבנים לחורף למניעת חדירת מים.' }
  ];

  return (
    <section className="gallery-section" id="gallery" style={{ background: 'var(--paper)', paddingBlock: '80px' }}>
      <div className="shell">
        <Reveal>
          <div className="sectionhead" style={{ marginBottom: '48px', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)', justifyContent: 'center' }}>{copy.gallery?.eyebrow || 'תיק עבודות'}</p>
            <h2 style={{ color: 'var(--ink)', fontSize: '2.5rem', marginBottom: '14px' }}>{copy.gallery?.title || 'עבודות אחרונות מהשטח'}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.1rem' }}>{copy.gallery?.lede || 'הצצה לחלק מהפרויקטים והתיקונים שביצענו לאחרונה'}</p>
          </div>
        </Reveal>

        {/* גריד עשיר ומפואר שמציג את כל 9 התמונות בצורה רספונסיבית מושלמת */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', width: '100%' }}>
          {myWorkGallery.map((item, index) => (
            <Reveal key={index} delay={index * 40}>
              <article style={{ background: 'var(--ground)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--rule-soft)', boxShadow: '0 4px 20px -4px rgba(7,30,54,0.02)' }}>
                <div style={{ width: '100%', height: '240px', backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
