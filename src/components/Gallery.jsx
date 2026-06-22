import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import g1 from '../assets/images/gallery-1.jpg';
import g2 from '../assets/images/gallery-2.jpg';
import g3 from '../assets/images/gallery-3.jpg';
import g4 from '../assets/images/gallery-4.jpg';
import g5 from '../assets/images/gallery-5.jpg';
import g6 from '../assets/images/gallery-6.jpg';
import g7 from '../assets/images/gallery-7.jpg';
import g8 from '../assets/images/gallery-8.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [g1, g2, g3, g4, g5, g6, g7, g8];

  return (
    <section id="gallery" className="section bg-white" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="section-label">OUR GALLERY</div>
          <h2 className="section-title">A Glimpse of Health & Wellness</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: '15px', 
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                aspectRatio: '1 / 1'
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Gallery item ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  transition: 'transform 0.5s ease',
                  transform: hoveredIndex === idx ? 'scale(1.1)' : 'scale(1)'
                }} 
              />
              
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'rgba(21, 115, 53, 0.7)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  opacity: hoveredIndex === idx ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', color: 'var(--brand-primary)', transform: hoveredIndex === idx ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.4s ease' }}>
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10000,
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Selected gallery item" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain', 
              borderRadius: '8px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              cursor: 'default'
            }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
