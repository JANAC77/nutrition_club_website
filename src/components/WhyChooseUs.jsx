import React from 'react';
import { ShieldCheck, HeartHandshake, FileBadge, Ear } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <ShieldCheck size={36} color="var(--brand-accent)" />, title: 'Expert Guidance', desc: 'Professional advice from experienced nutrition experts.' },
    { icon: <HeartHandshake size={36} color="var(--brand-accent)" />, title: 'Natural & Ayurvedic', desc: 'Safe, natural and Ayurvedic nutrition solutions.' },
    { icon: <FileBadge size={36} color="var(--brand-accent)" />, title: 'Personalized Plans', desc: 'Customized diet plans tailored to your health goals.' },
    { icon: <Ear size={36} color="var(--brand-accent)" />, title: 'Ongoing Support', desc: 'Continuous support and motivation for your journey.' }
  ];

  return (
    <section className="why-choose-us section" style={{ background: 'linear-gradient(rgba(13,59,31,0.95), rgba(13,59,31,0.95)), url("https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundAttachment: 'fixed', color: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ color: 'var(--brand-accent)' }}>WHY CHOOSE US?</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'white', marginTop: '0.5rem' }}>Your Health is Our Priority</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            We are committed to providing science-based nutrition guidance with a natural and holistic approach for long-term results.
          </p>
          <div style={{ fontStyle: 'italic', color: 'var(--brand-accent)' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>Kumar</span><br />
            <span style={{ fontSize: '0.85rem' }}>Nutrition Expert</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
              <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'white' }}>{feature.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
