import useStore from '../store'

function FilterBar() {
  const selectedCategory = useStore((state) => state.selectedCategory)
  const setSelectedCategory = useStore((state) => state.setSelectedCategory)
  const sortBy = useStore((state) => state.sortBy)
  const setSortBy = useStore((state) => state.setSortBy)
  const getCategories = useStore((state) => state.getCategories)

  const categories = getCategories()

  return (
    <div className='filter-bar'>
      <div className='filter-group'>
        <label className='filter-label'>Category</label>
        <div className='filter-buttons'>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className='filter-group'>
        <label className='filter-label'>Sort By</label>
        <select
          className='sort-select'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value='name'>Name (A-Z)</option>
          <option value='price-low'>Price (Low to High)</option>
          <option value='price-high'>Price (High to Low)</option>
          <option value='rating'>Rating (Best)</option>
        </select>
      </div>
    </div>
  )
}
export default FilterBar
