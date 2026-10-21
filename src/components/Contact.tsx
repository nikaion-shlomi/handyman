import { useCopy } from '../lang';

export function Contact() {
  const copy = useCopy() as any;
  const contact = copy.contact;

  if (!contact) return null;

  return (
    <section id="contact" style={{ padding: '60px 20px', background: 'var(--ground-deep)' }}>
      <div className="shell" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'right' }}>
        <span style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
          {contact.eyebrow}
        </span>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--ink)' }}>
          {contact.title}
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: 'var(--ink-soft)', lineHeight: '1.6' }}>
          {contact.lede}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a 
            href={`https://wa.me`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#25d366', color: '#fff', padding: '15px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}
          >
            💬 {contact.cta}
          </a>

          <a 
            href={`tel:${contact.phone}`}
            style={{ display: 'block', background: 'var(--ink)', color: '#fff', padding: '15px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}
          >
            📞 {contact.call}: {contact.phone}
          </a>
        </div>

        <div style={{ marginTop: '40px', borderTop: '1px solid var(--rule)', paddingTop: '20px', fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
          <p style={{ marginBottom: '8px' }}><strong>{contact.areaLabel}:</strong> {contact.area}</p>
          <p><strong>{contact.hoursLabel}:</strong> {contact.hours}</p>
        </div>
      </div>
    </section>
  );
}
