import useStore from '../store'

function ResultScreen() {
  const score = useStore((state) => state.score)
  const questions = useStore((state) => state.questions)
  const answers = useStore((state) => state.answers)
  const restartQuiz = useStore((state) => state.restartQuiz)

  const percentage = Math.round((score / questions.length) * 100)
  return (
    <div className='result-screen'>
      <h2 className='result-title'>Quiz Complete!</h2>
      <div className='result-score'>
        <span className='score-number'>
          {score} / {questions.length}
        </span>
        <span className='score-percent'>{percentage} %</span>
      </div>

      <div className='result-message'>
        {percentage >= 80
          ? '🎉 Excellent!'
          : percentage >= 50
            ? '👍 Good job!'
            : '📚 Keep learning!'}
      </div>

      <div className='answers-review'>
        {answers.map((a, i) => (
          <div
            key={i}
            className={`review-item ${a.isCorrect ? 'review-correct' : 'review-wrong'}`}
          >
            <span className='review-icon'>{a.isCorrect ? '✓' : '✕'}</span>
            <div className='review-info'>
              <p className='review-question'>{a.question}</p>
              {!a.isCorrect && (
                <p className='review-answer'>
                  {a.selected ? `Your answer: ${a.selected}` : 'Time expired'} ·
                  Correct: {a.correct}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className='restart-btn' onClick={restartQuiz}>
        Try Again
      </button>
    </div>
  )
}
export default ResultScreen
