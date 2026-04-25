import useStore from '../store';

function HotelDetails() {
  const form = useStore((state) => state.form);
  const updateForm = useStore((state) => state.updateForm);
  const nextStep = useStore((state) => state.nextStep);
  const prevStep = useStore((state) => state.prevStep);

  return (
    <div className='form-card'>
      <h2 className='form-title'>Hotel Details</h2>

      <div className='form-group'>
        <label className='form-label'>Hotel Name</label>
        <input
          type='text'
          className='form-input'
          placeholder='Grand Hotel Istanbul'
          value={form.hotelName}
          onChange={(e) => updateForm('hotelName', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>City</label>
        <input
          type='text'
          className='form-input'
          placeholder='Istanbul'
          value={form.city}
          onChange={(e) => updateForm('city', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Room Types</label>
        <input
          type='number'
          className='form-input'
          placeholder='e.g. 5'
          value={form.roomTypeCount}
          onChange={(e) => updateForm('roomTypeCount', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Total Rooms</label>
        <input
          type='number'
          className='form-input'
          placeholder='e.g. 50'
          value={form.eachRoomTypeCount}
          onChange={(e) => updateForm('eachRoomTypeCount', e.target.value)}
        />
      </div>

      <div className='form-actions'>
        <button className='prev-btn' onClick={prevStep}>
          ← Back
        </button>
        <button className='next-btn' onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}
export default HotelDetails;
