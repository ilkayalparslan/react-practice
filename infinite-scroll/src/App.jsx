import { useEffect } from 'react';
import useStore from './store';
import PostCard from './components/PostCard';
import ScrollTrigger from './components/ScrollTrigger';

function App() {
  const posts = useStore((state) => state.posts);
  const loadMore = useStore((state) => state.loadMore);

  // ilk yuklemede 6 post getir
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <div className='app'>
      <h1 className='app-title'>📜 Infinite Feed</h1>
      <div className='feed'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <ScrollTrigger />
    </div>
  );
}
export default App;
