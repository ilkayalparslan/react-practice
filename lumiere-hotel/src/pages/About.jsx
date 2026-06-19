import { hotelInfo } from '../data/hotelInfo';
import ImageCarousel from '../components/ImageCarousel';
import './About.css';

function About() {
  const { name, tagline, shortDescription, about, amenities, gallery } =
    hotelInfo;
  return (
    <div className='about-page'>
      <div className='container'>
        <header className='about-hero'>
          <p className='about-eyebrow'>{tagline}</p>
          <h1 className='about-title'>{name}</h1>
          <p className='about-intro'>{shortDescription}</p>
        </header>
        <div className='about-gallery'>
          <ImageCarousel images={gallery} alt={name} />
        </div>
        <section className='about-story'>
          <h2 className='about-section-title'>{about.heading}</h2>
          {about.paragraphs.map((x, i) => (
            <p key={i} className='about-paragraph'>
              {x}
            </p>
          ))}
        </section>

        <section className='about-highlights'>
          {about.highlights.map((x) => (
            <div key={x.title} className='about-highlight'>
              <h3 className='about-highlight-title'>{x.title}</h3>
              <p className='about-highlight-text'>{x.text}</p>
            </div>
          ))}
        </section>

        <section className='about-amenities'>
          <h2 className='about-section-title'>Hotel Amenities</h2>
          <ul className='about-amenities-list'>
            {amenities.map((a) => (
              <li key={a} className='about-amenities-item'>
                <span className='about-amenities-check'>✓</span>
                {a}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
export default About;
