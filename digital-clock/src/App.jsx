import { useState, useEffect } from "react"

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')
  const date = time.toLocaleDateString('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="clock-container">
      <div className="clock">
        <span className="time">{hours}: {minutes}</span>
        <span className="seconds">: {seconds}</span>
      </div>
      <div className="date">{date}</div>
    </div>
  )
}
export default App