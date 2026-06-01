import './BookingSearch.css';

function BookingSearch() {
  return (
    <div className='booking-search'>
      <button type='button' className='booking-search-field'>
        <span className='booking-search-label'>Dates</span>
        <span className='booking-search-value'>Select Dates</span>
      </button>

      <button type='button' className='booking-search-field'>
        <span className='booking-search-label'>Guests</span>
        <span className='booking-search-value'>2 guests</span>
      </button>

      <button type='button' className='booking-search-submit'>
        Search
      </button>
    </div>
  );
}
export default BookingSearch;
