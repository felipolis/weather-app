import React from 'react'
import { useOpenWeatherGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations'
import ClipLoader from 'react-spinners/ClipLoader'

interface HistoryCardOWProps {
  item: Array<string | number>
}

const HistoryCardOW: React.FC<HistoryCardOWProps> = ({ item }) => {

  const {
    data,
    isLoading,
    refetch: refetchOpenWeatherCurrentWeather,
  } = useOpenWeatherGetCurrentWeather(item[1] as number, item[2] as number)

  if (isLoading) return (
    <div className='mx-auto'>
      <ClipLoader color="#36d7b7" />
    </div>
  )

  return (
    <div className='bg-white-alpha-4 w-[80%] mx-auto rounded-16 flex flex-col justify-between items-center p-10 gap-5'>
      <div
        className='text-on-surface-variant-2 text-body-3'
      >
        Searched by: {item[0]}
      </div>
      <hr 
        className='w-full border-1 border-white-alpha-4'
      />
      <div className='flex flex-col justify-between gap-3 items-center'>
        <div className='text-title-1'>
          Current Weather
        </div>
        <div className='text-title-2'>
          {data?.data?.weather?.[0].main}
        </div>
        <img src={`http://openweathermap.org/img/wn/${data?.data?.weather?.[0].icon}@2x.png`} alt="" />
        <div className='text-title-1'>
          {data?.data?.main?.temp}°C
        </div>
      </div>
    </div>
  )
}

export default HistoryCardOW