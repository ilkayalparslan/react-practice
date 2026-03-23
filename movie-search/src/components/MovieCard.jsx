function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className='movie-card'>
      {posterUrl ? (
        <img
          loading='lazy'
          className='movie-poster'
          src={posterUrl}
          alt={movie.title}
        />
      ) : (
        <div className='movie-poster-placeholder'>No Image</div>
      )}
      <div className='movie-info'>
        <h3 className='movie-title'>{movie.title}</h3>
        <div className='movie-meta'>
          <span className='movie-year'>
            {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
          </span>
          <span className='movie-rating'>
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <p className='movie-overview'>
          {movie.overview
            ? movie.overview.length > 120
              ? movie.overview.slice(0, 120) + '...'
              : movie.overview
            : `No available description for ${movie.title}`}
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
