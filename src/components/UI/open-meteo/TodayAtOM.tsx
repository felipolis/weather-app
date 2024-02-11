import { useEffect } from 'react';
import Slider from 'react-slick';
import ClipLoader from 'react-spinners/ClipLoader';
import { useOpenMeteoGetCurrentWeather } from '../../../lib/react-query/queriesAndMutations';
import { useGeneralStore } from '../../../store/generalStore';

// Configurações do Slider movidas para fora do componente para melhor organização
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
 * TodayAtOM - Componente para exibir a previsão do tempo atual com slides.
 * Utiliza a localização atual armazenada no estado global e busca os dados
 * de tempo atual através do hook `useOpenMeteoGetCurrentWeather`.
 */
const TodayAtOM = () => {
  const latitude = useGeneralStore((state) => state.latitude);
  const longitude = useGeneralStore((state) => state.longitude);

  const { data, isLoading, refetch } = useOpenMeteoGetCurrentWeather(latitude, longitude);

  useEffect(() => {
    refetch();
  }, [latitude, longitude, refetch]);

  if (isLoading) return <ClipLoader color="#36d7b7" />;

  return (
    <div className='w-[80vw]'>
      <Slider {...sliderSettings}>
        {data?.data?.hourly?.time?.map((time: number, index: number) => {
          // Considerar o uso de um identificador único se disponível
          const key = `weather-${index}`;
          return (
            <div key={key} className='p-5'>
              <div className='flex flex-col justify-between items-center bg-white-alpha-4 p-10 rounded-16 gap-20'>
                <div className='text-center'>
                  {new Date(time * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric'
                  })}
                </div>
                <img src={`images/weather_icons/${data?.data.hourly.is_day[index] ? 'd' : 'n'}${data?.data.hourly.weather_code[index]}.png`} alt="Weather icon" className='mx-auto w-[7rem]'/>
                <div className='text-center'>
                  {Math.round(data?.data.hourly.temperature_2m[index])}°C
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TodayAtOM;
