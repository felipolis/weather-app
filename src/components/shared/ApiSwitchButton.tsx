import { useGeneralStore } from '../../store/generalStore';

// Enum para APIs disponíveis
const APIs = {
  OPEN_WEATHER: 'OPEN_WEATHER',
  OPEN_METEO: 'OPEN_METEO',
};

/**
 * Componente para alternar entre APIs.
 * Permite ao usuário mudar a API selecionada entre OpenWeather e OpenMeteo.
 */
const ApiSwitchButton = () => {
  // Acessa a função para mudar a API selecionada e o estado da API atual do store
  const { changeSelectedApi, selectedApi } = useGeneralStore((state) => ({
    changeSelectedApi: state.changeSelectedApi,
    selectedApi: state.selectedApi,
  }));

  // Determina o texto do botão baseado na API selecionada
  const buttonText =
    selectedApi === APIs.OPEN_WEATHER ? 'Change to OpenMeteo' : 'Change to OpenWeather';

  return (
    <div className="mt-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={changeSelectedApi} // Ativa a função ao clicar
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ApiSwitchButton;
