import { useState } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // derived values
  const currentImage = images[currentIndex];
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className='image-carousel'>
      <div
        className='image-carousel-image'
        style={{ backgroundImage: `url(${currentImage})` }}
        role='img'
        aria-label={alt}
      />

      {/* prev/next button */}
      <button
        type='button'
        onClick={handlePrev}
        className='image-carousel-btn image-carousel-btn-prev'
        aria-label='Previous image'
      >
        ‹
      </button>

      <button
        type='button'
        onClick={handleNext}
        className='image-carousel-btn image-carousel-btn-next'
        aria-label='Next image'
      >
        ›
      </button>

      {/* debug indicator (gecici) */}
      <div className='image-carousel-debug'>
        Image {currentIndex + 1} of {totalImages}
      </div>
    </div>
  );
}
export default ImageCarousel;
