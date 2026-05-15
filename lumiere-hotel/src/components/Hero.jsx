import { Link } from 'react-router-dom';
import { hotelInfo } from '../data/hotelInfo';
import './Hero.css';

function Hero() {
  return (
    <section className='hero'>
      {/* background image */}
      <div className='hero-image' />

      {/* overlay (dark layer for text contrast) */}
      <div className='hero-overlay' />

      {/* content */}
      <div className='container hero-content'>
        <p className='hero-eyebrow'>Istanbul · Cihangir</p>
        <h1 className='hero-title'>{hotelInfo.name}</h1>
        <p className='hero-tagline'>{hotelInfo.tagline}</p>

        <div className='hero-actions'>
          <Link to='/reservation' className='hero-btn hero-btn-primary'>
            Book Your Stay
          </Link>
          <Link to='/rooms' className='hero-btn hero-btn-secondary'>
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
