import { useState } from 'react'
import useStore from '../store'

function SearchBar() {
  const [input, setInput] = useState('')
  const fetchWeather = useStore((state) => state.fetchWeather)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    fetchWeather(input.trim())
    // setCity async değil, ama set hemen çalışır
    // fetchWeather get() ile güncel city'yi okur
    // Sorun: setCity henüz tamamlanmadan fetchWeathe çalışabilir
    // Çözüm: city'yi doğrudan geçelim
    setInput('')
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search-input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter City Name...'
      />
      <button className='search-btn' type='submit'>
        Search
      </button>
    </form>
  )
}
export default SearchBar
