import { useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';

export default function App() {
  
  useEffect(() => {
    // ♿ הזרקת התוסף הישראלי החלק של "נגיש לי"
    const script = document.createElement('script');
    script.src = "https://nagish.li";
    script.setAttribute('data-position', 'right'); // נועל את אייקון הנגישון בצד ימין של המסך!
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app-container" style={{ direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
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
      
      {/* 🟢 כפתור הוואטסאפ המקורי שיושב ומקובע בצד שמאל למטה */}
      <WhatsAppOrb />
    </div>
  );
}
