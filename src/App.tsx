import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';

export default function App() {
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
      
      {/* כפתור וואטסאפ ירוק קטן ואלגנטי בפינה התחתונה - מוגן לחלוטין משגיאות */}
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 999999,
          textDecoration: 'none'
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: '35px', height: '35px', fill: '#ffffff' }}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.12.6 4.21 1.75 5.98L2 22l4.25-1.12c1.71.93 3.63 1.43 5.78 1.43 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14c-.24.67-1.42 1.25-2 1.3-.53.05-1.22.08-3.4-.83-2.73-1.14-4.5-3.92-4.63-4.1-.14-.17-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.28.23-.21.5-.32.73-.32.08 0 .15 0 .22.02.16.02.34.03.5.42.2.47.67 1.63.73 1.75.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.45c-.13.14-.27.3-.12.56.3.52.74.98 1.23 1.42.63.56 1.16.82 1.46.97.27.14.43.12.59-.06.16-.18.73-.85.92-1.14.07-.12.2-.14.33-.1.14.05.88.42 1.04.5.15.08.26.12.3.19.04.07.04.42-.2.1.09z" />
        </svg>
      </a>

      {/* הזרקת רכיב הנגישון הרשמי של UserWay ישירות לתוך קוד האתר להפעלה מיידית */}
      <script 
        src="https://userway.org" 
        data-account="uW8p3kLX2a" 
        data-position="1" 
        defer 
      />
    </div>
  );
}
