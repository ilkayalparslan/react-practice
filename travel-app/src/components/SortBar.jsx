import useStore from '../store';

function SortBar({ count }) {
  const sortBy = useStore((state) => state.sortBy);
  const setSortBy = useStore((state) => state.setSortBy);
  return (
    <div className='filter-row'>
      <select
        value={sortBy}
        className='sort-select'
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value='recommended'>Sort by : Recommended</option>
        <option value='recommended'>Price : Low to High</option>
        <option value='recommended'>Price: High to Low</option>
        <option value='recommended'>Rating: Best</option>
      </select>
      <span className='result-count'>{count} hotels found</span>
    </div>
  );
}
export default SortBar;
