import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import './Reservation.css';

function Reservation() {
  const navigate = useNavigate();
  const selectedRoom = useStore((state) => state.selectedRoom);
  const checkIn = useStore((state) => state.checkIn);
  const checkOut = useStore((state) => state.checkOut);
  const guests = useStore((state) => state.guests);
  const children = useStore((state) => state.children);
  const getNights = useStore((state) => state.getNights);

  const nights = getNights();

  // Local state — form bilgileri, sadece bu sayfayı ilgilendiriyor

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  if (!selectedRoom) {
    return (
      <div className='reservation-page'>
        <div className='no-room'>
          <h2>No Room Selected</h2>
          <p>Please select a room first</p>
          <button className='back-btn' onClick={() => navigate('/rooms')}>
            View Rooms
          </button>
        </div>
      </div>
    );
  }

  // Confirm butonuna basınca

  const handleConfirm = () => {
    if (!name.trim() || !surname.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill in all fields');
      return;
    }
    setShowPopup(true);
  };

  return (
    <div className='reservation-page'>
      <h1 className='page-title'>Complete Your Reservation</h1>
      <div className='reservation-layout'>
        {/* sol - form */}
        <div className='reservation-form'>
          <h3 className='form-title'>Guest Information</h3>
          <input
            type='text'
            className='form-input'
            placeholder='First Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            className='form-input'
            placeholder='SurName'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type='email'
            className='form-input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='tel'
            className='form-input'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className='confirm-btn' onClick={handleConfirm}>
            Confirm Reservation
          </button>
        </div>

        {/* Sağ — Booking Summary */}
        <div className='booking-summary'>
          <h3 className='summary-title'>Booking Summary</h3>
          <img
            className='summary-image'
            src={selectedRoom.image}
            alt={selectedRoom.name}
          />
          <div className='summary-details'>
            <h4 className='summary-room'>{selectedRoom.name}</h4>
            <div className='summary-row'>
              <span>Check In</span>
              <span>{checkIn || 'Not Selected'}</span>
            </div>
            <div className='summary-row'>
              <span>Check Out</span>
              <span>{checkOut || 'Not Selected'}</span>
            </div>
            <div className='summary-row'>
              <span>Guests</span>
              <span>
                {guests} Adult{guests > 1 ? 's' : ''}
                {children > 0
                  ? ` + ${children} Child${children > 1 ? 'ren' : ''}`
                  : ''}
              </span>
            </div>
            <div className='summary-row'>
              <span>Nights</span>
              <span>{nights}</span>
            </div>
            <div className='summary-row'>
              <span>Price per night</span>
              <span>${selectedRoom.price}</span>
            </div>
            <div className='summary-row total'>
              <span>Total</span>
              <span>${selectedRoom.price * nights}</span>
            </div>
          </div>
        </div>
      </div>

      {/* pop up  */}

      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup'>
            <h2 className='popup-title'>🎉 Thank You!</h2>
            <p className='popup-message'>
              Dear {name} {surname}, we received your{' '}
              <strong>{selectedRoom.name}</strong> reservation request for the
              dates <strong>{checkIn}</strong> - <strong>{checkOut}</strong> for{' '}
              <strong>
                {guests} adult{guests > 1 ? 's' : ''}
                {children > 0
                  ? ` and ${children} child${children > 1 ? 'ren' : ''}`
                  : ''}
              </strong>
            </p>
            <p className='popup-total'>
              Total : <strong>${selectedRoom.price * nights}</strong>
            </p>
            <p className='popup-note'>
              We will get back to you as soon as possible.
            </p>
            <button
              className='popup-close'
              onClick={() => {
                setShowPopup(false);
                navigate('/');
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Reservation;
