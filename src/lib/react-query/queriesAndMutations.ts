import {
  useQuery,
} from '@tanstack/react-query'
import { QUERY_KEYS } from './queryKeys'
import axiosClient from '../axios/axios.client'

/* OPEN METEO */

export const useOpenMeteoGetLocationCoordinates = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_LOCATION_COORDINATES],
    queryFn: () => {
      return axiosClient.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=pt&format=json`
      )
    },
  })
}


export const useOpenMeteoGetWeatherForecast = (lat: number, lon: number) => {
  return useQuery({
    enabled: lat !== 0 && lon !== 0,
    queryKey: [QUERY_KEYS.GET_WEATHER_FORECAST],
    queryFn: () => {
      return axiosClient.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,visibility`
        )
      },
    })
  }


/* OPEN WEATHER */

export const useOpenWeatherGetLocationCoordinates = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_LOCATION_COORDINATES],
    queryFn: () => {
      return axiosClient.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=10&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
      )
    },
  })
}

export const useOpenWeatherGetWeatherForecast = (lat: number, lon: number) => {
  return useQuery({
    enabled: lat !== 0 && lon !== 0,
    queryKey: [QUERY_KEYS.GET_WEATHER_FORECAST],
    queryFn: () => {
      return axiosClient.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
      )
    },
  })
}