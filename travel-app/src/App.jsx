import useStore from './store'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import SortBar from './components/SortBar'
import HotelGrid from './components/HotelGrid'

function App() {
  const hotels = useStore((state) => state.hotels)
  const searchQuery = useStore((state) => state.searchQuery)
  const selectedTag = useStore((state) => state.selectedTag)
  const sortBy = useStore((state) => state.sortBy)

  let filtered = hotels

  if (searchQuery.trim() !== '') {
    filtered = filtered.filter(
      (h) =>
        h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  if (selectedTag !== 'All') {
    filtered = filtered.filter((h) => h.tags.includes(selectedTag))
  }

  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return b.featured - a.featured
  })

  return (
    <div className="app">
      <Hero />
      <div className="filters-section">
        <SearchBar />
        <FilterBar />
        <SortBar count={filtered.length} />
      </div>
      <HotelGrid hotels={filtered} />
    </div>
  )
}
export default App