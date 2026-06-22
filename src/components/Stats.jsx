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
    <section className="stats-section" style={{ padding: '4rem 0', background: '#f4f9f5' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          background: '#f9fbf9',
          padding: '3rem 1rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
        }}>
          {statsData.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: idx !== statsData.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#166534',
                boxShadow: '0 4px 10px rgba(22, 101, 52, 0.2)',
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
