import AccordionItem from '../components/AccordionItem';
import './FAQ.css';

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'What time is check-in and check-out?',
      answer:
        'Check-in is from 14:00 and check-out is until 12:00. Early check-in and late check-out are available upon request.',
    },
    {
      id: 2,
      question: 'Is breakfast included in the room rate?',
      answer:
        'Yes, all room rates include a full buffet breakfast served daily from 07:00 to 10:30 in our main restaurant.',
    },
    {
      id: 3,
      question: 'Do you offer airport transfer service?',
      answer:
        'Yes, we provide airport transfers for an additional fee. Please contact our reception at least 24 hours before your arrival.',
    },
    {
      id: 4,
      question: 'Is there free Wi-Fi in the hotel?',
      answer:
        'Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all rooms and public areas.',
    },
    {
      id: 5,
      question: 'What is your cancellation policy?',
      answer:
        'Free cancellation is available up to 48 hours before check-in. Cancellations made within 48 hours will be charged one night stay.',
    },
    {
      id: 6,
      question: 'Are pets allowed?',
      answer:
        'Small pets under 10kg are welcome with a small additional fee. Please inform us at the time of booking.',
    },
  ];
  return (
    <div className='faq-page'>
      <h1 className='faq-title'>Frequently Asked Questions</h1>
      <p className='faq-subtitle'>
        Everything you need to know about your stay
      </p>
      <div className='faq-list'>
        {faqs.map((x) => (
          <AccordionItem key={x.id} question={x.question} answer={x.answer} />
        ))}
      </div>
    </div>
  );
}
export default FAQ;
