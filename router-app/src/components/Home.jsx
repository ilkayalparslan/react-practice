import { Link } from 'react-router-dom';
import useStore from '../store';

function Home() {
  const projects = useStore((state) => state.projects);
  return (
    <div className='home'>
      <div className='hero'>
        <h1 className='hero-title'>React Practice Projects</h1>
        <p className='hero-subtitle'>
          {projects.length} mini apps built with react + Zustand
        </p>
      </div>

      <div className='projects-grid'>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`project/${project.id}`}
            className='project-card'
            style={{ borderColor: project.color }}
          >
            <span className='project-emoji'>{project.emoji}</span>
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-desc'>{project.description}</p>
            <div className='project-concepts'>
              {project.concepts.map((x) => (
                <span
                  key={x}
                  className='concept-tag'
                  style={{
                    backgroundColor: project.color + '20',
                    color: project.color,
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
