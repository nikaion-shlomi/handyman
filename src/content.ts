export type Lang = 'he' | 'en';

export interface SiteContent {
  meta: { title: string; desc: string; dir: string; description: string; };
  topbar: { name: string; trade: string; nav: { label: string; href: string; }[]; };
  hero: { claim: string; lede: string; cta: string; call: string; phone: string; phoneDisplay: string; avatar: string; photo: string; stats: { value: string; label: string; }[]; };
  services: { eyebrow: string; title: string; lede: string; note: string; items: { title: string; body: string; }[]; };
  gallery: { eyebrow: string; title: string; lede: string; length: number; items: any[]; };
  videos: { eyebrow: string; title: string; lede: string; playLabel: string; items: string[]; };
  reviews: { eyebrow: string; title: string; empty: string; formTitle: string; formLede: string; googleCta: string; };
  contact: { eyebrow: string; title: string; lede: string; cta: string; call: string; phone: string; phoneDisplay: string; avatar: string; photo: string; areaLabel: string; area: string; hoursLabel: string; hours: string; length: number; };
  orb: { aria: string; tooltip: string; };
}

export function waLink(lang?: Lang): string {
  const currentLang = lang || 'he';
  const text = currentLang === 'he' 
    ? 'היי שלומי, הגעתי מהאתר. אשמח לקבל פרטים.' 
    : 'Hi Shlomi, I reached out from your website. I\'d love to get more details.';
  return 'https://wa.me/972503808067?text=' + encodeURIComponent(text);
}

export const VIDEOS = ['bollard-build', 'bollard-fitted', 'clogged-drain', 'welding', 'roof-sealing', 'solar-panels', 'tile-grouting', 'services-reel'];

export const CONTENT: Record<Lang, SiteContent> = {
  he: {
    meta: { title: 'שלומי הגמי · אגם אחזקות', desc: 'אחזקת מבנים ותיקונים', dir: 'rtl', description: 'אחזקת מבנים ותיקונים' },
    topbar: { name: 'שלומי הגמי', trade: 'אגם אחזקות', nav: [{ label: 'מה אני עושה', href: '#services' }, { label: 'עבודות', href: '#gallery' }, { label: 'חוות דעת', href: '#reviews' }, { label: 'וידאו', href: '#videos' }, { label: 'יצירת קשר', href: '#contact' }] },
    hero: { claim: 'מהגג ועד הביוב.', lede: 'אחזקת מבנים לוועדי בית, לעסקים ולבתים פרטיים – איטום, אינסטלציה, חשמל, ריתוך ותיקונים. מגיע עם הכלים, מראה מה הבעיה ומנקה אחרי.', cta: 'שלחו הודעה בוואטסאפ', call: 'חייגו אליי', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', stats: [{ value: '30', label: 'שנות ותק' }, { value: '5000+', label: 'קריאות בשנה' }, { value: '24 ש׳', label: 'זמן הגעה' }] },
    services: { eyebrow: 'התמחויות', title: 'שירותי אחזקה מקיפים', lede: 'כל תיקון מבוצע ברמת גימור עילאית, עם אחריות מלאה וחומרים בעלי תו תקן בלבד.', note: 'צריכים תיקון דחוף שלא מופיע ברשימה? דברו איתי ישירות בוואטסאפ.', items: [{ title: 'אינסטלציה ומערכות מים', body: 'תיקון פיצוצי צנרת, החלפת קווים, פתיחת סתימות מורכבות, הגברת לחץ מים וביוב.' }, { title: 'חשמל ותאורה', body: 'איתור קצרים, החלפת לוחות חשמל, התקנת גופי תאורה ופתרונות עומס.' }, { title: 'איטום ורטיבות', body: 'איטום גגות, פתרון נזילות קשות, שיקום קירות לאחר פגיעות מים וטיפול ברטיבות.' }, { title: 'ריתוך ומסגרות', body: 'תיקון והקמת קונסטרוקציות, מסגרות כבדה וקלה, ריתוך עמודי חירום ושערים.' }, { title: 'שטחים משותפים לוועדים', body: 'תחזוקה שוטפת של בנייני מגורים, תיקוני לובי, מערכות שאיבה ותקלות דחופות.' }, { title: 'עבודות ותיקונים בבית', body: 'התקנת דלתות, תיקוני צבע וגבס אומנותיים, תליית מסכים ומדפים לבית.' }] },
    gallery: { eyebrow: 'מהשטח', title: 'עבודות אחרונות שביצענו', lede: 'מבחר פרויקטים ותיקונים שצולמו בזמן אמת.', length: 0, items: [] },
    videos: { eyebrow: 'תיעוד חי', title: 'לראות את העבודה בעיניים', lede: 'סרטונים קצרים של התיקונים המורכבים שביצעתי לאחרונה בשטח.', playLabel: 'נגן וידאו', items: ['ייצור והקמת עמוד בטיחות בבניין', 'התקנה וקיבוע עמוד בטיחות בשטח', 'פתיחת סתימה וניקוי קו ביוב מורכב', 'עבודת ריתוך מקצועית', 'איטום גג יסודי לפני החורף', 'ניקוי פאנלים סולאריים', 'התקנת רצפת למינציה', 'תיקון מערכת סולארית למים חמים'] },
    reviews: { eyebrow: 'לקוחות ממליצים', title: 'מה אומרים עליי אחרי שהלכתי?', empty: 'כל הביקורות מנוהלות ומאומתות בגוגל מפות.', formTitle: 'הייתם מרוצים מהשירות?', formLede: 'הדעה שלכם חשובה לי מאוד ומסייעת לעסק שלי לצמוח.', googleCta: 'לחצו כאן
