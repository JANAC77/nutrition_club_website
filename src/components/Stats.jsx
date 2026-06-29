import React from 'react';
import { BookOpen, Users, FileBadge, Star, Heart } from 'lucide-react';

const Stats = () => {
  const statsData = [
    { icon: <BookOpen size={28} color="#facc15" />, value: "2+", label: "Years Experience", sub: "In Nutrition & Wellness" },
    { icon: <Users size={28} color="#facc15" />, value: "200+", label: "Happy Clients", sub: "Successfully Transformed" },
    { icon: <FileBadge size={28} color="#facc15" />, value: "500+", label: "Free Consultations", sub: "Guiding Towards Better Health" },
    { icon: <Star size={28} color="#facc15" fill="#facc15" />, value: "95%", label: "Success Rate", sub: "Client Satisfaction Worldwide" },
    { icon: <Heart size={28} color="#facc15" fill="#facc15" />, value: "100%", label: "Natural Approach", sub: "Ayurvedic & Balanced Nutrition" }
  ];

  return (
    <section className="stats-section" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-primary) 100%)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
          {statsData.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.4rem', lineHeight: '1' }}>{stat.value}</h3>
              <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#e5e7eb', marginBottom: '0.3rem' }}>{stat.label}</p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.4', maxWidth: '180px' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
