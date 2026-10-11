import React from 'react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }} 
      dir="rtl"
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #f3f4f6',
          overflow: 'hidden'
        }}
      >
        
        {/* כותרת החלון */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'between',
            padding: '20px',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            justifyContent: 'space-between'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0C3358', margin: 0, fontFamily: 'sans-serif' }}>
            הצהרת נגישות — שלומי הגמי · אגם אחזקות
          </h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '6px'
            }}
            aria-label="סגור חלון"
          >
            ✕
          </button>
        </div>

        {/* תוכן ההצהרה */}
        <div 
          style={{
            padding: '24px',
            overflowY: 'auto',
            color: '#374151',
            textAlign: 'right',
            lineHeight: '1.6',
            fontFamily: 'sans-serif'
          }}
        >
          <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
            באגם אחזקות אנו רואים בחשיבות עליונה את מתן השירות השוויוני לכלל הלקוחות והגולשים, ובכלל זה לאנשים עם מוגבלויות. אנו משקיעים מאמצים ומשאבים רבים על מנת להנגיש את אתר האינטרנט שלנו, במטרה לאפשר חוויית גלישה נוחה, עצמאית וטבעית לכל אדם.
          </p>

          <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0C3358', marginTop: '16px', paddingTop: '8px', borderTop: '1px solid #f3f4f6' }}>
            התאמות הנגישות באתר
          </h3>
          <p>
            אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), התשס"ג-2013, ומותאם להמלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA.
          </p>
          
          <ul style={{ listStyleType: 'disc', paddingRight: '20px', marginTop: '8px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '6px' }}><span style={{ fontWeight: '500', color: '#111827' }}>תוסף נגישות:</span> באתר מוטמע רכיב הנגישות של חברת UserWay המאפשר שינוי גדלי גופן, התאמת ניגודיות, הדגשת קישורים ועוד.</li>
            <li style={{ marginBottom: '6px' }}><span style={{ fontWeight: '500', color: '#111827' }}>ניווט מקלדת:</span> תמיכה מלאה בניווט באמצעות המקלדת (מקש Tab) ללא שימוש בעכבר.</li>
            <li style={{ marginBottom: '6px' }}><span style={{ fontWeight: '500', color: '#111827' }}>קוראי מסך:</span> התאמה לקוראי מסך עבור אנשים עם לקויות ראייה.</li>
            <li style={{ marginBottom: '6px' }}><span style={{ fontWeight: '500', color: '#111827' }}>תמונות ומדיה:</span> הוספת תיאור אלטרנטיבי (Alt tags) לתמונות באתר להבטחת קריאות מלאה.</li>
          </ul>

          <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0C3358', marginTop: '16px', paddingTop: '8px', borderTop: '1px solid #f3f4f6' }}>
            פרטי רכז הנגישות ופניות בנושא נגישות
          </h3>
          <p>
            למרות מאמצינו להנגיש את כלל הרכיבים, ייתכן שיתגלו חלקים ספציפיים שטרם הונגשו כראוי. אם נתקלתם בבעיה, בתקלה או בשאלה בנושא הנגישות, נשמח אם תעדכנו אותנו כדי שנוכל לתקן זאת בהקדם ובצורה הטובה ביותר.
          </p>
          
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', marginTop: '16px' }}>
            <p style={{ fontWeight: '500', color: '#111827', margin: '0 0 8px 0' }}>פרטי התקשרות עם שלומי (רכז הנגישות):</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '4px' }}>• <strong>שם:</strong> שלומי הגמי</li>
              <li style={{ marginBottom: '4px' }}>• <strong>טלפון/וואטסאפ:</strong> לחיוג ופנייה ישירה דרך כפתורי יצירת הקשר באתר</li>
              <li>• <strong>אזורי שירות פיזיים:</strong> באר יעקב, רמלה, חולון, בת ים, נס ציונה וראשון לציון</li>
            </ul>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'left', marginTop: '16px', marginBotom: 0 }}>
            הצהרת הנגישות עודכנה בחודש אוקטובר 2026.
          </p>
        </div>

        {/* כפתור סגירה תחתון */}
        <div 
          style={{
            padding: '16px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <button 
            onClick={onClose}
            style={{
              padding: '8px 20px',
              backgroundColor: '#0C3358',
              color: '#ffffff',
              fontWeight: '500',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            הבנתי, תודה
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccessibilityModal;
