import React from 'react';
import { Users, CalendarCheck, Award, Heart, ShieldCheck } from 'lucide-react';

const Stats = () => {
  const statsData = [
    { icon: <Award size={24} color="var(--brand-primary)" />, value: "2+", label: "Years Experience", sub: "In Nutrition & Wellness" },
    { icon: <Users size={24} color="var(--brand-primary)" />, value: "200+", label: "Happy Clients", sub: "Successfully Transformed" },
    { icon: <CalendarCheck size={24} color="var(--brand-primary)" />, value: "500+", label: "Free Consultations", sub: "Guiding Towards Better Health" },
    { icon: <ShieldCheck size={24} color="var(--brand-primary)" />, value: "95%", label: "Success Rate", sub: "Client Satisfaction Worldwide" },
    { icon: <Heart size={24} color="var(--brand-primary)" />, value: "100%", label: "Natural Approach", sub: "Ayurvedic & Balanced Nutrition" }
  ];

  return (
    <section className="stats-section" style={{ padding: '4rem 0', background: '#f4f9f5' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          background: 'white',
          padding: '3rem 2rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
        }}>
          {statsData.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'white',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#111827', marginBottom: '0.4rem', lineHeight: '1' }}>{stat.value}</h3>
              <p style={{ fontWeight: '700', fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>{stat.label}</p>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.4', maxWidth: '160px' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
