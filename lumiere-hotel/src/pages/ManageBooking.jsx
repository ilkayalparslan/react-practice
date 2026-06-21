import { useState } from 'react';
import { Link } from 'react-router-dom';
import { hotelInfo } from '../data/hotelInfo';
import './ManageBooking.css';

function ManageBooking() {
  const { contact } = hotelInfo;

  const [form, setForm] = useState({ reference: '', email: '' });
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className='manage-page'>
      <div className='container'>
        <header className='manage-hero'>
          <p className='manage-eyebrow'>Manage Booking</p>
          <h1 className='manage-title'>Find Your Reservation</h1>
          <p className='manage-intro'>
            {' '}
            Enter your booking reference and email to view or modify your stay.
          </p>
        </header>

        <div className='manage-card'>
          <form className='manage-form' onSubmit={handleSubmit}>
            <div className='manage-field'>
              <label htmlFor='reference'>Booking Reference</label>
              <input
                type='text'
                name='reference'
                id='reference'
                placeholder='e.g. LUM-2026-0042'
                value={form.reference}
                onChange={handleChange}
                required
              />
            </div>

            <div className='manage-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='manage-submit'>
              Find Booking
            </button>
          </form>

          {searched && (
            <div className='manage-result'>
              <p className='manage-result-text'>
                We couldn't find a booking matching{' '}
                <strong>{form.reference}</strong>. Please check your reference
                and email, or contact us directly and we'll be happy to help
              </p>
              <div className='manage-result-contact'>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                <span className='manage-result-sep'>.</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          )}
        </div>

        <p className='manage-footnote'>
          Don't have a reservation yet?{' '}
          <Link to='/rooms' className='manage-footnote-link'>
            {' '}
            Browse our rooms →
          </Link>
        </p>
      </div>
    </div>
  );
}
export default ManageBooking;
