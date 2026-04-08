import useStore from '../store';

function Options() {
  // Her checkbox'ın değeri ve toggle action'ı
  const includeUppercase = useStore((state) => state.includeUppercase);
  const includeLowercase = useStore((state) => state.includeLowercase);
  const includeNumbers = useStore((state) => state.includeNumbers);
  const includeSymbols = useStore((state) => state.includeSymbols);
  const toggleUppercase = useStore((state) => state.toggleUppercase);
  const toggleLowercase = useStore((state) => state.toggleLowercase);
  const toggleNumbers = useStore((state) => state.toggleNumbers);
  const toggleSymbols = useStore((state) => state.toggleSymbols);

  return (
    <div className='options'>
      <label className='option'>
        <input
          type='checkbox'
          checked={includeUppercase}
          onChange={toggleUppercase}
        />
        <span className='option-label'>Uppercase (A-Z)</span>
      </label>
      <label className='option'>
        <input
          type='checkbox'
          checked={includeLowercase}
          onChange={toggleLowercase}
        />
        <span className='option-label'>Lowercase (a-z)</span>
      </label>
      <label className='option'>
        <input
          type='checkbox'
          checked={includeNumbers}
          onChange={toggleNumbers}
        />
        <span className='option-label'>Numbers (0-9)</span>
      </label>
      <label className='option'>
        <input
          type='checkbox'
          checked={includeSymbols}
          onChange={toggleSymbols}
        />
        <span className='option-label'>Symbols (!@#$)</span>
      </label>
    </div>
  );
}
export default Options;
