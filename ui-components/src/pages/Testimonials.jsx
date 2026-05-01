import { useState, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonial.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      info: 'Traveled from London',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Absolutely stunning hotel with breathtaking views. The staff went above and beyond to make our stay memorable. Will definitely come back!',
    },
    {
      id: 2,
      name: 'Marco Rossi',
      info: 'Traveled from Rome',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4,
      text: 'Great location right in the heart of the city. Rooms were clean and modern. Breakfast buffet had an excellent variety.',
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      info: 'Traveled from Tokyo',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'The spa facilities were world-class. I felt completely relaxed and rejuvenated. The rooftop restaurant was a highlight.',
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      info: 'Traveled from Dubai',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5,
      text: 'Exceptional service from check-in to check-out. The concierge arranged everything perfectly. Truly a five-star experience.',
    },
    {
      id: 5,
      name: 'Emma Schmidt',
      info: 'Traveled from Berlin',
      avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
      rating: 4,
      text: 'Beautiful boutique hotel with so much character. The room decor was lovely and the location could not be better for sightseeing.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const goTo = (index) => setCurrentIndex(index);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  return (
    <div className='testimonials-page'>
      <h1 className='testimonials-title'>What Our Guests Say</h1>
      <p className='testimonials-subtitle'>Real reviews from real travelers</p>
      <div className='slider-container'>
        <button className='slider-btn prev' onClick={goPrev}>
          ←
        </button>
        <div className='slider-track'>
          <div
            className='slider-inner'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((x) => (
              <div key={x.id} className='slide'>
                <TestimonialCard review={x} />
              </div>
            ))}
          </div>
        </div>
        <button className='slider-btn next' onClick={goNext}>
          →
        </button>
      </div>
      <div className='slider-dots'>
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
export default Testimonials;
