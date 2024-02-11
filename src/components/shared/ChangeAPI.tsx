import { useGeneralStore } from '../../store/generalStore'

const ChangeAPI = () => {

  const changeSelectedApi = useGeneralStore((state) => state.changeSelectedApi)
  const selectedApi = useGeneralStore((state) => state.selectedApi)

  return (
    <div className='mt-10'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => changeSelectedApi()}
      >
        {selectedApi === 'OPEN_WEATHER' ? 'Change to OpenMeteo' : 'Change to OpenWeather'}
      </button>
    </div>
  )
}

export default ChangeAPI