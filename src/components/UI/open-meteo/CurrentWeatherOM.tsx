import React, { useEffect } from 'react'
import { useOpenMeteoGetWeatherForecast } from '../../../lib/react-query/queriesAndMutations';
import { useGeneralStore } from '../../../store/generalStore';
import { CiCalendar } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CurrentWeatherOM = () => {
  const latitude = useGeneralStore(state => state.latitude);
  const longitude = useGeneralStore(state => state.longitude);

  const { data, isLoading, refetch } = useOpenMeteoGetWeatherForecast(latitude, longitude);

  useEffect(() => {
    refetch();
  }, [latitude, longitude, refetch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='p-10'>
      <div className='text-3xl'>Now</div>

      <div className='flex justify-between w-full items-center'>
        <div className='text-[8rem]'>{data?.data.current.temperature_2m}°C</div>
        <div className='w-[13rem]'>
          <img src='01n' alt="Weather icon" className='w-full' />
        </div>
      </div>

      <div className='text-on-surface-variant-2 text-[1.3rem]'>
        'nada'
      </div>

      <hr className='w-full h-[0.3rem] bg-white-alpha-4 my-3 border-none' />

      <div className='flex flex-col justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <CiCalendar className='text-[2rem] text-on-surface-variant-2' />
          <div className='text-[1.3rem]'>
            {new Date(data?.data.current.date).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
            })}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt className='text-[2rem] text-on-surface-variant-2' />
          <div className='text-[1.3rem]'>
            'location'
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherOM