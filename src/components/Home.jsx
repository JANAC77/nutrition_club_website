import React from 'react';
import { CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import heroBg from '../assets/images/hero-ayurveda-woman.png';

const Home = () => {
  return (
    <section id="home" style={{ padding: '5rem 0', overflow: 'hidden', background: '#fdfdfc' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>

        <div className="hero-text animate-fade-in-up" style={{ paddingRight: '2rem' }}>
          <span style={{ fontStyle: 'italic', color: 'var(--brand-primary)', fontSize: '1.4rem', marginBottom: '0.2rem', display: 'block', fontWeight: '500' }}>Transform Your</span>
          <h1 style={{ fontSize: '4.8rem', lineHeight: '1.05', color: 'var(--brand-primary)', marginBottom: '1.5rem', fontWeight: '800' }}>
            <span style={{ color: '#111' }}>Health</span><br />Naturally
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: '1.6' }}>
            Personalized nutrition guidance, Ayurvedic solutions & wellness programs to help you live a healthier, happier and energetic life.
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            {['Weight Loss / Gain Programs', 'Better Digestion & Skin Health', "Women's & Children's Nutrition", 'Energy & Fitness Improvement', 'Online Zoom Consultations'].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: '#333', fontSize: '0.95rem' }}>
                <CheckCircle2 color="var(--brand-accent)" size={22} fill="white" strokeWidth={2.5} /> {item}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://wa.me/917975715244" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', borderRadius: '8px', width: '100%' }}><MessageCircle size={18} /> WhatsApp Now</button>
            </a>
            <a href="#contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-outline" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', borderRadius: '8px', color: 'var(--brand-primary)', borderColor: '#e2e8f0', width: '100%' }}><Calendar size={18} /> Book Free Consultation</button>
            </a>
          </div>
        </div>

        <div className="hero-image animate-fade-in-up delay-200" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <img src={heroBg} alt="Healthy Lifestyle Ayurveda" style={{ width: '120%', maxWidth: 'none', objectFit: 'cover', transform: 'translateX(10%)' }} />
        </div>

      </div>
    </section>
  );
};

export default Home;
