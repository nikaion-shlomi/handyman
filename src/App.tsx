import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';
import { useLang } from './lang';
import AccessibilityModal from './components/AccessibilityModal'; // חיבור הקובץ הקיים שלך של ההצהרה

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLang();

  // הזרקת סרגל הנגישות המקצועי של UserWay ישירות ברקע ללא תקלות עיצוב
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://userway.org";
    script.setAttribute('data-account', 'uW8p3kLX2a');
    script.setAttribute('data-position', '3'); // מיקום ימני תחתון מושלם
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app-container" style={{ direction: lang === 'en' ? 'ltr' : 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Services />
        <Videos />
        <Reviews />
        <Contact />
      </main>
      
      {/* פוטר נקי עם כפתור מובנה לפתיחת חלון הצהרת הנגישות הקיים שלך */}
      <footer style={{ background: '#071e36', color: '#fff', padding: '30px 20px', textAlign: 'center', fontSize: '0.85rem', fontFamily: 'Assistant, sans-serif' }}>
        <div style={{ marginBottom: '8px' }}>{lang === 'en' ? '© Agam Maintenance - All rights reserved' : '© אגם אחזקות - כל הזכויות שמורות'}</div>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ background: 'none', border: 'none', color: '#a8c4dc', textDecoration: 'underline', cursor: 'pointer', font: 'inherit', fontWeight: 'bold' }}
        >
          {lang === 'en' ? 'Accessibility Statement' : 'הצהרת נגישות העסק'}
        </button>
      </footer>
      
      {/* חלון הצהרת הנגישות הקופץ המפואר שלך */}
      <AccessibilityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* כפתור הוואטסאפ המקורי */}
      <WhatsAppOrb />
    </div>
  );
}
