import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span style={{ color: 'var(--brand-accent)' }}>✓</span> Take the first step towards a healthier, happier you!
          </div>
          <div className="topbar-right">
            <span>Call / WhatsApp: +91 79757 15244</span>
            <div className="social-icons" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <span style={{ cursor: 'pointer', display: 'flex' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></span>
              <span style={{ cursor: 'pointer', display: 'flex' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></span>
              <span style={{ cursor: 'pointer', display: 'flex' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></span>
              <span style={{ cursor: 'pointer', display: 'flex' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar glass" style={{ padding: '0.8rem 0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', cursor: 'pointer' }}>

            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', fontWeight: '800', color: 'var(--brand-dark)' }}>Kumar Wellness</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--brand-accent)', letterSpacing: '0.05em' }}>& Weight Management Coach</span>
            </div>
          </a>

          <ul className="nav-links" style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
            <li><a href="home" className="active">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="gallery">Gallery</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://wa.me/917975715244?text=Hi!%20I%20would%20like%20to%20get%20a%20free%20sample." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary top-cta-btn" style={{ padding: '0.7rem 1.4rem', fontSize: '0.95rem' }}>
                Get Free Sample
              </button>
            </a>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
          <li><a href="services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
          <li><a href="testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
          <li><a href="contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
