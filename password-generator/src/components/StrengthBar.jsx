import useStore from '../store';

function StrengthBar() {
  // Strength hesabı için password ve seçenekleri okuyoruz
  const password = useStore((state) => state.password);
  const length = useStore((state) => state.length);
  const includeUppercase = useStore((state) => state.includeUppercase);
  const includeLowercase = useStore((state) => state.includeLowercase);
  const includeNumbers = useStore((state) => state.includeNumbers);
  const includeSymbols = useStore((state) => state.includeSymbols);

  // Strength hesaplama: kaç karakter seti seçili + uzunluk
  // Her seçenek 1 puan, uzunluk 12+ ise 1 bonus puan

  const getStrength = () => {
    if (!password) return { level: 'weak', width: '%0', label: '' };

    let score = 0;
    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;
    if (length >= 12) score++;

    if (score <= 2) return { level: 'weak', width: '33%', label: 'Weak' };
    if (score <= 3) return { level: 'medium', width: '66%', label: 'Medium' };
    return { level: 'strong', width: '100%', label: 'Strong' };
  };

  const strength = getStrength();
  return (
    <>
      <div className='strength-bar'>
        <div
          className={`strength-fill ${strength.level}`}
          style={{ width: strength.width }}
        />
      </div>
      <p className={`strength-label ${strength.level}`}>{strength.label}</p>
    </>
  );
}
export default StrengthBar;
