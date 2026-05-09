import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import '../css/Search.css';
import '../css/Home.css';
import useMoviesStore from '../stores/moviesStore';

const IMG_BASE = import.meta.env.VITE_TMDB_IMG_BASE;

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [genre, setGenre] = useState(searchParams.get('genre') || '');

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filters = {};
      if (genre) filters.with_genres = genre;
      loadSearch(query, filters);

      const newParams = {};
      if (query) newParams.q = query;
      if (genre) newParams.genre = genre;
      setSearchParams(newParams, { replace: true });
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [query, genre, loadSearch, setSearchParams]);

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
                  <div className='movie-fav-overlay'>
                    <FavoriteButton movie={movie} size='small' />
                  </div>
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
