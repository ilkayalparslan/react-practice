import useStore from '../store';

function LengthSlider() {
  // length → slider'ın şu anki değeri
  // setLength → slider değişince çağrılacak action
  const length = useStore((state) => state.length);
  const setLength = useStore((state) => state.setLength);

  return (
    <div className='setting-group'>
      <div className='setting-header'>
        <label className='setting-label'>Password Length</label>
        <span className='setting-value'>{length}</span>
      </div>
      <input
        className='length-slider'
        type='range'
        min='4'
        max='32'
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
    </div>
  );
}
export default LengthSlider;
