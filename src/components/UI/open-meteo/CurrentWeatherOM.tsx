import { useEffect, useMemo } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';
import { useOpenMeteoGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import { getWeatherStatus } from '../../../lib/utils';
import { useGeneralStore } from '../../../store/generalStore';

/**
 * Componente CurrentWeatherOM - Exibe as condições meteorológicas atuais usando a API OpenMeteo.
 */
const CurrentWeatherOM = () => {
  // Acesso às coordenadas e à última pesquisa realizada do estado global.
  const { latitude, longitude, lastSearchedQuery } = useGeneralStore(state => ({
    latitude: state.latitude,
    longitude: state.longitude,
    lastSearchedQuery: state.lastSearchedQuery,
  }));

  // Dados meteorológicos atuais, estado de carregamento e função para refetching.
  const {
    data: currentWeatherData,
    isLoading: isLoadingCurrentWeather,
    refetch: refetchCurrentWeather,
  } = useOpenMeteoGetCurrentWeather(latitude, longitude);

  // Refetch dos dados meteorológicos atuais quando as coordenadas mudam.
  useEffect(() => {
    refetchCurrentWeather();
  }, [latitude, longitude, refetchCurrentWeather]);

  // Formatação da data atual.
  const formattedDate = useMemo(() => {
    const timestamp = currentWeatherData?.data?.current?.time;
    return timestamp ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    }) : '--';
  }, [currentWeatherData]);

  // Determinação do status meteorológico atual com base no código de clima.
  const weatherStatus = useMemo(() => {
    const weatherCode = currentWeatherData?.data?.current?.weather_code;
    return getWeatherStatus(weatherCode);
  }, [currentWeatherData?.data?.current?.weather_code]);

  // Exibição do loader durante o carregamento dos dados.
  if (isLoadingCurrentWeather) return <ClipLoader color="#36d7b7" />;

  return (
    <div className='p-10'>
      <div className='text-3xl'>Now</div>
      <div className='flex justify-between w-full items-center'>
        <div className='text-[8rem]'>
          {Math.round(currentWeatherData?.data?.current?.temperature_2m) ?? '--'}°C
        </div>
        <div className='w-[8rem] ml-10'>
          <img
            src={`images/weather_icons/${currentWeatherData?.data?.current?.is_day ? 'd' : 'n'}${currentWeatherData?.data?.current?.weather_code}.png`}
            alt="Weather icon"
            className='w-full'
          />
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
  );
};

export default CurrentWeatherOM;
