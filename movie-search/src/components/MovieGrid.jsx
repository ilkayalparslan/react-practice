import useStore from '../store';
import MovieCard from './MovieCard';
import { useEffect } from 'react';

function MovieGrid() {
  const movies = useStore((state) => state.movies);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const page = useStore((state) => state.page);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (loading) return <p className='status-text'>Loading Movies...</p>;
  if (error) return <p className='status-text error'>{error}</p>;
  if (movies.length === 0)
    return <p className='status-text'>No Movies Found</p>;
  return (
    <div className='movie-grid'>
      {movies.map((x) => (
        <MovieCard key={x.id} movie={x} />
      ))}
    </div>
  );
}
export default MovieGrid;
