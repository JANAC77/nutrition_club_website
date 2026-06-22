import React, { useState } from 'react';
import { X } from 'lucide-react';
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

  const images = [g1, g2, g3, g4, g5, g6, g7, g8];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="gallery-item animate-fade-in-up" 
              style={{ animationDelay: `${(idx % 4 + 1) * 100}ms` }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Gallery item ${idx + 1}`} />
              <div className="gallery-overlay">
                <span>View Image</span>
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
            backgroundColor: 'rgba(0,0,0,0.9)',
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
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10000
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Selected gallery item" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain', 
              borderRadius: '1rem',
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
