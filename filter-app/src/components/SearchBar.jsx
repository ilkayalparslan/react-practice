import useStore from '../store'

function SearchBar() {
  const searchQuery = useStore((state) => state.searchQuery)
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  return (
    <div className='filter-search'>
      <input
        type='text'
        className='search-input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search products...'
      />
      {searchQuery && (
        <button onClick={() => setSearchQuery('')} className='clear-btn'>
          ✕
        </button>
      )}
    </div>
  )
}
export default SearchBar
