import { useEffect } from 'react';
import useStore from '../store';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';
import Pagination from './Pagination';

function MovieApp() {
  const fetchTrending = useStore((state) => state.fetchTrending);
  const mode = useStore((state) => state.mode);

  // İlk açılışta trending filmleri yükle
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className='movie-container'>
      <h1 className='movie-app-title'>🎬 Movie Search</h1>
      <SearchBar />
      <p className='mode-label'>
        {mode === 'trending' ? 'Trending This Week' : 'Search Results'}
      </p>
      <MovieGrid />
      <Pagination />
    </div>
  );
}
export default MovieApp;
