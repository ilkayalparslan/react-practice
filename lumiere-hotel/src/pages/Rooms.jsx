import { useSearchParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';
import BookingSearch from '../components/search/BookingSearch';
import './Rooms.css';

function Rooms() {
  const [searchParams] = useSearchParams();

  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const adults = searchParams.get('adults');
  const children = searchParams.get('children');

  // Search yapılmış mı?
  const hasSearch = checkIn && checkOut;

  // Toplam misafir (string → number)
  const totalGuests = Number(adults || 0) + Number(children || 0);

  // Filtreleme: search varsa kapasiteye göre, yoksa hepsi
  const visibleRooms = rooms.filter((room) => room.maxGuests >= totalGuests);

  return (
    <div className='rooms-page'>
      <div className='container'>
        {/* page header */}
        <header className='rooms-page-header'>
          <p className='rooms-page-eyebrow'>Our Spaces</p>
          <h1 className='rooms-page-title'>Rooms & Suites</h1>
          <p className='rooms-page-subtitle'>
            Twelve individually designed rooms, each blending Ottoman heritage
            with contemporary comfort. Find the space that fits your stay.
          </p>
        </header>

        <div className='room-page-search'>
          <BookingSearch />
        </div>

        {/* search summary — sadece search varsa */}
        {hasSearch && (
          <div className='rooms-page-search-summary'>
            <span>
              {format(parseISO(checkIn), 'MMM d')} —{' '}
              {format(parseISO(checkOut), 'MMM d, yyyy')}
            </span>
            <span> · </span>
            <span>
              {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
            </span>
          </div>
        )}

        {/* room count info */}
        <div className='rooms-page-meta'>
          <span>
            {visibleRooms.length} {visibleRooms.length === 1 ? 'room' : 'rooms'}
          </span>
        </div>

        {/* grid */}
        {visibleRooms.length > 0 ? (
          <div className='rooms-grid'>
            {visibleRooms.map((x) => (
              <RoomCard key={x.id} room={x} />
            ))}
          </div>
        ) : (
          <div className='rooms-empty'>
            <p>No rooms match your search for {totalGuests} guests.</p>
            <p>
              For larger groups, please contact us directly and we'll arrange
              the perfect combination of rooms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
