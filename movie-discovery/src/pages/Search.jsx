import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Search.css';
import '../css/Home.css';
import useMoviesStore from '../stores/moviesStore';

const IMG_BASE = import.meta.env.VITE_TMDB_IMG_BASE;

function Search() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');

  const navigate = useNavigate();

  const searchResults = useMoviesStore((state) => state.searchResults);
  const searchStatus = useMoviesStore((state) => state.searchStatus);
  const searchError = useMoviesStore((state) => state.searchError);
  const genres = useMoviesStore((state) => state.genres);
  const loadSearch = useMoviesStore((state) => state.loadSearch);
  const loadGenres = useMoviesStore((state) => state.loadGenres);

  // Mount'ta bir kere genre listesini çek
  useEffect(() => {
    loadGenres();
  }, [loadGenres]);

  // Query her değiştiğinde 400ms bekle, sonra search'i tetikle
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadSearch(query);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [query, loadSearch]);

  return (
    <div className='search-page'>
      <section className='search-hero'>
        <h1 className='search-title'>Find a film</h1>
        <p className='search-subtitle'> Search by title, filter by genre.</p>
      </section>

      <section className='search-controls'>
        <div className='search-input-wrap'>
          <span className='search-icon'>🔍</span>
          <input
            type='text'
            className='search-input'
            placeholder='Search for a film'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select
          value={genre}
          className='search-select'
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value=''>All genres</option>
          {genres.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </section>

      <section className='search-results'>
        {searchStatus === 'idle' && (
          <div className='state-message'>Start typing to search.</div>
        )}
        {searchStatus === 'loading' && (
          <div className='state-message'>Searching...</div>
        )}
        {searchStatus === 'error' && (
          <div className='state-message state-error'>
            Something went wrong: {searchError}
          </div>
        )}

        {searchStatus === 'success' && searchResults.length === 0 && (
          <div className='state-message'>No films found for '{query}'.</div>
        )}

        {searchStatus === 'success' && searchResults.length > 0 && (
          <div className='movie-grid'>
            {searchResults.map((movie) => (
              <article
                key={movie.id}
                className='movie-card'
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <div className='movie-poster-wrap'>
                  {movie.poster_path ? (
                    <img
                      src={`${IMG_BASE}${movie.poster_path}`}
                      alt={movie.title}
                      className='movie-poster'
                    />
                  ) : (
                    <div className='movie-poster movie-poster-empty'>
                      No Image
                    </div>
                  )}
                  <span className='movie-rating'>
                    ★ {movie.vote_average?.toFixed(1) ?? '-'}
                  </span>
                </div>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-year'>
                  {movie.release_date?.slice(0, 4) || '-'}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
export default Search;
