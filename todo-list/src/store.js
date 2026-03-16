import { create } from 'zustand'

const useStore = create((set) => ({
  // state
  todos: [],

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
}))

export default useStore
