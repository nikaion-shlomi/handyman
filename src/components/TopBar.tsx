import { GALLERY, SHOW_REVIEWS } from '../content';
import { useLang } from '../lang';
import { GlobeIcon } from '../icons';

export function TopBar() {
  const { copy, toggle } = useLang();

  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <a className="topbar__mark" href="#top">
          <span className="topbar__name">{copy.hero.name}</span>
          <span className="topbar__trade">{copy.hero.trade}</span>
        </a>

        <nav className="topbar__nav">
          <a className="topbar__link" href="#services">
            {copy.nav.services}
          </a>
          {GALLERY.length > 0 ? (
            <a className="topbar__link" href="#gallery">
              {copy.nav.gallery}
            </a>
          ) : null}
          {SHOW_REVIEWS ? (
            <a className="topbar__link" href="#reviews">
              {copy.nav.reviews}
            </a>
          ) : null}
          <a className="topbar__link" href="#videos">
            {copy.nav.videos}
          </a>
          <a className="topbar__link" href="#contact">
            {copy.nav.contact}
          </a>
        </nav>

        <button type="button" className="langtoggle" onClick={toggle} aria-label={copy.toggle.aria}>
          <GlobeIcon />
          {copy.toggle.label}
        </button>
      </div>
    </header>
  );
}
