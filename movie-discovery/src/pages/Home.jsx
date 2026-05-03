import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMoviesStore from '../stores/moviesStore';
import '../css/Home.css';

const IMG_BASE = import.meta.env.VITE_TMDB_IMG_BASE;

function Home() {
  const trending = useMoviesStore((state) => state.trending);
  const status = useMoviesStore((state) => state.status);
  const error = useMoviesStore((state) => state.error);
  const loadTrending = useMoviesStore((state) => state.loadTrending);

  useEffect(() => {
    if (status === 'idle') {
      loadTrending();
    }
  }, [status, loadTrending]);

  const navigate = useNavigate();

  return (
    <div className='home-page'>
      <section className='home-hero'>
        <h1 className='home-title'>Discover your next favorite film.</h1>
        <p className='home-subtitle'>
          Trending now, hand-picked classics, and everything in between.
        </p>
      </section>

      <section className='home-section'>
        <div className='section-header'>
          <h2 className='section-title'>Trending this week</h2>
          <span className='section-link'>See all →</span>
        </div>

        {status === 'loading' && (
          <div className='state-message'>Loading films...</div>
        )}

        {status === 'error' && (
          <div className='state-message state-error'>
            Could not load films : {error}
          </div>
        )}

        {status === 'success' && (
          <div className='movie-grid'>
            {trending.map((movie) => (
              <article
                key={movie.id}
                className='movie-card'
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <div className='movie-poster-wrap'>
                  <img
                    src={`${IMG_BASE}${movie.poster_path}`}
                    alt={movie.title}
                    className='movie-poster'
                  />
                  <span className='movie-rating'>
                    ★ {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-year'>
                  {movie.release_date?.slice(0, 4) || '—'}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
