import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './GetStarted.css';

function GetStarted() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    website: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm({ ...form, [filed]: value });
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.hotelName.trim()) {
      alert('Please fill in required fileds');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='getstarted-page'>
        <AnimatedSection direction='up'>
          <div className='success-box'>
            <div className='success-icon'>🎉</div>
            <h2 className='success-title'>We Got Your Request!</h2>
            <p className='success-text'>
              Thank you {form.name}, we'll review your information for
              {form.hotelName} and contact you at {form.email} within 24 hours.
            </p>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className='getstarted-page'>
      <AnimatedSection direction='up'>
        <h1 className='getstarted-title'>Let's Grow Your Hotel</h1>
        <p className='getstarted-subtitle'>
          Fill in the form below and we'll get back to you within 24 hours.
        </p>
      </AnimatedSection>

      <AnimatedSection direction='up' delay={0.2}>
        <div className='getstarted-form'>
          <div className='form-row'>
            <div className='form-group'>
              <label className='form-label'>Full Name *</label>
              <input
                type='text'
                className='form-input'
                placeholder='John Doe'
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Email *</label>
              <input
                type='email'
                className='form-input'
                placeholder='john@hotel.com'
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label className='form-label'>Phone</label>
              <input
                type='tel'
                className='form-input'
                placeholder='+90 555 123 4567'
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Hotel Name *</label>
              <input
                type='text'
                className='form-input'
                placeholder='Grand Hotel Istanbul'
                value={form.hotelName}
                onChange={(e) => updateField('hotel', e.target.value)}
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label className='form-label'>Website</label>
              <input
                type='text'
                className='form-input'
                placeholder='www.yourhotel.com'
                value={form.website}
                onChange={(e) => updateField('website', e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label className='form-label'>Monthly Budget</label>
              <select
                className='form-input'
                value={form.budget}
                onChange={(e) => updateField('budget', e.target.value)}
              >
                <option value=''>Select budget</option>
                <option value='500'>$300 - $500</option>
                <option value='1000'>$500 - $1,000</option>
                <option value='2000'>$1,000 - $2,000</option>
                <option value='3000'>$2,000+</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <label className='form-label'>Message</label>
            <textarea
              className='form-input form-textarea'
              placeholder='Tell us about your hotel and goals...'
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
            />
          </div>

          <button className='submit-btn' onClick={handleSubmit}>
            {' '}
            Send Request →
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}
export default GetStarted;
