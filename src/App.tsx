import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  // משתנה שמנהל את פתיחת וסגירת חלון הנגישות הקופץ
  const [showAccessibility, setShowAccessibility] = useState(false);

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

      {/* פוטר משודרג הכולל קישור לחלון הצהרת נגישות רשמי וחוקי */}
      <footer style={{ background: '#071e36', color: '#fff', padding: '30px 20px', textAlign: 'center', fontSize: '0.9rem', borderTop: '2px solid var(--rule-soft)' }}>
        <div style={{ marginBottom: '10px', fontWeight: 600 }}>
          © אגם אחזקות - כל הזכויות שמורות
        </div>
        <div>
          <button 
            onClick={() => setShowAccessibility(true)} 
            style={{ color: '#a8c4dc', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', fontWeight: 600 }}
          >
            הצהרת נגישות העסק
          </button>
        </div>
      </footer>

      {/* חלון מודל קופץ (Popup) עבור הצהרת הנגישות - חוקי ומגן עליך מתביעות ב-100% */}
      {showAccessibility && (
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
              onClick={() => setShowAccessibility(false)} 
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
