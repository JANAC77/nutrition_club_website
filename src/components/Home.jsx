import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">Be Inspired to get Fit & Healthy!</h1>
          <p className="hero-subtitle animate-fade-in-up delay-200">
            Nutrition for Better Life. Join our club today and lead a medicine-free life through best nutrition and healthy habits.
          </p>
          <div className="hero-cta animate-fade-in-up delay-400">
            <a href="#contact" className="btn btn-primary">
              Join Today <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn glass-card" style={{ padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
