import useStore from '../store'
import StartScreen from './StartScreen'
import Question from './Question'
import ResultScreen from './ResultScreen'

function QuizApp() {
  const status = useStore((state) => state.status)
  return (
    <div className='quiz-container'>
      <h1 className='quiz-title'>Quiz App</h1>
      {status === 'start' && <StartScreen />}
      {status === 'playing' && <Question />}
      {status === 'finished' && <ResultScreen />}
    </div>
  )
}
export default QuizApp
