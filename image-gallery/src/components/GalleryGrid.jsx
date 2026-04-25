import useStore from '../store';
import GalleryItem from './GalleryItem';

function GalleryGrid() {
  const images = useStore((state) => state.images);
  const selectedCategory = useStore((state) => state.selectedCategory);

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);
  return (
    <div className='gallery-grid'>
      {filteredImages.map((image, index) => (
        <GalleryItem key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}
export default GalleryGrid;
