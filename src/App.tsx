import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  // ניהול חלונות קופצים נפרדים להצהרת נגישות ולתפריט נגישות
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  // מצבי נגישות (פונקציות בסיסיות ללא תוספים חיצוניים בתור הגנה והתאמה אישית)
  const [contrast, setContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  // החלת המצבים על ה-body או ה-documentElement בזמן שינוי
  useEffect(() => {
    const html = document.documentElement;
    
    if (contrast) {
      html.style.setProperty('filter', 'contrast(1.4) saturate(1.2)');
      html.style.setProperty('background', '#000', 'important');
    } else {
      html.style.removeProperty('filter');
      html.style.removeProperty('background');
    }

    if (largeText) {
      html.style.setProperty('font-size', '120%', 'important');
    } else {
      html.style.removeProperty('font-size');
    }

    if (readableFont) {
      html.style.setProperty('--display', "'Assistant', system-ui, sans-serif", 'important');
    } else {
      html.style.removeProperty('--display');
    }

    // הוספת קלאס ייעודי לקווי תחתית בקישורים במידה ונבחר
    if (underlineLinks) {
      const style = document.createElement('style');
      style.id = 'accessibility-underline-style';
      style.innerHTML = 'a { text-decoration: underline !important; }';
      document.head.appendChild(style);
    } else {
      document.getElementById('accessibility-underline-style')?.remove();
    }
  }, [contrast, largeText, readableFont, underlineLinks]);

  // איפוס כל הגדרות הנגישות
  const resetAccessibility = () => {
    setContrast(false);
    setLargeText(false);
    setReadableFont(false);
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

      {/* פוטר הכולל קישור להצהרת הנגישות בנפרד בתחתית האתר כמחויב בחוק */}
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

      {/* ♿ סמליל הנגישות הכחול הצף - פותח כעת אך ורק את אפשרויות ותפריט הנגישות! */}
      <button
        onClick={() => setShowAccessibilityMenu(true)}
        aria-label="תפריט נגישות"
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
          border: '2px solid #ffffff',
          cursor: 'pointer'
        }}
      >
        {/* אייקון נגישות נקי ובינלאומי */}
        <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', fill: '#ffffff' }}>
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      </button>

      {/* 🛠️ חלון קופץ 1: תפריט אפשרויות נגישות (נפתח מהכפתור הכחול) */}
      {showAccessibilityMenu && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', color: '#071e36', padding: '30px', borderRadius: '12px', maxWidth: '450px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'right', position: 'relative', direction: 'rtl', margin: 'auto' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#071e36', fontFamily: 'Suez One, serif', fontWeight: 'bold', borderBottom: '2px solid #f2e9e4', paddingBottom: '10px' }}>
              🔧 סרגל אפשרויות נגישות
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <button 
                onClick={() => setContrast(!contrast)} 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', background: contrast ? '#071e36' : '#f5eee6', color: contrast ? '#fff' : '#071e36', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}
              >
                {contrast ? '✓ ניגודיות גבוהה פעילה' : '◐ הפעל ניגודיות גבוהה'}
              </button>

              <button 
                onClick={() => setLargeText(!largeText)} 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', background: largeText ? '#071e36' : '#f5eee6', color: largeText ? '#fff' : '#071e36', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}
              >
                {largeText ? '✓ הגדלת גופן פעילה (120%)' : 'A+ הגדל טקסט באתר'}
              </button>

              <button 
                onClick={() => setReadableFont(!readableFont)} 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', background: readableFont ? '#071e36' : '#f5eee6', color: readableFont ? '#fff' : '#071e36', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}
              >
                {readableFont ? '✓ גופן קריא פעיל' : '🔤 החלף לגופן קריא (אסיסטנט)'}
              </button>

              <button 
                onClick={() => setUnderlineLinks(!underlineLinks)} 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', background: underlineLinks ? '#071e36' : '#f5eee6', color: underlineLinks ? '#fff' : '#071e36', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}
              >
                {underlineLinks ? '✓ קו תחתון בקישורים פעיל' : '🔗 הדגש קישורים בקו תחתון'}
              </button>

              <button 
                onClick={resetAccessibility} 
                style={{ padding: '10px', borderRadius: '6px', border: 'none', background: '#e63946', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
              >
                ✕ איפוס כל הגדרות הנגישות
              </button>
            </div>

            <button 
              onClick={() => setShowAccessibilityMenu(false)} 
              style={{ background: '#071e36', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Assistant, sans-serif' }}
            >
              סגור תפריט נגישות
            </button>
          </div>
        </div>
      )}

      {/* 📄 חלון קופץ 2: הצהרת הנגישות הרשמית (נפתח אך ורק מהקישור בפוטר) */}
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
      
      {/* כפתור הוואטסאפ המקורי, העגול והעובד שלך בצד שמאל למטה */}
      <WhatsAppOrb />
    </div>
  );
}
