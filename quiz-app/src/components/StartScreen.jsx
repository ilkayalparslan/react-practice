import useStore from '../store'

function StartScreen() {
  const questions = useStore((state) => state.questions)
  const startQuiz = useStore((state) => state.startQuiz)

  return (
    <div className='start-screen'>
      <h2 className='start-subtitle'>React Quiz</h2>
      <p className='start-info'>{questions.length} questions · 15 sec each</p>
      <button className='start-btn' onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  )
}
export default StartScreen
