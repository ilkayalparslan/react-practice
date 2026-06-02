import './GuestsSelector.css';

function GuestsSelector({ adults, children, dispatch }) {
  return (
    <div className='guests-selector'>
      <div className='guests-selector-row'>
        <div className='guests-selector-info'>
          <span className='guests-selector-label'>Adults</span>
          <span className='guests-selector-hint'>Ages 13+</span>
        </div>
        <div className='guests-selector-controls'>
          <button
            type='button'
            className='guests-selector-btn'
            onClick={() => dispatch({ type: 'DECREMENT_ADULTS' })}
            disabled={adults <= 1}
          >
            -
          </button>
          <span className='guests-selector-count'>{adults}</span>
          <button
            type='button'
            className='guests-selector-btn'
            onClick={() => dispatch({ type: 'INCREMENT_ADULTS' })}
          >
            +
          </button>
        </div>
      </div>

      <div className='guests-selector-row'>
        <div className='guests-selector-info'>
          <span className='guests-selector-label'>Children</span>
          <span className='guests-selector-hint'>Ages 0 -12</span>
        </div>
        <div className='guests-selector-controls'>
          <button
            type='button'
            className='guests-selector-btn'
            onClick={() => dispatch({ type: 'DECREMENT_CHILDREN' })}
            disabled={children <= 0}
          >
            -
          </button>
          <span className='guests-selector-count'>{children}</span>
          <button
            type='button'
            className='guests-selector-btn'
            onClick={() => dispatch({ type: 'INCREMENT_CHILDREN' })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default GuestsSelector;
