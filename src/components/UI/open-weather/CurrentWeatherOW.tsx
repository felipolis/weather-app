import React from 'react';
import { useMemo } from 'react';
import { useOpenWeatherGetWeatherForecast } from '../../../lib/react-query/queriesAndMutations';
import { CiCalendar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

// Hook personalizado para obter parâmetros de URL
const useQueryParams = (param) => useMemo(() => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get(param));
}, [param]);

const CurrentWeatherOW = () => {
  const latitude = useQueryParams('lat');
  const longitude = useQueryParams('lon');

  const { data, isLoading } = useOpenWeatherGetWeatherForecast(latitude, longitude);

  if (isLoading) return <div>Loading...</div>;

  const { main, weather, dt, name, sys } = data?.data || {};
  const temperature = main?.temp?.toString().slice(0, 2) ?? '--'; // Melhor manipulação de undefined
  const iconSrc = weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png` : '';
  const weatherMain = weather?.[0]?.main ?? '';
  const formattedDate = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });
  const location = `${name}, ${sys?.country}`;

  return (
    <div className='p-10'>
      <div className='text-3xl'>Now</div>

      <div className='flex justify-between w-full items-center'>
        <div className='text-[8rem]'>{temperature}°C</div>
        <div className='w-[13rem]'>
          <img src={iconSrc} alt="Weather icon" className='w-full' />
        </div>
      </div>

      <div className='text-on-surface-variant-2 text-[1.3rem]'>
        {weatherMain}
      </div>

      <hr className='w-full h-[0.3rem] bg-white-alpha-4 my-3 border-none' />

      <div className='flex flex-col justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <CiCalendar className='text-[2rem] text-on-surface-variant-2' />
          <div className='text-[1.3rem]'>
            {formattedDate}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt className='text-[2rem] text-on-surface-variant-2' />
          <div className='text-[1.3rem]'>
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherOW;