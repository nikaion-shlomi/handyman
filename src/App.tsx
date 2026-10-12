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
    </div>
  );
}
