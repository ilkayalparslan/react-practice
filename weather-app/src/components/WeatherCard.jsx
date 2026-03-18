import useStore from '../store'

function WeatherCard() {
  const weather = useStore((state) => state.weather)
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)

  if (loading) return <p className='weather-status loading'>Searching...</p>
  if (error) return <p className='weather-status error'>{error}</p>
  if (!weather)
    return (
      <p className='weather-status placeholder'>
        Search for a city to see weather
      </p>
    )

  return (
    <div className='weather-card'>
      <div className='weather-main'>
        <img
          className='weather-icon'
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
        <span className='weather-temp'>{weather.temp}</span>
      </div>
      <p className='weather-description'>{weather.description}</p>
      <h2 className='weather-city'>
        {weather.name} , {weather.country}
      </h2>
      <div className='weather-details'>
        <div className='weather-detail'>
          <span className='detail-label'>Feels Like</span>
          <span className='detail-value'>{weather.feelslike}°C</span>
        </div>
        <div className='weather-detail'>
          <span className='detail-label'>Humidity</span>
          <span className='detail-value'>{weather.humidity}%</span>
        </div>
        <div className='weather-detail'>
          <span className='detail-label'>Wind</span>
          <span className='detail-value'>{weather.wind} m/s</span>
        </div>
      </div>
    </div>
  )
}
export default WeatherCard
