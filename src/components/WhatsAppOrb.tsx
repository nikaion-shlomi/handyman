import { waLink } from '../content';
import { useLang } from '../lang';
import { WhatsAppIcon } from '../icons';

export function WhatsAppOrb() {
  const { copy, lang } = useLang();

  return (
    <a
      className="orb"
      href={waLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.orb.aria}
    >
      <span className="orb__disc">
        <WhatsAppIcon />
      </span>
      <span className="orb__label">{copy.orb.tooltip}</span>
    </a>
  );
}
