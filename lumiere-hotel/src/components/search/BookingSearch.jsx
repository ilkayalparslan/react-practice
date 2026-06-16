import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import BookingCalendar from '../calendar/BookingCalendar';
import GuestsSelector from './GuestsSelector';
import './BookingSearch.css';
import { formatDateRange } from '../../utils/calendarHelper';
import Modal from '../ui/Modal';
import { useBookingState } from '../../hooks/useBookingState';

function BookingSearch() {
  const { state, dispatch } = useBookingState();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const guestsWrapperRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.checkIn && state.checkOut) {
      setIsCalendarOpen(false);
    }
  }, [state.checkIn, state.checkOut]);

  useEffect(() => {
    if (!isGuestsOpen) return;

    const handleClickOutside = (e) => {
      if (
        guestsWrapperRef.current &&
        !guestsWrapperRef.current.contains(e.target)
      ) {
        setIsGuestsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isGuestsOpen]);

  const handleSearch = () => {
    navigate(`/rooms${window.location.search}`);
  };

  return (
    <div>
      <div className='booking-search'>
        <button
          type='button'
          className='booking-search-field'
          onClick={() => setIsCalendarOpen(true)}
        >
          <span className='booking-search-label'>Dates</span>
          <span className='booking-search-value'>
            {formatDateRange(state.checkIn, state.checkOut)}
          </span>
        </button>

        <div className='booking-search-guests-wrapper' ref={guestsWrapperRef}>
          <button
            type='button'
            className='booking-search-field'
            onClick={() => setIsGuestsOpen((prev) => !prev)}
          >
            <span className='booking-search-label'>Guests</span>
            <span className='booking-search-value'>
              {state.adults + state.children}{' '}
              {state.adults + state.children === 1 ? 'guest' : 'guests'}
            </span>
          </button>

          {isGuestsOpen && (
            <div className='booking-search-popover'>
              <GuestsSelector
                adults={state.adults}
                children={state.children}
                dispatch={dispatch}
              />
            </div>
          )}
        </div>

        <button
          type='button'
          className='booking-search-submit'
          disabled={!state.checkIn || !state.checkOut}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {isCalendarOpen && (
        <Modal onClose={() => setIsCalendarOpen(false)}>
          <BookingCalendar
            checkIn={state.checkIn}
            checkOut={state.checkOut}
            dispatch={dispatch}
          />
        </Modal>
      )}
    </div>
  );
}
export default BookingSearch;
