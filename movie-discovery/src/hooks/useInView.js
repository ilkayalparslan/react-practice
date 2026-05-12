import { useEffect, useRef, useState } from 'react';

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);
  return [ref, isInView];
}
export default useInView;
