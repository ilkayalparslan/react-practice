import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found-code'>404</h1>
      <p className='not-found-text'>Page not found</p>
      <Link to='/' className='not-found-link'>
        Go home
      </Link>
    </div>
  );
}
export default NotFound;
