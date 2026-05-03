const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

async function tmdbFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', 'en-US');

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  return response.json();
}

export function fetchTrending() {
  return tmdbFetch('/trending/movie/week');
}

export function fetchMovieDetails(id) {
  return tmdbFetch(`/movie/${id}`);
}

export function searchMovies(query, params = {}) {
  return tmdbFetch('/search/movie', { query, ...params });
}

export function fetchGenres() {
  return tmdbFetch('/genre/movie/list');
}
