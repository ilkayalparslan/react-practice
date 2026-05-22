import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';
import './Rooms.css';

function Rooms() {
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

        {/* room count info */}
        <div className='rooms-page-meta'>
          <span>{rooms.length} rooms</span>
        </div>

        {/* grid */}
        <div className='rooms-grid'>
          {rooms.map((x) => (
            <RoomCard key={x.id} room={x} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Rooms;
