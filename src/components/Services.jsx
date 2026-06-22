import React from 'react';
import { Activity, Apple, Leaf, Smile, Heart, Users } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Activity size={40} />, title: 'Weight Management', desc: 'Effective strategies for weight loss and weight gain tailored to your body.' },
    { icon: <Smile size={40} />, title: 'Skin & Digestion', desc: 'Improve your gut health and achieve glowing skin from within.' },
    { icon: <Apple size={40} />, title: 'Balanced Nutrition', desc: 'Food and balanced nutrition plans for sustainable healthy habits.' },
    { icon: <Users size={40} />, title: 'Family Nutrition', desc: 'Specialized programs focusing on children and women\'s nutrition.' },
    { icon: <Heart size={40} />, title: 'Energy & Fitness', desc: 'Boost your daily energy levels and overall fitness with targeted advice.' },
    { icon: <Leaf size={40} />, title: 'Vritilife Ayurveda', desc: 'Experience the touch of Ayurveda with our authentic skin care and health range.' },
  ];

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card service-card animate-fade-in-up" style={{ animationDelay: `${(idx % 3 + 1) * 150}ms` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
