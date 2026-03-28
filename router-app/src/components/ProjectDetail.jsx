import { useParams, useNavigate, Link } from 'react-router-dom';
import useStore from '../store';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useStore((state) => state.projects);

  const project = projects.find((x) => x.id === id);

  if (!project) {
    return (
      <div className='not-founf-detail'>
        <h2>Project not found</h2>
        <button className='back-btn' onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  const currentIndex = projects.findIndex((x) => x.id === id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];
  return (
    <div className='project-detail'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        {' '}
        ← Back
      </button>

      <div className='detail-header' style={{ borderColor: project.color }}>
        <span className='detail-emoji'>{project.emoji}</span>
        <h1 className='detail-title'>{project.title}</h1>
      </div>

      <p className='detail-desc'>{project.description}</p>

      <div className='detail-section'>
        <h3 className='section-title'>Concepts Learned</h3>
        <div className='detail-concepts'>
          {project.concepts.map((x) => (
            <span
              key={x}
              className='concept-tag-lg'
              style={{
                backgroundColor: project.color + '15',
                color: project.color,
              }}
            >
              {x}
            </span>
          ))}
        </div>
      </div>

      <div className='detail-nav'>
        {prevProject ? (
          <Link to={`/project/${prevProject.id}`} className='detail-nav-btn'>
            ← {prevProject.title}
          </Link>
        ) : (
          <span />
        )}

        {nextProject ? (
          <Link to={`/project/${nextProject.id}`} className='detail-nav-btn'>
            {nextProject.title}→
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
export default ProjectDetail;
