import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import BenefitCard from '../components/BenefitCard';
import './AdwordsHome.css';

function AdwordsHome() {
  return (
    <div className='adwords-home'>
      {/* hero */}
      <section className='ad-hero'>
        <AnimatedSection direction='up'>
          <h1 className='ad-hero-title'>
            More Guests. <br />
            Less Cost. <br />
            First Page.
          </h1>
        </AnimatedSection>
        <AnimatedSection direction='up' delay={0.2}>
          <p className='ad-hero-subtitle'>
            Google Ads management built for hotels.
          </p>
        </AnimatedSection>
        <AnimatedSection direction='up' delay={0.4}>
          <Link to='/get-started' className='ad-hero-btn'>
            Get Started →
          </Link>
        </AnimatedSection>
      </section>

      {/* Benefits */}
      <section className='benefits-section'>
        <AnimatedSection direction='left'>
          <BenefitCard
            image='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600'
            headline='Direct Bookings. Not OTA Commissions.'
            description='Stop paying 15-25% to Booking.com. Drive guests directly to your website.'
          />
        </AnimatedSection>

        <AnimatedSection direction='right'>
          <BenefitCard
            image='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600'
            headline='Page One. Day One.'
            description="Your hotel appears on Google's first page from the first day of the campaign."
          />
        </AnimatedSection>

        <AnimatedSection direction='left'>
          <BenefitCard
            image='https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600'
            headline='Only Pay For Real Clicks.'
            description='No wasted budget. You only pay when a potential guest clicks your ad.'
          />
        </AnimatedSection>

        <AnimatedSection direction='right'>
          <BenefitCard
            image='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600'
            headline='We Manage. You Host.'
            description='Campaign setup, optimization, reporting — we handle everything. You focus on your guests.'
          />
        </AnimatedSection>
      </section>

      {/* CTA */}
      <AnimatedSection direction='up'>
        <section className='ad-cta'>
          <h2 className='cta-title'>Ready to fill your rooms?</h2>
          <p className='cta-subtitle'>Free consultation. No commitments.</p>
          <Link to='/get-started' className='cta-btn'>
            Start Your Campaign →
          </Link>
        </section>
      </AnimatedSection>
    </div>
  );
}
export default AdwordsHome;
