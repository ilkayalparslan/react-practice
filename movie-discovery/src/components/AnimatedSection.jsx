import useInView from '../hooks/useInView';
import '../css/AnimatedSection.css';

function AnimatedSection({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`animated-section ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
export default AnimatedSection;
