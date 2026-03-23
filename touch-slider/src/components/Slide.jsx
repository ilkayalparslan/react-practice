function Slide({ slide }) {
  return (
    <div className='slide' style={{ background: slide.bg }}>
      <h2 className='slide-title'>{slide.title}</h2>
      <p className='slide-subtitle'>{slide.subtitle}</p>
    </div>
  )
}
export default Slide
