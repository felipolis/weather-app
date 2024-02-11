import { useNavigate } from 'react-router-dom'

const HistoryBtn = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button
        className='bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        onClick={() => navigate('/history')}
      >
        History
      </button>
    </div>
  )
}

export default HistoryBtn