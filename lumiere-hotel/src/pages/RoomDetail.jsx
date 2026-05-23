import { useParams, Link } from 'react-router-dom';
import { getRoomBySlug } from '../data/rooms';
import { formatPrice } from '../utils/formatPrice';
import ImageCarousel from '../components/ImageCarousel';
import './RoomDetails.css';

function RoomDetail() {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);

  // slug yanlissa
  if (!room) {
    return (
      <div className='not-found'>
        <div className='container'>
          <h1>Room not found</h1>
          <p>The room you're looking for doesn't exist.</p>
          <Link to='/rooms' className='not-found-link'>
            {' '}
            ← Browse all rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className='room-detail'>
      <div className='container'>
        {/* bradcrumb */}
        <nav className='room-detail-breadcrumb'>
          <Link to='/'>Home</Link>
          <span className='breadcrumb-sep'>/</span>
          <Link to='/rooms'>Rooms</Link>
          <span className='breadcrumb-sep'>/</span>
          <span className='breadcrumb-current'>{room.name}</span>
        </nav>
        {/* gallery image carousel */}
        <div className='room-detail-gallery'>
          <ImageCarousel images={room.images} alt={room.name} />
        </div>
        {/* main content */}
        <div className='room-detail-content'>
          {/* left column: description + amenities */}
          <div className='room-detail-main'>
            <p className='room-detail-category'>{room.category}</p>
            <h1 className='room-detail-title'>{room.name}</h1>

            <div className='room-detail-meta'>
              <span>{room.size} m²</span>
              <span className='meta-sep'>·</span>
              <span>
                Up to {room.maxGuests}{' '}
                {room.maxGuests === 1 ? 'guest' : 'guests'}
              </span>
              <span className='meta-sep'>·</span>
              <span>{room.bedType} bed</span>
            </div>
            <p className='room-detail-description'>{room.longDescription}</p>

            <div className='room-details-amenities'>
              <h2 className='amenities-title'>Room Amenities</h2>
              <ul className='amenities-list'>
                {room.amenities.map((x) => (
                  <li className='amenities-item' key={x}>
                    <span className='amenities-check'>✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right column: booking card */}
          <aside className='room-detail-booking'>
            <div className='booking-card'>
              <div className='booking-card-price'>
                <span className='price-amount'>
                  {formatPrice(room.pricePerNight, room.currency)}
                </span>
                <span className='price-unit'>per night</span>
              </div>
              <Link
                to={`/reservation?room=${room.slug}`}
                className='booking-card-cta'
              >
                Reserve This Room
              </Link>

              <p className='booking-card-note'>
                Free cancellation up to 48 hours before check-in.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
export default RoomDetail;
