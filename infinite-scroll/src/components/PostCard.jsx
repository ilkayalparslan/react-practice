function PostCard({ post }) {
  return (
    <div className='post-card'>
      <img
        src={post.image}
        alt={post.title}
        className='post-image'
        loading='lazy'
      />
      <div className='post-content'>
        <h3 className='post-title'>{post.title}</h3>
        <p className='post-body'>{post.body}</p>
        <div className='post-meta'>
          <span className='post-author'>By {post.author}</span>
          <span className='post-date'>{post.date}</span>
          <span className='post-likes'>♥ {post.likes}</span>
        </div>
      </div>
    </div>
  );
}
export default PostCard;
