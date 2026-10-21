
```tsx
import { CONTENT, SiteContent } from './content';

// פונקציה פשוטה לקבלת השפה הנוכחית השמורה או כברירת מחדל עברית
export function getLang(): 'he' | 'en' {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('handyman.lang');
    return stored === 'en' ? 'en' : 'he';
  }
  return 'he';
}

// ייצוא נתוני הטקסט המותאמים לשפה שנבחרה בשביל הרכיבים
export const useCopy = (): SiteContent => {
  const lang = getLang();
  return CONTENT[lang];
};

// קבלת כיוון הדף הנוכחי (RTL או LTR)
export const useDir = (): 'rtl' | 'ltr' => {
  const lang = getLang();
  return CONTENT[lang].meta.dir === 'ltr' ? 'ltr' : 'rtl';
};
