import { useLang } from '../lang';

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

export function TopBar() {
  const { lang, copy, toggle } = useLang();
  const hasGallery = (copy.gallery?.items?.length ?? 0) > 0;
  const nav = (copy.topbar?.nav ?? []).filter(
    (item: { href: string }) => item.href !== '#gallery' || hasGallery
  );

  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <a className="topbar__mark" href="#top">
          <span className="topbar__name">{copy.topbar?.name}</span>
          <span className="topbar__trade">{copy.topbar?.trade}</span>
        </a>

        <nav className="topbar__nav">
          {nav.map((item: { label: string; href: string }) => (
            <a key={item.href} className="topbar__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="langtoggle"
          onClick={toggle}
          aria-label={lang === 'he' ? 'Switch to English' : 'החלפה לעברית'}
        >
          <GlobeIcon />
          {lang === 'he' ? 'EN' : 'עב'}
        </button>
      </div>
    </header>
  );
}
