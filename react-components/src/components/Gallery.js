import React from 'react';

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Project ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
