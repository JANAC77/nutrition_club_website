import React from 'react';
import { Droplets, Leaf, ShieldPlus, Sun } from 'lucide-react';

const Products = () => {
  const productsList = [
    {
      icon: <Leaf size={40} color="var(--brand-primary)" />,
      name: "Vritilife Digestive Health",
      desc: "Ayurvedic formulation to support healthy digestion and gut microbiome.",
      price: "₹899"
    },
    {
      icon: <Droplets size={40} color="var(--brand-primary)" />,
      name: "Vritilife Skin Care",
      desc: "Natural extracts for radiant, glowing skin and anti-aging benefits.",
      price: "₹1,299"
    },
    {
      icon: <ShieldPlus size={40} color="var(--brand-primary)" />,
      name: "Immune Support Blend",
      desc: "Powerful herbs to boost immunity and protect against daily stressors.",
      price: "₹1,099"
    },
    {
      icon: <Sun size={40} color="var(--brand-primary)" />,
      name: "Energy & Vitality",
      desc: "Stay active all day with this natural energy boosting supplement.",
      price: "₹949"
    }
  ];

  return (
    <section id="products" className="section bg-light" style={{ padding: '6rem 0', background: '#fdfdfc' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="section-label">OUR PRODUCTS</div>
          <h2 className="section-title">Premium Ayurvedic Nutrition</h2>
          <p style={{ color: '#555', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Discover our exclusive range of Vritilife products designed to bring the ancient wisdom of Ayurveda to your modern lifestyle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {productsList.map((product, idx) => (
            <div key={idx} style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '2rem', 
              boxShadow: 'var(--shadow-md)', 
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'rgba(21, 115, 53, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                {product.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem', color: 'var(--brand-dark)' }}>
                {product.name}
              </h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                {product.desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <span style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--brand-primary)' }}>{product.price}</span>
                <button style={{ background: 'none', border: 'none', color: 'var(--brand-accent)', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '8px', fontSize: '1rem' }}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
