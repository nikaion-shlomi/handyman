import { CONTENT, SiteContent } from './content';

export function getLang(): 'he' | 'en' {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('handyman.lang');
    return stored === 'en' ? 'en' : 'he';
  }
  return 'he';
}

export const useCopy = (): SiteContent => {
  const lang = getLang();
  return CONTENT[lang];
};

export const useDir = (): 'rtl' | 'ltr' => {
  const lang = getLang();
  return CONTENT[lang].meta.dir === 'ltr' ? 'ltr' : 'rtl';
};
