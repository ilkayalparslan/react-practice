import useFavoritesStore from '../stores/favoritesStore';
import '../css/FavoriteButton.css';

function FavoriteButton({ movie, size = 'medium' }) {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(movie.id));
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };
  return (
    <button
      className={`fav-btn fav-btn-${size} ${isFavorite ? 'fav-btn-active' : ''}`}
      onClick={handleClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  );
}
export default FavoriteButton;
