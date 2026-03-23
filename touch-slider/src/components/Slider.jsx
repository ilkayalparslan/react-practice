import { useEffect } from 'react'
import useStore from '../store'
import Slide from './Slide'

function Slider() {
  const slides = useStore((state) => state.slides)
  const currentIndex = useStore((state) => state.currentIndex)
  const isDragging = useStore((state) => state.isDragging)
  const currentTranslate = useStore((state) => state.currentTranslate)
  const dragStart = useStore((state) => state.dragStart)
  const dragMove = useStore((state) => state.dragMove)
  const dragEnd = useStore((state) => state.dragEnd)
  const setCurrentIndex = useStore((state) => state.setCurrentIndex)

  const handleMouseDown = (e) => {
    dragStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    dragMove(e.clientX)
  }

  const handleMouseUp = () => {
    dragEnd()
  }

  const handleTouchStart = (e) => {
    dragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    dragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    dragEnd()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') setCurrentIndex(currentIndex - 1)
      if (e.key === 'ArrowRight') setCurrentIndex(currentIndex + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, setCurrentIndex])

  return (
    <div
      className='slider'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className='slider-track'
        style={{
          transform: `translateX(${currentTranslate}px)`,
          transition: isDragging ? 'none' : 'transform 0.4s ease-out',
        }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>
      {/* Dots */}
      <div className='slider-dots'>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className='slider-counter'>
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  )
}
export default Slider
