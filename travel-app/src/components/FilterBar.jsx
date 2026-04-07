import useStore from '../store';

function FilterBar() {
  const hotels = useStore((state) => state.hotels);
  const selectedTag = useStore((state) => state.selectedTag);
  const setSelectedTag = useStore((state) => state.setSelectedTag);

  const allTags = ['All', ...new Set(hotels.flatMap((h) => h.tags))];

  return (
    <div className='filter-tags'>
      {allTags.map((tag) => (
        <button
          key={tag}
          className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;
