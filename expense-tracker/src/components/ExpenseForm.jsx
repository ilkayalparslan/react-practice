import { useState } from 'react';
import useStore from '../store';

function ExpenseForm() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const addExpense = useStore((state) => state.addExpense);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '' || amount === '') return;
    addExpense({ text: text.trim(), amount: parseFloat(amount), type });
    setText('');
    setAmount('');
  };
  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='expense-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Description'
      />
      <input
        type='number'
        className='expense-input'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Amount'
        min='0'
        step='0.01'
      />

      <div className='type-buttons'>
        <button
          type='button'
          className={`type-btn ${type === 'expense' ? 'active-expense' : ''}`}
          onClick={() => setType('expense')}
        >
          Expense
        </button>
        <button
          type='button'
          className={`type-btn ${type === 'income' ? 'active-income' : ''}`}
          onClick={() => setType('income')}
        >
          Income
        </button>
      </div>
      <button className='submit-btn' type='submit'>
        Add
      </button>
    </form>
  );
}
export default ExpenseForm;
