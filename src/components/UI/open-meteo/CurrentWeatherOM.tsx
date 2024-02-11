import { useEffect, useMemo } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useOpenMeteoGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import { getWeatherStatus } from '../../../lib/utils';
import { useGeneralStore } from '../../../store/generalStore';
import ClipLoader from 'react-spinners/ClipLoader';

const CurrentWeatherOM = () => {

  const latitude = useGeneralStore(state => state.latitude);
  const longitude = useGeneralStore(state => state.longitude);

  const lastSearchedQuery = useGeneralStore(state => state.lastSearchedQuery);

  const {
    data: currentWeatherData,
    isLoading: isLoadingCurrentWeather,
    refetch: refetchCurrentWeather,
  } = useOpenMeteoGetCurrentWeather(latitude, longitude);

  useEffect(() => {
    refetchCurrentWeather();
  }, [latitude, longitude, refetchCurrentWeather]);

  const formattedDate = new Date(currentWeatherData?.data?.current?.time * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  const weatherStatus = useMemo(() => {
    const weatherCode = currentWeatherData?.data?.current?.weather_code;
    getWeatherStatus(weatherCode);
  }, [currentWeatherData?.data]);

  if(isLoadingCurrentWeather) return (
    <ClipLoader color="#36d7b7" />
  )

  return (
    <div className='p-10'>
      <div className='text-3xl'>Now</div>

      <div className='flex justify-between w-full items-center'>
        <div className='text-[8rem]'>
          {Math.round(currentWeatherData?.data?.current?.temperature_2m) ?? '--'}°C
        </div>
        <div className='w-[8rem] ml-10'>
          <img src={`images/weather_icons/${currentWeatherData?.data?.current?.is_day ? 'd' : 'n'}${currentWeatherData?.data?.current?.weather_code}.png`} alt="Weather icon" className='w-full' />
        </div>
      </div>

      <div className='text-on-surface-variant-2 text-[1.3rem]'>
        {weatherStatus}
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
            {lastSearchedQuery}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherOM