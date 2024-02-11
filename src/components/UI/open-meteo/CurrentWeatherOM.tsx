import React, { useEffect, useMemo, useState } from 'react'
import { useGeneralStore } from '../../../store/generalStore';
import { useOpenMeteoGetCurrentWeather, useOpenMeteoGetLocationCoordinates } from '../../../lib/react-query/queriesAndMutations';
import { CiCalendar } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';

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

  const formattedDate = new Date(currentWeatherData?.data.current.time * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  const weatherStatus = useMemo(() => {
    const weatherCode = currentWeatherData?.data?.current.weather_code;
    
    if (weatherCode === 0) {
      return 'Clear sky';
    } else if (weatherCode === 1) {
      return 'Mainly clear';
    } else if (weatherCode === 2) {
      return 'Partly cloudy';
    } else if (weatherCode === 3) {
      return 'Overcast';
    } else if (weatherCode === 45) {
      return 'Fog ';
    } else if (weatherCode === 48) {
      return 'Depositing rime fog';
    } else if (weatherCode === 51) {
      return 'Drizzle: Light';
    } else if (weatherCode === 53) {
      return 'Drizzle: Moderate';
    } else if (weatherCode === 55) {
      return 'Drizzle: Dense intensity';
    } else if (weatherCode === 56) {
      return 'Freezing drizzle: Light';
    } else if (weatherCode === 57) {
      return 'Freezing drizzle: Dense intensity';
    } else if (weatherCode === 61) {
      return 'Rain: Sligth';
    } else if (weatherCode === 63) {
      return 'Rain: Moderate';
    } else if (weatherCode === 65) {
      return 'Rain: Heavy intensity';
    } else if (weatherCode === 66) {
      return 'Freezing rain: Light';
    } else if (weatherCode === 67) {
      return 'Freezing rain: Heavy intensity';
    } else if (weatherCode === 71) {
      return 'Snow fall: Slight';
    } else if (weatherCode === 73) {
      return 'Snow fall: Moderate';
    } else if (weatherCode === 75) {
      return 'Snow fall: Heavy Intensity';
    } else if (weatherCode === 77) {
      return 'Snow grains';
    } else if (weatherCode === 80) {
      return 'Rain shower: Slight';
    } else if (weatherCode === 81) {
      return 'Rain shower: Moderate';
    } else if (weatherCode === 82) {
      return 'Rain shower: Violent';
    } else if (weatherCode === 85) {
      return 'Snow showers: Slight';
    } else if (weatherCode === 86) {
      return 'Snow showers: Heavy';
    } else if (weatherCode === 95) {
      return 'Thunderstorm';
    } else if (weatherCode === 96) {
      return 'Thunderstorm: Sligth hail';
    } else if (weatherCode === 99) {
      return 'Thunderstorm: Heavy hail';
    } else {
      return 'Unknown';
    }
  }, [currentWeatherData?.data]);

  return (
    <div className='p-10'>
      <div className='text-3xl'>Now</div>

      <div className='flex justify-between w-full items-center'>
        <div className='text-[8rem]'>
          {Math.round(currentWeatherData?.data.current.temperature_2m) ?? '--'}°C
        </div>
        <div className='w-[8rem] ml-10'>
          <img src={`images/weather_icons/${currentWeatherData?.data.current.is_day ? 'd' : 'n'}${currentWeatherData?.data.current.weather_code}.png`} alt="Weather icon" className='w-full' />
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