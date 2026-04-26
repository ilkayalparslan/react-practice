function PriceCard({ pkg }) {
  return (
    <div className={`price-card ${pkg.popular ? 'popular' : ''}`}>
      {pkg.popular && <span className='popular-badge'>Most Popular</span>}
      <h3 className='price-name'>{pkg.name}</h3>
      <p className='price-amount'>${pkg.price}/mo</p>
      <ul className='price-features'>
        {pkg.features.map((x) => (
          <li key={x} className='price-feature'>
            ✓ {x}
          </li>
        ))}
      </ul>
      <button className='price-btn'>Get Started</button>
    </div>
  );
}
export default PriceCard;
