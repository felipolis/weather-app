import { useGeneralStore } from '../../store/generalStore'
import CurrentWeatherOM from './open-meteo/CurrentWeatherOM'
import CurrentWeatherOW from './open-weather/CurrentWeatherOW'

const CurrentWeather = () => {

  const selectedApi = useGeneralStore(state => state.selectedApi)

  return (
    <div className='bg-white-alpha-4 rounded-28'>
      {selectedApi === "OPEN_WEATHER" ? (
        <CurrentWeatherOW />
      ) : (
        <CurrentWeatherOM />
      )}
    </div>
  )
}

export default CurrentWeather