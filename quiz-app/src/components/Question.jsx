import { useEffect } from 'react'
import useStore from '../store'

function Question() {
  const questions = useStore((state) => state.questions)
  const currentIndex = useStore((state) => state.currentIndex)
  const selectedAnswer = useStore((state) => state.selectedAnswer)
  const timeLeft = useStore((state) => state.timeLeft)
  const selectAnswer = useStore((state) => state.selectAnswer)
  const nextQuestion = useStore((state) => state.nextQuestion)
  const tick = useStore((state) => state.tick)

  const current = questions[currentIndex]

  useEffect(() => {
    if (selectedAnswer !== null) return
    const timer = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(timer)
  }, [currentIndex, tick, selectedAnswer])

  const getOptionClass = (option) => {
    if (selectedAnswer === null) return 'option-btn'
    if (option === current.answer) return 'option-btn correct'
    if (option === selectedAnswer) return 'option-btn wrong'
    return 'option-btn'
  }

  return (
    <div className='question-container'>
      <div className='question-header'>
        <span className='question-count'>
          {currentIndex + 1} / {questions.length}
        </span>

        <span
          className={`question-timer ${timeLeft <= 5 ? 'timer-warning' : ''}`}
        >
          {timeLeft}s
        </span>
      </div>

      <div className='timer-bar'>
        <div
          className='timer-fill'
          style={{ width: `${(timeLeft / 15) * 100}%` }}
        ></div>
      </div>

      <h2 className='question-text'>{current.question}</h2>

      <div className='options-grid'>
        {current.options.map((option) => (
          <button
            key={option}
            className={getOptionClass(option)}
            onClick={() => selectAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <button className='next-btn' onClick={nextQuestion}>
          {currentIndex + 1 >= questions.length ? 'See Results' : 'Next'}
        </button>
      )}
    </div>
  )
}
export default Question
