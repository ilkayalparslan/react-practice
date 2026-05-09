import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist((set, get) => ({
    favorites: [],

    addFavorite: (movie) => {
      const exists = get().favorites.some((x) => x.id === movie.id);
      if (exists) return;

      const minimal = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
      };
      set((state) => ({ favorites: [...state.favorites, minimal] }));
    },

    removeFavorite: (id) => {
      set((state) => ({
        favorites: state.favorites.filter((x) => x.id !== id),
      }));
    },

    isFavorite: (id) => {
      return get().favorites.some((x) => x.id === id);
    },

    clearFavorites: () => set({ favorites: [] }),
  })),
  {
    name: 'movie-discovery-favorites',
  },
);

export default useFavoritesStore;
