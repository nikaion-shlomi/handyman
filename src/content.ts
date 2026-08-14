export const CONTACT = {
  phone: '0503808067',
  phoneDisplay: '050-380-8067',
  whatsapp: '972503808067',
  email: 'shlomi@example.com',
  instagram: '',
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
    items: { quote: string; name: string; job: string; area: string; stars: number }[];
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
      title: 'שלומי הגמי · הנדימן',
      description: 'תיקונים, הרכבות ותליות בבית — עבודה נקייה, מחיר סגור מראש, הגעה תוך 24 שעות.',
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
      eyebrow: 'זמין השבוע · גוש דן והשרון',
      name: 'שלומי הגמי',
      trade: 'הנדימן',
      claim: 'מתקן. מרכיב. תולה.',
      lede: 'כל העבודות הקטנות שנערמות בבית — בארון אחד, ביום אחד. מגיע עם הכלים, מודד לפני שקודחים, ומנקה אחרי.',
      ctaPrimary: 'שלחו הודעה בוואטסאפ',
      ctaSecondary: 'חייגו אליי',
      stats: [
        { value: '12', label: 'שנות ותק' },
        { value: '+400', label: 'בתים בשנה' },
        { value: '24 ש׳', label: 'זמן הגעה' },
      ],
    },
    services: {
      eyebrow: 'רשימת עבודות',
      title: 'מה אפשר לסמן ✓',
      lede: 'אם זה תלוי, דולף, חורק או לא נסגר — זה ברשימה. לא בטוחים? שלחו תמונה בוואטסאפ ותקבלו תשובה.',
      items: [
        {
          icon: 'wrench',
          title: 'אינסטלציה קטנה',
          body: 'ברז מטפטף, סיפון סתום, מיכל הדחה, החלפת ראש מקלחת וחיבור מכונת כביסה.',
        },
        {
          icon: 'plug',
          title: 'חשמל ביתי',
          body: 'החלפת שקעים ומפסקים, גופי תאורה, מאווררי תקרה וחיווט של גוף תאורה חדש.',
        },
        {
          icon: 'drill',
          title: 'הרכבת רהיטים',
          body: 'ארונות, מיטות, שולחנות ומטבחונים מהקופסה — כולל עיגון לקיר וריפוד רגליות.',
        },
        {
          icon: 'frame',
          title: 'תליות על הקיר',
          body: 'טלוויזיה, מדפים, תמונות, מראות ומוטות וילון — בגובה נכון, ישר, ובעוגן שמתאים לקיר.',
        },
        {
          icon: 'door',
          title: 'דלתות וחלונות',
          body: 'דלת שחורקת או לא נסגרת, ידית רפויה, צירים, מנעולים, רשתות ותריסים תקועים.',
        },
        {
          icon: 'brush',
          title: 'תיקוני צבע וגבס',
          body: 'סתימת חורים וסדקים, שפכטל, נקודות רטיבות שנצבעו וקיר שצריך רענון.',
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
      title: 'מה אומרים אחרי שהלכתי',
      items: [
        {
          quote: 'הגיע בזמן, תלה טלוויזיה 65 אינץ׳ על קיר גבס ושתי מדפים, ויצא בלי להשאיר גרגר אבק. המחיר היה בדיוק מה שסוכם בוואטסאפ.',
          name: 'מיכל ל׳',
          job: 'תליית טלוויזיה ומדפים',
          area: 'רמת גן',
          stars: 5,
        },
        {
          quote: 'קניתי מטבחון של איקאה והתייאשתי אחרי שעתיים. שלומי הרכיב הכל בערב אחד, כולל חיבור הכיור והברז. חסך לי סופ״ש שלם.',
          name: 'יוסי א׳',
          job: 'הרכבת מטבחון',
          area: 'הרצליה',
          stars: 5,
        },
        {
          quote: 'דלת הממ״ד לא נסגרה שנה וחצי. שיפצניקים אמרו שצריך להחליף. הוא כיוון צירים ופתר את זה ברבע שעה, בלי למכור לי עבודה מיותרת.',
          name: 'רונית ש׳',
          job: 'כיוון דלת',
          area: 'גבעתיים',
          stars: 5,
        },
        {
          quote: 'שלחתי תמונה של הברז הדולף בשמונה בבוקר, קיבלתי מחיר תוך עשר דקות והוא היה אצלי למחרת. תקשורת ברורה בלי הפתעות.',
          name: 'אבי מ׳',
          job: 'החלפת ברז',
          area: 'תל אביב',
          stars: 5,
        },
      ],
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
      area: 'גוש דן, השרון והמרכז',
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
      title: 'Shlomi Hagami · Handyman',
      description: 'Repairs, assembly and mounting around the house — clean work, price agreed up front, on site within 24 hours.',
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
      eyebrow: 'Available this week · Tel Aviv & Sharon',
      name: 'Shlomi Hagami',
      trade: 'Handyman',
      claim: 'Fix. Assemble. Mount.',
      lede: 'Every small job piling up at home, handled in one visit. I bring the tools, measure before I drill, and clean up after.',
      ctaPrimary: 'Message me on WhatsApp',
      ctaSecondary: 'Call me',
      stats: [
        { value: '12', label: 'Years on the job' },
        { value: '400+', label: 'Homes a year' },
        { value: '24 h', label: 'Typical response' },
      ],
    },
    services: {
      eyebrow: 'Job list',
      title: 'What you can tick off ✓',
      lede: 'If it hangs, leaks, squeaks or will not shut, it is on the list. Not sure? Send a photo on WhatsApp and you will get an answer.',
      items: [
        {
          icon: 'wrench',
          title: 'Small plumbing',
          body: 'Dripping taps, blocked traps, toilet cisterns, shower heads and washing machine hookups.',
        },
        {
          icon: 'plug',
          title: 'Home electrics',
          body: 'Swapping sockets and switches, light fittings, ceiling fans and wiring in a new fixture.',
        },
        {
          icon: 'drill',
          title: 'Furniture assembly',
          body: 'Wardrobes, beds, desks and flat-pack kitchens — including wall anchoring and levelling the feet.',
        },
        {
          icon: 'frame',
          title: 'Wall mounting',
          body: 'TVs, shelves, art, mirrors and curtain rails — at the right height, level, on the anchor the wall actually needs.',
        },
        {
          icon: 'door',
          title: 'Doors and windows',
          body: 'Doors that squeak or will not close, loose handles, hinges, locks, screens and jammed shutters.',
        },
        {
          icon: 'brush',
          title: 'Paint and drywall repair',
          body: 'Filling holes and cracks, skim coating, painted-over damp patches and walls that need freshening up.',
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
      items: [
        {
          quote: 'Arrived on time, mounted a 65-inch TV on a drywall wall plus two shelves, and left without a speck of dust. The price was exactly what we agreed on WhatsApp.',
          name: 'Michal L.',
          job: 'TV and shelf mounting',
          area: 'Ramat Gan',
          stars: 5,
        },
        {
          quote: 'I bought an IKEA kitchenette and gave up after two hours. Shlomi assembled the whole thing in one evening, sink and tap included. Saved me an entire weekend.',
          name: 'Yossi A.',
          job: 'Kitchenette assembly',
          area: 'Herzliya',
          stars: 5,
        },
        {
          quote: 'Our safe-room door had not closed in a year and a half. Contractors said it needed replacing. He adjusted the hinges and fixed it in fifteen minutes, without selling me work I did not need.',
          name: 'Ronit S.',
          job: 'Door adjustment',
          area: 'Givatayim',
          stars: 5,
        },
        {
          quote: 'I sent a photo of the leaking tap at eight in the morning, had a price within ten minutes, and he was here the next day. Clear communication, no surprises.',
          name: 'Avi M.',
          job: 'Tap replacement',
          area: 'Tel Aviv',
          stars: 5,
        },
      ],
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
      area: 'Tel Aviv, the Sharon and central Israel',
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
