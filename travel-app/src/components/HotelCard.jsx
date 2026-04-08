import useStore from '../store';

function HotelCard({ hotel }) {
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = favorites.includes(hotel.id);
  return (
    <div className='hotel-card'>
      <div className='card-image-wrapper'>
        <img className='card-image' src={hotel.image} alt={hotel.name} />
        {hotel.featured && <span className='featured-badge'>Featured</span>}
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => {
            toggleFavorite(hotel.id);
          }}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      <div className='card-content'>
        <div className='card-header'>
          <h3 className='card-name'>{hotel.name}</h3>
          <span className='card-rating'>⭐ {hotel.rating}</span>
        </div>
        <p className='card-location'>📍 {hotel.location}</p>
        <div className='card-tags'>
          {hotel.tags.map((tag) => (
            <span className='card-tag' key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className='card-footer'>
          <span className='card-price'>
            <strong>${hotel.price}</strong> / night
          </span>
          <button className='book-btn'>View Details</button>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;
