import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 0', background: 'var(--brand-primary)', color: 'white' }}>
      <div className="container grid-2 items-center" style={{ gap: '4rem' }}>

        <div>
          <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: '800', marginBottom: '1rem' }}>Get Your<br />Free Consultation</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>Take the first step towards a healthier you. Book your free consultation now!</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['100% Free', 'No Obligation', 'Expert Advice'].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--brand-yellow)' }}>✓</span> {item}
              </div>
            ))}
          </div>

          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Fresh Vegetables" style={{ width: '80%', borderRadius: '15px', boxShadow: 'var(--shadow-lg)' }} />
        </div>

        <div style={{ background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--brand-yellow)', color: 'var(--brand-dark)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', textAlign: 'center', lineHeight: '1.1', fontSize: '0.8rem', transform: 'rotate(15deg)', boxShadow: 'var(--shadow-md)' }}>
            100%<br />Satisfaction<br />Guaranteed
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', outline: 'none' }} />
              <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', outline: 'none' }} />
              <select style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', outline: 'none', color: '#64748b', backgroundColor: 'white' }}>
                <option>Select Goal</option>
                <option>Weight Loss</option>
                <option>Weight Gain</option>
                <option>General Fitness</option>
              </select>
            </div>
            <textarea placeholder="Message (Optional)" rows="4" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>

            <button type="button" style={{ background: 'var(--brand-dark)', color: 'white', padding: '1rem', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer' }}>
              Request Free Consultation
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
