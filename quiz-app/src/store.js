import { create } from 'zustand'

const questions = [
  {
    id: 1,
    question: 'What hook is used for side effects in React?',
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    answer: 'useEffect',
  },
  {
    id: 2,
    question: 'What does JSX stand for?',
    options: [
      'JavaScript XML',
      'JavaScript Extension',
      'Java Syntax XML',
      'JSON XML',
    ],
    answer: 'JavaScript XML',
  },
  {
    id: 3,
    question: 'Which company created React?',
    options: ['Google', 'Apple', 'Meta', 'Microsoft'],
    answer: 'Meta',
  },
  {
    id: 4,
    question: 'What is the default port for Vite dev server?',
    options: ['3000', '5173', '8080', '4200'],
    answer: '5173',
  },
  {
    id: 5,
    question: 'Which state management library uses a "create" function?',
    options: ['Redux', 'MobX', 'Zustand', 'Recoil'],
    answer: 'Zustand',
  },
  {
    id: 6,
    question: 'What does the useRef hook return?',
    options: [
      'A state value',
      'A mutable ref object',
      'A callback',
      'A promise',
    ],
    answer: 'A mutable ref object',
  },
  {
    id: 7,
    question: 'How do you pass data from parent to child in React?',
    options: ['State', 'Props', 'Context', 'Refs'],
    answer: 'Props',
  },
  {
    id: 8,
    question: 'What method is used to update state in Zustand?',
    options: ['dispatch', 'setState', 'set', 'update'],
    answer: 'set',
  },
]

const useStore = create((set, get) => ({
  questions,
  currentIndex: 0,
  selectedAnswer: null,
  score: 0,
  status: 'start',
  timeLeft: 15,
  answers: [],

  startQuiz: () =>
    set({
      status: 'playing',
      currentIndex: 0,
      score: 0,
      selectedAnswer: null,
      timeLeft: 15,
      answers: [],
    }),

  selectAnswer: (answer) => {
    const { selectedAnswer } = get()
    if (selectedAnswer !== null) return
    set({ selectedAnswer: answer })
  },

  nextQuestion: () => {
    const { currentIndex, selectedAnswer, questions, score, answers } = get()
    const isCorrect = selectedAnswer === questions[currentIndex].answer

    const newScore = isCorrect ? score + 1 : score
    const isLastQuestion = currentIndex + 1 >= questions.length

    const newAnswers = [
      ...answers,
      {
        question: questions[currentIndex].question,
        selected: selectedAnswer,
        correct: questions[currentIndex].answer,
        isCorrect,
      },
    ]

    if (isLastQuestion) {
      set({
        status: 'finished',
        score: newScore,
        answers: newAnswers,
      })
    } else {
      set({
        currentIndex: currentIndex + 1,
        selectedAnswer: null,
        score: newScore,
        timeLeft: 15,
        answers: newAnswers,
      })
    }
  },

  timeOut: () => {
    const { currentIndex, questions, score, answers, selectedAnswer } = get()

    const currentQuestion = questions[currentIndex]
    const isCorrect = selectedAnswer === currentQuestion.answer

    const newScore = isCorrect ? score + 1 : score

    const newAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        selected: selectedAnswer,
        correct: currentQuestion.answer,
        isCorrect: isCorrect,
      },
    ]

    if (currentIndex + 1 >= questions.length) {
      set({ status: 'finished', answers: newAnswers, score: newScore })
    } else {
      set({
        currentIndex: currentIndex + 1,
        selectedAnswer: null,
        timeLeft: 15,
        answers: newAnswers,
        score: newScore,
      })
    }
  },

  tick: () => {
    const { timeLeft, status } = get()
    if (status !== 'playing') return
    if (timeLeft <= 1) {
      get().timeOut()
    } else {
      set({ timeLeft: timeLeft - 1 })
    }
  },

  restartQuiz: () =>
    set({
      status: 'start',
      currentIndex: 0,
      score: 0,
      selectedAnswer: null,
      timeLeft: 15,
      answers: [],
    }),
}))

export default useStore
