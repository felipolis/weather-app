import HistoryOM from '../../components/UI/open-meteo/HistoryOM'
import HistoryOW from '../../components/UI/open-weather/HistoryOW'
import { useGeneralStore } from '../../store/generalStore'

const History = () => {

  const selectedApi = useGeneralStore(state => state.selectedApi)

  return (
    <div className='w-full pt-10 pb-10'>
      {selectedApi === "OPEN_WEATHER" ? (
        <HistoryOW />
      ) : (
        <HistoryOM />
      )}
    </div>
  )
}

export default History