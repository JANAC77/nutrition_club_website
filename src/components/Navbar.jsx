import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-logo">
            <span style={{ color: scrolled ? 'var(--primary-color)' : 'white', transition: 'color 0.4s ease' }}>Nutrition Club</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home" style={{ color: scrolled ? 'var(--text-dark)' : 'white' }}>Home</a></li>
            <li><a href="#about" style={{ color: scrolled ? 'var(--text-dark)' : 'white' }}>About Us</a></li>
            <li><a href="#services" style={{ color: scrolled ? 'var(--text-dark)' : 'white' }}>Services</a></li>
            <li><a href="#gallery" style={{ color: scrolled ? 'var(--text-dark)' : 'white' }}>Gallery</a></li>
            <li><a href="#contact" style={{ color: scrolled ? 'var(--text-dark)' : 'white' }}>Contact</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X color={scrolled ? 'var(--primary-color)' : 'white'} size={28} />
            ) : (
              <Menu color={scrolled ? 'var(--primary-color)' : 'white'} size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#gallery" onClick={closeMobileMenu}>Gallery</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
