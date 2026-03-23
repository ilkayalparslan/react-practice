import { create } from 'zustand'

const slides = [
  {
    id: 1,
    title: 'Mountain Lake',
    subtitle: 'Explore the wilderness',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    id: 2,
    title: 'Ocean Breeze',
    subtitle: 'Feel the waves',
    bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
  },
  {
    id: 3,
    title: 'Forest Trail',
    subtitle: 'Walk among giants',
    bg: 'linear-gradient(135deg, #22c55e, #16a34a)',
  },
  {
    id: 4,
    title: 'Desert Sunset',
    subtitle: 'Chase the horizon',
    bg: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
  {
    id: 5,
    title: 'Northern Lights',
    subtitle: 'Dance of colors',
    bg: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
  },
]

const useStore = create((set, get) => ({
  slides,
  currentIndex: 0,
  isDragging: false,
  startX: 0,
  currentTranslate: 0,
  prevTranslate: 0,

  setCurrentIndex: (index) => {
    const { slides } = get()
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    set({
      currentIndex: clamped,
      currentTranslate: -clamped * window.innerWidth,
      prevTranslate: -clamped * window.innerWidth,
    })
  },

  dragStart: (clientX) =>
    set({
      isDragging: true,
      startX: clientX,
    }),

  dragMove: (clientX) => {
    const { isDragging, startX, prevTranslate } = get()
    if (!isDragging) return
    const diff = clientX - startX
    set({ currentTranslate: prevTranslate + diff })
  },

  dragEnd: () => {
    const {
      isDragging,
      currentTranslate,
      prevTranslate,
      currentIndex,
      slides,
    } = get()
    if (!isDragging) return

    const moved = currentTranslate - prevTranslate
    const threshold = window.innerWidth * 0.2

    let newIndex = currentIndex
    if (moved < -threshold && currentIndex < slides.length - 1) {
      newIndex = currentIndex + 1
    } else if (moved > threshold && currentIndex > 0) {
      newIndex = currentIndex - 1
    }

    set({
      isDragging: false,
      currentIndex: newIndex,
      currentTranslate: -newIndex * window.innerWidth,
      prevTranslate: -newIndex * window.innerWidth,
    })
  },
}))

export default useStore
