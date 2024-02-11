import { useGeneralStore } from '../../store/generalStore';
import TodayAtOM from './open-meteo/TodayAtOM';
import TodayAtOW from './open-weather/TodayAtOW';

// Definindo constantes para evitar 'magic strings'
const OPEN_WEATHER = 'OPEN_WEATHER';

/**
 * Componente TodayAt
 * Exibe informações meteorológicas atuais com base na API selecionada pelo usuário.
 */
const TodayAt = () => {
  // Utilizando desestruturação para obter 'selectedApi' do estado
  const { selectedApi } = useGeneralStore(state => ({ selectedApi: state.selectedApi }));

  return (
    <div className='flex justify-center items-center'>
      {selectedApi === OPEN_WEATHER ? (
        // Renderiza o componente TodayAtOW se a API selecionada for OpenWeather
        <TodayAtOW />
      ) : (
        // Caso contrário, renderiza o componente TodayAtOM
        <TodayAtOM />
      )}
    </div>
  );
};

export default TodayAt;
