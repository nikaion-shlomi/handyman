export type Lang = 'he' | 'en';

export function waLink(lang: Lang): string {
  const text = lang === 'he' 
    ? 'היי שלומי, הגעתי מהאתר. אשמח לקבל פרטים.' 
    : 'Hi Shlomi, I reached out from your website. Id love to get more details.';
  return `https://wa.me{encodeURIComponent(text)}`;
}

export const VIDEOS = [
  'bollard-build',
  'sewage-repair',
  'drain-clean',
  'welding-door',
  'pipe-leak',
  'roof-sealing',
  'electric-box',
  'wall-fix'
];

export const CONTENT = {
  he: {
    meta: {
      title: 'שלומי הגמי · אגם אחזקות',
      desc: 'אחזקת מבנים ותיקונים — איטום, אינסטלציה, חשמל וריתוך. עבודה נקייה, מחיר סגור מראש, הגעה תוך 24 שעות.'
    },
    topbar: {
      name: 'שלומי הגמי',
      trade: 'אגם אחזקות',
      nav: [
        { label: 'מה אני עושה', href: '#services' },
        { label: 'עבודות', href: '#gallery' },
        { label: 'חוות דעת', href: '#reviews' },
        { label: 'וידאו', href: '#videos' },
        { label: 'יצירת קשר', href: '#contact' }
      ]
    },
    hero: {
      claim: 'מהגג ועד הביוב.',
      lede: 'אחזקת מבנים לוועדי בית, לעסקים ולבתים פרטיים – איטום, אינסטלציה, חשמל, ריתוך ותיקונים. מגיע עם הכלים, מראה מה הבעיה לפני שנוגעים, ומנקה אחרי.',
      cta: 'שלחו הודעה בוואטסאפ',
      call: 'חייגו אליי',
      stats: [
        { value: '30', label: 'שנות ותק' },
        { value: '5000+', label: 'קריאות בשנה' },
        { value: '24 ש׳', label: 'זמן הגעה' }
      ]
    },
    services: {
      eyebrow: 'התמחויות',
      title: 'שירותי אחזקה מקיפים',
      lede: 'כל תיקון מבוצע ברמת גימור עילאית, with אחריות מלאה וחומרים בעלי תו תקן בלבד.',
      note: 'צריכים תיקון דחוף שלא מופיע ברשימה? דברו איתי ישירות בוואטסאפ.',
      items: [
        { title: 'אינסטלציה ומערכות מים', body: 'תיקון פיצוצי צנרת, החלפת קווים, פתיחת סתימות מורכבות, הגברת לחץ מים וטיפול במרזבים וביוב.' },
        { title: 'חשמל ותאורה', body: 'איתור קצרים, החלפת לוחות חשמל, התקנת גופי תאורה, פתרונות עומס, והכנת תשתיות למערכות מורכבות.' },
        { title: 'איטום ורטיבות', body: 'איטום גגות, פתרון נזילות קשות, שיקום קירות לאחר פגיעות מים, וטיפול יסודי ברטיבות מבנית.' },
        { title: 'ריתוך ומסגרות', body: 'תיקון והקמת קונסטרוקציות, מסגרות כבדה וקלה, ריתוך עמודי חירום, שערים וסורגים בהתאמה אישית.' },
        { title: 'שטחים משותפים לוועדים', body: 'תחזוקה שוטפת של בנייני מגורים, תיקוני לובי, מערכות שאיבה, ותיקוני תקלות דחופות בבניינים.' },
        { title: 'עבודות ותיקונים בבית', body: 'התקנת דלתות, תיקוני צבע וגבס אומנותיים, תליית מסכים ומדפים, ופתרון לכל בעיה קטנה או גדולה.' }
      ]
    },
    gallery: {
      eyebrow: 'מהשטח',
      title: 'עבודות אחרונות שביצענו',
      lede: 'מבחר פרויקטים ותיקונים שצולמו בזמן אמת, רגע לפני מסירה ללקוח.'
    },
    videos: {
      eyebrow: 'תיעוד חי',
      title: 'לראות את העבודה בעיניים',
      lede: 'I מאמין בשקיפות מלאה. הנה כמה סרטונים קצרים של התיקונים המורכבים שביצעתי לאחרונה בשטח.',
      playLabel: 'נגן וידאו',
      items: [
        'ייצור והקמת עמוד חירום בבניין',
        'הקמה ותיקון של צינור שפכים ראשי',
        'פתיחת סתימה וניקוי קו ביוב מורכב',
        'עבודת ריתוך מקצועית לדלת מחסן',
        'איתור ותיקון נזילת מים פנימית בקיר',
        'איטום גג יסודי לפני החורף',
        'סידור ואיזון ארון חשמל בניין',
        'תיקון ושיקום קיר גבס פגוע'
      ]
    },
    reviews: {
      eyebrow: 'לקוחות ממליצים',
      title: 'מה אומרים עליי אחרי שהלכתי?',
      empty: 'כל הביקורות שלי מנוהלות ומאומתות ב-100% ישירות דרך גוגל מפות (Google Maps) כדי להבטיח אמינות מוחלטת.',
      formTitle: 'הייתם מרוצים מהשירות?',
      formLede: 'הדעה שלכם חשובה לי מאוד ומסייעת לעסק שלי לצמוח. אשמח אם תקדישו חצי דקה לכתוב עליי חוות דעת בגוגל.',
      googleCta: 'לחצו כאן לכתיבת ביקורת בגוגל'
    },
    contact: {
      eyebrow: 'זמינות',
      title: 'תארו לי מה שבור — הכי מהיר בוואטסאפ',
      lede: 'שלחו לי תמונה או סרטון של התקלה, ותקבלו הערכת מחיר סגורה והגעה מהירה תוך 24 שעות.',
      cta: 'פתחו הודעה בוואטסאפ',
      call: 'חייגו אליי עכשיו',
      areaLabel: 'אזורי שירות',
      area: 'באר יעקב, ראשון לציון, נס ציונה, חולון, בת ים, רמלה והסביבה.',
      hoursLabel: 'שעות פעילות',
      hours: 'ימים א׳-ה׳: 07:00 - 19:00 | יום ו׳: 07:00 - 14:00'
    },
    orb: {
      aria: 'צרו קשר בוואטסאפ',
      tooltip: 'וואטסאפ ישיר לשלומי'
    }
  },
  en: {
    meta: {
      title: 'Shlomi Hegami · Agam Maintenance',
      desc: 'Building maintenance & repairs — Sealing, plumbing, electricity, and welding. Clean work, fixed price upfront, arrival within 24 hours.'
    },
    topbar: {
      name: 'Shlomi Hegami',
      trade: 'Agam Maintenance',
      nav: [
        { label: 'Services', href: '#services' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Videos', href: '#videos' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      claim: 'From Roof to Sewage.',
      lede: 'Building maintenance for committees, businesses, and private homes – sealing, plumbing, electricity, welding, and repairs. I arrive fully equipped, explain the issue before starting, and leave the space clean.',
      cta: 'Chat on WhatsApp',
      call: 'Call Me Directly',
      stats: [
        { value: '30', label: 'Years Exp.' },
        { value: '5000+', label: 'Calls / Year' },
        { value: '24h', label: 'Response Time' }
      ]
    },
    services: {
      eyebrow: 'Expertise',
      title: 'Our Professional Services',
      lede: 'Every repair is executed to perfection, using certified materials and backed by a full warranty.',
      note: 'Need a specific repair not listed here? Text me directly on WhatsApp.',
      items: [
        { title: 'Plumbing & Water Systems', body: 'Fixing leaks, pipe replacements, unclogging complex blockages, water pressure balancing, and drainage care.' },
        { title: 'Electricity & Lighting', body: 'Short circuit troubleshooting, electric board replacements, lighting installation, and full safety diagnostics.' },
        { title: 'Sealing & Moisture Control', body: 'Roof sealing, advanced leak solutions, wall reconstruction post water damage, and structural moisture treatment.' },
        { title: 'Welding & Ironwork', body: 'Constructing and repairing metal frames, heavy welding, emergency pillar enforcement, and custom gates.' },
        { title: 'Building Committee Maintenance', body: 'Routine care for residential buildings, lobby repairs, water pump maintenance, and urgent common-area troubleshooting.' },
        { title: 'Home Repairs & Handyman', body: 'Door installations, artistic paint and drywall patching, TV mounting, shelving, and solving any domestic issue.' }
      ]
    },
    gallery: {
      eyebrow: 'From the Field',
      title: 'Our Recent Projects',
      lede: 'A selection of real-time project photos, taken straight from the work site.'
    },
    videos: {
      eyebrow: 'Live Proof',
      title: 'See the Quality Ourselves',
      lede: 'I believe in full transparency. Here are short video clips documenting complex repairs I recently completed.',
      playLabel: 'Play Video',
      items: [
        'Emergency building pillar welding',
        'Main sewage line installation',
        'Complex pipe blockage clearing',
        'Storage room door metal welding',
        'Internal wall water leak repair',
        'Comprehensive winter roof sealing',
        'Main electric box maintenance',
        'Professional drywall restoration'
      ]
    },
    reviews: {
      eyebrow: 'Testimonials',
      title: 'What Do Clients Say?',
      empty: 'All of my reviews are 100% managed and verified directly through Google Maps to guarantee absolute authenticity.',
      formTitle: 'Satisfied with the service?',
      formLede: 'Your feedback is highly valuable to my business. I would appreciate it if you could take 30 seconds to leave a review on Google.',
      googleCta: 'Click Here to Review on Google'
    },
    contact: {
      eyebrow: 'Availability',
      title: 'Describe the Issue — Fastest on WhatsApp',
      lede: 'Send me a photo or video of the issue, and get a guaranteed fixed price quote with rapid arrival within 24 hours.',
      cta: 'Open WhatsApp Chat',
      call: 'Call Me Now',
      areaLabel: 'Service Areas',
      area: 'Beer Yaakov, Rishon LeZion, Ness Ziona, Holon, Bat Yam, Ramla, and nearby areas.',
      hoursLabel: 'Working Hours',
      hours: 'Sun-Thu: 07:00 - 19:00 | Fri: 07:00 - 14:00'
    },
    orb: {
      aria: 'Contact on WhatsApp',
      tooltip: 'Direct WhatsApp to Shlomi'
    }
  }
};
