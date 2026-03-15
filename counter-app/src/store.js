import { create } from 'zustand'

const useStore = create((set) => ({
  // state
  count: 0,
  // action
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: Math.max(0, state.count - 1) })),
  reset: () => set({ count: 0 }),
}))

export default useStore
