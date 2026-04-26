function BenefitCard({ image, headline, description }) {
  return (
    <div className='benefit-card'>
      <div className='benefit-image'>
        <img src={image} alt={headline} />
      </div>
      <div className='benefit-content'>
        <h3 className='benefit-headline'>{headline}</h3>
        <p className='benefit-desc'>{description}</p>
      </div>
    </div>
  );
}
export default BenefitCard;
