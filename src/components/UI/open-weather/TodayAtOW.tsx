import React, { useEffect } from 'react'
import { useGeneralStore } from '../../../store/generalStore';
import { useOpenWeatherGetWeatherForecast } from '../../../lib/react-query/queriesAndMutations';
import Slider from "react-slick";

type WeatherForecastItem = {
  dt: number
  main: {
    temp: number
  }
  weather: Array<{
    icon: string
    main: string
  }>
}

const TodayAtOW = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const latitude = useGeneralStore(state => state.latitude);
  const longitude = useGeneralStore(state => state.longitude);

  const { data, isLoading, refetch } = useOpenWeatherGetWeatherForecast(latitude, longitude);
  
  useEffect(() => {
    refetch();
  }, [latitude, longitude, refetch]);

  return (
    <div className='w-[80vw]'>
      <Slider {...settings}>
        {data?.data.list.map((item: WeatherForecastItem, index: number) => (
          <div key={index} className='p-5'>
            <div className='flex flex-col justify-between items-center bg-white-alpha-4 p-10 rounded-16'>
              <div className='text-center'>
                {new Date(item.dt * 1000).toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'short',
                  hour: 'numeric'
                })
                }
              </div>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" className='mx-auto'/>
              <div className='text-center'>
                {Math.round(item.main.temp)}°C
              </div>
            </div>
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default TodayAtOW