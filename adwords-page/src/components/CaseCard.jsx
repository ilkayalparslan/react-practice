function CaseCard({ hotel }) {
  return (
    <div className='case-card'>
      <img src={hotel.image} alt={hotel.name} className='case-image' />
      <div className='case-content'>
        <h3 className='case-name'>{hotel.name}</h3>
        <p className='case-location'>{hotel.location}</p>
        <div className='case-stats'>
          <div className='case-stat'>
            <span className='stat-label'>Before</span>
            <span className='stat-value before'>{hotel.before}</span>
          </div>
          <div className='case-arrow'>→</div>
          <div className='case-stat'>
            <span className='stat-label'>After</span>
            <span className='stat-value after'>{hotel.after}</span>
          </div>
        </div>
        <p className='case-metric'>{hotel.metric}</p>
        <p className='case-quote'>"{hotel.quote}"</p>
      </div>
    </div>
  );
}
export default CaseCard;
