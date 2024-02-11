import HistoryCardOM from './HistoryCardOM';
import { useGeneralStore } from '../../../store/generalStore';

/**
 * HistoryOM - Componente para renderizar um histórico de buscas meteorológicas.
 * Utiliza a store geral para acessar o estado do histórico e renderiza um componente
 * `HistoryCardOM` para cada item no histórico.
 */
const HistoryOM = () => {
  // Acessa o histórico de buscas da store geral.
  const history = useGeneralStore((state) => state.history);

  return (
    <div className='w-full flex flex-col justify-between gap-10'>
      {history.map((item, index) => (
        <HistoryCardOM key={index} item={item} />
      ))}
    </div>
  );
};

export default HistoryOM;
