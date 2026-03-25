import { create } from 'zustand';

const useStore = create((set, get) => ({
  workDuration: 25,
  breakDuration: 5,
  longBreakDuration: 15,
  sessionsBeforeLongBreak: 4,

  // state
  timeLeft: 25 * 60,
  isRunning: false,
  mode: 'work',
  completedSession: 0,

  //  actions

  updateSetting: (settings) => {
    const { mode } = get();
    const newTime =
      mode == 'word'
        ? settings.workDuration * 60
        : mode === 'break'
          ? settings.breakDuration * 60
          : settings.longBreakDuration * 60;

    set({
      ...settings,
      timeLeft: newTime,
      isRunning: false,
    });
  },

  toggleTimer: () => set((state) => ({ isRunning: !state.isRunning })),

  tick: () => {
    const { timeLeft, isRunning } = get();
    if (!isRunning) return;
    if (timeLeft <= 1) {
      get().switchMode();
    } else {
      set({ timeLeft: timeLeft - 1 });
    }
  },

  switchMode: () => {
    const {
      mode,
      completedSession,
      sessionsBeforeLongBreak,
      workDuration,
      breakDuration,
      longBreakDuration,
    } = get();

    if (Notification.permission === 'granted') {
      new Notification(mode === 'work' ? '☕ Break time!' : '🔥 Back to work!');
    }

    if (mode === 'work') {
      const newCompleted = completedSession + 1;
      const isLongBreak = newCompleted % sessionsBeforeLongBreak === 0;

      set({
        mode: isLongBreak ? 'longBreak' : 'break',
        timeLeft: isLongBreak ? longBreakDuration * 60 : breakDuration * 60,
        completedSession: newCompleted,
        isRunning: false,
      });
    } else {
      set({
        mode: 'work',
        timeLeft: workDuration * 60,
        isRunning: false,
      });
    }
  },

  reset: () => {
    const { mode, workDuration, breakDuration, longBreakDuration } = get();
    const time =
      mode === 'work'
        ? workDuration * 60
        : mode === 'break'
          ? breakDuration * 60
          : longBreakDuration * 60;

    set({ timeLeft: time, isRunning: false });
  },

  skip: () => get().switchMode(),
}));

export default useStore;
