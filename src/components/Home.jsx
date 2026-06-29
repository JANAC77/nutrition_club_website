import React from 'react';
import { CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import heroBg from '../assets/images/hero-ayurveda-woman.png';

const Home = () => {
  return (
    <section id="home" className="bg-gradient-soft" style={{ padding: '2rem 0', overflow: 'hidden' }}>
      <div className="container grid-2 items-center">

        <div className="hero-text animate-fade-in-up" style={{ paddingRight: '2rem' }}>
          <span style={{ fontStyle: 'italic', fontFamily: 'Playfair Display, serif', color: 'var(--brand-accent)', fontSize: '1.8rem', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Transform Your</span>
          <h1 style={{ fontSize: '5rem', lineHeight: '1.05', marginBottom: '0.8rem', fontWeight: '700' }}>
            <span style={{ color: 'var(--brand-dark)' }}>Health</span><br /><span className="text-gradient">Naturally</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '1.2rem', maxWidth: '480px', lineHeight: '1.6' }}>
            Personalized nutrition guidance, Ayurvedic solutions & wellness programs to help you live a healthier, happier and energetic life.
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {['Weight Loss / Gain Programs', 'Better Digestion & Skin Health', "Women's & Children's Nutrition", 'Energy & Fitness Improvement', 'Online Zoom Consultations'].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: '#333', fontSize: '0.9rem' }}>
                <CheckCircle2 color="var(--brand-accent)" size={20} fill="white" strokeWidth={2.5} /> {item}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/917975715244" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary animate-pulse-glow"><MessageCircle size={18} /> WhatsApp Now</button>
            </a>
            <a href="#contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-outline"><Calendar size={18} /> Book Free Consultation</button>
            </a>
          </div>
        </div>

        <div className="hero-image animate-fade-in-up delay-200" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <img src={heroBg} alt="Healthy Lifestyle Ayurveda" className="animate-float" style={{ width: '110%', maxWidth: 'none', objectFit: 'cover', transform: 'translateX(5%)' }} />
        </div>

      </div>
    </section>
  );
};

export default Home;
