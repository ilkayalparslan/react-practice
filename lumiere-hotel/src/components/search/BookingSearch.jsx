import { useReducer, useState, useEffect } from 'react';
import BookingCalendar from '../calendar/BookingCalendar';
import './BookingSearch.css';
import { formatDateRange } from '../../utils/calendarHelper';
import Modal from '../ui/Modal';

const initialState = {
  checkIn: null,
  checkOut: null,
};

function bookingReducer(state, action) {
  switch (action.type) {
    case 'SELECT_DAY': {
      const date = action.payload;

      if (state.checkIn === null) {
        return { checkIn: date, checkOut: null };
      }

      if (state.checkOut === null) {
        if (date.getTime() === state.checkIn.getTime()) {
          return state;
        }
        return { ...state, checkOut: date };
      }
      return { checkIn: date, checkOut: null };
    }

    default:
      return state;
  }
}

function BookingSearch() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (state.checkIn && state.checkOut) {
      setIsCalendarOpen(false);
    }
  }, [state.checkIn, state.checkOut]);

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

        <button type='button' className='booking-search-field'>
          <span className='booking-search-label'>Guests</span>
          <span className='booking-search-value'>2 guests</span>
        </button>

        <button type='button' className='booking-search-submit'>
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
