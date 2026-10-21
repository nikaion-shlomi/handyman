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
  return 'https://wa.me' + encodeURIComponent(text);
}

export const VIDEOS = ['bollard-build', 'sewage-repair', 'drain-clean', 'welding-door', 'pipe-leak', 'roof-sealing', 'electric-box', 'wall-fix'];


export const CONTENT: Record<Lang, SiteContent> = {
  he: {
    meta: { title: 'שלומי הגמי · אגם אחזקות', desc: 'אחזקת מבנים ותיקונים', dir: 'rtl', description: 'אחזקת מבנים ותיקונים' },
    topbar: { name: 'שלומי הגמי', trade: 'אגם אחזקות', nav: [{ label: 'מה אני עושה', href: '#services' }, { label: 'עבודות', href: '#gallery' }, { label: 'חוות דעת', href: '#reviews' }, { label: 'וידאו', href: '#videos' }, { label: 'יצירת קשר', href: '#contact' }] },
    hero: { claim: 'מהגג ועד הביוב.', lede: 'אחזקת מבנים לוועדי בית, לעסקים ולבתים פרטיים – איטום, אינסטלציה, חשמל, ריתוך ותיקונים. מגיע עם הכלים, מראה מה הבעיה ומנקה אחרי.', cta: 'שלחו הודעה בוואטסאפ', call: 'חייגו אליי', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', stats: [{ value: '30', label: 'שנות ותק' }, { value: '5000+', label: 'קריאות בשנה' }, { value: '24 ש׳', label: 'זמן הגעה' }] },
    services: { eyebrow: 'התמחויות', title: 'שירותי אחזקה מקיפים', lede: 'כל תיקון מבוצע ברמת גימור עילאית, עם אחריות מלאה וחומרים בעלי תו תקן בלבד.', note: 'צריכים תיקון דחוף שלא מופיע ברשימה? דברו איתי ישירות בוואטסאפ.', items: [{ title: 'אינסטלציה ומערכות מים', body: 'תיקון פיצוצי צנרת, החלפת קווים, פתיחת סתימות מורכבות, הגברת לחץ מים וביוב.' }, { title: 'חשמל ותאורה', body: 'איתור קצרים, החלפת לוחות חשמל, התקנת גופי תאורה ופתרונות עומס.' }, { title: 'איטום ורטיבות', body: 'איטום גגות, פתרון נזילות קשות, שיקום קירות לאחר פגיעות מים וטיפול ברטיבות.' }, { title: 'ריתוך ומסגרות', body: 'תיקון והקמת קונסטרוקציות, מסגרות כבדה וקלה, ריתוך עמודי חירום ושערים.' }, { title: 'שטחים משותפים לוועדים', body: 'תחזוקה שוטפת של בנייני מגורים, תיקוני לובי, מערכות שאיבה ותקלות דחופות.' }, { title: 'עבודות ותיקונים בבית', body: 'התקנת דלתות, תיקוני צבע וגבס אומנותיים, תליית מסכים ומדפים לבית.' }] },
    gallery: { eyebrow: 'מהשטח', title: 'עבודות אחרונות שביצענו', lede: 'מבחר פרויקטים ותיקונים שצולמו בזמן אמת.', length: 0, items: [] },
    videos: { eyebrow: 'תיעוד חי', title: 'לראות את העבודה בעיניים', lede: 'סרטונים קצרים של התיקונים המורכבים שביצעתי לאחרונה בשטח.', playLabel: 'נגן וידאו', items: ['ייצור והקמת עמוד חירום בבניין', 'הקמה ותיקון של צינור שפכים ראשי', 'פתיחת סתימה וניקוי קו ביוב מורכב', 'עבודת ריתוך מקצועית לדלת מחסן', 'איתור ותיקון נזילת מים פנימית בקיר', 'איטום גג יסודי לפני החורף', 'סידור ואיזון ארון חשמל בניין', 'תיקון ושיקום קיר גבס פגוע'] },
    reviews: { eyebrow: 'לקוחות ממליצים', title: 'מה אומרים עליי אחרי שהלכתי?', empty: 'כל הביקורות מנוהלות ומאומתות בגוגל מפות.', formTitle: 'הייתם מרוצים מהשירות?', formLede: 'הדעה שלכם חשובה לי מאוד ומסייעת לעסק שלי לצמוח.', googleCta: 'לחצו כאן לכתיבת ביקורת בגוגל' },
    contact: { eyebrow: 'זמינות', title: 'תארו לי מה שבור — הכי מהיר בוואטסאפ', lede: 'שלחו לי תמונה או סרטון של התקלה, ותקבלו הערכת מחיר סגורה והגעה מהירה.', cta: 'פתחו הודעה בוואטסאפ', call: 'חייגו אליי עכשיו', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', areaLabel: 'אזורי שירות', area: 'באר יעקב, ראשון לציון, נס ציונה, חולון, בת ים, רמלה והסביבה.', hoursLabel: 'שעות פעילות', hours: 'ימים א׳-ה׳: 07:00 - 19:00 | יום ו׳: 07:00 - 14:00', length: 0 },
    orb: { aria: 'צרו קשר בוואטסאפ', tooltip: 'וואטסאפ ישיר לשלומי' }
  },
  en: {
    meta: { title: 'Shlomi Hegami · Agam Maintenance', desc: 'Building maintenance & repairs', dir: 'ltr', description: 'Building maintenance & repairs' },
    topbar: { name: 'Shlomi Hegami', trade: 'Agam Maintenance', nav: [{ label: 'Services', href: '#services' }, { label: 'Gallery', href: '#gallery' }, { label: 'Reviews', href: '#reviews' }, { label: 'Videos', href: '#videos' }, { label: 'Contact', href: '#contact' }] },
    hero: { claim: 'From Roof to Sewage.', lede: 'Building maintenance for committees, businesses, and private homes – sealing, plumbing, electricity, welding, and repairs.', cta: 'Chat on WhatsApp', call: 'Call Me Directly', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', stats: [{ value: '30', label: 'Years Exp.' }, { value: '5000+', label: 'Calls / Year' }, { value: '24h', label: 'Response Time' }] },
    services: { eyebrow: 'Expertise', title: 'Our Professional Services', lede: 'Every repair is executed to perfection, using certified materials.', note: 'Need a specific repair? Text me on WhatsApp.', items: [{ title: 'Plumbing & Water Systems', body: 'Leaks, pipe replacements, and unclogging complex blockages.' }, { title: 'Electricity & Lighting', body: 'Short circuit troubleshooting and electric board replacements.' }, { title: 'Sealing & Moisture Control', body: 'Roof sealing and advanced leak solutions.' }, { title: 'Welding & Ironwork', body: 'Constructing and repairing metal frames and gates.' }, { title: 'Building Committee Maintenance', body: 'Routine care for residential buildings and lobby repairs.' }, { title: 'Home Repairs & Handyman', body: 'Door installations, drywall patching, and TV mounting.' }] },
    gallery: { eyebrow: 'From the Field', title: 'Our Recent Projects', lede: 'A selection of real-time project photos.', length: 0, items: [] },
    videos: { eyebrow: 'Live Proof', title: 'See the Quality Ourselves', lede: 'Here are short video clips documenting complex repairs.', playLabel: 'Play Video', items: ['Emergency welding', 'Main sewage line', 'Pipe blockage clearing', 'Door metal welding', 'Water leak repair', 'Winter roof sealing', 'Electric box maintenance', 'Drywall restoration'] },
    reviews: { eyebrow: 'Testimonials', title: 'What Do Clients Say?', empty: 'All reviews are 100% managed through Google Maps.', formTitle: 'Satisfied with the service?', formLede: 'Your feedback is highly valuable.', googleCta: 'Click Here to Review on Google' },
    contact: { eyebrow: 'Availability', title: 'Describe the Issue — Fastest on WhatsApp', lede: 'Send me a photo or video of the issue.', cta: 'Open WhatsApp Chat', call: 'Call Me Now', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', areaLabel: 'Service Areas', area: 'Beer Yaakov, Rishon LeZion, Ness Ziona, Holon, Bat Yam, Ramla, and nearby areas.', hoursLabel: 'Working Hours', hours: 'Sun-Thu: 07:00 - 19:00 | Fri: 07:00 - 14:00', length: 0 },
    orb: { aria: 'Contact on WhatsApp', tooltip: 'Direct WhatsApp to Shlomi' }
  }
};

export const GALLERY = CONTENT.he.gallery;
export const CONTACT = CONTENT.he.contact;
export const Copy = CONTENT.he;
