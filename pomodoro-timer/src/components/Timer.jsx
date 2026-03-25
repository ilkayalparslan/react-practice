import { useEffect } from 'react';
import useStore from '../store';

function Timer() {
  const timeLeft = useStore((state) => state.timeLeft);
  const isRunning = useStore((state) => state.isRunning);
  const mode = useStore((state) => state.mode);
  const toggleTimer = useStore((state) => state.toggleTimer);
  const reset = useStore((state) => state.reset);
  const skip = useStore((state) => state.skip);
  const tick = useStore((state) => state.tick);
  const workDuration = useStore((state) => state.workDuration);
  const breakDuration = useStore((state) => state.breakDuration);
  const longBreakDuration = useStore((state) => state.longBreakDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  const totalTime =
    mode === 'work'
      ? workDuration * 60
      : mode === 'break'
        ? breakDuration * 60
        : longBreakDuration * 60;

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const modelLabels = {
    work: 'Focus Time',
    break: ' Short Break',
    longBreak: 'Long Break',
  };

  return (
    <div className='timer'>
      <p className={`mode-label ${mode}`}>{modelLabels[mode]}</p>
      <div className='timer-circle'>
        <svg width='280' height='280' viewBox='0 0 280 280'>
          <circle className='circle-bg' cx='140' cy='140' r={radius} />
          <circle
            className={`circle-progress ${mode}`}
            cx='140'
            cy='140'
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className='timer-display'>{display}</span>
      </div>

      <div className='timer-controls'>
        <button className='control-btn' onClick={reset}>
          Reset
        </button>
        <button className={`control-btn primary ${mode}`} onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className='control-btn' onClick={skip}>
          Skip
        </button>
      </div>
    </div>
  );
}
export default Timer;
