import { useEffect } from 'react';
import Timer from './Timer';
import SessionCounter from './SessionCounter';
import Settings from './Settings';

function PomodoroApp() {
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);
  return (
    <div className='pomodoro-container'>
      <h1 className='pomodora-title'>Pomodoro Timer</h1>
      <Timer />
      <SessionCounter />
      <Settings />
    </div>
  );
}
export default PomodoroApp;
