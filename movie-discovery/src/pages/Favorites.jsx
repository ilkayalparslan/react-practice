import { useNavigate } from 'react-router-dom';
import useFavoritesStore from '../stores/favoritesStore';
import FavoriteButton from '../components/FavoriteButton';
import '../css/Home.css';
import '../css/Favorites.css';

const IMG_BASE = import.meta.env.VITE_TMDB_IMG_BASE;

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const clearFavorites = useFavoritesStore((state) => state.clearFavorites);
  const navigate = useNavigate();
  return (
    <div className='favorites-page'>
      <section className='favorites-hero'>
        <h1 className='favorites-title'>Your favorites</h1>
        <p className='favorites-subtitle'>
          {favorites.length === 0
            ? 'Films you save will appear here'
            : `${favorites.length} film${favorites.length === 1 ? '' : 's'} saved.`}
        </p>
      </section>

      {favorites.length === 0 && (
        <div className='favorites-empty'>
          <p>No favorites yet.</p>
          <button className='favorites-cta' onClick={() => navigate('/')}>
            Discover films
          </button>
        </div>
      )}

      {favorites.length > 0 && (
        <>
          <div className='favorites-actions'>
            <button
              className='favorites-clear'
              onClick={() => {
                if (confirm('Remove all favorites')) clearFavorites();
              }}
            >
              Clear All
            </button>
          </div>

          <div className='movie-grid'>
            {favorites.map((movie) => (
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
                  {movie.release_date?.slice(0, 4) || ''}
                </p>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Favorites;
