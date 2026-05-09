import { create } from 'zustand';
import {
  fetchMovieDetails,
  fetchTrending,
  searchMovies,
  fetchGenres,
  discoverMovies,
} from '../api/tmdb';

const useMoviesStore = create((set, get) => ({
  trending: [],
  status: 'idle',
  error: null,
  details: {},
  searchResults: [],
  searchStatus: 'idle',
  searchError: null,
  genres: [],

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
        [id]: { data: null, status: 'loading', error: null },
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

  loadSearch: async (query, filters = {}) => {
    if (!query && !filters.with_genres) {
      set({ searchResults: [], searchStatus: 'idle', searchError: null });
      return;
    }

    set({ searchStatus: 'loading', searchError: null });

    try {
      let data;
      if (query) {
        data = await searchMovies(query);
        if (filters.with_genres) {
          const genreId = Number(filters.with_genres);
          data = {
            ...data,
            results: data.results.filter((m) => m.genre_ids?.includes(genreId)),
          };
        }
      } else {
        data = await discoverMovies(filters);
      }
      set({ searchResults: data.results, searchStatus: 'success' });
    } catch (err) {
      set({ searchStatus: 'error', searchError: err.message });
    }
  },

  loadGenres: async () => {
    if (get().genres.length > 0) return;
    try {
      const data = await fetchGenres();
      set({ genres: data.genres });
    } catch (err) {
      console.warn('Could not load genres:', err.message);
    }
  },
}));

export default useMoviesStore;
