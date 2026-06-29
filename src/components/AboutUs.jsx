import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aboutImg from '../assets/images/about-img.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gradient-soft" style={{ padding: '6rem 0' }}>
      <div className="container grid-2 items-center">
        
        <div className="about-image" style={{ position: 'relative', transition: 'transform 0.4s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img src={aboutImg} alt="Healthy Food and Nutrition" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
          <div className="glass" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1rem 2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <span style={{ fontSize: '2rem' }}>🏅</span>
            <div>
              <div style={{ fontWeight: '800', color: 'var(--brand-dark)' }}>Certified Nutritionist</div>
              <div style={{ fontSize: '0.8rem' }}>& Wellness Coach</div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <div className="section-label">ABOUT US</div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Helping You Build a<br/><span className="text-gradient">Healthier Tomorrow</span></h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            At Kumar Wellness and Weight Management Coach, we believe that the right nutrition can transform lives. Our expert guidance, personalized diet plans and natural Ayurvedic solutions help you achieve your health goals and maintain long-term wellness.
          </p>

          <div className="grid-2" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
            {['Personalized Nutrition Plans', 'Weight Management', 'Digestive Health Support', "Women & Children Nutrition", 'Energy & Fitness Boost', 'Skin & Hair Care Nutrition'].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>
                <CheckCircle size={18} color="var(--brand-primary)" /> {item}
              </div>
            ))}
          </div>

          <a href="#services" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary">Know More About Us <ArrowRight size={18} /></button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
