import { useReducer, useState, useEffect, useRef } from 'react';
import BookingCalendar from '../calendar/BookingCalendar';
import GuestsSelector from './GuestsSelector';
import './BookingSearch.css';
import { formatDateRange } from '../../utils/calendarHelper';
import Modal from '../ui/Modal';

const initialState = {
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
};

function bookingReducer(state, action) {
  switch (action.type) {
    case 'SELECT_DAY': {
      const date = action.payload;

      if (state.checkIn === null) {
        return { ...state, checkIn: date, checkOut: null };
      }

      if (state.checkOut === null) {
        if (date.getTime() === state.checkIn.getTime()) {
          return state;
        }
        return { ...state, checkOut: date };
      }
      return { ...state, checkIn: date, checkOut: null };
    }

    case 'INCREMENT_ADULTS':
      return { ...state, adults: state.adults + 1 };

    case 'DECREMENT_ADULTS':
      return { ...state, adults: Math.max(1, state.adults - 1) };

    case 'INCREMENT_CHILDREN':
      return { ...state, children: state.children + 1 };

    case 'DECREMENT_CHILDREN':
      return { ...state, children: Math.max(0, state.children - 1) };

    default:
      return state;
  }
}

function BookingSearch() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const guestsWrapperRef = useRef(null);

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
    console.log('Search:', {
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      adults: state.adults,
      children: state.children,
    });
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
