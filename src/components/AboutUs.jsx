import React from 'react';
import aboutImg from '../assets/images/about-img.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">About Us</h2>
        <div className="about-grid">
          <div className="about-image animate-fade-in-up delay-200">
            <img 
              src={aboutImg} 
              alt="Healthy Food and Nutrition" 
            />
          </div>
          <div className="about-text animate-fade-in-up delay-400">
            <h3>Nutrition for Better Life</h3>
            <p>
              At Nutrition Club, we are dedicated to helping people live their best lives. We believe that good nutrition is the foundation of a healthy, energetic, and medicine-free lifestyle.
            </p>
            <p>
              Whether you are looking for weight management, improved digestion, better skin, or overall balanced nutrition for you and your family, we have the solutions and the community to support you.
            </p>
            <p>
              Led by Kumar, our expert guidance ensures that anybody, anywhere can login via Zoom and start transforming their habits today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
