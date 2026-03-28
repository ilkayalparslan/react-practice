import { create } from 'zustand';

const useStore = create(() => ({
  projects: [
    {
      id: 'todo-list',
      title: 'Todo List',
      description: 'CRUD operations with array state management and filtering.',
      concepts: ['CRUD', 'Array state', 'Filter'],
      emoji: '✅',
      color: '#e94560',
    },
    {
      id: 'currency-converter',
      title: 'Currency Converter',
      description: 'Real-time currency conversion using exchange rate API.',
      concepts: ['API fetch', 'Async actions', 'Loading states'],
      emoji: '💱',
      color: '#38bdf8',
    },
    {
      id: 'shopping-cart',
      title: 'Shopping Cart',
      description: 'E-commerce cart with quantity management and totals.',
      concepts: ['Complex state', 'Computed values', 'Normalization'],
      emoji: '🛒',
      color: '#4ade80',
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      description: 'City weather search with OpenWeatherMap API.',
      concepts: ['API', 'Conditional rendering', 'Error handling'],
      emoji: '☀️',
      color: '#f59e0b',
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Timed quiz with scoring and result review.',
      concepts: ['State machine', 'Timer', 'Multi-step UI'],
      emoji: '🧠',
      color: '#a78bfa',
    },
    {
      id: 'movie-search',
      title: 'Movie Search',
      description: 'TMDB movie search with pagination and debounce.',
      concepts: ['Pagination', 'Debounce', 'API'],
      emoji: '🎬',
      color: '#f5c518',
    },
    {
      id: 'pomodoro-timer',
      title: 'Pomodoro Timer',
      description: 'Focus timer with breaks and session tracking.',
      concepts: ['SVG progress', 'Intervals', 'Notifications'],
      emoji: '⏱️',
      color: '#ef4444',
    },
    {
      id: 'notes-app',
      title: 'Notes App',
      description: 'Markdown notes with tags and localStorage.',
      concepts: ['Markdown', 'localStorage', 'Tags'],
      emoji: '📝',
      color: '#f97316',
    },
  ],
}));

export default useStore;
