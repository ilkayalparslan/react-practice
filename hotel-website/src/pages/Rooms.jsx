import useStore from '../store';
import RoomCard from '../components/RoomCard';

function Rooms() {
  const rooms = useStore((state) => state.rooms);
  const guests = useStore((state) => state.guests);
  const children = useStore((state) => state.children);
  const getNights = useStore((state) => state.getNights);

  const nights = getNights();

  const filteredRooms = rooms.filter(
    (room) => room.maxAdults >= guests && room.maxChildren >= children,
  );
  return (
    <div className='rooms-page'>
      <h1 className='page-title'>Available Rooms</h1>
      {nights > 0 && (
        <p className='search-summary'>
          {nights} night{nights > 1 ? 's' : ''} · {guests} adult{' '}
          {guests > 1 ? 's' : ''}
          {children > 0
            ? ` · ${children} child${children > 1 ? 'ren' : ''}`
            : ''}
        </p>
      )}
      <div className='rooms-grid'>
        {filteredRooms.length === 0 ? (
          <p className='no-rooms'>No rooms available for your selection</p>
        ) : (
          filteredRooms.map((x) => (
            <RoomCard key={x.id} room={x} nights={nights} />
          ))
        )}
      </div>
    </div>
  );
}
export default Rooms;
