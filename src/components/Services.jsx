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

        <div className="grid-3 services-grid" style={{ gap: '1.8rem' }}>
          {servicesData.map((service, idx) => (
            <div key={idx} className="premium-card text-center">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: service.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', transition: 'var(--transition)' }} className="service-icon-wrapper">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', lineHeight: '1.5' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
