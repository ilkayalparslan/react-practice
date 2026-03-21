import useStore from '../store';

function ExpenseList() {
  const expenses = useStore((state) => state.expenses);
  const filter = useStore((state) => state.filter);
  const removeExpense = useStore((state) => state.removeExpense);

  const filteredExpenses =
    filter === 'income'
      ? expenses.filter((e) => e.type === 'income')
      : filter === 'expense'
        ? expenses.filter((e) => e.type === 'expense')
        : expenses;

  if (expenses.length === 0) {
    return <p className='empty-text'>No Transaction Yet</p>;
  }

  if (filteredExpenses.length === 0) {
    return <p className='empty-text'>No Matching transactions</p>;
  }

  return (
    <ul className='expense-list'>
      {filteredExpenses.map((e) => (
        <li
          key={e.id}
          className={`expense-item ${e.type === 'income' ? 'item-income' : 'item-expense'}`}
        >
          <div className='expense-item-info'>
            <span className='expense-item-text'>{e.text}</span>
            <span className='expense-item-date'>{e.date}</span>
          </div>
          <div className='expense-item-right'>
            <span className='expense-item-amount'>
              {e.type === 'income' ? '+' : '-'}${e.amount.toFixed(2)}
            </span>
            <button className='delete-btn' onClick={() => removeExpense(e.id)}>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ExpenseList;
