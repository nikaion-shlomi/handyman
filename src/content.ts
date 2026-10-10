export const CONTACT = {
  phone: '0503808067',
  phoneDisplay: '050-380-8067',
  whatsapp: '972503808067',
  email: 'shlomi@example.com',
  instagram: '',
  google: 'https://maps.app.goo.gl/v2a6s3LHNez7qHm79',
  photo: '/work/portrait.jpg',
  avatar: '/work/avatar.jpg',
};

export type Shot = { src: string; shape: 'tall' | 'wide' };

export const GALLERY: Shot[] = [
  { src: '/work/carport-light.jpg', shape: 'tall' },
  { src: '/work/wall-mount.jpg', shape: 'tall' },
  { src: '/work/garden-work.jpg', shape: 'tall' },
];

export const VIDEOS = [
  'bollard-build',
  'bollard-fitted',
  'roof-sealing',
  'tile-grouting',
  'welding',
  'services-reel',
];

export type Lang = 'he' | 'en';

export type Copy = {
  dir: 'rtl' | 'ltr';
  meta: { title: string; description: string };
  nav: { services: string; gallery: string; reviews: string; videos: string; contact: string };
  skip: string;
  toggle: { label: string; aria: string };
  hero: {
    eyebrow: string;
    name: string;
    trade: string;
    claim: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { icon: ToolIcon; title: string; body: string }[];
    note: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    lede: string;
    captions: { title: string; body: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    empty: string;
    formTitle: string;
    formLede: string;
    googleCta: string;
    googleNote: string;
    googleSource: string;
    googleCountLabel: string;
  };
  videos: {
    eyebrow: string;
    title: string;
    lede: string;
    playLabel: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    call: string;
    areaLabel: string;
    area: string;
    hoursLabel: string;
    hours: string;
    phoneLabel: string;
  };
  orb: { aria: string; tooltip: string };
  waMessage: string;
  rights: string;
};

export type ToolIcon = 'wrench' | 'drill' | 'brush' | 'plug' | 'frame' | 'door';

export const CONTENT: Record<Lang, Copy> = {
  he: {
    dir: 'rtl',
    meta: {
      title: 'שלומי הגמי · אגם אחזקות',
      description: 'אחזקת מבנים ותיקונים — איטום, אינסטלציה, חשמל וריתוך. עבודה נקייה, מחיר סגור מראש, הגעה תוך 24 שעות.',
    },
    nav: {
      services: 'מה אני עושה',
      gallery: 'עבודות',
      reviews: 'לקוחות',
      videos: 'וידאו',
      contact: 'יצירת קשר',
    },
    skip: 'דלגו לתוכן',
    toggle: { label: 'EN', aria: 'החלף לאנגלית' },
    hero: {
      eyebrow: 'זמין השבוע · השפלה והמרכז',
      name: 'שלומי הגמי',
      trade: 'אגם אחזקות',
      claim: 'מהגג ועד הביוב.',
      lede: 'אחזקת מבנים לוועדי בית, לעסקים ולבתים פרטיים — איטום, אינסטלציה, חשמל, ריתוך ותיקונים. מגיע עם הכלים, מראה מה הבעיה לפני שנוגעים, ומנקה אחרי.',
      ctaPrimary: 'שלחו הודעה בוואטסאפ',
      ctaSecondary: 'חייגו אליי',
      stats: [
        { value: '30', label: 'שנות ותק' },
        { value: '+5000', label: 'קריאות בשנה' },
        { value: '24 ש׳', label: 'זמן הגעה' },
      ],
    },
    services: {
      eyebrow: 'רשימת עבודות',
      title: 'מה אפשר לסמן ✓',
      lede: 'אם זה דולף, סתום, חלוד או לא נסגר — זה ברשימה. לא בטוחים? שלחו תמונה בוואטסאפ ותקבלו תשובה.',
      items: [
        {
          icon: 'wrench',
          title: 'אינסטלציה ומערכות מים',
          body: 'פתיחת סתימות בביוב, שוחות, משאבות טבולות, שעוני מים, אל־חוזר ומשחררי אוויר.',
        },
        {
          icon: 'plug',
          title: 'חשמל ותאורה',
          body: 'גופי תאורה בחניונים ובחדרי מדרגות, לוחות, חיישנים ופסי לד בשערים חשמליים.',
        },
        {
          icon: 'brush',
          title: 'איטום ורטיבות',
          body: 'איטום גגות ומרפסות ביריעות, טיפול בסדקים, מרזבים ותיקוני טיח וצבע אחרי.',
        },
        {
          icon: 'drill',
          title: 'ריתוך ומסגרות',
          body: 'ייצור והרכבה של עמודי חירום מתקפלים, מעקות, שערים וכל מה שצריך ריתוך במקום.',
        },
        {
          icon: 'frame',
          title: 'שטחים משותפים',
          body: 'חניונים תת קרקעיים, ריצוף ואבנים משתלבות, ניקוי חזיתות והסרת גרפיטי.',
        },
        {
          icon: 'door',
          title: 'עבודות בבית',
          body: 'תליות על הקיר, הרכבת רהיטים, דלתות שלא נסגרות, תריסים, מנעולים וקרמיקה שהתנתקה.',
        },
      ],
      note: 'עבודות חשמל ואינסטלציה מורכבות מועברות לבעל מקצוע מוסמך — אומר את זה מראש, לא באמצע.',
    },
    gallery: {
      eyebrow: 'מהשטח',
      title: 'עבודות אחרונות',
      lede: 'תמונות אמיתיות מימי עבודה — בלי סטוק, בלי פילטרים.',
      captions: [
        { title: 'גוף תאורה בחניה', body: 'החלפת גוף תאורה בתקרת חניה — פירוק, חיווט וסגירה נקייה.' },
        { title: 'תלייה על קיר חוץ', body: 'קידוח, עיגון ויישור על קיר חיצוני — בעוגן שמתאים לקיר.' },
        { title: 'עבודה בחצר', body: 'הכנה, כיסוי ופריסה — לפני שמתחילים, אחרי שמסיימים.' },
      ],
    },
    reviews: {
      eyebrow: 'מדידות מהשטח',
      title: 'רוצים לראות מה אומרים עלי אחרי שהלכתי?',
      empty: 'מוזמנים לגלות בחוות דעת בגוגל.',
      formTitle: 'היו חלק מההצלחה! ',
      formLede: 'אשמח לשמוע את חוות דעתך עלי בגוגל',
      googleCta: 'כתבו לי ביקורת בגוגל',
      googleNote: 'הביקורת מתפרסמת בגוגל במפות וגלויה בשקיפות לכלל הגולשים.',
      googleSource: 'ביקורות מ-Google',
      googleCountLabel: 'ביקורות בגוגל',
    },
    videos: {
      eyebrow: 'תיעוד עבודה',
      title: 'ככה זה נראה',
      lede: 'כמה עבודות מצולמות מהתחלה עד הסוף — כדי שתדעו למה לצפות עוד לפני שאני נכנס לדלת.',
      playLabel: 'נגן וידאו',
      items: [
        'ייצור עמוד חירום מתקפל',
        'העמוד מותקן בשטח',
        'איטום גג',
        'רובה ופנלים',
        'ריתוך במקום',
        'סקירת שירותים',
      ],
    },
    contact: {
      eyebrow: 'נקודת מגע',
      title: 'תארו לי מה שבור',
      lede: 'הכי מהיר בוואטסאפ: תמונה, שורה אחת של הסבר, וכתובת. אני מחזיר מחיר סגור ומועד הגעה — בדרך כלל תוך שעה.',
      cta: 'פתחו וואטסאפ',
      call: 'חייגו',
      areaLabel: 'אזור שירות',
      area: 'באר יעקב · רמלה · חולון · בת ים · נס ציונה · ראשון לציון',
      hoursLabel: 'שעות',
      hours: 'א׳–ה׳ 07:00–19:00 · ו׳ 07:00–13:00',
      phoneLabel: 'טלפון',
    },
    orb: { aria: 'שליחת הודעה בוואטסאפ', tooltip: 'דברו איתי בוואטסאפ' },
    waMessage: 'היי שלומי, הגעתי דרך האתר. רציתי לשאול לגבי ',
    rights: 'כל הזכויות שמורות',
  },

  en: {
    dir: 'ltr',
    meta: {
      title: 'Shlomi Hagami · Agam Maintenance',
      description: 'Building maintenance and repairs — waterproofing, plumbing, electrics and welding. Clean work, price agreed up front, on site within 24 hours.',
    },
    nav: {
      services: 'What I do',
      gallery: 'Work',
      reviews: 'Clients',
      videos: 'Video',
      contact: 'Get in touch',
    },
    skip: 'Skip to content',
    toggle: { label: 'עב', aria: 'Switch to Hebrew' },
    hero: {
      eyebrow: 'Available this week · Central Israel',
      name: 'Shlomi Hagami',
      trade: 'Agam Maintenance',
      claim: 'From the roof to the drains.',
      lede: 'Building maintenance for residents’ committees, businesses and private homes — waterproofing, plumbing, electrics, welding and repairs. I bring the tools, show you the problem before anyone touches it, and clean up after.',
      ctaPrimary: 'Message me on WhatsApp',
      ctaSecondary: 'Call me',
      stats: [
        { value: '30', label: 'Years on the job' },
        { value: '400+', label: 'Call-outs a year' },
        { value: '24 h', label: 'Typical response' },
      ],
    },
    services: {
      eyebrow: 'Job list',
      title: 'What you can tick off ✓',
      lede: 'If it leaks, blocks, rusts or will not shut, it is on the list. Not sure? Send a photo on WhatsApp and you will get an answer.',
      items: [
        {
          icon: 'wrench',
          title: 'Plumbing and water systems',
          body: 'Clearing blocked drains and manholes, submersible pumps, water meters, check valves and air release valves.',
        },
        {
          icon: 'plug',
          title: 'Electrics and lighting',
          body: 'Light fittings in car parks and stairwells, panels, sensors and LED strips on electric gates.',
        },
        {
          icon: 'brush',
          title: 'Waterproofing and damp',
          body: 'Membrane sealing on roofs and balconies, cracks, gutters, and making good the plaster and paint after.',
        },
        {
          icon: 'drill',
          title: 'Welding and metalwork',
          body: 'Building and fitting folding security bollards, railings, gates and anything that needs welding on site.',
        },
        {
          icon: 'frame',
          title: 'Communal areas',
          body: 'Underground car parks, paving and block stone, facade cleaning and graffiti removal.',
        },
        {
          icon: 'door',
          title: 'Jobs around the house',
          body: 'Wall mounting, furniture assembly, doors that will not close, shutters, locks and loose tiling.',
        },
      ],
      note: 'Complex electrical and plumbing work goes to a licensed tradesperson — I tell you that up front, not halfway through.',
    },
    gallery: {
      eyebrow: 'From the field',
      title: 'Recent jobs',
      lede: 'Real photos from real working days — no stock, no filters.',
      captions: [
        { title: 'Car park light fitting', body: 'Replacing a ceiling light — strip out, rewire, close up clean.' },
        { title: 'Mounting on an outside wall', body: 'Drilling, anchoring and levelling — on the anchor the wall actually needs.' },
        { title: 'Working in the garden', body: 'Prep, cover and lay out — before starting, and after finishing.' },
      ],
    },
    reviews: {
      eyebrow: 'Measured in the field',
      title: 'What people say after I leave',
      empty: 'No reviews yet. Be the first to write one!',
      formTitle: 'Client reviews',
      formLede: 'We would love to hear what you thought of the service',
      googleCta: 'Leave a review on Google',
      googleNote: 'Your review is published on Google and Maps, where everyone can see it.',
      googleSource: 'Reviews from Google',
      googleCountLabel: 'Google reviews',
    },
    videos: {
      eyebrow: 'Work log',
      title: 'This is what it looks like',
      lede: 'A few jobs filmed start to finish, so you know what to expect before I walk through the door.',
      playLabel: 'Play video',
      items: [
        'Building a folding security bollard',
        'The bollard fitted on site',
        'Roof waterproofing',
        'Grouting and skirting',
        'Welding on site',
        'A run through the work',
      ],
    },
    contact: {
      eyebrow: 'Point of contact',
      title: 'Tell me what is broken',
      lede: 'WhatsApp is fastest: a photo, one line of explanation, and an address. You get a fixed price and an arrival slot back, usually within the hour.',
      cta: 'Open WhatsApp',
      call: 'Call',
      areaLabel: 'Service area',
      area: 'Be’er Ya’akov · Ramla · Holon · Bat Yam · Nes Ziona · Rishon LeZion',
      hoursLabel: 'Hours',
      hours: 'Sun–Thu 07:00–19:00 · Fri 07:00–13:00',
      phoneLabel: 'Phone',
    },
    orb: { aria: 'Send a WhatsApp message', tooltip: 'Chat with me on WhatsApp' },
    waMessage: 'Hi Shlomi, I found you through your site. I wanted to ask about ',
    rights: 'All rights reserved',
  },
};

export const waLink = (lang: Lang) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTENT[lang].waMessage)}`;
