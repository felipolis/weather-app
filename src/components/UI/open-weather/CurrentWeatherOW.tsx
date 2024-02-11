import { useEffect } from 'react';
import { CiCalendar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClipLoader from 'react-spinners/ClipLoader';
import { useOpenWeatherGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import { useGeneralStore } from '../../../store/generalStore';

/**
 * Componente CurrentWeatherOW exibe as condições climáticas atuais usando a API OpenWeather.
 * Utiliza a latitude e longitude do estado global para buscar os dados.
 */
const CurrentWeatherOW = () => {
  // Acesso à latitude e longitude através do estado global gerenciado por Zustand.
  const latitude = useGeneralStore(state => state.latitude);
  const longitude = useGeneralStore(state => state.longitude);

  // Hook personalizado para buscar os dados meteorológicos com base na latitude e longitude.
  const { data, isLoading, refetch } = useOpenWeatherGetCurrentWeather(latitude, longitude);

  // Efeito para refazer a busca sempre que as coordenadas mudam.
  useEffect(() => {
    refetch();
  }, [latitude, longitude, refetch]);

  // Renderiza um spinner enquanto os dados estão sendo carregados.
  if (isLoading) return <ClipLoader color="#36d7b7" />;
  
  // Destruturação dos dados recebidos da API.
  const { main, weather, dt, name, sys } = data?.data || {};

  // Tratamento e formatação dos dados para exibição.
  const temperature = Math.round(main?.temp) ?? '--';
  const iconSrc = weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png` : '';
  const weatherMain = weather?.[0]?.main ?? '';
  const formattedDate = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'short',
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
