import useStore from '../store';

function SearchBar() {
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  return (
    <input
      type='text'
      className='search-input'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search hotels or destionations...'
    />
  );
}
export default SearchBar;
