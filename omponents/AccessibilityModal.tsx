import React from 'react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm" dir="rtl">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col animate-fade-in border border-gray-100">
        
        {/* כותרת החלון */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h2 className="text-xl font-bold text-[#0C3358] font-sans">הצהרת נגישות — שלומי הגמי · אגם אחזקות</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none p-2 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="סגור חלון"
          >
            ✕
          </button>
        </div>

        {/* תוכן ההצהרה */}
        <div className="p-6 overflow-y-auto text-gray-700 space-y-4 text-right font-sans leading-relaxed">
          <p className="font-semibold text-gray-800">
            באגם אחזקות אנו רואים בחשיבות עליונה את מתן השירות השוויוני לכלל הלקוחות והגולשים, ובכלל זה לאנשים עם מוגבלויות. אנו משקיעים מאמצים ומשאבים רבים על מנת להנגיש את אתר האינטרנט שלנו, במטרה לאפשר חוויית גלישה נוחה, עצמאית וטבעית לכל אדם.
          </p>

          <h3 className="text-lg font-bold text-[#0C3358] pt-2 border-t border-gray-100">התאמות הנגישות באתר</h3>
          <p>
            אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), התשס"ג-2013, ומותאם להמלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA.
          </p>
          
          <ul className="list-disc list-inside space-y-1.5 pr-2">
            <li><span className="font-medium text-gray-900">תוסף נגישות:</span> באתר מוטמע רכיב הנגישות של חברת UserWay המאפשר שינוי גדלי גופן, התאמת ניגודיות, הדגשת קישורים ועוד.</li>
            <li><span className="font-medium text-gray-900">ניווט מקלדת:</span> תמיכה מלאה בניווט באמצעות המקלדת (מקש Tab) ללא שימוש בעכבר.</li>
            <li><span className="font-medium text-gray-900">קוראי מסך:</span> התאמה לקוראי מסך עבור אנשים עם לקויות ראייה.</li>
            <li><span className="font-medium text-gray-900">תמונות ומדיה:</span> הוספת תיאור אלטרנטיבי (Alt tags) לתמונות באתר להבטחת קריאות מלאה.</li>
          </ul>

          <h3 className="text-lg font-bold text-[#0C3358] pt-2 border-t border-gray-100">פרטי רכז הנגישות ופניות בנושא נגישות</h3>
          <p>
            למרות מאמצינו להנגיש את כלל הרכיבים, ייתכן שיתגלו חלקים ספציפיים שטרם הונגשו כראוי. אם נתקלתם בבעיה, בתקלה או בשאלה בנושא הנגישות, נשמח אם תעדכנו אותנו כדי שנוכל לתקן זאת בהקדם ובצורה הטובה ביותר.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 inline-block w-full">
            <p className="font-medium text-gray-900">פרטי התקשרות עם שלומי (רכז הנגישות):</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <span className="font-semibold">שם:</span> שלומי הגמי</li>
              <li>• <span className="font-semibold">טלפון/וואטסאפ:</span> לחיוג ופנייה ישירה דרך כפתורי יצירת הקשר באתר</li>
              <li>• <span className="font-semibold">אזורי שירות פיזיים:</span> באר יעקב, רמלה, חולון, בת ים, נס ציונה וראשון לציון</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 text-left pt-4">
            הצהרת הנגישות עודכנה בחודש אוקטובר 2026.
          </p>
        </div>

        {/* כפתור סגירה תחתון */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-[#0C3358] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all text-sm shadow-sm"
          >
            הבנתי, תודה
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccessibilityModal;
