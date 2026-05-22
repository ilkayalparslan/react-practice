import { Link } from 'react-router-dom';
import RoomCard from './RoomCard';
import { getFeaturedRooms } from '../data/rooms';
import './FeaturedRooms.css';

function FeaturedRooms() {
  const featuredRooms = getFeaturedRooms();
  return (
    <section className='featured-rooms'>
      <div className='container'>
        {/* section header */}
        <div className='featured-rooms-header'>
          <p className='featured-rooms-eyebrow'>Stay With Us</p>
          <h2 className='featured-rooms-title'>Signature Rooms</h2>
          <p className='featured-rooms-subtitle'>
            Each room is individually designed, blending Ottoman heritage with
            contemporary comfort.
          </p>
        </div>

        {/* grid */}
        <div className='featured-rooms-grid'>
          {featuredRooms.map((x) => (
            <RoomCard key={x.id} room={x} />
          ))}
        </div>
        {/* view all */}
        <div className='featured-rooms-footer'>
          <Link to='/rooms' className='featured-rooms-view-all'>
            View All Rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FeaturedRooms;
