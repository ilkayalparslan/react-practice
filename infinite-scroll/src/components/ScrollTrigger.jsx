import { useEffect, useRef } from 'react';
import useStore from '../store';

function ScrollTrigger() {
  const ref = useRef(null);
  const loadMore = useStore((state) => state.loadMore);
  const hasMore = useStore((state) => state.hasMore);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    });
    {
      threshold: 0.1;
    }
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [loadMore, hasMore]);

  if (!hasMore) {
    return <p className='end-message'>You've reached the end! 🎉</p>;
  }

  return (
    <div ref={ref} className='scroll-trigger'>
      {loading && <div className='loader' />}
    </div>
  );
}
export default ScrollTrigger;
