import { Link, useLocation } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';
import './RoomCard.css';

function RoomCard({ room }) {
  const { search } = useLocation();
  const roomLink = { pathname: `/rooms/${room.slug}`, search };
  return (
    <article className='room-card'>
      {/* cover image */}
      <Link to={roomLink} className='room-card-image-link'>
        <div
          className='room-card-image'
          style={{ backgroundImage: `url(${room.images[0]})` }}
        ></div>
      </Link>
      {/* body */}
      <div className='room-card-body'>
        <p className='room-card-category'>{room.category}</p>
        <h3 className='room-card-name'>
          <Link to={roomLink} className='room-card-name-link'>
            {room.name}
          </Link>
        </h3>
        <p className='room-card-description'>{room.shortDescription}</p>
        {/* meta (size, guests) */}
        <div className='room-card-meta'>
          <span>{room.size} m²</span>
          <span className='room-card-meta-sep'>·</span>
          <span>
            Up to {room.maxGuests} {room.maxGuests === 1 ? 'guest' : 'guests'}
          </span>
        </div>
        {/* footer (price + cta) */}
        <div className='room-card-footer'>
          <div className='room-card-price'>
            <span className='room-card-price-amount'>
              {formatPrice(room.pricePerNight, room.currency)}
            </span>
            <span className='room-card-price-unit'>/ night</span>
          </div>

          <Link to={roomLink} className='room-card-cta'>
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
export default RoomCard;
