import useStore from '../store';

function SearchAndFilter() {
  const { searchQuery, setSearchQuery, selectedTag, setSelectedTag, notes } =
    useStore();

  const allTags = [...new Set(notes.flatMap((n) => n.tags))];

  return (
    <div className='search-filter'>
      <input
        type='text'
        className='search-input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search notes...'
      />
      <div className='tag-filters'>
        <button
          className={`tag-filter-btn ${selectedTag === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedTag('all')}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-filter-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
export default SearchAndFilter;
