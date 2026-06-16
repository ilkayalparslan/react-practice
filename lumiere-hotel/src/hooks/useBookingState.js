import { useReducer, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';

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

function initFromUrl() {
  const params = new URLSearchParams(window.location.search);

  const checkIn = params.get('checkIn');
  const checkOut = params.get('checkOut');
  const adults = params.get('adults');
  const children = params.get('children');

  return {
    checkIn: checkIn ? parseISO(checkIn) : null,
    checkOut: checkOut ? parseISO(checkOut) : null,
    adults: adults ? Number(adults) : 2,
    children: children ? Number(children) : 0,
  };
}

export function useBookingState() {
  const [state, dispatch] = useReducer(
    bookingReducer,
    initialState,
    initFromUrl,
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {};
    if (state.checkIn) params.checkIn = format(state.checkIn, 'yyyy-MM-dd');
    if (state.checkOut) params.checkOut = format(state.checkOut, 'yyy-MM-dd');
    params.adults = state.adults;
    params.children = state.children;
    setSearchParams(params, { replace: true });
  }, [
    state.checkIn,
    state.checkOut,
    state.adults,
    state.children,
    setSearchParams,
  ]);
  return { state, dispatch };
}
