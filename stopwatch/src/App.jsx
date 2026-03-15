import { useEffect } from 'react'
import useStore from './store'

function App() {
  const time = useStore((state) => state.time)
  const isRunning = useStore((state) => state.isRunning)
  const start = useStore((state) => state.start)
  const stop = useStore((state) => state.stop)
  const reset = useStore((state) => state.reset)
  const tick = useStore((state) => state.tick)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      tick()
    }, 10)

    return () => clearInterval(interval) // cleanup
  }, [isRunning]) // isrunning degisince calis

  // time format
  const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, '0')

  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, '0')

  const ms = Math.floor((time % 1000) / 10)
    .toString()
    .padStart(2, '0')

  return (
    <div className='container'>
      <div className='time-display'>
        {minutes} : {seconds} : {ms}
      </div>
      <div className='controls'>
        <button className='btn btn-start' onClick={start} disabled={isRunning}>
          Start
        </button>
        <button className='btn btn-stop' onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button className='btn btn-reset' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default App
