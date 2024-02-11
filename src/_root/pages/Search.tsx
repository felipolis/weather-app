import CurrentWeather from '../../components/UI/CurrentWeather'
import TodayAt from '../../components/UI/TodayAt'

const Search = () => {

  return (
    <div className='w-full flex flex-col justify-between items-center gap-16 mt-16'>
      {/* CURRENT WEATHER */}
      <CurrentWeather />
        
      {/* FORECAST */}
      <TodayAt />

    </div>
  )
}

export default Search