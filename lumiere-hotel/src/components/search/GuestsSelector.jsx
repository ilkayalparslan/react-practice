import './GuestsSelector.css';

function GuestsSelector({ adults, children, dispatch, maxGuests }) {
  const total = adults + children;
  const isFull = maxGuests != null && total >= maxGuests;
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
            disabled={isFull}
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
            disabled={isFull}
          >
            +
          </button>
        </div>
      </div>
      {isFull && (
        <p className='guests-selector-max-note'>
          Maximum {maxGuests} guests for this room.
        </p>
      )}
    </div>
  );
}
export default GuestsSelector;
