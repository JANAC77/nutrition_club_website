import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Homemaker", text: "I lost 7 kgs in 3 months with the personalized diet plan. Feeling more energetic and confident!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rahul Verma", role: "IT Professional", text: "My digestion has improved a lot and I have better skin now. Highly recommended!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Anita Patel", role: "Teacher", text: "Great guidance and continuous support. The Zoom sessions are very helpful!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Sandeep K.", role: "Businessman", text: "Best wellness coach! Natural approach and effective results. Thank you!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/46.jpg" }
  ];

  return (
    <section id="testimonials" className="section bg-light">
      <div className="container">
        <div className="text-center">
          <div className="section-label">SUCCESS STORIES</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
          <div className="testimonial-track">
            {[...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="premium-card" style={{ width: '320px', flexShrink: 0, padding: '2.5rem' }}>
                <div style={{ position: 'absolute', fontSize: '14rem', color: 'rgba(212, 175, 55, 0.08)', top: '-40px', right: '-10px', lineHeight: '1', zIndex: '0', fontFamily: 'Playfair Display, serif' }}>"</div>
                <div style={{ position: 'relative', zIndex: '1' }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="var(--brand-yellow)" color="var(--brand-yellow)" />)}
                </div>
                <p style={{ color: 'var(--text-gray)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  "{review.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={review.avatar} alt={review.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-dark)' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>{review.role}</span>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
