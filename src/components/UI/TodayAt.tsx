import React from 'react'
import { useGeneralStore } from '../../store/generalStore'
import TodayAtOM from './open-meteo/TodayAtOM'
import TodayAtOW from './open-weather/TodayAtOW'

const TodayAt = () => {

  const selectedApi = useGeneralStore(state => state.selectedApi)

  return (
    <div className='flex justify-center items-center'>
      {selectedApi === "OPEN_WEATHER" ? (
        <TodayAtOW />
      ) : (
        <TodayAtOM />
      )}
    </div>
  )
}

export default TodayAt