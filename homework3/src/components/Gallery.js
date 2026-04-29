import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80'
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-text">Explore our collection of delicious dishes and the warm atmosphere of our restaurant.</p>
        <div className="gallery-wrapper">
          <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="slider-buttons">
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;