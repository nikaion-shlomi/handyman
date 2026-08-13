import type { ReactElement } from 'react';
import type { ToolIcon } from './content';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 15.71c-.25.69-1.43 1.32-2 1.41a4.1 4.1 0 0 1-1.87-.12c-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.93-4.29-5.08-4.49-.15-.2-1.21-1.6-1.21-3.06s.77-2.17 1.04-2.47c.27-.3.59-.37.79-.37h.57c.18.01.43-.07.67.51.25.6.84 2.05.92 2.2.07.15.12.32.02.52-.1.2-.15.33-.3.5-.15.17-.32.38-.45.52-.15.14-.3.3-.13.6.17.3.76 1.27 1.64 2.05 1.13 1.01 2.08 1.32 2.38 1.47.29.15.47.13.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.72-.17 1.41Z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M6.2 3.5h3l1.5 3.8-2 1.3a12.5 12.5 0 0 0 6.7 6.7l1.3-2 3.8 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5s1.2-6.2 3.4-8.5Z" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 3.5 21 12 6 20.5v-17Z" />
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.6h.01" />
    </svg>
  );
}

const TOOLS: Record<ToolIcon, ReactElement> = {
  wrench: (
    <>
      <path d="M17.4 3.6a5 5 0 0 0-6.2 6.2L3.9 17a2 2 0 0 0 2.8 2.8l7.2-7.2a5 5 0 0 0 6.2-6.2l-2.9 2.9-2.7-.6-.6-2.7 2.5-2.4Z" />
      <path d="M6.2 17.4h.01" />
    </>
  ),
  drill: (
    <>
      <path d="M3.5 7.2h9.2v5.4H3.5a1 1 0 0 1-1-1V8.2a1 1 0 0 1 1-1Z" />
      <path d="M12.7 8.6h4.1v2.6h-4.1M16.8 9.9h4.7" />
      <path d="M6.6 12.6 5.4 20a1 1 0 0 0 1 1.2h2.4" />
    </>
  ),
  brush: (
    <>
      <path d="M8.4 2.8h7.2v8.6H8.4z" />
      <path d="M9.8 11.4h4.4v3.2a2.2 2.2 0 0 1-2.2 2.2 2.2 2.2 0 0 1-2.2-2.2v-3.2Z" />
      <path d="M12 16.8v4.4M8.4 6.2h7.2" />
    </>
  ),
  plug: (
    <>
      <path d="M8.2 3.4v5M15.8 3.4v5" />
      <path d="M5.6 8.4h12.8v3.4a6.4 6.4 0 0 1-6.4 6.4 6.4 6.4 0 0 1-6.4-6.4V8.4Z" />
      <path d="M12 18.2v3.2" />
    </>
  ),
  frame: (
    <>
      <rect x="3.2" y="4.4" width="17.6" height="12.4" rx="1" />
      <path d="M8.4 20.2h7.2M12 16.8v3.4" />
      <path d="m6.6 13.6 3-3.4 2.4 2.6 2.6-3.4 2.8 4.2" />
    </>
  ),
  door: (
    <>
      <path d="M5.4 2.8h11.8a1 1 0 0 1 1 1v17.4H5.4a1 1 0 0 1-1-1V3.8a1 1 0 0 1 1-1Z" />
      <path d="M14.6 12.2h.01M4.4 21.2h15.2" />
    </>
  ),
};

export function ToolGlyph({ name }: { name: ToolIcon }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} className="jobcard__icon">
      {TOOLS[name]}
    </svg>
  );
}
