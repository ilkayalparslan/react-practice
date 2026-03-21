import useStore from '../store';

function FilterButtons() {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <div className='filter-buttons'>
      <button
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === 'income' ? 'active' : ''}`}
        onClick={() => setFilter('income')}
      >
        Income
      </button>
      <button
        className={`filter-btn ${filter === 'expense' ? 'active' : ''}`}
        onClick={() => setFilter('expense')}
      >
        Expense
      </button>
    </div>
  );
}
export default FilterButtons;
