import { useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  
  useEffect(() => {
    // טעינה מאובטחת וחלק של "נגיש לי" ברקע
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = "https://nagish.li";
      script.async = true;
      script.defer = true;
      script.setAttribute('data-override-body', 'false'); 
      document.body.appendChild(script);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container" style={{ direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Services />
        <Videos />
        <Reviews /> {/* החלק של ההמלצות וחוות הדעת מגוגל חזר למקומו הרשמי! */}
        <Contact />
      </main>
      <footer style={{ background: '#071e36', color: '#fff', padding: '20px', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'Assistant, sans-serif' }}>
        © אגם אחזקות - כל הזכויות שמורות
      </footer>
      
      {/* כפתור הוואטסאפ המקורי והעגול של האתר שלך */}
      <WhatsAppOrb />
    </div>
  );
}
