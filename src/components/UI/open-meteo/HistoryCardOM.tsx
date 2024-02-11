import React from 'react'
import { useOpenMeteoGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations'
import { getWeatherStatus } from '../../../lib/utils'
import ClipLoader from 'react-spinners/ClipLoader'

interface HistoryCardOMProps {
  item: Array<string | number>
}

const HistoryCardOM: React.FC<HistoryCardOMProps> = ({ item }) => {

  const {
    data,
    isLoading,
    refetch: refetchOpenWeatherCurrentWeather,
  } = useOpenMeteoGetCurrentWeather(item[1] as number, item[2] as number)

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
          {getWeatherStatus(data?.data?.current?.weather_code)}
        </div>
        <img src={`images/weather_icons/${data?.data?.current?.is_day ? 'd' : 'n'}${data?.data?.current?.weather_code}.png`} alt="" />
        <div className='text-title-1'>
          {data?.data?.current?.temperature_2m}°C
        </div>
      </div>
    </div>
  )
}

export default HistoryCardOM