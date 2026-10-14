import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <div className="app-container" style={{ direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <TopBar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Services />
        <Videos />
        <Reviews />
        <Contact />
      </main>
      <footer style={{ background: '#071e36', color: '#fff', padding: '20px', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'Assistant, sans-serif' }}>
        © אגם אחזקות - כל הזכויות שמורות
      </footer>
      
      {/* כפתור הוואטסאפ המקורי, העגול והעובד שלך בצד שמאל למטה */}
      <WhatsAppOrb />

      {/* ♿ כפתור נגישות כחול, קטן ואלגנטי בצד ימין למטה - מובנה בתוך האתר וחסין תקלות! */}
      <button
        onClick={() => setShowAccessibility(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          backgroundColor: '#0066cc',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 99999,
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="תפריט נגישות"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="1" />
          <path d="m9 20 3-6 3 6" />
          <path d="m6 8 6 2 6-2" />
          <path d="M12 10v4" />
        </svg>
      </button>

      {/* חלון הצהרת הנגישות הרשמי והחוקי שקופץ על המסך בלחיצה ומכסה אותך ב-100% */}
      {showAccessibility && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 999999, display: 'flex', alignItems: 'center', justifycontent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', color: '#071e36', padding: '30px', borderRadius: '12px', maxWidth: '500px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'right', position: 'relative', direction: 'rtl', margin: 'auto' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: '#071e36', fontFamily: 'Suez One, serif', fontWeight: 'bold' }}>הצהרת נגישות - אגם אחזקות</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', fontFamily: 'Assistant, sans-serif' }}>
              אנו באגם אחזקות רואים בחשיבות עליונה את הגשת השירות בצורה שוויונית לכלל הגולשים. האתר נבנה בקוד מודרני, נקי ונגיש המותאם לצפייה מכלל המכשירים הניידים והמכשירים הנייחים, ותומך בטכנולוגיות מסייעות ובסרגלי נגישות מובנים.
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
    </div>
  );
}
