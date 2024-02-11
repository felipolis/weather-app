import { useGeneralStore } from '../../store/generalStore';
import CurrentWeatherOM from './open-meteo/CurrentWeatherOM';
import CurrentWeatherOW from './open-weather/CurrentWeatherOW';

// Constantes para facilitar manutenção
const API_OPEN_WEATHER = 'OPEN_WEATHER';

/**
 * Componente CurrentWeather
 * Renderiza o componente de clima atual baseado na API selecionada pelo usuário.
 */
const CurrentWeather = () => {
  // Acessando o estado selecionado da API usando desestruturação para melhor legibilidade
  const { selectedApi } = useGeneralStore(state => ({ selectedApi: state.selectedApi }));

  return (
    <div className='bg-white-alpha-4 rounded-28'>
      {selectedApi === API_OPEN_WEATHER ? (
        // Renderiza CurrentWeatherOW se a API selecionada é Open Weather
        <CurrentWeatherOW />
      ) : (
        // Caso contrário, renderiza CurrentWeatherOM (Open Meteo)
        <CurrentWeatherOM />
      )}
    </div>
  );
};

export default CurrentWeather;
