import useStore from '../store';

function SessionCounter() {
  const completedSessions = useStore((state) => state.completedSessions);
  const sessionsBeforeLongBreak = useStore(
    (state) => state.sessionsBeforeLongBreak,
  );

  return (
    <div className='session-counter'>
      <div className='session-dots'>
        {Array.from({ length: sessionsBeforeLongBreak }, (_, i) => (
          <span
            key={i}
            className={`session-dot ${i < completedSessions % sessionsBeforeLongBreak ? 'completed' : ''}`}
          ></span>
        ))}
      </div>
      <p className='session-text'>{completedSessions} sessions completed</p>
    </div>
  );
}
export default SessionCounter;
