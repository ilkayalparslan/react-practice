import { create } from 'zustand';
import { fetchMovieDetails, fetchTrending } from '../api/tmdb';

const useMoviesStore = create((set, get) => ({
  trending: [],
  status: 'idle',
  error: null,
  details: {},

  loadTrending: async () => {
    set({ status: 'loading', error: null });
    try {
      const data = await fetchTrending();
      set({ trending: data.results, status: 'success' });
    } catch (err) {
      set({ status: 'error', error: err.message });
    }
  },

  loadMovieDetail: async (id) => {
    const existing = get().details[id];
    if (existing?.status === 'success' || existing?.status === 'loading') {
      return;
    }

    set((state) => ({
      details: {
        ...state.details,
        [id]: { date: null, status: 'loading', error: null },
      },
    }));
    try {
      const data = await fetchMovieDetails(id);
      set((state) => ({
        details: {
          ...state.details,
          [id]: { data, status: 'success', error: null },
        },
      }));
    } catch (err) {
      set((state) => ({
        details: {
          ...state.details,
          [id]: { data: null, status: 'error', error: err.message },
        },
      }));
    }
  },
}));

export default useMoviesStore;
