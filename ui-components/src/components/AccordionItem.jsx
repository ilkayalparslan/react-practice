import { useState } from 'react';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
        <span className='accordion-question'>{question}</span>
        <span className='accordion-icon'>{isOpen ? '-' : '+'}</span>
      </button>
      <div className='accordion-body'>
        <p className='accordion-answer'>{answer}</p>
      </div>
    </div>
  );
}
export default AccordionItem;
