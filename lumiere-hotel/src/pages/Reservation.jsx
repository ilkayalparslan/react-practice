import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { parseISO, format, differenceInCalendarDays } from 'date-fns';
import { getRoomBySlug } from '../data/rooms';
import { formatPrice } from '../utils/formatPrice';
import './Reservation.css';

function Reservation() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const roomSlug = searchParams.get('room');
  const checkInParam = searchParams.get('checkIn');
  const checkOutParams = searchParams.get('checkOut');
  const adults = Number(searchParams.get('adults'));
  const children = Number(searchParams.get('children'));

  const room = roomSlug ? getRoomBySlug(roomSlug) : null;

  if (!room) {
    return (
      <div className='reservation-page'>
        <div className='container'>
          <h1>No Room Selected</h1>
          <p>Please choose a room to be able to make a reservation</p>
          <Link to='/rooms'>← Browse all rooms</Link>
        </div>
      </div>
    );
  }

  const checkIn = checkInParam ? parseISO(checkInParam) : null;
  const checkOut = checkOutParams ? parseISO(checkOutParams) : null;
  const nights =
    checkIn && checkOut ? differenceInCalendarDays(checkOut, checkIn) : 0;
  const totalGuests = adults + children;

  if (!checkIn || !checkOut) {
    return (
      <div className='reservation-page'>
        <div className='container'>
          <h1>Select your dates</h1>
          <p>
            Please Chose check-in and check-out dates for {room.name} before
            reserving.
          </p>
          <Link to={`/rooms/${room.slug}`}>← Back to {room.name}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='reservation-page'>
      <div className='container'>
        <h1 className='reservation-title'>Complete your reservation</h1>
        <div className='reservation-summary'>
          <h2 className='reservation-room-name'>{room.name}</h2>
          <p className='reservation-room-category'>{room.category}</p>

          <div className='reservation-summary-row'>
            <span>Dates</span>
            <span>
              {checkIn && checkOut
                ? `${format(checkIn, 'MMM d')}- ${format(checkOut, 'MMM d, yyyy')}`
                : 'No Dates Selected'}
            </span>
          </div>

          <div className='reservation-summary-row'>
            <span>Guests</span>
            <span>
              {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
            </span>
          </div>
          {nights > 0 && (
            <div className='reservation-summary-row reservation-summary-total'>
              <span>
                {formatPrice(room.pricePerNight, room.currency)} x {nights}{' '}
                {nights === 1 ? 'night' : 'nights'}
              </span>
              <span>
                {formatPrice(room.pricePerNight * nights, room.currency)}
              </span>
            </div>
          )}
        </div>
        {isConfirmed ? (
          <div className='reservation-confirmation'>
            <h2 className='reservation-confirmation-title'>
              Thank You , {form.name}{' '}
            </h2>
            <p className='reservation-confirmation-text'>
              Your reservation at {room.name} is confirmed. A confirmation email
              has been sent to {form.email}
            </p>
            <Link to='/' className='reservation-confirmation-link'>
              ← Back to home
            </Link>
          </div>
        ) : (
          <form className='reservation-form' onSubmit={handleSubmit}>
            <div className='reservation-field'>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='reservation-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='reservation-field'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='reservation-submit'>
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default Reservation;
