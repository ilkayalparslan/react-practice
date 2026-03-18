import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'

function WeatherApp() {
  return (
    <div className='weather-container'>
      <h1 className='weather-title'>Weather App</h1>
      <SearchBar />
      <WeatherCard />
    </div>
  )
}
export default WeatherApp
