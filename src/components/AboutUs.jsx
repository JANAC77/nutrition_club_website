import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aboutImg from '../assets/images/about-img.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-white" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        <div className="about-image" style={{ position: 'relative' }}>
          <img src={aboutImg} alt="Healthy Food and Nutrition" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--brand-primary)', color: 'white', padding: '1rem 2rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <span style={{ fontSize: '2rem' }}>🏅</span>
            <div>
              <div style={{ fontWeight: '700' }}>Certified Nutritionist</div>
              <div style={{ fontSize: '0.8rem' }}>& Wellness Coach</div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <div className="section-label">ABOUT NUTRITION CLUB</div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Helping You Build a<br/>Healthier Tomorrow</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            At Nutrition Club, we believe that the right nutrition can transform lives. Our expert guidance, personalized diet plans and natural Ayurvedic solutions help you achieve your health goals and maintain long-term wellness.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
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
