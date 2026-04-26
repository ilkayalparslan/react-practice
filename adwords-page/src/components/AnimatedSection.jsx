import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children, direction = 'up', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionStyles = {
    up: 'translate(0,60px)',
    down: 'translate(0,-60px)',
    left: 'translate(60px , 0)',
    right: 'translate(-60px, 0)',
  };
  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translate(0,0)' : directionStyles[direction],
        opacity: isVisible ? 1 : 0,
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
export default AnimatedSection;
