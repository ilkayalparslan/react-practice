import { useState } from 'react';
import useStore from '../store';

function Review() {
  const form = useStore((state) => state.form);
  const prevStep = useStore((state) => state.prevStep);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className='form-card success-card'>
        <div className='success-icon'>🎉</div>
        <h2 className='success-title'>Registration Complete!</h2>
        <p className='success-message'>
          Thank you {form.name}, we received your registration for{' '}
          {form.hotelName}. Our team will contact you at {form.email} shortly.
        </p>
        <button className='home-btn' onClick={() => window.location.reload()}>
          Start New Registration
        </button>
      </div>
    );
  }

  return (
    <div className='form-card'>
      <h2 className='form-title'>Review Your Information</h2>

      <div className='review-section'>
        <h3 className='review-title'>Personal Info</h3>
        <div className='review-row'>
          <span className='review-label'>Name</span>
          <span className='review-value'>{form.name || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>Email</span>
          <span className='review-value'>{form.email || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>Phone</span>
          <span className='review-value'>{form.phone || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>Position</span>
          <span className='review-value'>{form.position || '—'}</span>
        </div>
      </div>

      <div className='review-section'>
        <h3 className='review-title'>Hotel Details</h3>
        <div className='review-row'>
          <span className='review-label'>Hotel Name</span>
          <span className='review-value'>{form.hotelName || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>City</span>
          <span className='review-value'>{form.city || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>Room Types</span>
          <span className='review-value'>{form.roomTypeCount || '—'}</span>
        </div>
        <div className='review-row'>
          <span className='review-label'>Total Rooms</span>
          <span className='review-value'>{form.eachRoomTypeCount || '—'}</span>
        </div>
      </div>

      <div className='form-actions'>
        <button className='prev-btn' onClick={prevStep}>
          ← Back
        </button>
        <button className='submit-btn' onClick={() => setSubmitted(true)}>
          Submit Registration ✓
        </button>
      </div>
    </div>
  );
}
export default Review;
