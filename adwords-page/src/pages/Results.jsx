import AnimatedSection from '../components/AnimatedSection';
import CaseCard from '../components/CaseCard';
import './Results.css';

function Results() {
  const cases = [
    {
      name: 'Arbor Hotel Istanbul',
      location: 'Üsküdar, Istanbul',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
      before: '12 bookings/mo',
      after: '47 bookings/mo',
      metric: '291% increase in direct bookings',
      quote: 'We cut our OTA dependency in half within 3 months.',
    },
    {
      name: 'Azure Beach Resort',
      location: 'Bodrum, Muğla',
      image:
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
      before: '$2.80 per click',
      after: '$0.95 per click',
      metric: '66% reduction in cost per click',
      quote: 'Our ad spend became 3x more efficient.',
    },
    {
      name: 'Cappadocia Cave Suites',
      location: 'Göreme, Nevşehir',
      image:
        'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600',
      before: 'Page 4 on Google',
      after: 'Page 1, Position 2',
      metric: 'First page from day one',
      quote: 'We started getting calls the same week.',
    },
  ];
  return (
    <div className='results-page'>
      <AnimatedSection direction='up'>
        <h1 className='results-title'>Real Results, Real Hotels.</h1>
        <p className='results-subtitle'>
          See how hotels like yours increased bookings with Google Ads.
        </p>
      </AnimatedSection>
      <div className='cases-list'>
        {cases.map((x, i) => (
          <AnimatedSection
            key={x.name}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i + 0.1}
          >
            <CaseCard hotel={x} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
export default Results;
