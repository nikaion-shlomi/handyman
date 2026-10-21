import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT } from './content';

export type Lang = 'he' | 'en';

interface LangContextType {
  lang: Lang;
  copy: any; // מחזיר את התוכן המותאם לשפה הנוכחית עבור TopBar ו-RulerRail
  toggle: () => void; // פונקציית החלפת השפה עבור כפתור שינוי השפה ב-TopBar
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

  const toggle = () => {
    const nextLang = lang === 'he' ? 'en' : 'he';
    setLangState(nextLang);
    localStorage.setItem('handyman.lang', nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  // האובייקט שמסופק לרכיבים כולל את copy ואת toggle בדיוק כפי שהם מצפים
  const value = {
    lang,
    copy: CONTENT[lang],
    toggle
  };

  return (
    <LangContext.Provider value={value}>
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
