import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--brand-dark)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--brand-accent)' }}>
              <div style={{ lineHeight: '1.2' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>Kumar Wellness</span><br />
                <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--brand-accent)' }}>& Weight Management Coach</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              We help people achieve their health goals with natural nutrition and expert guidance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--brand-accent)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              <li><a href="home">Home</a></li>
              <li><a href="about">About Us</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="products">Products</a></li>
              <li><a href="gallery">Gallery</a></li>
              <li><a href="contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--brand-accent)' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              <li>Weight Loss / Gain</li>
              <li>Digestive Health</li>
              <li>Balanced Nutrition</li>
              <li>Women & Children Nutrition</li>
              <li>Energy & Fitness</li>
              <li>Zoom Consultations</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--brand-accent)' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Phone size={18} color="var(--brand-accent)" /> +91 79757 15244</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Mail size={18} color="var(--brand-accent)" /> info@nutritionclub.com</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><MapPin size={18} color="var(--brand-accent)" /> Bengaluru, Karnataka, India</li>
            </ul>
            <a href="https://wa.me/917975715244" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <button style={{ marginTop: '1.5rem', background: 'var(--brand-accent)', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Phone size={16} /> WhatsApp Us
              </button>
            </a>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
          <div>© 2026 Kumar Wellness and Weight Management Coach. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
