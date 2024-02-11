import { useNavigate } from 'react-router-dom';

/**
 * Componente HistoryBtn
 *
 * Este componente renderiza um botão que, quando clicado, redireciona o usuário para a página de histórico.
 * Utiliza o hook `useNavigate` do `react-router-dom` para o redirecionamento.
 */
const HistoryButton = () => {
  // Hook para navegação programática
  const navigate = useNavigate();

  // Função de clique para navegar para a página de histórico
  const handleClick = () => {
    navigate('/history');
  };

  return (
    <div>
      <button
        className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        onClick={handleClick}
      >
        History
      </button>
    </div>
  );
};

export default HistoryButton;
