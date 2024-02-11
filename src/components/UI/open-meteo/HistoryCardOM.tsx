import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useOpenMeteoGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import { getWeatherStatus } from '../../../lib/utils';

// Definição de tipos para props para melhorar a tipagem e a documentação.
interface HistoryCardOMProps {
  item: [string, number, number]; // Assume que item é uma tupla contendo uma string seguida de dois números.
}

/**
 * Componente HistoryCardOM exibe informações do histórico de pesquisa de clima baseado nas coordenadas.
 * @param {HistoryCardOMProps} props - Espera um item com os dados de pesquisa: [pesquisa, latitude, longitude].
 */
const HistoryCardOM: React.FC<HistoryCardOMProps> = ({ item }) => {
  // Desestruturação de item para melhor clareza e evitar repetidos acessos ao índice.
  const [searchedBy, latitude, longitude] = item;

  // Hook personalizado para buscar os dados atuais do clima usando Open Meteo.
  const { data, isLoading } = useOpenMeteoGetCurrentWeather(latitude, longitude);

  
  // Desestruturação dos dados para facilitar o acesso e melhorar a legibilidade.
  const { current } = data?.data || {};
  const weatherStatus = getWeatherStatus(current?.weather_code);
  const weatherIconPath = `images/weather_icons/${current?.is_day ? 'd' : 'n'}${current?.weather_code}.png`;
  
  // Exibe o loader enquanto os dados estão sendo carregados.
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
        Searched by: {searchedBy}
      </div>
      <hr className='w-full border-1 border-white-alpha-4' />
      <div className='flex flex-col justify-between gap-3 items-center'>
        <div className='text-title-1'>Current Weather</div>
        <div className='text-title-2'>{weatherStatus}</div>
        <img src={weatherIconPath} alt="Weather icon" />
        <div className='text-title-1'>{current?.temperature_2m}°C</div>
      </div>
    </div>
  );
};

export default HistoryCardOM;
