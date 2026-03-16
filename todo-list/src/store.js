import { create } from 'zustand'

const useStore = create((set, get) => ({
  // state
  todos: [],
  filter: 'all',

  // actions
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((x) => x.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((x) =>
        x.id === id ? { ...x, completed: !x.completed } : x,
      ),
    })),

  setFilter: (filter) => set({ filter }),

  getFilteredTodos: () => {
    const { todos, filter } = get()
    if (filter === 'active') return todos.filter((x) => !x.completed)
    if (filter === 'completed') return todos.filter((x) => x.completed)
    return todos
  },
}))

export default useStore
