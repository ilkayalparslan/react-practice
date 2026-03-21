import useStore from '../store';

function Summary() {
  const expenses = useStore((state) => state.expenses);

  const balance = expenses.reduce((total, e) => {
    return e.type === 'income' ? total + e.amount : total - e.amount;
  }, 0);

  const totalIncome = expenses
    .filter((e) => e.type === 'income')
    .reduce((sum, e) => sum + e.amount, 0);

  const totalExpense = expenses
    .filter((e) => e.type === 'expense')
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className='summary'>
      <div className='summary-card balance'>
        <span className='summary-label'>Balance</span>
        <span
          className={`summary-amount ${balance >= 0 ? 'positive' : 'negative'}`}
        >
          ${balance.toFixed(2)}
        </span>
      </div>
      <div className='summary-row'>
        <div className='summary-card income'>
          <span className='summary-label'>Income</span>
          <span className='summary-amount positive'>
            +${totalIncome.toFixed(2)}
          </span>
        </div>
        <div className='summary-card expense'>
          <span className='summary-label'>Expense</span>
          <span className='summary-amount negative'>
            -${totalExpense.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Summary;
