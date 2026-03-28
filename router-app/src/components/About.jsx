import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className='about'>
      <h1 className='about-title'>About</h1>
      <p className='about-text'>
        This is a collection of mini React projects built while learning React
        and Zustand. Each project focuses on different concepts and patterns.
      </p>

      <div className='about-stack'>
        <h3 className='section-title'>Tech Stack</h3>
        <div className='stack-tags'>
          <span className='stack-tag'>React</span>
          <span className='stack-tag'>Vite</span>
          <span className='stack-tag'>Zustand</span>
          <span className='stack-tag'>React Router</span>
        </div>
      </div>

      <button className='back-btn' onClick={() => navigate('/')}>
        ← View Projects
      </button>
    </div>
  );
}
export default About;
