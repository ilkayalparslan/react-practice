import HotelCard from './HotelCard';

function HotelGrid({ hotels }) {
  if (hotels.length === 0) {
    return <p className='result-count'>No Hotel Found </p>;
  }

  return (
    <div className='hotel-grid'>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
export default HotelGrid;
