import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useMoviesStore from '../stores/moviesStore';
import FavoriteButton from '../components/FavoriteButton';
import '../css/MovieDetail.css';

const IMG_BASE = import.meta.env.VITE_TMDB_IMG_BASE;
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/original';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const entry = useMoviesStore((state) => state.details[id]);
  const loadMovieDetail = useMoviesStore((state) => state.loadMovieDetail);

  useEffect(() => {
    loadMovieDetail(id);
  }, [id, loadMovieDetail]);

  if (!entry || entry.status === 'loading') {
    return <div className='state-message'>Loading film details...</div>;
  }

  if (entry.status === 'error') {
    return (
      <div className='state-message state-error'>
        Could not load film: {entry.error}
      </div>
    );
  }

  const movie = entry.data;

  return (
    <div className='detail-page'>
      {movie.backdrop_path && (
        <div
          className='detail-backdrop'
          style={{
            backgroundImage: `url(${BACKDROP_BASE}${movie.backdrop_path})`,
          }}
        />
      )}

      <div className='detail-content'>
        <button className='back-button' onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className='detail-main'>
          <img
            src={`${IMG_BASE}${movie.poster_path}`}
            alt={movie.title}
            className='detail-poster'
          />

          <div className='detail-info'>
            <div className='detasil-title-row'>
              <h1 className='detail-title'>{movie.title}</h1>
              <FavoriteButton movie={movie} size='large' />
            </div>

            {movie.tagline && <p className='detail-tagline'>{movie.tagline}</p>}

            <div className='detail-meta'>
              <span className='meta-rating'>
                ★ {movie.vote_average.toFixed(1)}
              </span>
              <span className='meta-dot'>•</span>
              <span>{movie.release_date?.slice(0, 4) || '—'}</span>
              <span className='meta-dot'>•</span>
              <span>{movie.runtime} min</span>
            </div>

            <div className='detail-genres'>
              {movie.genres?.map((g) => (
                <span key={g.id} className='genre-pill'>
                  {g.name}
                </span>
              ))}
            </div>

            <h2 className='detail-section-title'>Overview</h2>
            <p className='detail-overview'>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
