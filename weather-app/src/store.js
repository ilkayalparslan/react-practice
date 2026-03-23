import { create } from 'zustand'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const useStore = create((set, get) => ({
  // states
  city: '',
  weather: null,
  loading: false,
  error: null,

  // actions
  setCity: (city) => set({ city }),

  fetchWeather: async (cityName) => {
    const city = cityName || get().city
    if (city.trim() === '') return
    set({ loading: true, error: null, weather: null })

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      )
      if (!res.ok) throw new Error('City not found')
      const data = await res.json()

      set({
        weather: {
          temp: Math.round(data.main.temp),
          feelslike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          name: data.name,
          country: data.sys.country,
        },
        loading: false,
      })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },
}))

export default useStore
