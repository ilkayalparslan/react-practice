import { useState, useEffect } from 'react';
import useStore from '../store';

function SearchBar() {
  const [input, setInput] = useState('');
  const searchMovies = useStore((state) => state.searchMovies);
  const fetchTrending = useStore((state) => state.fetchTrending);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() === '') {
        fetchTrending();
      } else {
        searchMovies(input);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search Movies...'
      />
      {input && (
        <button className='clear-btn' onClick={() => setInput('')}>
          x
        </button>
      )}
    </div>
  );
}
export default SearchBar;
