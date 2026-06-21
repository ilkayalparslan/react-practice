import { useState } from 'react';
import { hotelInfo } from '../data/hotelInfo';
import './Contact.css';

function Contact() {
  const { contact, address, social } = hotelInfo;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };
  return (
    <div className='contact-page'>
      <div className='container'>
        <header className='contact-hero'>
          <p className='contact-eyebrow'>Get in Touch</p>
          <h1 className='contact-title'>Contact Us</h1>
          <p className='contact-intro'>
            {' '}
            Questions, special requests, or just saying hello — we'd love to
            hear from you.
          </p>
        </header>

        <div className='contact-content'>
          <aside className='contact-info'>
            <div className='contact-info-block'>
              <h2 className='contact-info-label'>Phone</h2>
              <a href={`tel:${contact.phone}`} className='contact-info-value'>
                {contact.phone}
              </a>
            </div>

            <div className='contact-info-block'>
              <h2 className='contact-info-label'>WhatsApp</h2>
              <a
                href={`tel:${contact.whatsapp}`}
                className='contact-info-value'
              >
                {contact.whatsapp}
              </a>
            </div>

            <div className='contact-info-block'>
              <h2 className='contact-info-label'>Email</h2>
              <a
                href={`mailto:${contact.email}`}
                className='contact-info-value'
              >
                {contact.email}
              </a>
            </div>

            <div className='contact-info-block'>
              <h2 className='contact-info-label'>Address</h2>
              <p className='contact-info-value'>
                {address.street} <br /> {address.district} <br />
                {address.city} {address.postalCode}
                <br /> {address.country}
              </p>
            </div>

            <div className='contact-info-social'>
              <a href={social.instagram} target='_blank' rel='noreferrer'>
                Instagram
              </a>

              <a href={social.facebook} target='_blank' rel='noreferrer'>
                Facebook
              </a>
            </div>
          </aside>

          {isSent ? (
            <div className='contact-confirmation'>
              <h2 className='contact-confirmation-title'>
                Thank You, {form.name}
              </h2>
              <p className='contact-confirmation-text'>
                We've received your message and will get back to you at{' '}
                {form.email} shortly.
              </p>
            </div>
          ) : (
            <form action='' className='contact-form' onSubmit={handleSubmit}>
              <div className='contact-field'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact-field'>
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

              <div className='contact-field'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  rows='5'
                  id='message'
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type='submit' className='contact-submit'>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;
