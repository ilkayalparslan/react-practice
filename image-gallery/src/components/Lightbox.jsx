import { useEffect } from 'react';
import useStore from '../store';

function Lightbox() {
  const images = useStore((state) => state.images);
  const selectedImageIndex = useStore((state) => state.selectedImageIndex);
  const closeLightbox = useStore((state) => state.closeLightbox);
  const nextImage = useStore((state) => state.nextImage);
  const prevImage = useStore((state) => state.prevImage);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage, closeLightbox]);
  if (selectedImageIndex === null) return null;

  const currentImage = images[selectedImageIndex];
  return (
    <div className='lightbox' onClick={closeLightbox}>
      <button className='lightbox-close'>X</button>
      <button
        className='lightbox-prev'
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        {' '}
        ←
      </button>
      <img
        src={currentImage.src.replace('w=600', 'w=1200')}
        alt={currentImage.category}
        className='lightbox-image'
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className='lightbox-next'
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        →
      </button>
      <div className='lightbox-info'>
        <span className='lightbox-category'>{currentImage.category}</span>
        <span className='lightbox-counter'>
          {selectedImageIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
export default Lightbox;
