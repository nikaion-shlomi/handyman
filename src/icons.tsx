import type { ReactElement } from 'react';

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.12.6 4.21 1.75 5.98L2 22l4.25-1.12c1.71.93 3.63 1.43 5.78 1.43 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14c-.24.67-1.42 1.25-2 1.3-.53.05-1.22.08-3.4-.83-2.73-1.14-4.5-3.92-4.63-4.1-.14-.17-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.28.23-.21.5-.32.73-.32.08 0 .15 0 .22.02.16.02.34.03.5.42.2.47.67 1.63.73 1.75.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.45c-.13.14-.27.3-.12.56.3.52.74.98 1.23 1.42.63.56 1.16.82 1.46.97.27.14.43.12.59-.06.16-.18.73-.85.92-1.14.07-.12.2-.14.33-.1.14.05.88.42 1.04.5.15.08.26.12.3.19.04.07.04.42-.2.1.09z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
      <line x1="3.6" y1="15" x2="20.4" y2="15" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  );
}

const cache: Record<string, ReactElement> = {};

export function getToolIcon(name: string): ReactElement {
  if (cache[name]) return cache[name];

  let path = <path d="M10.5 4.5l3 3m-8 8l8.5-8.5a2.12 2.12 0 113 3L8.5 19H5v-3.5z" />;

  if (name === 'plug') {
    path = <path d="M7 7h10v4a5 5 0 01-10 0V7zm5-4v4m-3 14h6m-3-4v4" />;
  } else if (name === 'brush') {
    path = <path d="M19 4H5a2 2 0 00-2 2v4h18V6a2 2 0 00-2-2zM3 10v4a4 4 0 004 4h10a4 4 0 004-4v-4H3z" />;
  } else if (name === 'drill') {
    path = <path d="M12 3l1 1-1 4h-2l-1-4 1-1zm0 5h4v4h-4V8zm-2 4h8v7H10v-7z" />;
  } else if (name === 'frame') {
    path = <path d="M4 4h16v16H4V4zm4 4h8v8H8V8z" />;
  } else if (name === 'door') {
    path = <path d="M18 3H6a2 2 0 00-2 2v16h16V5a2 2 0 00-2-2zm-4 9h2v2h-2v-2z" />;
  }

  const el = (
    <svg viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  );

  cache[name] = el;
  return el;
}
