import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h1 className='home-title'>UI Components</h1>
      <div className='home-grid'>
        <Link to='/faq' className='home-card'>
          <span className='home-icon'>❓</span>
          <h3>Accordion FAQ</h3>
          <p>Toggle sections with smooth animations</p>
        </Link>
        <Link to='/testimonials' className='home-card'>
          <span className='home-icon'>💬</span>
          <h3>Testimonial Slider</h3>
          <p>Customer reviews carousel</p>
        </Link>
      </div>
    </div>
  );
}
export default Home;
