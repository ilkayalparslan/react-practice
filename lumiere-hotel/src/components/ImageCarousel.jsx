import { useEffect, useState } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // derived values
  const currentImage = images[currentIndex];
  const totalImages = images.length;

  // preload all images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
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

      {/* dots indicator */}
      <div className='image-carousel-dots'>
        {images.map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => handleDotClick(index)}
            className={
              index === currentIndex
                ? 'image-carousel-dot image-carousel-dot-active'
                : 'image-carousel-dot'
            }
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default ImageCarousel;
