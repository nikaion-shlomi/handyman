import { useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  
  // הזרקת קוד הנגישות של UserWay ישירות לזיכרון של הדף בצורה מאובטחת בלי לגעת ב-CSS
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://userway.org";
    script.setAttribute('data-account', 'uW8p3kLX2a');
    script.setAttribute('data-position', '1'); // מציב את האייקון למעלה כדי שלא יתנגש עם הוואטסאפ
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app-container" style={{ direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Services />
        <Videos />
        <Contact />
      </main>
      <footer style={{ background: '#071e36', color: '#fff', padding: '20px', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'Assistant, sans-serif' }}>
        © אגם אחזקות - כל הזכויות שמורות
      </footer>
      
      {/* הוואטסאפ המקורי והעובד של האתר */}
      <WhatsAppOrb />
    </div>
  );
}
