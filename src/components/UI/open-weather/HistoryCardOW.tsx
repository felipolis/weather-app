import React from 'react';
import { useOpenWeatherGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import ClipLoader from 'react-spinners/ClipLoader';

// Define os tipos das propriedades esperadas pelo componente para maior segurança e documentação.
interface HistoryCardOWProps {
  item: [string, number, number]; // Define que item é uma tupla com uma string e dois números.
}

/**
 * HistoryCardOW - Componente para exibir o histórico de busca de clima utilizando a API do OpenWeather.
 * 
 * @param {HistoryCardOWProps} props - Propriedades recebidas pelo componente, incluindo 'item'.
 * 'item' é uma tupla contendo o termo da busca (string), latitude (number) e longitude (number).
 */
const HistoryCardOW: React.FC<HistoryCardOWProps> = ({ item }) => {
  const [searchTerm, latitude, longitude] = item; // Desestruturação para melhor legibilidade.

  const { data, isLoading } = useOpenWeatherGetCurrentWeather(latitude, longitude);

  
  // Prepara os dados recebidos para exibição.
  const weatherMain = data?.data?.weather?.[0]?.main ?? 'N/A';
  const weatherIcon = data?.data?.weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${data?.data?.weather?.[0]?.icon}@2x.png` : '';
  const temperature = data?.data?.main?.temp ?? 'N/A';
  
  // Exibe um loader enquanto os dados estão sendo carregados.
  if (isLoading) {
    return (
      <div className='mx-auto'>
        <ClipLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <div className='bg-white-alpha-4 w-[80%] mx-auto rounded-16 flex flex-col justify-between items-center p-10 gap-5'>
      <div className='text-on-surface-variant-2 text-body-3'>
        Searched by: {searchTerm}
      </div>
      <hr className='w-full border-1 border-white-alpha-4' />
      <div className='flex flex-col justify-between gap-3 items-center'>
        <div className='text-title-1'>
          Current Weather
        </div>
        <div className='text-title-2'>
          {weatherMain}
        </div>
        {weatherIcon && <img src={weatherIcon} alt="Weather icon" />}
        <div className='text-title-1'>
          {temperature}°C
        </div>
      </div>
    </div>
  );
};

export default HistoryCardOW;
