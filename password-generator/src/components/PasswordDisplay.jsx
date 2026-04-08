import { useState } from 'react';
import useStore from '../store';

function PasswordDisplay() {
  // Store'dan password'ü oku — generate basılınca değişecek
  const password = useStore((state) => state.password);

  // "Copied!" yazısı göstermek için local state
  // Bu global store'a gitmez çünkü sadece bu butonu ilgilendiriyor

  const [copied, setCopied] = useState(false);

  // Clipboard'a kopyalama fonksiyonu
  // navigator.clipboard.writeText → browser'ın native copy API'si

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // 1.5 saniye sonra "Copied" kaybolur
  };

  return (
    <div className='password-display'>
      <span className='password-text'>{password || 'Click Generate'}</span>
      <button
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? '✓ Copied' : '📋 Copy'}
      </button>
    </div>
  );
}
export default PasswordDisplay;
