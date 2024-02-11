import { useEffect } from 'react';
import Slider from "react-slick";
import ClipLoader from 'react-spinners/ClipLoader';
import { useOpenWeatherGetWeatherForecast } from '../../../lib/react-query/queriesAndMutations';
import { useGeneralStore } from '../../../store/generalStore';

// Definindo o tipo para os itens de previsão do tempo para facilitar o uso e garantir a tipagem correta
type WeatherForecastItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    main: string;
  }>;
};

// Configurações do Slider definidas fora do componente para melhor organização e legibilidade
const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      }
    }
  ]
};

/**
 * TodayAtOW - Componente para exibir a previsão do tempo atual em um carrossel.
 * Utiliza a localização atual do estado global para buscar a previsão do tempo.
 */
const TodayAtOW = () => {
  const latitude = useGeneralStore(state => state.latitude);
  const longitude = useGeneralStore(state => state.longitude);

  const { data, isLoading, refetch } = useOpenWeatherGetWeatherForecast(latitude, longitude);
  
  useEffect(() => {
    refetch();
  }, [latitude, longitude, refetch]);

  if (isLoading) return <ClipLoader color="#36d7b7" />;

  return (
    <div className='w-[80vw]'>
      <Slider {...sliderSettings}>
        {data?.data?.list?.map((item: WeatherForecastItem) => {
          // Uso do timestamp como chave para garantir unicidade e melhorar a performance na renderização de listas
          const key = `weather-forecast-${item.dt}`;
          return (
            <div key={key} className='p-5'>
              <div className='flex flex-col justify-between items-center bg-white-alpha-4 p-10 rounded-16'>
                <div className='text-center'>
                  {new Date(item.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric'
                  })}
                </div>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`${item.weather[0].main} icon`} className='mx-auto'/>
                <div className='text-center'>
                  {Math.round(item.main.temp)}°C
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TodayAtOW;
