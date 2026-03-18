import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import ProductList from './ProductList'

function FilterApp() {
  return (
    <div className='filter-container'>
      <h1 className='filter-title'>Tech Store</h1>
      <SearchBar />
      <FilterBar />
      <ProductList />
    </div>
  )
}
export default FilterApp
