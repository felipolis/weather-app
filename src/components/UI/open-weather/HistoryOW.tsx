import { useGeneralStore } from '../../../store/generalStore';
import HistoryCardOW from './HistoryCardOW';

/**
 * HistoryOW - Um componente para exibir o histórico das buscas de clima
 * utilizando o OpenWeather como fonte dos dados.
 *
 * Este componente acessa o estado global para obter o histórico de buscas
 * e renderiza um `HistoryCardOW` para cada entrada no histórico.
 */
const HistoryOW = () => {
  // Acesso ao histórico armazenado no estado global através do Zustand.
  const history = useGeneralStore((state) => state.history);

  return (
    <div className='w-full flex flex-col justify-between gap-10'>
      {history.map((item, index) => (
        <HistoryCardOW key={index} item={item} />
      ))}
    </div>
  );
};

export default HistoryOW;
