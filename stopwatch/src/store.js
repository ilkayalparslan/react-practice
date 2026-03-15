import { create } from 'zustand'

const useStore = create((set) => ({
  // state
  time: 0,
  isRunning: false,
  //actions
  start: () => set({ isRunning: true }),
  stop: () => set({ isRunning: false }),
  reset: () => set({ time: 0, isRunning: false }),
  tick: () => set((state) => ({ time: state.time + 10 })),
}))

export default useStore
