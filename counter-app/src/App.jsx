import useStore from './store'

function App() {
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const decrement = useStore((state) => state.decrement)
  const reset = useStore((state) => state.reset)

  return (
    <div className='counter-container'>
      <div className='counter-controls'>
        <button className='btn' onClick={decrement} disabled={count === 0}>
          -
        </button>
        <span className='count-display'>{count}</span>
        <button className='btn' onClick={increment}>
          +
        </button>
        <button className='reset-btn' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default App
