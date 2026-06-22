import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Homemaker", text: "I lost 7 kgs in 3 months with the personalized diet plan. Feeling more energetic and confident!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rahul Verma", role: "IT Professional", text: "My digestion has improved a lot and I have better skin now. Highly recommended!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Anita Patel", role: "Teacher", text: "Great guidance and continuous support. The Zoom sessions are very helpful!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Sandeep K.", role: "Businessman", text: "Best nutrition club! Natural approach and effective results. Thank you!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/46.jpg" }
  ];

  return (
    <section id="testimonials" className="section bg-light">
      <div className="container">
        <div className="text-center">
          <div className="section-label">SUCCESS STORIES</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="var(--brand-yellow)" color="var(--brand-yellow)" />)}
              </div>
              <p style={{ color: 'var(--text-gray)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={review.avatar} alt={review.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>{review.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
