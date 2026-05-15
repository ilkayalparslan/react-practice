import { Link } from 'react-router-dom';
import { hotelInfo } from '../data/hotelInfo';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        {/* brand column */}
        <div className='footer-col'>
          <h3 className='footer-brand'>{hotelInfo.name}</h3>
          <p className='footer-tagline'>{hotelInfo.tagline}</p>
        </div>

        {/* contact column */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Contact</h4>
          <a href={`tel:${hotelInfo.contact.phone}`} className='footer-link'>
            {hotelInfo.contact.phone}
          </a>
          <a
            href={`mailto:${hotelInfo.contact.email}`}
            className='footer__link'
          >
            {hotelInfo.contact.email}
          </a>
          <p className='footer__address'>
            {hotelInfo.address.street}
            <br />
            {hotelInfo.address.district}, {hotelInfo.address.city}
          </p>
        </div>

        {/* navigation column */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Explore</h4>
          <Link to='/rooms' className='footer-link'>
            Rooms
          </Link>
          <Link to='/about' className='footer-link'>
            About
          </Link>
          <Link to='/contact' className='footer-link'>
            Contact
          </Link>
          <Link to='/manage' className='footer-link'>
            Manage Booking
          </Link>
        </div>

        {/* social column */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Follow</h4>
          <a
            href={hotelInfo.social.instagram}
            target='blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            Instagram
          </a>

          <a
            href={hotelInfo.social.facebook}
            target='blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            facebook
          </a>
        </div>
      </div>

      {/* bottom bar */}
      <div className='footer-bottom'>
        <div className='container footer-bottom-inner'>
          <p>
            © {currentYear} {hotelInfo.name}. All rights reserved.
          </p>
          <p>{hotelInfo.policies.cancellationPolicy}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
