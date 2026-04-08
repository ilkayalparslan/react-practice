import { useState } from 'react';
import useStore from '../store';

function History() {
  const history = useStore((state) => state.history);
  // Hangi history item'ın "Copied" gösterdiğini takip et
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (pw, index) => {
    navigator.clipboard.writeText(pw);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  if (history.length === 0) return null;

  return (
    <div className='history'>
      <h3 className='history-title'>Recent Passwords</h3>
      {history.map((pw, i) => (
        <div key={i} className='history-item'>
          <span className='history-password'>{pw}</span>
          {copiedIndex === i ? (
            <span className='history-copied'>✓ Copied</span>
          ) : (
            <button className='history-copy' onClick={() => handleCopy(pw, i)}>
              📋
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
export default History;
