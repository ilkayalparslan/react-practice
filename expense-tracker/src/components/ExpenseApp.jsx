import Summary from './Summary';
import ExpenseForm from './ExpenseForm';
import FilterButtons from './FilterButtons';
import ExpenseList from './ExpenseList';

function ExpenseApp() {
  return (
    <div className='expense-container'>
      <h1 className='expense-title'>Expense Tracker</h1>
      <Summary />
      <ExpenseForm />
      <FilterButtons />
      <ExpenseList />
    </div>
  );
}
export default ExpenseApp;
