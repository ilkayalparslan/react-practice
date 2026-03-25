import useStore from '../store';

function SessionCounter() {
  const completedSession = useStore((state) => state.completedSession);
  const sessionsBeforeLongBreak = useStore(
    (state) => state.sessionsBeforeLongBreak,
  );

  return (
    <div className='session-counter'>
      <div className='session-dots'>
        {Array.from({ length: sessionsBeforeLongBreak }, (_, i) => (
          <span
            key={i}
            className={`session-dot ${i < completedSession % sessionsBeforeLongBreak ? 'completed' : ''}`}
          ></span>
        ))}
      </div>
      <p className='session-text'>{completedSession} sessions completed</p>
    </div>
  );
}
export default SessionCounter;
