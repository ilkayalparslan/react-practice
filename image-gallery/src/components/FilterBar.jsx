import useStore from '../store';

function FilterBar() {
  const images = useStore((state) => state.images);
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  return (
    <div className='filter-bar'>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;
