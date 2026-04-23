import './RoomCard.css';

function RoomCard({ room, nights }) {
  return (
    <div className='room-card'>
      <img src={room.image} alt={room.name} className='room-image' />
      <div className='room-info'>
        <h3 className='room-name'>{room.name}</h3>
        <p className='room-desc'>{room.description}</p>
        <p className='room-capacity'>
          👥 {room.maxAdults} Adults{' '}
          {room.maxChildren > 0 ? `+ ${room.maxChildren} Children` : ''}
        </p>
        <div className='room-features'>
          {room.features.map((x) => (
            <span key={x} className='feature-tag'>
              {x}
            </span>
          ))}
        </div>
        <div className='room-footer'>
          <div className='price-block'>
            <p className='room-price'>
              ${room.price} <span>/night</span>
            </p>
            {nights > 0 && (
              <p className='total-price'>Total : ${room.price * nights}</p>
            )}
          </div>
          <button className='book-btn'>Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default RoomCard;
