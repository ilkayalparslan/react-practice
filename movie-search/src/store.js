import { create } from 'zustand';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const useStore = create((set, get) => ({
  movies: [],
  query: '',
  page: 1,
  totalPages: 0,
  loading: false,
  error: null,
  mode: 'trending', // 'trending' | 'search'

  setQuery: (query) => set({ query }),

  fetchTrending: async (page = 1) => {
    set({ loading: true, error: null, mode: 'trending', page });
    try {
      const res = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`,
      );

      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();

      set({
        movies: data.results,
        totalPages: Math.min(data.total_pages, 20),
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  searchMovies: async (query, page = 1) => {
    if (query.trim() === '') {
      get().fetchTrending();
      return;
    }

    set({ loading: true, error: null, mode: 'search', query, page });

    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
      );
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();

      set({
        movies: data.results,
        totalPages: Math.min(data.total_pages, 20),
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  goToPage: (page) => {
    const { mode, query } = get();

    if (mode === 'search') {
      get().searchMovies(query, page);
    } else {
      get().fetchTrending(page);
    }
  },
}));

export default useStore;
