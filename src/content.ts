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
    meta: {
      title: 'הנדימן באר יעקב, רמלה וראשון לציון | איטום, אינסטלציה וחשמל – שלומי הגמי',
      desc: 'הנדימן ואחזקת מבנים באזור המרכז: איטום, אינסטלציה, חשמל, ריתוך ותיקונים. 28 שנות ותק, מחיר סגור מראש, הגעה תוך 24 שעות.',
      dir: 'rtl',
      description: 'הנדימן ואחזקת מבנים באזור המרכז: איטום, אינסטלציה, חשמל, ריתוך ותיקונים. 28 שנות ותק, מחיר סגור מראש, הגעה תוך 24 שעות.'
    },
    topbar: { name: 'שלומי הגמי', trade: 'אגם אחזקות', nav: [{ label: 'מה אני עושה', href: '#services' }, { label: 'חוות דעת', href: '#reviews' }, { label: 'וידאו', href: '#videos' }, { label: 'יצירת קשר', href: '#contact' }] },
    hero: { claim: 'מהביוב ועד לגג.', lede: 'אחזקת מבנים לוועדי בית, לעסקים ולבתים פרטיים – איטום, אינסטלציה, חשמל, ריתוך ותיקונים. מגיע עם הכלים, מראה מה הבעיה, מנקה אחרי, והמחיר סגור מראש.', cta: 'שלחו הודעה בוואטסאפ', call: 'חייגו אליי', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', stats: [{ value: '28', label: 'שנות ותק' }, { value: '5000+', label: 'קריאות בשנה' }, { value: '24 ש׳', label: 'זמן הגעה' }] },
    services: {
      eyebrow: 'התמחויות',
      title: 'שירותי אחזקה מקיפים',
      lede: 'כל תיקון מבוצע ברמת גימור גבוהה, עם חומרים איכותיים ואחריות על העבודה.',
      note: 'צריכים תיקון דחוף שלא מופיע ברשימה? דברו איתי ישירות בוואטסאפ.',
      items: [
        { title: 'אינסטלציה ומערכות מים', body: 'תיקון פיצוצי צנרת, החלפת קווים, פתיחת סתימות מורכבות, הגברת לחץ מים וביוב.' },
        { title: 'חשמל ותאורה', body: 'איתור קצרים, החלפת לוחות חשמל, התקנת גופי תאורה ופתרונות עומס.' },
        { title: 'איטום ורטיבות', body: 'איטום גגות, פתרון נזילות קשות, שיקום קירות לאחר פגיעות מים וטיפול ברטיבות.' },
        { title: 'ריתוך ומסגרות', body: 'תיקון והקמת קונסטרוקציות, מסגרות כבדה וקלה, ריתוך עמודי חירום ושערים.' },
        { title: 'שטחים משותפים לוועדים', body: 'תחזוקה שוטפת של בנייני מגורים, תיקוני לובי, מערכות שאיבה ותקלות דחופות.' },
        { title: 'עבודות ותיקונים בבית', body: 'התקנה ותיקון דלתות, התקנת מזגנים, מצלמות אבטחה ואינטרקום, תיקוני צבע וגבס, תליית מסכים ומדפים.' }
      ]
    },
    gallery: { eyebrow: 'מהשטח', title: 'עבודות אחרונות שביצעתי', lede: 'מבחר פרויקטים ותיקונים שצולמו בזמן אמת.', length: 0, items: [] },
    videos: { eyebrow: 'תיעוד חי', title: 'לראות את העבודה בעיניים', lede: 'סרטונים קצרים של התיקונים המורכבים שביצעתי לאחרונה בשטח.', playLabel: 'נגן וידאו', items: ['ייצור והקמת עמוד בטיחות בבניין', 'התקנה וקיבוע עמוד בטיחות בשטח', 'פתיחת סתימה וניקוי קו ביוב מורכב', 'עבודת ריתוך מקצועית', 'איטום גג יסודי לפני החורף', 'ניקוי פאנלים סולאריים', 'התקנת רצפת למינציה', 'תיקון מערכת סולארית למים חמים'] },
    reviews: { eyebrow: 'לקוחות ממליצים', title: 'מה אומרים עליי אחרי שהלכתי?', empty: 'המלצות מלקוחות מתוך הודעות שקיבלתי (ללא שמות). ביקורות מאומתות נוספות אפשר לקרוא בגוגל מפות.', formTitle: 'הייתם מרוצים מהשירות?', formLede: 'הדעה שלכם חשובה לי מאוד ומסייעת לעסק שלי לצמוח.', googleCta: 'לחצו כאן לכתיבת ביקורת בגוגל' },
    contact: { eyebrow: 'זמינות', title: 'תארו לי מה שבור — הכי מהיר בוואטסאפ', lede: 'שלחו לי תמונה או סרטון של התקלה, ותקבלו הערכת מחיר סגורה והגעה מהירה.', cta: 'פתחו הודעה בוואטסאפ', call: 'חייגו אליי עכשיו', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', areaLabel: 'אזורי שירות', area: 'באר יעקב, ראשון לציון, נס ציונה, חולון, בת ים, רמלה והסביבה.', hoursLabel: 'שעות פעילות', hours: 'ימים א׳-ה׳: 08:00 - 19:00 | יום ו׳: 08:00 - 14:00', length: 0 },
    orb: { aria: 'צרו קשר בוואטסאפ', tooltip: 'וואטסאפ ישיר לשלומי' }
  },
  en: {
    meta: {
      title: "Handyman Be'er Ya'akov, Ramla & Rishon LeZion | Shlomi Hagami – Agam Maintenance",
      desc: 'Handyman and building maintenance in central Israel: waterproofing, plumbing, electrical, welding and repairs. 28 years of experience, fixed price upfront, arrival within 24 hours.',
      dir: 'ltr',
      description: 'Handyman and building maintenance in central Israel: waterproofing, plumbing, electrical, welding and repairs. 28 years of experience, fixed price upfront, arrival within 24 hours.'
    },
    topbar: { name: 'Shlomi Hagami', trade: 'Agam Maintenance', nav: [{ label: 'Services', href: '#services' }, { label: 'Reviews', href: '#reviews' }, { label: 'Videos', href: '#videos' }, { label: 'Contact', href: '#contact' }] },
    hero: { claim: 'From Sewage to Roof.', lede: "Building maintenance for committees, businesses and private homes – waterproofing, plumbing, electrical, welding and repairs. I arrive with the tools, show you what's wrong, clean up afterwards, and agree on a fixed price upfront.", cta: 'Chat on WhatsApp', call: 'Call Me Directly', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', stats: [{ value: '28', label: 'Years Exp.' }, { value: '5000+', label: 'Calls / Year' }, { value: '24h', label: 'Response Time' }] },
    services: {
      eyebrow: 'Expertise',
      title: 'My Professional Services',
      lede: 'Every repair is done to a high standard of finish, with quality materials and a guarantee on the work.',
      note: 'Need a specific repair? Text me on WhatsApp.',
      items: [
        { title: 'Plumbing & Water Systems', body: 'Leaks, pipe replacements, and unclogging complex blockages.' },
        { title: 'Electricity & Lighting', body: 'Short circuit troubleshooting and electric board replacements.' },
        { title: 'Sealing & Moisture Control', body: 'Roof sealing and advanced leak solutions.' },
        { title: 'Welding & Ironwork', body: 'Constructing and repairing metal frames and gates.' },
        { title: 'Building Committee Maintenance', body: 'Routine care for residential buildings and lobby repairs.' },
        { title: 'Home Repairs & Handyman', body: 'Door installation and repair, air conditioner, security camera and intercom installation, painting and drywall patching, TV and shelf mounting.' }
      ]
    },
    gallery: { eyebrow: 'From the Field', title: 'Recent Work', lede: 'A selection of real-time project photos.', length: 0, items: [] },
    videos: { eyebrow: 'Live Proof', title: 'See the Work for Yourself', lede: 'Short video clips of complex repairs I carried out recently.', playLabel: 'Play Video', items: ['Safety bollard build', 'Safety bollard installation', 'Drain blockage clearing', 'Professional welding', 'Winter roof sealing', 'Solar panel cleaning', 'Laminate floor installation', 'Solar water heater repair'] },
    reviews: { eyebrow: 'Testimonials', title: 'What Do Clients Say?', empty: 'Testimonials from client messages (names withheld). More verified reviews are on Google Maps.', formTitle: 'Satisfied with the service?', formLede: 'Your feedback is highly valuable.', googleCta: 'Click Here to Review on Google' },
    contact: { eyebrow: 'Availability', title: 'Describe the Issue — Fastest on WhatsApp', lede: 'Send me a photo or video of the problem and get a fixed-price quote and fast arrival.', cta: 'Open WhatsApp Chat', call: 'Call Me Now', phone: '050-380-8067', phoneDisplay: '050-380-8067', avatar: '/shlomi.jpg', photo: '/hero-bg.jpg', areaLabel: 'Service Areas', area: "Be'er Ya'akov, Rishon LeZion, Ness Ziona, Holon, Bat Yam, Ramla, and nearby areas.", hoursLabel: 'Working Hours', hours: 'Sun-Thu: 08:00 - 19:00 | Fri: 08:00 - 14:00', length: 0 },
    orb: { aria: 'Contact on WhatsApp', tooltip: 'Direct WhatsApp to Shlomi' }
  }
};

export const GALLERY = CONTENT.he.gallery;
export const CONTACT = CONTENT.he.contact;
export const Copy = CONTENT.he;
