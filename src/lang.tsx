import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { CONTENT, type Copy, type Lang } from './content';

type LangValue = { lang: Lang; copy: Copy; setLang: (next: Lang) => void; toggle: () => void };

const LangContext = createContext<LangValue | null>(null);

const STORAGE_KEY = 'handyman.lang';

const readInitialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'he' ? stored : 'he';
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const copy = CONTENT[lang];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = copy.dir;
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.meta.description);
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, copy]);

  const setLang = (next: Lang) => setLangState(next);
  const toggle = () => setLangState((current) => (current === 'he' ? 'en' : 'he'));

  return (
    <LangContext.Provider value={{ lang, copy, setLang, toggle }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error('useLang must be used inside LangProvider');
  return value;
}
