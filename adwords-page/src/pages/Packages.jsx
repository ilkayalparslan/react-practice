import PriceCard from '../components/PriceCard';
import AnimatedSection from '../components/AnimatedSection';
import './Packages.css';

function Packages() {
  // Packages.jsx içinde
  const packages = [
    {
      name: 'Starter',
      price: 299,
      features: [
        'Google Ads Setup',
        'Monthly Report',
        'Keyword Research',
        'Up to 2 Campaigns',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 599,
      features: [
        'Everything in Starter',
        'Weekly Optimization',
        'Competitor Analysis',
        'Up to 5 Campaigns',
        'Landing Page Review',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 999,
      features: [
        'Everything in Professional',
        'Daily Monitoring',
        'A/B Testing',
        'Unlimited Campaigns',
        'Dedicated Manager',
        'Monthly Strategy Call',
      ],
      popular: false,
    },
  ];
  return (
    <div className='packages-page'>
      <AnimatedSection direction='up'>
        <h1 className='packages-title'>Choose Your Plan</h1>
        <p className='packages-subtitle'>
          Transparent pricing. No hidden fees. Cancel anytime.
        </p>
      </AnimatedSection>
      <div className='packages-grid'>
        {packages.map((x, i) => (
          <AnimatedSection key={x.name} direction='up' delay={i * 0.15}>
            <PriceCard pkg={x} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
export default Packages;
