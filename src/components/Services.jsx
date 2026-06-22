import React from 'react';
import { Scale, HeartPulse, LeafyGreen, Users, Zap, Video } from 'lucide-react';

const Services = () => {
  const servicesData = [
    { icon: <Scale size={32} color="#157335" />, title: 'Weight Loss / Gain Programs', desc: 'Customized plans to achieve your ideal weight.', iconBg: '#e8f5e9' },
    { icon: <HeartPulse size={32} color="#84cc16" />, title: 'Digestive & Gut Health', desc: 'Improve digestion, metabolism and nutrient absorption.', iconBg: '#f4fce3' },
    { icon: <LeafyGreen size={32} color="#f59e0b" />, title: 'Balanced Nutrition', desc: 'Complete nutrition for a healthy body and mind.', iconBg: '#fffbeb' },
    { icon: <Users size={32} color="#8b5cf6" />, title: 'Women & Children Nutrition', desc: 'Special care for women, mothers and growing children.', iconBg: '#f5f3ff' },
    { icon: <Zap size={32} color="#3b82f6" />, title: 'Energy & Fitness', desc: 'Boost energy, stamina and overall physical performance.', iconBg: '#eff6ff' },
    { icon: <Video size={32} color="#ec4899" />, title: 'Online Zoom Sessions', desc: 'Consult with our experts from the comfort of home.', iconBg: '#fdf2f8' }
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="text-center">
          <div className="section-label">OUR SERVICES</div>
          <h2 className="section-title">Expert Nutrition & Wellness Solutions</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.8rem' }} className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} style={{ background: 'white', padding: '1.5rem 1rem', borderRadius: '12px', textAlign: 'center', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)' }} className="service-card-new">
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: service.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                {React.cloneElement(service.icon, { size: 24 })}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', lineHeight: '1.4' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
