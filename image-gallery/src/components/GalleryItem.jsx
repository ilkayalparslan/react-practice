import useStore from '../store';

function GalleryItem({ image, index }) {
  const openLightbox = useStore((state) => state.openLightbox);
  return (
    <div className='gallery-item' onClick={() => openLightbox(index)}>
      <img src={image.src} alt={image.category} />
      <div className='gallery-overlay'>
        <span className='gallery-category'>{image.category}</span>
      </div>
    </div>
  );
}

export default GalleryItem;
