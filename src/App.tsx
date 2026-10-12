import React, { useState } from 'react';
import { useLang } from './lang';
import { TopBar } from './components/TopBar';
import { RulerRail } from './components/RulerRail';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import { WhatsAppOrb } from './components/WhatsAppOrb';
import AccessibilityModal from './AccessibiltyModel';

export default function App() {
  const { copy } = useLang();
  const origin = copy.dir === 'rtl' ? 'right' : 'left';
  
  // משתנה השולט על פתיחת וסגירת חלונית הנגישות
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  return (
    <div className="page" style={{ '--origin': origin } as React.CSSProperties}>
      <a className="skip" href="#main">
        {copy.skip}
      </a>

      <RulerRail />
      <TopBar />

      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Videos />
        <Contact />
      </main>

      <footer className="footer">
        <div className="shell footer__inner" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <div>
            <span>
              {copy.hero.name} · {copy.hero.trade}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} · {copy.rights}</span>
            <button 
              onClick={() => setIsAccessibilityOpen(true)}
              style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              הצהרת נגישות
            </button>
          </div>
        </div>
      </footer>

      <WhatsAppOrb />

      {/* רכיב חלונית הצהרת הנגישות הקופצת */}
      <AccessibilityModal 
        isOpen={isAccessibilityOpen} 
        onClose={() => setIsAccessibilityOpen(false)} 
      />
    </div>
  );
}
