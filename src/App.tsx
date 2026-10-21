import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  // ניהול חלונות קופצים נפרדים
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  // מצבי נגישות אקטיביים
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  // החלת מצבי הנגישות על ה-DOM של האתר
  useEffect(() => {
    // הגדלת/הקטנת פונט
    document.documentElement.style.fontSize = `${fontSizeMultiplier}%`;

    // ניגודיות גבוהה
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
      // הוספת סטייל זמני במידה ואין קלאס מוגדר ב-CSS
      const style = document.getElementById('high-contrast-style') || document.createElement('style');
      style.id = 'high-contrast-style';
      style.innerHTML = `
        .high-contrast-mode { background: #000000 !important; color: #ffffff !important; }
        .high-contrast-mode p, .high-contrast-mode h1, .high-contrast-mode h2, .high-contrast-mode h3, .high-contrast-mode span { color: #ffffff !important; }
        .high-contrast-mode a { color: #ffff00 !important; }
        .high-contrast-mode button { background: #ffffff !important; color: #000000 !important; border: 2px solid #ffff00 !important; }
      `;
      if (!document.getElementById('high-contrast-style')) document.head.appendChild(style);
    } else {
      document.body.classList.remove('high-contrast-mode');
      const style = document.getElementById('high-contrast-style');
      if (style) style.remove();
    }

    // קו תחתון לקישורים
    if (underlineLinks) {
      const style = document.getElementById('underline-links-style') || document.createElement('style');
      style.id = 'underline-links-style';
      style.innerHTML = 'a { text-decoration: underline !important; }';
      if (!document.getElementById('underline-links-style')) document.head.appendChild(style);
    } else {
      const style = document.getElementById('underline-links-style');
      if (style) style.remove();
    }
  }, [fontSizeMultiplier, highContrast, underlineLinks]);

  // איפוס הגדרות נגישות
  const resetAccessibility = () => {
    setFontSizeMultiplier(100);
    setHighContrast(false);
    setUnderlineLinks(false);
  };

  return (
    <div className="app-container" style={{ direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Services />
        <Videos />
        <Reviews />
        <Contact />
      </main>

      {/* פוטר הכולל קישור לחלון הצהרת נגישות */}
      <footer style={{ background: '#071e36', color: '#fff', padding: '30px 20px', textAlign: 'center', fontSize: '0.9rem', borderTop: '2px solid var(--rule-soft)' }}>
        <div style={{ marginBottom: '10px', fontWeight: 600 }}>
          © אגם אחזקות - כל הזכויות שמורות
        </div>
        <div>
          <button 
            onClick={() => setShowAccessibilityStatement(true)} 
            style={{ color: '#a8c4dc', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', fontWeight: 600 }}
          >
            הצהרת נגישות העסק
          </button>
        </div>
      </footer>

      {/* כפתור נגישות כחול צף מובנה בצד ימין למטה (מעל הוואטסאפ או מולו) */}
      <button
        onClick={() => setShowAccessibilityMenu(true)}
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '24px',
          width: '60px',
          height: '60px',
          zIndex: 99999,
          backgroundColor: '#0056b3',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff'
        }}
        title="אפשרויות נגישות"
        aria-label="תפריט נגישות"
      >
        {/* אייקון נגישות אוניברסלי פשוט */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="1"/>
          <path d="m9 20 3-6 3 6"/>
          <path d="m6 8 6 2 6-2"/>
          <path d="M12 10v4"/>
        </svg>
      </button>

      {/* 🟦 תפריט אפשרויות נגישות אקטיבי (סרגל נגישות) */}
      {showAccessibilityMenu && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', color: '#071e36', padding: '25px', borderRadius: '12px', maxWidth: '400px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', textAlign: 'right', direction: 'rtl' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', fontFamily: 'Suez One, serif', fontWeight: 'bold', borderBottom: '2px solid #f2e9e4', paddingBottom: '10px' }}>סרגל כלי נגישות</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <button 
                onClick={() => setFontSizeMultiplier(prev => Math.min(prev + 10, 150))}
                style={{ width: '100%', padding: '10px', background: '#f5eee6', border: '1px solid #decbc4', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                🔍 הגדל טקסט באתר (+10%)
              </button>
              <button 
                onClick={() => setFontSizeMultiplier(prev => Math.max(prev - 10, 90))}
                style={{ width: '100%', padding: '10px', background: '#f5eee6', border: '1px solid #decbc4', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                🔎 הקטן טקסט באתר (-10%)
              </button>
              <button 
                onClick={() => setHighContrast(!highContrast)}
                style={{ width: '100%', padding: '10px', background: highContrast ? '#071e36' : '#f5eee6', color: highContrast ? '#fff' : '#071e36', border: '1px solid #decbc4', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                🌓 {highContrast ? 'ביטול ניגודיות גבוהה' : 'מצב ניגודיות גבוהה (שחור-לבן)'}
              </button>
              <button 
                onClick={() => setUnderlineLinks(!underlineLinks)}
                style={{ width: '100%', padding: '10px', background: underlineLinks ? '#071e36' : '#f5eee6', color: underlineLinks ? '#fff' : '#071e36', border: '1px solid #decbc4', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                🔗 {underlineLinks ? 'הסר קו תחתון מקישורים' : 'הדגש קישורים בקו תחתון'}
              </button>
              <button 
                onClick={resetAccessibility}
                style={{ width: '100%', padding: '10px', background: '#d9534f', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}
              >
                🔄 איפוס כל הגדרות הנגישות
              </button>
            </div>

            <button 
              onClick={() => setShowAccessibilityMenu(false)} 
              style={{ background: '#071e36', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}
            >
              סגור תפריט
            </button>
          </div>
        </div>
      )}

      {/* 📄 חלון קופץ להצהרת נגישות חוקית (מהפוטר בלבד) */}
      {showAccessibilityStatement && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', color: '#071e36', padding: '30px', borderRadius: '12px', maxWidth: '500px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'right', position: 'relative', direction: 'rtl', margin: 'auto' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: '#071e36', fontFamily: 'Suez One, serif', fontWeight: 'bold' }}>הצהרת נגישות - אגם אחזקות</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', fontFamily: 'Assistant, sans-serif' }}>
              אנו באגם אחזקות רואים בחשיבות עליונה את הגשת השירות בצורה שוויונית לכלל הגולשים. האתר נבנה בקוד מודרני, נקי ונגיש המותאם לצפייה מכלל המכשירים הניידים והמכשירים הנייחים, ותומך בטכנולוגיות מסייעות ובסרגלי נגישות מובנים של מערכות ההפעלה.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', fontFamily: 'Assistant, sans-serif' }}>
              אם נתקלתם בקושי כלשהו בגלישה, נשמח לעמוד לרשותכם ולתקן בהקדם. ניתן לפנות ישירות לשלומי הגמי בטלפון או בוואטסאפ: 050-380-8067.
            </p>
            <button 
              onClick={() => setShowAccessibilityStatement(false)} 
              style={{ background: '#071e36', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Assistant, sans-serif' }}
            >
              סגור חלון
            </button>
          </div>
        </div>
      )}
      
      <WhatsAppOrb />
    </div>
  );
}
