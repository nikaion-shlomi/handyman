import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT } from './content';

export type Lang = 'he' | 'en';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('handyman.lang');
      return stored === 'en' ? 'en' : 'he';
    }
    return 'he';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('handyman.lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within a LangProvider');
  return context;
}

export function useCopy() {
  const { lang } = useLang();
  return CONTENT[lang];
}

export function useDir() {
  const { lang } = useLang();
  return lang === 'en' ? 'ltr' : 'rtl';
}
