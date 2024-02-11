import React from 'react'
import { useGeneralStore } from '../../../store/generalStore'
import HistoryCardOW from './HistoryCardOW'

const HistoryOW = () => {

  const history = useGeneralStore(state => state.history)
  return (
    <div className='w-full flex flex-col justify-between gap-10'>
      {history.map((item, index) => (
        <HistoryCardOW key={index} item={item} />
      ))}
    </div>
  )
}

export default HistoryOW