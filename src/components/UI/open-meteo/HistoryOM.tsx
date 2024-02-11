import HistoryCardOM from './HistoryCardOM'
import { useGeneralStore } from '../../../store/generalStore'

const HistoryOM = () => {

  const history = useGeneralStore(state => state.history)

  return (
    <div className='w-full flex flex-col justify-between gap-10'>
      {history.map((item, index) => (
        <HistoryCardOM key={index} item={item} />
      ))}
    </div>
  )
}

export default HistoryOM