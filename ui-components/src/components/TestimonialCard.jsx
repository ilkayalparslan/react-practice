function TestimonialCard({ review }) {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-stars'>
        {'★'.repeat(review.rating)}
        {'☆'.repeat(5 - review.rating)}
      </div>

      <p className='testimonial-text'>{review.text}</p>
      <div className='testimonial-author'>
        <img src={review.avatar} alt={review.name} className='author-avatar' />
        <div>
          <p className='author-name'>{review.name}</p>
          <p className='author-info'>{review.info}</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;
