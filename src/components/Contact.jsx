import React from 'react';
import { Phone, Video, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-fade-in-up delay-200">
            <h2>Call For Free Sample!</h2>
            <p>One call may change your life. Reach out to Kumar to start your health journey and join our Zoom app sessions from anywhere.</p>
            
            <div className="contact-item mt-4">
              <div className="contact-icon">
                <Phone size={28} color="white" />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 7975715244</p>
                <p>Kumar</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Video size={28} color="white" />
              </div>
              <div className="contact-details">
                <h3>Online Sessions</h3>
                <p>Anybody Anywhere Login</p>
                <p>Zoom App in Your Mobile</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card animate-fade-in-up delay-400">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Send a Message</h3>
              <input 
                type="text" 
                placeholder="Your Full Name" 
              />
              <input 
                type="tel" 
                placeholder="Your Phone Number" 
              />
              <textarea 
                placeholder="How can we help you achieve your goals?" 
                rows="5"
                style={{ resize: 'vertical' }}
              ></textarea>
              <button type="button" className="btn btn-accent" style={{ marginTop: '1rem', width: '100%' }}>
                Submit Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
