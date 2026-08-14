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

export default function App() {
  const { copy } = useLang();
  const origin = copy.dir === 'rtl' ? 'right' : 'left';

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
        <div className="shell footer__inner">
          <span>
            {copy.hero.name} · {copy.hero.trade}
          </span>
          <span>© {new Date().getFullYear()} · {copy.rights}</span>
        </div>
      </footer>

      <WhatsAppOrb />
    </div>
  );
}
