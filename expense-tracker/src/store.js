import { create } from 'zustand';

const getStoredExpenses = () => {
  const stored = localStorage.getItem('expenses');
  return stored ? JSON.parse(stored) : [];
};

const saveExpenses = (expenses) => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

const useStore = create((set, get) => ({
  expenses: getStoredExpenses(),
  filter: 'all',

  addExpense: (expense) =>
    set((state) => {
      const newExpenses = [
        ...state.expenses,
        {
          id: Date.now(),
          ...expense,
          date: new Date().toISOString().split('T')[0],
        },
      ];
      saveExpenses(newExpenses);
      return { expenses: newExpenses };
    }),

  removeExpense: (id) =>
    set((state) => {
      const newExpenses = state.expenses.filter((e) => e.id !== id);
      saveExpenses(newExpenses);
      return { expenses: newExpenses };
    }),

  setFilter: (filter) => set({ filter }),

  getFilteredExpenses: () => {
    const { expenses, filter } = get();
    if (filter === 'income') return expenses.filter((e) => e.type === 'income');
    if (filter === 'expense')
      return expenses.filter((e) => e.type === 'expense');
    return expenses;
  },

  getBalance: () => {
    const { expenses } = get();
    return expenses.reduce((total, e) => {
      return e.type === 'income' ? total + e.amount : total - e.amount;
    }, 0);
  },

  getTotalIncome: () => {
    const { expenses } = get();
    return expenses
      .filter((e) => e.type === 'income')
      .reduce((sum, e) => sum + e.amount, 0);
  },

  getTotalExpense: () => {
    const { expenses } = get();
    return expenses
      .filter((e) => e.type === 'expense')
      .reduce((sum, e) => sum + e.amount, 0);
  },
}));

export default useStore;
