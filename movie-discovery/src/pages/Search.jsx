import { useState } from 'react';
import '../css/Search.css';
import '../css/Home.css';

const fakeResults = [
  {
    id: 1,
    title: 'Batman Begins',
    year: 2005,
    rating: 8.2,
    poster: 'https://image.tmdb.org/t/p/w500/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    rating: 9.0,
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight Rises',
    year: 2012,
    rating: 8.4,
    poster: 'https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg',
  },
];

const fakeGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
];

function Search() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  return (
    <div className='search-page'>
      <section className='search-hero'>
        <h1 className='search-title'>Find a film</h1>
        <p className='search-subtitle'> Search by title, filter by genre.</p>
      </section>

      <section className='search-controls'>
        <div className='search-input-wrap'>
          <span className='search-icon'>🔍</span>
          <input
            type='text'
            className='search-input'
            placeholder='Search for a film'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select
          value={genre}
          className='search-select'
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value=''>All genres</option>
          {fakeGenres.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </section>

      <section className='search-results'>
        {query.length === 0 && (
          <div className='state-message'>Start typing to search.</div>
        )}
        {query.length > 0 && (
          <div className='movie-grid'>
            {fakeResults.map((x) => (
              <article key={x.id} className='movie-card'>
                <div className='movie-poster-wrap'>
                  <img src={x.poster} alt={x.title} className='movie-poster' />
                  <span className='movie-rating'>★ {x.rating}</span>
                </div>
                <h3 className='movie-title'>{x.title}</h3>
                <p className='movie-year'>{x.year}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
export default Search;
